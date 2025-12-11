// Main JavaScript for Homepage

// Mobile menu toggle
document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Search modal
const searchBtn = document.getElementById('search-btn');
const searchModal = document.getElementById('search-modal');
const closeSearch = document.getElementById('close-search');
const searchInput = document.getElementById('search-input');

searchBtn?.addEventListener('click', () => {
    searchModal.classList.remove('hidden');
    searchInput.focus();
});

closeSearch?.addEventListener('click', () => {
    searchModal.classList.add('hidden');
});

searchModal?.addEventListener('click', (e) => {
    if (e.target === searchModal) searchModal.classList.add('hidden');
});

// Search functionality
let searchTimeout;
searchInput?.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    const query = e.target.value.trim();
    
    if (query.length < 2) {
        document.getElementById('search-results').innerHTML = '';
        return;
    }
    
    searchTimeout = setTimeout(async () => {
        const data = await movieAPI.searchMovies(query);
        displaySearchResults(data?.results || []);
    }, 500);
});

function displaySearchResults(movies) {
    const container = document.getElementById('search-results');
    if (!movies.length) {
        container.innerHTML = '<p class="text-gray-400 text-center py-4">No results found</p>';
        return;
    }
    
    container.innerHTML = movies.slice(0, 5).map(movie => `
        <a href="movie-detail.html?id=${movie.id}" class="flex items-center space-x-4 p-3 hover:bg-dark-bg rounded-lg transition">
            <img src="${getImageUrl(movie.poster_path, 'w92')}" alt="${movie.title}" class="w-16 h-24 object-cover rounded">
            <div class="flex-1">
                <h4 class="font-semibold text-white">${movie.title}</h4>
                <p class="text-sm text-gray-400">${movie.release_date?.split('-')[0] || 'N/A'}</p>
                <div class="flex items-center mt-1">
                    <i class="fas fa-star text-yellow-400 text-sm mr-1"></i>
                    <span class="text-sm text-gray-400">${movie.vote_average?.toFixed(1) || 'N/A'}</span>
                </div>
            </div>
        </a>
    `).join('');
}

// Load hero slider
async function loadHeroSlider() {
    const data = await movieAPI.getPopular();
    if (!data?.results) return;
    
    const movies = data.results.slice(0, 5);
    const heroSlider = document.getElementById('hero-slider');
    const heroContent = document.getElementById('hero-content');
    
    heroSlider.innerHTML = movies.map((movie, index) => `
        <div class="hero-slide ${index === 0 ? 'active' : ''}" style="background: url('${getImageUrl(movie.backdrop_path, 'original')}') center/cover no-repeat;"></div>
    `).join('');
    
    displayHeroContent(movies[0]);
    
    let currentSlide = 0;
    setInterval(() => {
        currentSlide = (currentSlide + 1) % movies.length;
        document.querySelectorAll('.hero-slide').forEach((slide, i) => {
            slide.classList.toggle('active', i === currentSlide);
        });
        displayHeroContent(movies[currentSlide]);
    }, 5000);
}

function displayHeroContent(movie) {
    const content = document.getElementById('hero-content');
    content.innerHTML = `
        <h1 class="text-6xl font-bold mb-4 fade-in">${movie.title}</h1>
        <p class="text-xl text-gray-300 mb-6 fade-in">${movie.overview.substring(0, 200)}...</p>
        <div class="flex items-center space-x-4 mb-8 fade-in">
            <div class="flex items-center">
                <i class="fas fa-star text-yellow-400 mr-2"></i>
                <span class="text-2xl font-bold">${movie.vote_average.toFixed(1)}</span>
            </div>
            <span class="text-gray-400">|</span>
            <span class="text-gray-300">${movie.release_date?.split('-')[0]}</span>
        </div>
        <div class="flex space-x-4 fade-in">
            <a href="movie-detail.html?id=${movie.id}" class="px-8 py-3 bg-gradient-to-r from-neon-pink to-neon-blue rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-pink/50 transition">
                <i class="fas fa-play mr-2"></i>Watch Trailer
            </a>
            <a href="movie-detail.html?id=${movie.id}" class="px-8 py-3 bg-white/10 backdrop-blur-md rounded-lg font-semibold hover:bg-white/20 transition">
                <i class="fas fa-info-circle mr-2"></i>More Info
            </a>
        </div>
    `;
}

