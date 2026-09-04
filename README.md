# Spotify Clone

A responsive front-end clone of Spotify's web player interface built with HTML, CSS, and JavaScript. This project recreates the core UI elements and styling of the popular music streaming platform.

## Overview

This is a comprehensive frontend recreation of Spotify's web interface. The project demonstrates modern web design practices, responsive layouts, and interactive JavaScript functionality. It includes a home page with playlist cards, a dedicated songs page, and a mobile-friendly menu system.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Left Sidebar Navigation** - Spotify logo, Home, Search, and library sections
- **Playlist Cards** - Grid of music playlist cards with hover effects
- **Play Button Overlay** - Interactive play buttons on playlist cards
- **Mobile Menu** - Hamburger menu for mobile navigation
- **Dynamic Cursor** - Custom cursor element with hover effects
- **Songs Page** - Dedicated page displaying individual songs
- **Footer Navigation** - Links to company, communities, and social media
- **Sign Up/Login Buttons** - Authentication button placeholders
- **Custom Styling** - Spotify-inspired color scheme and typography

## Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Styling, flexbox, grid, and responsive design
- **JavaScript ES6+** - Interactive features and DOM manipulation
- **Font Awesome** - Icon library for UI elements
- **Media Queries** - Mobile responsive design

## Project Structure

```
spotify_clone/
├── index.html              # Main homepage
├── songs.html              # Songs/playlist detail page
├── app.js                  # JavaScript functionality
├── style.css               # Main styling
├── utility.css             # Utility classes
├── mediaQuery.css          # Responsive design
├── images/                 # Images directory
│   ├── spotify_favicon.png
│   ├── music-img1.jpg
│   ├── music-img2.jpg
│   ├── music-img3.jpg
│   └── music-img4.jpg
└── README.md
```

## Language Composition

- **HTML**: 55.9%
- **CSS**: 35.7%
- **JavaScript**: 8.4%

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/asimbaloch7/spotify_clone.git
   cd spotify_clone
   ```

2. Open `index.html` in your web browser:
   ```bash
   # Using a simple HTTP server (Python 3)
   python -m http.server 8000
   
   # Or just double-click index.html
   ```

3. Navigate through the interface:
   - Click on playlist cards to view songs
   - Use the left sidebar for navigation
   - Try the mobile menu on smaller screens
   - Explore the responsive design by resizing your browser

## File Descriptions

### index.html
- Homepage with Spotify layout
- Left sidebar with navigation
- Right section with playlist cards
- Footer with company and community links
- Mobile menu for responsive design

### songs.html
- Detailed songs/playlist view
- Individual track listings
- Music player interface elements

### style.css (11.2 KB)
Main stylesheet containing:
- Color scheme and variables (CSS custom properties)
- Layout using flexbox and grid
- Card styling with hover effects
- Navigation bar styling
- Left sidebar styling
- Footer styling

### mediaQuery.css (505 B)
Responsive design breakpoints:
- Mobile layout adjustments
- Tablet optimizations
- Hamburger menu styling for mobile

### utility.css (36 B)
Utility classes:
- Helper classes for common styles
- Margin and padding utilities

### app.js (2.7 KB)
JavaScript functionality:
- Mobile menu toggle
- Navigation interactions
- Custom cursor effects
- Event listeners for interactive elements
- DOM manipulation

### images/
Playlist cover images:
- music-img1.jpg through music-img4.jpg
- Spotify favicon

## Key Features Explained

### Responsive Layout
- **Desktop**: Full sidebar navigation with cards displayed in grid
- **Tablet**: Adjusted spacing and card size
- **Mobile**: Hamburger menu, stack layout, optimized for touch

### Color Scheme
- **Dark Theme**: Dark backgrounds (#121212, #0f0f0f)
- **Accent Green**: Spotify signature green (#1ed760)
- **Text**: Light gray and white for contrast

### Interactive Elements
- Hover effects on cards showing play button
- Navigation menu for mobile devices
- Custom cursor following user interaction
- Smooth transitions and animations

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Responsive Breakpoints

```css
/* Mobile: < 480px */
/* Tablet: 480px - 768px */
/* Desktop: > 768px */
```

## Usage Examples

### Viewing Playlists
1. Open index.html
2. Browse playlist cards in the main section
3. Click on any card to navigate to songs.html

### Mobile Navigation
1. On mobile devices, click the menu icon (three lines)
2. Navigate through the phone menu
3. Close menu using the X button

### Customizing Playlists
To modify playlist information, edit the card HTML in index.html:
```html
<div class="card">
    <img src="images/music-img1.jpg" alt="">
    <div class="play-icon">
        <i class="fa-solid fa-play"></i>
    </div>
    <h2>Your Playlist Title</h2>
    <p>Your playlist description</p>
</div>
```

## Future Enhancements

Possible improvements:
- Add music player controls
- Implement playlist functionality
- Connect to Spotify API
- Add search functionality
- User authentication
- Playback progress bar
- Volume control
- Shuffle and repeat buttons
- Like/favorite feature
- Share functionality

## Styling Highlights

### CSS Variables Used
```css
--lightgray: rgb(39, 37, 37)
--nav: rgb(27, 27, 27)
--text-color: rgba(172, 171, 171, 0.938)
--cheading: #ffffff
--play-icon-bgcolor: #1ed760
--mainbg: #121212
```

### Responsive Design Techniques
- Flexbox for layout
- CSS Grid for card display
- Media queries for breakpoints
- Viewport meta tag for mobile scaling
- Relative sizing units

## Performance Considerations

- Optimized image sizes
- Minimal CSS (35.7% of codebase)
- Efficient JavaScript (8.4% of codebase)
- No external dependencies except Font Awesome
- Fast load times

## Author

Asim Ali (asimbaloch7)

## License

This project is open source and available for educational purposes. It is a non-commercial clone created for learning and demonstration.

## Disclaimer

This is an educational project and is not affiliated with or endorsed by Spotify AB. All Spotify trademarks and branding are used solely for educational purposes. This project is not for commercial use.

## Resources Used

- [Font Awesome Icons](https://fontawesome.com/)
- [Spotify Design Reference](https://www.spotify.com)
- HTML5 & CSS3 Documentation
- JavaScript ES6+ Features

## Getting Help

- Check the code comments for explanations
- Review the project structure in the README
- Inspect elements in browser developer tools
- Test responsiveness using browser DevTools device emulation
