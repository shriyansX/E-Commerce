// Enhanced product data with more realistic items
const products = [
  { 
    id: 1, 
    title: "iPhone 15 Pro", 
    category: "electronics", 
    price: 999, 
    rating: 4.8, 
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80", 
    description: "Latest iPhone with A17 Pro chip, titanium design, and pro camera system.", 
    badge: "Featured" 
  },
  { 
    id: 2, 
    title: "Sony WH-1000XM5", 
    category: "electronics", 
    price: 349, 
    rating: 4.7, 
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", 
    description: "Industry-leading noise canceling wireless headphones with 30-hour battery.", 
    badge: "Best Seller" 
  },
  { 
    id: 3, 
    title: "Premium Cotton T-Shirt", 
    category: "clothing", 
    price: 29, 
    rating: 4.5, 
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80", 
    description: "100% organic cotton, unisex fit, available in 12 colors." 
  },
  { 
    id: 4, 
    title: "Slim Fit Jeans", 
    category: "clothing", 
    price: 79, 
    rating: 4.3, 
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80", 
    description: "Classic blue jeans, slim fit, stretch denim for maximum comfort." 
  },
  { 
    id: 5, 
    title: "MacBook Air M2", 
    category: "electronics", 
    price: 1199, 
    rating: 4.9, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80", 
    description: "Lightweight laptop with M2 chip, 18-hour battery, and stunning Retina display.", 
    badge: "Featured" 
  },
  { 
    id: 6, 
    title: "Winter Jacket", 
    category: "clothing", 
    price: 129, 
    rating: 4.4, 
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80", 
    description: "Water-resistant, insulated jacket perfect for cold weather adventures." 
  },
  { 
    id: 7, 
    title: "AirPods Pro", 
    category: "electronics", 
    price: 249, 
    rating: 4.6, 
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=400&q=80", 
    description: "Active noise cancellation, spatial audio, and sweat resistance." 
  },
  { 
    id: 8, 
    title: "Casual Sneakers", 
    category: "clothing", 
    price: 89, 
    rating: 4.2, 
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80", 
    description: "Comfortable everyday sneakers with memory foam insole." 
  }
];

let cart = [];

// Enhanced product rendering with modern design
function renderProducts(list) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';
  
  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">🔍</div>
        <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">No products found</h3>
        <p style="color: var(--text-secondary);">Try adjusting your filters or browse all categories.</p>
      </div>
    `;
    return;
  }
  
  list.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" class="product-img" loading="lazy" />
      <div class="product-content">
        <div class="product-header">
          <div class="product-title">${product.title}</div>
          ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
        </div>
        <div class="product-desc">${product.description}</div>
        <div class="product-footer">
          <div class="product-price">$${product.price.toLocaleString()}</div>
          <div class="product-rating">
            ${'⭐'.repeat(Math.floor(product.rating))}${product.rating % 1 !== 0 ? '⭐' : ''}
            <span style="margin-left: 0.25rem; color: var(--text-secondary);">(${product.rating})</span>
          </div>
        </div>
        <button onclick="addToCart(${product.id})" class="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Enhanced filtering and sorting
function filterAndSortProducts() {
  const category = document.getElementById('category-filter').value;
  const sort = document.getElementById('sort-filter').value;
  let filtered = [...products];

  if (category) {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'rating-desc') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filtered);
}

// Enhanced cart functionality
window.addToCart = function(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  // Check if product is already in cart
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartDisplay();
  showCartNotification();
};

function updateCartDisplay() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById('cart-count').textContent = cartCount;
  
  // Animate cart button
  const cartBtn = document.getElementById('cart-btn');
  cartBtn.animate([
    { transform: 'scale(1)' },
    { transform: 'scale(1.1)' },
    { transform: 'scale(1)' }
  ], { duration: 300 });
}

function showCartNotification() {
  // Create notification element
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--accent-color);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    font-weight: 600;
  `;
  notification.textContent = '✅ Added to cart!';
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Enhanced modal functionality
function showCheckout() {
  const modal = document.getElementById('checkout-modal');
  modal.classList.add('show');
  
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🛒</div>
        <p>Your cart is empty.</p>
        <p>Add some products to get started!</p>
      </div>
    `;
    document.getElementById('checkout-btn').disabled = true;
    cartTotal.textContent = '0';
    return;
  }
  
  document.getElementById('checkout-btn').disabled = false;
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = total.toLocaleString();
  
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div style="display: flex; align-items: center; gap: 1rem;">
        <img src="${item.image}" alt="${item.title}" style="width: 50px; height: 50px; object-fit: cover; border-radius: var(--radius-md);">
        <div>
          <div style="font-weight: 600; color: var(--text-primary);">${item.title}</div>
          <div style="color: var(--text-secondary); font-size: 0.875rem;">Qty: ${item.quantity}</div>
        </div>
      </div>
      <div style="font-weight: 600; color: var(--primary-color);">$${(item.price * item.quantity).toLocaleString()}</div>
    </div>
  `).join('');
}

function closeCheckout() {
  const modal = document.getElementById('checkout-modal');
  modal.classList.remove('show');
}

function placeOrder() {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Show success message
  const successMessage = document.createElement('div');
  successMessage.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--accent-color);
    color: white;
    padding: 2rem;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-xl);
    z-index: 1001;
    text-align: center;
    max-width: 400px;
  `;
  successMessage.innerHTML = `
    <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
    <h3 style="margin-bottom: 1rem;">Order Placed Successfully!</h3>
    <p style="margin-bottom: 1.5rem;">Thank you for your purchase of $${total.toLocaleString()}.</p>
    <p style="font-size: 0.875rem; opacity: 0.9;">You'll receive a confirmation email shortly.</p>
  `;
  
  document.body.appendChild(successMessage);
  
  // Clear cart
  cart = [];
  updateCartDisplay();
  closeCheckout();
  
  // Remove success message after 4 seconds
  setTimeout(() => {
    document.body.removeChild(successMessage);
  }, 4000);
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initial product render
  renderProducts(products);

  // Event listeners
  document.getElementById('category-filter').addEventListener('change', filterAndSortProducts);
  document.getElementById('sort-filter').addEventListener('change', filterAndSortProducts);
  document.getElementById('cart-btn').addEventListener('click', showCheckout);
  document.getElementById('close-modal').addEventListener('click', closeCheckout);
  document.getElementById('checkout-btn').addEventListener('click', placeOrder);
  
  // Close modal when clicking outside
  document.getElementById('checkout-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      closeCheckout();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeCheckout();
    }
  });
  
  // Initialize smooth scrolling
  initSmoothScrolling();
  
  // Add loading animation to images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
  });
  
  // Add intersection observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe product cards and other elements
  document.querySelectorAll('.product-card, .category-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});