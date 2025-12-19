# Hotelio - Hotel Website

A modern, elegant static website for showcasing hotels. Features a beautiful design with smooth animations, detailed hotel pages, and a built-in price calculator.

## Features

- **Hotel Listings** - Browse curated hotels with beautiful card layouts
- **Hotel Details** - View comprehensive information including:
  - Photo gallery with lightbox
  - Description and amenities
  - Contact information (phone, address, location)
  - Price calculator for booking estimates
- **Modern Design** - Elegant typography, smooth animations, and responsive layout
- **Price Calculator** - Calculate total stay cost based on dates, rooms, and guests

## Project Structure

```
hotels-website/
├── index.html          # Main page with hotel listings
├── hotel.html          # Hotel detail page
├── README.md           # This file
├── css/
│   └── styles.css      # All styling
├── js/
│   ├── script.js       # Main JavaScript functionality
│   └── data.js         # Hotel data (modify this to add your hotels)
└── assets/             # For images and other assets
```

## Getting Started

1. Simply open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

## Customizing Hotels

Edit `js/data.js` to modify hotel information. Each hotel object supports:

```javascript
{
    id: 1,                           // Unique identifier
    name: "Hotel Name",              // Display name
    location: "City, Country",       // Location
    address: "Full address",         // Street address
    phone: "+1 234-567-8900",        // Contact phone
    rating: 4.9,                     // Rating (out of 5)
    pricePerNight: 450,              // Price in USD
    badge: "Luxury",                 // Badge text (Featured, Trending, etc.)
    description: "Description...",   // Hotel description
    amenities: [                     // Array of amenities
        { name: "Pool", icon: "🏊" }
    ],
    images: [                        // Array of image URLs (max 5)
        "https://example.com/image1.jpg",
        // ...
    ]
}
```

## Customizing Styles

The design uses CSS custom properties for easy theming. Edit the `:root` variables in `css/styles.css`:

```css
:root {
    --color-primary: #1a1a2e;      /* Primary dark color */
    --color-accent: #c9a959;        /* Gold accent color */
    --color-text: #2d2d2d;          /* Main text color */
    /* ... more variables */
}
```

## Image Credits

Placeholder images are from [Unsplash](https://unsplash.com). Replace them with your own hotel images for production use.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

Free to use and modify for your projects.
