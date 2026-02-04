# Disruptors Media AI Tools Hub

A modern, fully-functional AI tools directory featuring filtering, responsive design, and a dark theme with video background. Built with Disruptors Media branding.

## Features

- **Video Background** with frosted glass content sections
- **Category Filtering** - Browse tools by category (Writing, Image Generation, Video, Coding, etc.)
- **Pricing Filters** - Filter by Free, Freemium, or Paid tools
- **Sorting Options** - Sort by popularity, newest, or alphabetically
- **Featured Tools** - Highlighted showcase of top AI tools
- **Tool Submission Form** - Submit new AI tools via webhook
- **52 Individual Tool Pages** - Detailed pages for each AI tool
- **Custom Notification Cards** - Styled success/error feedback
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Smooth Animations** - Fade-in effects and hover states

## Tech Stack

- HTML5
- CSS3 (Modern Grid & Flexbox layouts)
- Vanilla JavaScript (No frameworks required)
- Font Awesome Icons

## Setup

1. Clone this repository
2. Copy `js/config.example.js` to `js/config.js` and fill in your webhook credentials
3. Open `index.html` in your web browser or use a local server

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## Project Structure

```
ai-tools-hub/
├── index.html              # Main page
├── css/
│   └── style.css           # All styling
├── js/
│   ├── script.js           # Interactive functionality
│   ├── config.js           # Credentials (gitignored)
│   └── config.example.js   # Config template
├── tools/                  # 52 individual tool pages
│   ├── chatgpt.html
│   ├── midjourney.html
│   └── ...
└── README.md
```

## Customization

**Adding New Tools:**

Edit the `aiTools` array in `js/script.js`:

```javascript
{
    id: 84,
    name: "Your Tool Name",
    category: "writing",
    description: "Tool description here",
    pricing: "freemium",
    icon: "fa-pen",
    url: "https://yourtool.com",
    featured: false
}
```

## License

This is a proprietary project by Disruptors Media.
