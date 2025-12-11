# 🎬 CineHub - Modern Movie Discovery Platform

A stunning, dark-themed movie website with neon accents featuring comprehensive movie information, trailers, reviews, and more. Built with modern web technologies and powered by The Movie Database (TMDB) API.

## ✨ Features

### 🏠 Homepage
- **Hero Banner** with auto-rotating featured movies
- **Trending Movies** section
- **Top Rated Films** showcase
- **Upcoming Releases** preview
- **Genre Browser** for easy navigation
- **Latest Reviews** section

### 🎥 Movies Page
- Comprehensive movie catalog
- **Advanced Filters**: Genre, Year, Rating, Sort options
- **Search Functionality** with real-time results
- Responsive grid layout
- Load more pagination

### 📽️ Movie Detail Pages
- Full movie description and overview
- **Cast & Crew** information with photos
- Genre tags and metadata
- Release date and runtime
- **Official Trailer** embed (YouTube)
- User ratings and vote count
- Budget and revenue information
- **Similar Movies** recommendations

### 📝 Reviews & Blog
- Featured review articles
- Category-based reviews (Action, Drama, Horror, etc.)
- Author information and publish dates
- Engaging card-based layout

### ℹ️ About Page
- Mission statement
- Platform features
- Core values
- Call-to-action

### 📧 Contact Page
- Contact form
- Contact information
- Social media links
- FAQ section

## 🎨 Design Features

- **Dark Theme** with cinematic aesthetics
- **Neon Accents** (Pink, Blue, Purple)
- **Responsive Design** - Mobile, Tablet, Desktop
- **Smooth Animations** and transitions
- **Custom Scrollbar** with gradient
- **Hover Effects** on cards and buttons
- **Gradient Text** and borders
- **Backdrop Blur** effects

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first styling
- **Vanilla JavaScript** - No frameworks
- **TMDB API** - Movie data
- **Font Awesome** - Icons
- **Google Fonts** - Poppins typography

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/rahul700raj/cinematic-movie-hub.git
cd cinematic-movie-hub
```

2. **Get TMDB API Key**
- Visit [TMDB](https://www.themoviedb.org/settings/api)
- Create a free account
- Request an API key
- Copy your API key

3. **Configure API Key**
Open `js/config.js` and replace:
```javascript
API_KEY: 'YOUR_TMDB_API_KEY_HERE'
```

4. **Run the Website**
- Open `index.html` in your browser
- Or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

5. **Access the site**
Navigate to `http://localhost:8000`

## 📁 Project Structure

```
cinematic-movie-hub/
├── index.html              # Homepage
├── movies.html             # Movies catalog
├── movie-detail.html       # Individual movie page
├── reviews.html            # Reviews & blog
├── about.html              # About page
├── contact.html            # Contact page
├── css/
│   └── style.css          # Custom styles
├── js/
│   ├── config.js          # API configuration
│   ├── api.js             # API helper functions
│   ├── main.js            # Homepage logic
│   ├── movies.js          # Movies page logic
│   ├── movie-detail.js    # Movie detail logic
│   └── contact.js         # Contact form logic
└── README.md              # Documentation
```

## 🎯 Features Breakdown

### Search Functionality
- Real-time search with debouncing
- Search modal with overlay
- Display top 5 results
- Movie poster, title, year, and rating

### Movie Cards
- Poster image
- Title and release year
- Rating with star icon
- Hover effects with overlay
- Smooth transitions

### Filters
- Genre selection
- Sort by popularity, rating, date
- Year filter
- Combine multiple filters

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Flexible grid layouts
- Mobile menu for navigation

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub
2. Go to Settings > Pages
3. Select main branch
4. Save and wait for deployment

### Netlify
1. Drag and drop folder to Netlify
2. Or connect GitHub repository
3. Deploy automatically

### Vercel
```bash
npm install -g vercel
vercel
```

## 🔒 Legal & Compliance

- **No Copyrighted Streaming**: Only legal content (trailers, info, reviews)
- **TMDB Attribution**: Movie data provided by TMDB
- **YouTube Embeds**: Official trailers only
- **Fair Use**: Information and reviews

## 🎨 Color Palette

```css
Dark Background: #0a0e27
Dark Card: #1a1f3a
Neon Pink: #ff006e
Neon Blue: #00f5ff
Neon Purple: #8b5cf6
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Rahul Mishra**
- Email: rm2778643@gmail.com
- GitHub: [@rahul700raj](https://github.com/rahul700raj)

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for movie data
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Font Awesome](https://fontawesome.com/) for icons
- [Unsplash](https://unsplash.com/) for placeholder images

## 📞 Support

For issues or questions:
- Create an issue on GitHub
- Email: rm2778643@gmail.com

---

⭐ Star this repo if you find it helpful!

Built with ❤️ by Rahul Mishra