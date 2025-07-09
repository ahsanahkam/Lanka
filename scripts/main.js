// Lanka Trails - Main JavaScript File

// Global Variables
let currentFinderStep = 1;
let finderAnswers = {
  style: '',
  duration: '',
  budget: ''
};

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
  initializeTooltips();
  initializeFinder();
});

// Navigation Functions
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
    hamburger.classList.remove('active');
  } else {
    mobileMenu.style.display = 'block';
    hamburger.classList.add('active');
  }
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - 70; // Account for fixed navbar
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

// Trail Functions
function exploreTrail(trailType) {
  // This would typically redirect to a detailed trail page
  console.log('Exploring trail:', trailType);
  
  // For demo purposes, show an alert
  const trailInfo = {
    cultural: 'Explore ancient temples, UNESCO sites, and royal palaces in Sri Lanka\'s Cultural Triangle.',
    coastal: 'Discover pristine beaches, colonial forts, and water sports along the southern coast.',
    highland: 'Journey through tea plantations, misty mountains, and charming hill stations.',
    wildlife: 'Experience thrilling safaris and encounter elephants, leopards, and exotic birds.'
  };
  
  alert(`${trailInfo[trailType]} \n\nThis would typically open a detailed trail page with itineraries, bookings, and more information.`);
}

// Map Functions
function initializeTooltips() {
  // Hide all tooltips initially
  const tooltips = document.querySelectorAll('.map-tooltip');
  tooltips.forEach(tooltip => {
    tooltip.classList.remove('active');
  });
}

function showTooltip(destinationId) {
  // Hide all tooltips first
  const tooltips = document.querySelectorAll('.map-tooltip');
  tooltips.forEach(tooltip => {
    tooltip.classList.remove('active');
  });
  
  // Show the selected tooltip
  const selectedTooltip = document.getElementById(`tooltip-${destinationId}`);
  if (selectedTooltip) {
    selectedTooltip.classList.add('active');
    
    // Hide tooltip after 5 seconds
    setTimeout(() => {
      selectedTooltip.classList.remove('active');
    }, 5000);
  }
}

// Trail Finder Functions
function initializeFinder() {
  showFinderStep(1);
}

function selectOption(category, value) {
  finderAnswers[category] = value;
  
  // Remove previous selections
  const options = document.querySelectorAll('.finder-option');
  options.forEach(option => option.classList.remove('selected'));
  
  // Add selection to clicked option
  event.target.classList.add('selected');
  
  // Move to next step after short delay
  setTimeout(() => {
    if (currentFinderStep < 3) {
      currentFinderStep++;
      showFinderStep(currentFinderStep);
    } else {
      showFinderResult();
    }
  }, 800);
}

function showFinderStep(stepNumber) {
  // Hide all steps
  const steps = document.querySelectorAll('.finder-step');
  steps.forEach(step => step.classList.remove('active'));
  
  // Show current step
  const currentStep = document.getElementById(`finder-step-${stepNumber}`);
  if (currentStep) {
    currentStep.classList.add('active');
  }
}

function showFinderResult() {
  // Hide all steps
  const steps = document.querySelectorAll('.finder-step');
  steps.forEach(step => step.classList.remove('active'));
  
  // Show result
  const result = document.getElementById('finder-result');
  result.classList.add('active');
  
  // Generate recommendation
  const recommendation = generateRecommendation();
  const resultContent = document.getElementById('result-content');
  resultContent.innerHTML = recommendation;
}