// Create movie card
function createMovieCard(movie) {
    return `
        <a href="movie-detail.html?id=${movie.id}" class="movie-card bg-dark-card rounded-xl overflow-hidden border border-neon-blue/20 hover:border-neon-pink/50 transition group">
            <div class="relative">
                <img src="${getImageUrl(movie.poster_path, 'w500')}" alt="${movie.title}" class="w-full h-auto">
                <div class="movie-card-overlay flex items-end p-4">
                    <div class="w-full">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-sm font-semibold text-neon-pink">${movie.release_date?.split('-')[0] || 'N/A'}</span>
                            <div class="flex items-center">
                                <i class="fas fa-star text-yellow-400 text-sm mr-1"></i>
                                <span class="text-sm font-semibold">${movie.vote_average?.toFixed(1) || 'N/A'}</span>
                            </div>
                        </div>
                        <h3 class="font-bold text-white line-clamp-2">${movie.title}</h3>
                    </div>
                </div>
            </div>
        </a>
    `;
}

// Load trending movies
async function loadTrendingMovies() {
    const data = await movieAPI.getTrending();
    const container = document.getElementById('trending-movies');
    if (data?.results) {
        container.innerHTML = data.results.slice(0, 12).map(createMovieCard).join('');
    }
}

// Load top rated movies
async function loadTopRatedMovies() {
    const data = await movieAPI.getTopRated();
    const container = document.getElementById('top-rated-movies');
    if (data?.results) {
        container.innerHTML = data.results.slice(0, 12).map(createMovieCard).join('');
    }
}

// Load upcoming movies
async function loadUpcomingMovies() {
    const data = await movieAPI.getUpcoming();
    const container = document.getElementById('upcoming-movies');
    if (data?.results) {
        container.innerHTML = data.results.slice(0, 12).map(createMovieCard).join('');
    }
}

// Load genres
async function loadGenres() {
    const data = await movieAPI.getGenres();
    const container = document.getElementById('genres-grid');
    if (data?.genres) {
        container.innerHTML = data.genres.map(genre => `
            <a href="movies.html?genre=${genre.id}" class="genre-badge text-center py-4">
                <i class="fas fa-film text-2xl mb-2 block text-neon-pink"></i>
                <span class="font-semibold">${genre.name}</span>
            </a>
        `).join('');
    }
}

// Load latest reviews (sample data)
function loadLatestReviews() {
    const reviews = [
        { title: 'The Evolution of Sci-Fi Cinema', author: 'Alex Johnson', date: 'Dec 10, 2025', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400' },
        { title: 'Top 10 Action Movies of 2024', author: 'Sarah Miller', date: 'Dec 8, 2025', image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400' },
        { title: 'The Art of Storytelling in Drama', author: 'Mike Chen', date: 'Dec 6, 2025', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400' }
    ];
    
    const container = document.getElementById('latest-reviews');
    container.innerHTML = reviews.map(review => `
        <a href="reviews.html" class="bg-dark-card rounded-xl overflow-hidden border border-neon-blue/20 hover:border-neon-blue/50 transition group">
            <img src="${review.image}" alt="${review.title}" class="w-full h-48 object-cover group-hover:scale-110 transition duration-500">
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${review.title}</h3>
                <div class="flex items-center justify-between text-sm text-gray-400">
                    <span>${review.author}</span>
                    <span>${review.date}</span>
                </div>
            </div>
        </a>
    `).join('');
}

// Initialize homepage
if (document.getElementById('hero-slider')) {
    loadHeroSlider();
    loadTrendingMovies();
    loadTopRatedMovies();
    loadUpcomingMovies();
    loadGenres();
    loadLatestReviews();
}