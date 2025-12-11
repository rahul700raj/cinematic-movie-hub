// API Helper Functions

class MovieAPI {
    constructor() {
        this.baseUrl = CONFIG.BASE_URL;
        this.apiKey = CONFIG.API_KEY;
    }

    async fetchData(endpoint, params = {}) {
        const url = new URL(`${this.baseUrl}${endpoint}`);
        url.searchParams.append('api_key', this.apiKey);
        
        Object.keys(params).forEach(key => {
            if (params[key]) url.searchParams.append(key, params[key]);
        });

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('API request failed');
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            return null;
        }
    }

    // Get trending movies
    async getTrending(timeWindow = 'week', page = 1) {
        return await this.fetchData(`/trending/movie/${timeWindow}`, { page });
    }

    // Get popular movies
    async getPopular(page = 1) {
        return await this.fetchData('/movie/popular', { page });
    }

    // Get top rated movies
    async getTopRated(page = 1) {
        return await this.fetchData('/movie/top_rated', { page });
    }

    // Get upcoming movies
    async getUpcoming(page = 1) {
        return await this.fetchData('/movie/upcoming', { page });
    }

    // Get now playing movies
    async getNowPlaying(page = 1) {
        return await this.fetchData('/movie/now_playing', { page });
    }

    // Get movie details
    async getMovieDetails(movieId) {
        return await this.fetchData(`/movie/${movieId}`, { append_to_response: 'videos,credits,similar' });
    }

    // Search movies
    async searchMovies(query, page = 1) {
        return await this.fetchData('/search/movie', { query, page });
    }

    // Discover movies with filters
    async discoverMovies(params = {}) {
        return await this.fetchData('/discover/movie', params);
    }

    // Get genres
    async getGenres() {
        return await this.fetchData('/genre/movie/list');
    }

    // Get movies by genre
    async getMoviesByGenre(genreId, page = 1) {
        return await this.fetchData('/discover/movie', { with_genres: genreId, page });
    }
}

// Initialize API
const movieAPI = new MovieAPI();