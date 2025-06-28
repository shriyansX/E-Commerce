# ShopEase - Modern E-Commerce Website

A modern, responsive e-commerce website built with vanilla HTML, CSS, and JavaScript. ShopEase offers a seamless online shopping experience with a clean, user-friendly interface.

## 🌐 Live Demo

**Visit the live website:** [https://e-commerce-sigma-lyart-19.vercel.app/](https://e-commerce-sigma-lyart-19.vercel.app/)

## ✨ Features

### 🛍️ Shopping Experience
- **Product Catalog**: Browse through a curated collection of electronics and clothing
- **Category Filtering**: Filter products by category (Electronics, Clothing)
- **Sorting Options**: Sort by price (low to high, high to low) and rating
- **Shopping Cart**: Add items to cart with real-time count updates
- **Product Details**: View product images, descriptions, prices, and ratings

### 🎨 User Interface
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Hero Section**: Eye-catching banner with call-to-action
- **Category Showcase**: Featured product categories with beautiful imagery
- **Testimonials**: Customer reviews and feedback section

### 🚀 Performance & UX
- **Fast Loading**: Optimized images and efficient code structure
- **Smooth Animations**: Hover effects and interactive elements
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Mobile-First**: Designed with mobile users in mind

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality and dynamic content
- **Google Fonts**: Poppins font family for typography
- **Unsplash API**: High-quality product images
- **Vercel**: Deployment platform

## 📁 Project Structure

```
E-Commerce/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd E-Commerce
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. **Start shopping!**
   - Browse products by category
   - Add items to your cart
   - Experience the responsive design

## 🎯 Key Features Implementation

### Product Management
- Dynamic product rendering from JavaScript data
- Category-based filtering system
- Multiple sorting algorithms (price, rating)
- Real-time search and filter updates

### Shopping Cart
- Add/remove items functionality
- Cart count display in header
- Checkout modal with order summary
- Local cart state management

### Responsive Design
- Mobile-first approach
- Breakpoints at 600px and 900px
- Flexible grid layouts
- Touch-friendly interface

## 🎨 Design Highlights

- **Color Scheme**: Professional blue (#1976d2) with clean whites and grays
- **Typography**: Modern Poppins font for excellent readability
- **Layout**: Card-based design with subtle shadows and hover effects
- **Animations**: Smooth transitions and micro-interactions
- **Background**: Subtle background image with overlay for better content visibility

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 600px - 900px
- **Mobile**: Below 600px

## 🔧 Customization

### Adding New Products
Edit the `products` array in `script.js`:
```javascript
const products = [
  {
    id: 7,
    title: "New Product",
    category: "electronics",
    price: 199,
    rating: 4.5,
    image: "product-image-url",
    description: "Product description",
    badge: "New" // Optional
  }
];
```

### Styling Changes
- Modify colors in `styles.css` variables
- Update fonts in the Google Fonts import
- Adjust breakpoints for different screen sizes

## 🚀 Deployment

This project is deployed on **Vercel** for optimal performance and global CDN distribution.

### Deploy Your Own
1. Fork or clone this repository
2. Connect your GitHub account to Vercel
3. Import the project in Vercel dashboard
4. Deploy with one click

## 📞 Contact & Support

- **Email**: shriyans696@gmail.com
- **Website**: [https://e-commerce-sigma-lyart-19.vercel.app/](https://e-commerce-sigma-lyart-19.vercel.app/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Unsplash** for high-quality product images
- **Google Fonts** for the Poppins font family
- **Vercel** for seamless deployment and hosting

---

**Built with ❤️ by [Your Name]**

*Last updated: January 2025* 