function generateRecommendation() {
  const { style, duration, budget } = finderAnswers;
  
  let recommendedTrail = '';
  let description = '';
  let highlights = [];
  
  // Logic to determine best trail based on answers
  if (style === 'culture') {
    recommendedTrail = 'Cultural Trail';
    description = 'Perfect for exploring Sri Lanka\'s rich heritage and ancient sites.';
    highlights = ['Sigiriya Rock Fortress', 'Temple of the Tooth', 'Anuradhapura'];
  } else if (style === 'wildlife') {
    recommendedTrail = 'Wildlife Trail';
    description = 'Ideal for safari adventures and wildlife encounters.';
    highlights = ['Yala National Park', 'Elephant Orphanage', 'Leopard Spotting'];
  } else if (style === 'relaxation') {
    recommendedTrail = 'Coastal Trail';
    description = 'Great for beach relaxation and coastal experiences.';
    highlights = ['Galle Fort', 'Unawatuna Beach', 'Whale Watching'];
  } else if (style === 'adventure') {
    recommendedTrail = 'Highland Trail';
    description = 'Perfect for hiking, tea plantation tours, and mountain adventures.';
    highlights = ['Ella Nine Arch Bridge', 'Adam\'s Peak', 'Tea Factory Tours'];
  }
  
  return `
    <h3 style="color: #10b981; font-size: 1.5rem; margin-bottom: 1rem;">${recommendedTrail}</h3>
    <p style="margin-bottom: 1rem;">${description}</p>
    <div style="margin-bottom: 1rem;">
      <strong>Duration:</strong> ${duration === 'short' ? '3-5 days' : duration === 'medium' ? '6-8 days' : '9+ days'}
    </div>
    <div style="margin-bottom: 1rem;">
      <strong>Budget:</strong> ${budget === 'budget' ? 'Budget-friendly' : budget === 'mid' ? 'Mid-range' : 'Luxury'}
    </div>
    <div style="margin-bottom: 1.5rem;">
      <strong>Highlights:</strong>
      <ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
        ${highlights.map(highlight => `<li>${highlight}</li>`).join('')}
      </ul>
    </div>
    <button onclick="bookTrail('${recommendedTrail.toLowerCase().replace(' ', '-')}')" 
            style="background: #10b981; color: white; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; margin-right: 1rem;">
      Book This Trail
    </button>
    <button onclick="window.open('trails.html', '_blank')" 
            style="background: #f59e0b; color: white; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer;">
      View All Trails
    </button>
  `;
}

function restartFinder() {
  currentFinderStep = 1;
  finderAnswers = { style: '', duration: '', budget: '' };
  
  // Remove all selections
  const options = document.querySelectorAll('.finder-option');
  options.forEach(option => option.classList.remove('selected'));
  
  // Hide result and show first step
  document.getElementById('finder-result').classList.remove('active');
  showFinderStep(1);
}

function bookTrail(trailId) {
  alert(`Booking functionality for ${trailId} would be integrated with a backend booking system. This could include:\n\n- Date selection\n- Group size\n- Accommodation preferences\n- Activity add-ons\n- Payment processing\n\nFor now, this is a demo of the trail finder functionality.`);
}

// Story Functions
function readStory(storyId) {
  console.log('Reading story:', storyId);
  alert(`This would open the full story: "${storyId}". In a real implementation, this would navigate to a dedicated story page with the complete article, photos, and author information.`);
}

function readFullStory(storyId) {
  console.log('Reading full featured story:', storyId);
  alert(`This would open the full featured story: "${storyId}". Featured stories would have enhanced layouts with more photos, interactive elements, and social sharing options.`);
}

function submitStory() {
  alert('Story submission form would open here. Users could:\n\n- Upload photos\n- Write their travel story\n- Add trip details\n- Submit for review\n\nThis would be connected to a content management system.');
}

function openStorySubmission() {
  alert('This would open a comprehensive story submission form where travelers can share their experiences, upload photos, and potentially earn rewards for featured content.');
}

// Trails Page Functions
function filterTrails(category) {
  const filterButtons = document.querySelectorAll('.filter-button');
  const trailCategories = document.querySelectorAll('.trail-category');
  
  // Update active filter button
  filterButtons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Show/hide trail categories
  trailCategories.forEach(category => {
    if (category === 'all' || category.classList.contains(category)) {
      category.style.display = 'block';
    } else {
      category.style.display = category === 'all' ? 'block' : 'none';
    }
  });
  
  if (category === 'all') {
    trailCategories.forEach(cat => cat.style.display = 'block');
  } else {
    trailCategories.forEach(cat => {
      cat.style.display = cat.classList.contains(category) ? 'block' : 'none';
    });
  }
}

function exploreDestination(destinationId) {
  console.log('Exploring destination:', destinationId);
  
  const destinationInfo = {
    sigiriya: 'Ancient rock fortress with stunning frescoes and panoramic views.',
    anuradhapura: 'Sacred ancient capital with massive dagobas and the sacred Bodhi Tree.',
    kandy: 'Royal city housing the Temple of the Tooth Relic.',
    polonnaruwa: 'Medieval capital with well-preserved ruins and rock sculptures.',
    galle: 'Historic Dutch colonial fort with ocean views and boutique shopping.',
    unawatuna: 'Perfect crescent beach for swimming and snorkeling.',
    mirissa: 'Best whale watching destination with pristine beaches.',
    bentota: 'Water sports paradise with luxury beach resorts.',
    ella: 'Scenic hill station with the famous Nine Arch Bridge.',
    'nuwara-eliya': 'Cool climate tea capital known as "Little England".',
    'adams-peak': 'Sacred mountain pilgrimage site with sunrise views.',
    'horton-plains': 'Highland plateau with World\'s End cliff and endemic species.',
    yala: 'Premier safari destination with the highest leopard density.',
    udawalawe: 'Best place to see elephants in their natural habitat.',
    sinharaja: 'Last remaining rainforest with endemic species.',
    bundala: 'Important bird sanctuary with migratory species.'
  };
  
  alert(`${destinationInfo[destinationId]}\n\nThis would open a detailed destination page with:\n- Photo galleries\n- Detailed descriptions\n- Best time to visit\n- How to get there\n- Accommodation options\n- Things to do\n- Booking options`);
}

