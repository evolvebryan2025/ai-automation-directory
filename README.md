# Emerald Beacon AI Hub

A modern, fully-functional AI tools directory featuring search, filtering, and responsive design. Built with Emerald Beacon branding.

## Features

- **Hero Section** with search functionality
- **Category Filtering** - Browse tools by category (Writing, Image Generation, Video, Coding, etc.)
- **Advanced Search** - Search by tool name, description, or category
- **Pricing Filters** - Filter by Free, Freemium, or Paid tools
- **Sorting Options** - Sort by popularity, newest, or alphabetically
- **Featured Tools** - Highlighted showcase of top AI tools
- **Tool Submission Form** - Allow users to submit new AI tools
- **Newsletter Signup** - Email subscription for updates
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Modern UI with fade-in effects and hover states

## Tech Stack

- HTML5
- CSS3 (Modern Grid & Flexbox layouts)
- Vanilla JavaScript (No frameworks required)
- Font Awesome Icons

## Installation

1. Clone or download this project
2. Open `index.html` in your web browser
3. No build process or dependencies required!

## Project Structure

```
ai-tools-directory/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styling
├── js/
│   └── script.js      # Interactive functionality
├── images/            # Place your images here
└── README.md          # This file
```

## Usage

### Running Locally

Simply open `index.html` in any modern web browser:

```bash
open index.html
```

Or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

Then navigate to `http://localhost:8000`

### Customization

**Adding New Tools:**

Edit the `aiTools` array in `js/script.js`:

```javascript
{
    id: 21,
    name: "Your Tool Name",
    category: "writing", // or image, video, code, etc.
    description: "Tool description here",
    pricing: "freemium", // or free, paid
    icon: "fa-pen", // Font Awesome icon
    url: "https://yourtool.com",
    featured: false // Set to true for featured section
}
```

**Changing Colors:**

Modify CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... */
}
```

## Features Breakdown

### Search Functionality
- Real-time search as you type
- Searches across tool names, descriptions, and categories
- Case-insensitive matching

### Filtering System
- Filter by 12+ categories
- Filter by pricing model (Free, Freemium, Paid)
- Sort by popularity, newest, or alphabetically
- Live results counter

### Responsive Design
- Mobile-first approach
- Breakpoints at 968px and 640px
- Collapsible mobile navigation
- Touch-friendly interface

### User Experience
- Smooth scroll navigation
- Lazy loading with "Load More" button
- Hover animations on cards
- Form validation
- Success notifications

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

Potential features to add:

- Backend integration with database
- User authentication and favorites
- Tool reviews and ratings
- Admin dashboard for tool approval
- API for tool data
- Blog section with articles
- Dark mode toggle
- Advanced filters (tags, platforms, etc.)

## License

This is a demo project for educational purposes.

## Credits

- Icons: Font Awesome
- Design inspiration: Modern AI tool directory websites
