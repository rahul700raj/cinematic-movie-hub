// TMDB API Configuration
// Get your free API key from: https://www.themoviedb.org/settings/api

const CONFIG = {
    API_KEY: 'YOUR_TMDB_API_KEY_HERE', // Replace with your TMDB API key
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    BACKDROP_SIZE: 'original',
    POSTER_SIZE: 'w500',
    PROFILE_SIZE: 'w185',
    YOUTUBE_BASE_URL: 'https://www.youtube.com/embed/'
};

// Image size options
const IMAGE_SIZES = {
    backdrop: ['w300', 'w780', 'w1280', 'original'],
    poster: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
    profile: ['w45', 'w185', 'h632', 'original']
};

// Helper function to get image URL
function getImageUrl(path, size = 'original') {
    if (!path) return 'https://via.placeholder.com/500x750?text=No+Image';
    return `${CONFIG.IMAGE_BASE_URL}/${size}${path}`;
}

// Helper function to get YouTube embed URL
function getYouTubeUrl(key) {
    return `${CONFIG.YOUTUBE_BASE_URL}${key}`;
}

// Genre mapping
const GENRES = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western'
};