// Stories Page Functions
function filterStories(category) {
  const filterButtons = document.querySelectorAll('.filter-button');
  const storyCards = document.querySelectorAll('.story-card');
  
  // Update active filter button
  filterButtons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Show/hide story cards
  storyCards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function subscribeToStories() {
  const email = document.getElementById('story-newsletter-email').value;
  
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }
  
  alert(`Thank you for subscribing to Trail Tales! \n\nEmail: ${email}\n\nYou'll receive:\n- New travel stories weekly\n- Exclusive destination guides\n- Travel photography tips\n- Early access to featured content\n\nIn a real implementation, this would be connected to an email marketing service.`);
  
  document.getElementById('story-newsletter-email').value = '';
}

// Newsletter Functions
function subscribeNewsletter() {
  const email = document.getElementById('newsletter-email').value;
  
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }
  
  alert(`Thank you for subscribing to Lanka Trails newsletter! \n\nEmail: ${email}\n\nYou'll receive:\n- Latest trail updates\n- Travel tips and guides\n- Exclusive offers\n- Destination highlights\n\nIn a real implementation, this would be connected to an email marketing service like MailChimp or ConvertKit.`);
  
  document.getElementById('newsletter-email').value = '';
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    scrollToSection(targetId);
  }
});

// Back to top functionality
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuButton = document.querySelector('.mobile-menu-btn');
  
  if (mobileMenu && mobileMenu.style.display === 'block' && 
      !mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
    toggleMobileMenu();
  }
});

// Close tooltips when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.map-pin') && !e.target.closest('.map-tooltip')) {
    const tooltips = document.querySelectorAll('.map-tooltip');
    tooltips.forEach(tooltip => {
      tooltip.classList.remove('active');
    });
  }
});

// Form validation and enhancement
function enhanceFormInputs() {
  const inputs = document.querySelectorAll('input[type="email"]');
  
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.style.borderColor = '#10b981';
    });
    
    input.addEventListener('blur', function() {
      this.style.borderColor = '#d1d5db';
    });
    
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const button = this.parentElement.querySelector('button');
        if (button) {
          button.click();
        }
      }
    });
  });
}

// Initialize form enhancements when DOM is ready
document.addEventListener('DOMContentLoaded', enhanceFormInputs);

// Performance optimization - lazy loading for images
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if IntersectionObserver is supported
if ('IntersectionObserver' in window) {
  document.addEventListener('DOMContentLoaded', lazyLoadImages);
}

// Analytics tracking (placeholder)
function trackEvent(eventName, properties) {
  console.log('Tracking event:', eventName, properties);
  
  // In a real implementation, this would send data to analytics services like:
  // - Google Analytics
  // - Facebook Pixel
  // - Custom analytics endpoint
  
  // Example: gtag('event', eventName, properties);
}

// Track user interactions
document.addEventListener('click', function(e) {
  const button = e.target.closest('button');
  const link = e.target.closest('a');
  
  if (button) {
    trackEvent('button_click', {
      button_text: button.textContent.trim(),
      page: window.location.pathname
    });
  }
  
  if (link && link.href) {
    trackEvent('link_click', {
      link_text: link.textContent.trim(),
      link_url: link.href,
      page: window.location.pathname
    });
  }
});

// Error handling
window.addEventListener('error', function(e) {
  console.error('JavaScript error:', e.error);
  
  // In production, you might want to send errors to a logging service
  // Example: Sentry.captureException(e.error);
});

// Console welcome message
console.log('%c🌴 Welcome to Lanka Trails! 🌴', 'color: #10b981; font-size: 20px; font-weight: bold;');
console.log('%cThis website showcases Sri Lanka\'s beautiful destinations and trails.', 'color: #374151; font-size: 14px;');
console.log('%cFor backend integration, this site is ready to connect with APIs for:', 'color: #6b7280; font-size: 12px;');
console.log('- Trail bookings and reservations');
console.log('- Story content management');
console.log('- User authentication');
console.log('- Payment processing');
console.log('- Email marketing integration');
console.log('- Analytics and tracking');