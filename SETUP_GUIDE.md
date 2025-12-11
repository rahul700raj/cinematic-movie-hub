# 🚀 CineHub Setup Guide

## Quick Start (5 Minutes)

### Step 1: Get TMDB API Key

1. Visit [The Movie Database](https://www.themoviedb.org/)
2. Create a free account
3. Go to Settings > API
4. Request an API key (choose "Developer" option)
5. Fill out the form (use "Personal" for non-commercial use)
6. Copy your API key

### Step 2: Configure the Project

1. Open `js/config.js`
2. Replace `YOUR_TMDB_API_KEY_HERE` with your actual API key:

```javascript
const CONFIG = {
    API_KEY: 'your_actual_api_key_here',
    // ... rest of config
};
```

### Step 3: Run the Website

**Option 1: Direct Browser**
- Simply open `index.html` in your browser

**Option 2: Local Server (Recommended)**

Using Python:
```bash
python -m http.server 8000
```

Using Node.js:
```bash
npx http-server
```

Using PHP:
```bash
php -S localhost:8000
```

Then visit: `http://localhost:8000`

---

## Detailed Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime, etc.)
- TMDB API key (free)

### File Structure
```
cinematic-movie-hub/
├── index.html              # Homepage
├── movies.html             # Movies catalog
├── movie-detail.html       # Movie details
├── reviews.html            # Reviews page
├── about.html              # About page
├── contact.html            # Contact page
├── css/
│   └── style.css          # Custom styles
├── js/
│   ├── config.js          # ⚠️ Configure API key here
│   ├── api.js             # API functions
│   ├── main.js            # Homepage logic
│   ├── movies.js          # Movies page
│   ├── movie-detail.js    # Detail page
│   └── contact.js         # Contact form
└── README.md
```

### Customization

#### Change Colors
Edit `index.html` (and other HTML files) Tailwind config:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'neon-pink': '#ff006e',    // Change this
                'neon-blue': '#00f5ff',    // Change this
                'neon-purple': '#8b5cf6',  // Change this
                'dark-bg': '#0a0e27',      // Change this
                'dark-card': '#1a1f3a'     // Change this
            }
        }
    }
}
```

#### Modify Content
- **Homepage Hero**: Edit `js/main.js` - `loadHeroSlider()` function
- **Reviews**: Edit `reviews.html` - Update article content
- **About Page**: Edit `about.html` - Update mission and values
- **Contact Info**: Edit `contact.html` - Update contact details

---

## Deployment

### GitHub Pages

1. Push code to GitHub repository
2. Go to repository Settings
3. Navigate to Pages section
4. Select `main` branch
5. Click Save
6. Your site will be live at: `https://username.github.io/repo-name`

### Netlify

**Option 1: Drag & Drop**
1. Visit [Netlify](https://www.netlify.com/)
2. Drag your project folder
3. Done! Site is live

**Option 2: Git Integration**
1. Connect your GitHub repository
2. Configure build settings (none needed for static site)
3. Deploy automatically on every push

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Follow the prompts and your site will be live!

---

## Troubleshooting

### API Key Not Working
**Error**: Movies not loading, console shows 401 error

**Solution**:
1. Verify API key is correct in `js/config.js`
2. Check if API key is activated (may take a few minutes)
3. Ensure no extra spaces in the API key string

### CORS Errors
**Error**: Cross-origin request blocked

**Solution**:
- Use a local server (not file:// protocol)
- TMDB API supports CORS, so local server should work

### Images Not Loading
**Error**: Broken image icons

**Solution**:
1. Check internet connection
2. Verify TMDB API is responding
3. Check browser console for specific errors

### Search Not Working
**Error**: Search returns no results

**Solution**:
1. Ensure API key is configured
2. Check browser console for errors
3. Verify search query is at least 2 characters

---

## Features Guide

### Search Functionality
- Click search icon in navigation
- Type movie name (minimum 2 characters)
- Results appear in real-time
- Click result to view movie details

### Filters (Movies Page)
- **Genre**: Select from dropdown
- **Sort**: Choose sorting method
- **Year**: Filter by release year
- **Search**: Type to search
- Click "Apply Filters" to update results

### Movie Details
- Click any movie card
- View full information
- Watch official trailer
- See cast and crew
- Explore similar movies

---

## Performance Tips

### Optimize Images
- TMDB provides multiple image sizes
- Adjust in `js/config.js`:
```javascript
POSTER_SIZE: 'w500',  // Options: w92, w154, w185, w342, w500, w780
```

### Lazy Loading
Add to movie cards:
```html
<img loading="lazy" src="...">
```

### Caching
Implement localStorage caching for API responses:
```javascript
// Cache popular movies for 1 hour
const cached = localStorage.getItem('popular_movies');
if (cached && Date.now() - cached.timestamp < 3600000) {
    return JSON.parse(cached.data);
}
```

---

## Browser Compatibility

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Legal Compliance

### TMDB Attribution
Required by TMDB Terms of Service:
- Logo displayed in footer ✅
- "Powered by TMDB" text ✅
- Link to TMDB ✅

### Content Policy
- ✅ Only legal content (trailers, info, reviews)
- ✅ No copyrighted streaming
- ✅ Official YouTube trailers only
- ✅ Fair use information

---

## Support

### Need Help?
- 📧 Email: rm2778643@gmail.com
- 🐛 GitHub Issues: [Create Issue](https://github.com/rahul700raj/cinematic-movie-hub/issues)
- 📖 TMDB Docs: [API Documentation](https://developers.themoviedb.org/3)

### Common Questions

**Q: Is this free to use?**
A: Yes! Both the code (MIT License) and TMDB API (free tier) are free.

**Q: Can I use this commercially?**
A: Check TMDB's commercial terms. Code is MIT licensed.

**Q: Can I modify the design?**
A: Absolutely! Customize colors, layout, and features as needed.

**Q: How do I add more pages?**
A: Create new HTML files following the existing structure.

---

## Next Steps

1. ✅ Get TMDB API key
2. ✅ Configure `js/config.js`
3. ✅ Test locally
4. ✅ Customize design
5. ✅ Deploy to hosting
6. ✅ Share with the world!

---

Happy Coding! 🎬✨

Built with ❤️ by Rahul Mishra