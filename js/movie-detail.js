// Movie Detail Page JavaScript
const movieId = new URL(window.location.href).searchParams.get('id');

async function loadMovieDetails() {
    if (!movieId) {
        window.location.href = 'movies.html';
        return;
    }
    
    const movie = await movieAPI.getMovieDetails(movieId);
    if (!movie) return;
    
    // Display hero section
    displayHero(movie);
    
    // Display movie info
    displayMovieInfo(movie);
    
    // Display cast
    if (movie.credits?.cast) displayCast(movie.credits.cast);
    
    // Display trailer
    if (movie.videos?.results) displayTrailer(movie.videos.results);
    
    // Display similar movies
    if (movie.similar?.results) displaySimilarMovies(movie.similar.results);
}

function displayHero(movie) {
    const hero = document.getElementById('movie-hero');
    hero.innerHTML = `
        <div class="absolute inset-0" style="background: url('${getImageUrl(movie.backdrop_path, 'original')}') center/cover no-repeat;"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div class="grid md:grid-cols-3 gap-8 items-end">
                <div class="md:col-span-1">
                    <img src="${getImageUrl(movie.poster_path, 'w500')}" alt="${movie.title}" class="w-full rounded-2xl shadow-2xl shadow-neon-pink/20">
                </div>
                <div class="md:col-span-2">
                    <h1 class="text-6xl font-bold mb-4">${movie.title}</h1>
                    ${movie.tagline ? `<p class="text-2xl text-neon-pink mb-6">"${movie.tagline}"</p>` : ''}
                    <div class="flex flex-wrap items-center gap-4 mb-6">
                        <div class="flex items-center bg-dark-card px-4 py-2 rounded-lg">
                            <i class="fas fa-star text-yellow-400 text-xl mr-2"></i>
                            <span class="text-2xl font-bold">${movie.vote_average?.toFixed(1)}</span>
                            <span class="text-gray-400 ml-2">/ 10</span>
                        </div>
                        <span class="text-gray-300">${movie.release_date}</span>
                        <span class="text-gray-300">${movie.runtime} min</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${movie.genres?.map(g => `<span class="genre-badge">${g.name}</span>`).join('') || ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function displayMovieInfo(movie) {
    const container = document.getElementById('movie-info');
    container.innerHTML = `
        <div class="md:col-span-2">
            <h2 class="text-3xl font-bold mb-4">Overview</h2>
            <p class="text-gray-300 text-lg leading-relaxed mb-6">${movie.overview}</p>
            
            <div class="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 class="text-xl font-bold mb-3 text-neon-pink">Details</h3>
                    <div class="space-y-2">
                        <p><span class="text-gray-400">Status:</span> <span class="text-white">${movie.status}</span></p>
                        <p><span class="text-gray-400">Release Date:</span> <span class="text-white">${movie.release_date}</span></p>
                        <p><span class="text-gray-400">Runtime:</span> <span class="text-white">${movie.runtime} minutes</span></p>
                        <p><span class="text-gray-400">Budget:</span> <span class="text-white">$${movie.budget?.toLocaleString() || 'N/A'}</span></p>
                        <p><span class="text-gray-400">Revenue:</span> <span class="text-white">$${movie.revenue?.toLocaleString() || 'N/A'}</span></p>
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-3 text-neon-blue">Production</h3>
                    <div class="space-y-2">
                        ${movie.production_companies?.slice(0, 3).map(c => `<p class="text-white">${c.name}</p>`).join('') || '<p class="text-gray-400">N/A</p>'}
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="bg-dark-card p-6 rounded-2xl border border-neon-purple/20">
                <h3 class="text-xl font-bold mb-4 text-neon-purple">Rating</h3>
                <div class="text-center">
                    <div class="text-6xl font-bold text-neon-pink mb-2">${movie.vote_average?.toFixed(1)}</div>
                    <div class="text-gray-400 mb-4">out of 10</div>
                    <div class="text-sm text-gray-400">${movie.vote_count?.toLocaleString()} votes</div>
                </div>
            </div>
        </div>
    `;
}

function displayCast(cast) {
    const container = document.getElementById('cast-list');
    container.innerHTML = cast.slice(0, 12).map(person => `
        <div class="cast-card bg-dark-card rounded-xl overflow-hidden border border-neon-blue/20">
            <img src="${getImageUrl(person.profile_path, 'w185')}" alt="${person.name}" class="w-full h-64 object-cover">
            <div class="p-4">
                <h4 class="font-bold text-white mb-1">${person.name}</h4>
                <p class="text-sm text-gray-400">${person.character}</p>
            </div>
        </div>
    `).join('');
}

function displayTrailer(videos) {
    const trailer = videos.find(v => v.type === 'Trailer' && v.site === 'YouTube') || videos[0];
    if (!trailer) return;
    
    const section = document.getElementById('trailer-section');
    const container = document.getElementById('trailer-container');
    section.classList.remove('hidden');
    container.innerHTML = `<iframe src="${getYouTubeUrl(trailer.key)}" allowfullscreen></iframe>`;
}

function displaySimilarMovies(movies) {
    const container = document.getElementById('similar-movies');
    container.innerHTML = movies.slice(0, 12).map(movie => `
        <a href="movie-detail.html?id=${movie.id}" class="movie-card bg-dark-card rounded-xl overflow-hidden border border-neon-blue/20 hover:border-neon-pink/50 transition">
            <img src="${getImageUrl(movie.poster_path, 'w500')}" alt="${movie.title}" class="w-full h-auto">
            <div class="p-4">
                <h4 class="font-bold text-white line-clamp-2">${movie.title}</h4>
                <div class="flex items-center mt-2">
                    <i class="fas fa-star text-yellow-400 text-sm mr-1"></i>
                    <span class="text-sm">${movie.vote_average?.toFixed(1)}</span>
                </div>
            </div>
        </a>
    `).join('');
}

// Initialize
loadMovieDetails();