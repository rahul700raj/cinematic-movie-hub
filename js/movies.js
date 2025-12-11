// Movies Page JavaScript
let currentPage = 1;
let currentFilters = {};

// Get URL parameters
const urlParams = new URL(window.location.href).searchParams;
const filterParam = urlParams.get('filter');
const genreParam = urlParams.get('genre');

// Load genres for filter
async function loadGenreFilter() {
    const data = await movieAPI.getGenres();
    const select = document.getElementById('genre-filter');
    if (data?.genres) {
        select.innerHTML = '<option value="">All Genres</option>' + 
            data.genres.map(g => `<option value="${g.id}">${g.name}</option>`).join('');
        if (genreParam) select.value = genreParam;
    }
}

// Load movies based on filters
async function loadMovies(page = 1) {
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('movies-grid').innerHTML = '';
    
    let data;
    if (filterParam === 'trending') {
        data = await movieAPI.getTrending('week', page);
    } else if (filterParam === 'top-rated') {
        data = await movieAPI.getTopRated(page);
    } else if (filterParam === 'upcoming') {
        data = await movieAPI.getUpcoming(page);
    } else {
        data = await movieAPI.discoverMovies({ ...currentFilters, page });
    }
    
    document.getElementById('loading').classList.add('hidden');
    
    if (data?.results?.length) {
        displayMovies(data.results);
        document.getElementById('load-more').classList.remove('hidden');
    } else {
        document.getElementById('movies-grid').innerHTML = '<p class="col-span-full text-center text-gray-400 py-12">No movies found</p>';
    }
}

function displayMovies(movies) {
    const grid = document.getElementById('movies-grid');
    grid.innerHTML = movies.map(movie => `
        <a href="movie-detail.html?id=${movie.id}" class="movie-card bg-dark-card rounded-xl overflow-hidden border border-neon-blue/20 hover:border-neon-pink/50 transition group">
            <div class="relative">
                <img src="${getImageUrl(movie.poster_path, 'w500')}" alt="${movie.title}" class="w-full h-auto">
                <div class="absolute top-2 right-2 bg-dark-bg/90 px-2 py-1 rounded-lg flex items-center">
                    <i class="fas fa-star text-yellow-400 text-sm mr-1"></i>
                    <span class="text-sm font-semibold">${movie.vote_average?.toFixed(1)}</span>
                </div>
            </div>
            <div class="p-4">
                <h3 class="font-bold text-white mb-2 line-clamp-2">${movie.title}</h3>
                <p class="text-sm text-gray-400">${movie.release_date?.split('-')[0] || 'N/A'}</p>
            </div>
        </a>
    `).join('');
}

// Apply filters
document.getElementById('apply-filters')?.addEventListener('click', () => {
    const genre = document.getElementById('genre-filter').value;
    const sort = document.getElementById('sort-filter').value;
    const year = document.getElementById('year-filter').value;
    const search = document.getElementById('movie-search').value.trim();
    
    currentFilters = {};
    if (genre) currentFilters.with_genres = genre;
    if (sort) currentFilters.sort_by = sort;
    if (year) currentFilters.year = year;
    
    currentPage = 1;
    
    if (search) {
        searchMovies(search);
    } else {
        loadMovies(currentPage);
    }
});

async function searchMovies(query) {
    document.getElementById('loading').classList.remove('hidden');
    const data = await movieAPI.searchMovies(query, currentPage);
    document.getElementById('loading').classList.add('hidden');
    if (data?.results) displayMovies(data.results);
}

// Load more
document.getElementById('load-more')?.querySelector('button')?.addEventListener('click', () => {
    currentPage++;
    loadMovies(currentPage);
});

// Initialize
loadGenreFilter();
loadMovies(currentPage);