/**
 * Car Rental System - Main Application JavaScript
 * Provides form validation, utilities, and interactive features
 */

// ============================================
// 1. FORM VALIDATION
// ============================================

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email
 */
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (Indian format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid phone
 */
function validatePhone(phone) {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone.replace(/[^0-9]/g, ''));
}

/**
 * Validate booking form
 * @returns {boolean} - True if all fields valid
 */
function validateBookingForm() {
  const name = document.getElementById('billname').value.trim();
  const email = document.getElementById('billemail').value.trim();
  const phone = document.getElementById('billphone').value.trim();
  const address = document.getElementById('billaddress').value.trim();
  const city = document.getElementById('billcity').value.trim();
  const carSelect = document.getElementById('cars11').value;
  const days = document.getElementById('dayss').value;
  const date = document.getElementById('date').value;
  const fromLoc = document.getElementById('fl').value.trim();
  const toLoc = document.getElementById('tl').value.trim();

  // Validate all required fields
  if (!name || name.length < 3) {
    showAlert('error', 'Name must be at least 3 characters');
    return false;
  }

  if (!validateEmail(email)) {
    showAlert('error', 'Invalid email format');
    return false;
  }

  if (!validatePhone(phone)) {
    showAlert('error', 'Phone number must be 10 digits');
    return false;
  }

  if (!address || address.length < 5) {
    showAlert('error', 'Address must be at least 5 characters');
    return false;
  }

  if (!city) {
    showAlert('error', 'Please select a city');
    return false;
  }

  if (carSelect === 'Choose...') {
    showAlert('error', 'Please select a car');
    return false;
  }

  if (!days || days < 1 || days > 30) {
    showAlert('error', 'Rental days must be between 1 and 30');
    return false;
  }

  if (!date) {
    showAlert('error', 'Please select a pickup date');
    return false;
  }

  if (!fromLoc) {
    showAlert('error', 'Please enter pickup location');
    return false;
  }

  if (!toLoc) {
    showAlert('error', 'Please enter drop-off location');
    return false;
  }

  showAlert('success', 'Form validation passed!');
  return true;
}

// ============================================
// 2. ALERT NOTIFICATIONS
// ============================================

/**
 * Show alert notification
 * @param {string} type - 'success', 'error', 'info', 'warning'
 * @param {string} message - Alert message
 * @param {number} duration - Duration in milliseconds (default: 4000)
 */
function showAlert(type, message, duration = 4000) {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type === 'error' ? 'danger' : type} alert-dismissible fade show`;
  alertDiv.setAttribute('role', 'alert');
  alertDiv.innerHTML = `
    <strong>${type.charAt(0).toUpperCase() + type.slice(1)}!</strong> ${message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  `;

  // Add to top of page
  const container = document.body;
  container.insertBefore(alertDiv, container.firstChild);

  // Auto-remove after duration
  setTimeout(() => {
    alertDiv.remove();
  }, duration);
}

// ============================================
// 3. UTILITY FUNCTIONS
// ============================================

/**
 * Format currency to INR
 * @param {number} amount - Amount to format
 * @returns {string} - Formatted currency string
 */
function formatCurrency(amount) {
  return '₹' + Number(amount).toLocaleString('en-IN');
}

/**
 * Format date to readable format
 * @param {string} dateStr - Date string (YYYY-MM-DD)
 * @returns {string} - Formatted date
 */
function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-IN', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

/**
 * Calculate days between two dates
 * @param {string} startDate - Start date (YYYY-MM-DD)
 * @param {string} endDate - End date (YYYY-MM-DD)
 * @returns {number} - Number of days
 */
function calculateDays(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
}

// ============================================
// 4. DOM MANIPULATION & EVENTS
// ============================================

/**
 * Add real-time character count to textarea/input
 * @param {string} inputId - ID of input element
 * @param {string} counterId - ID of counter display element
 * @param {number} maxChars - Maximum characters allowed
 */
function addCharacterCounter(inputId, counterId, maxChars) {
  const input = document.getElementById(inputId);
  const counter = document.getElementById(counterId);

  if (input && counter) {
    input.addEventListener('input', () => {
      const remaining = maxChars - input.value.length;
      counter.textContent = remaining;
      counter.style.color = remaining < 20 ? '#dc3545' : '#6c757d';
    });
  }
}

/**
 * Enable smooth scroll to element
 * @param {string} elementId - ID of target element
 */
function smoothScroll(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Add tooltip to element
 * @param {string} elementId - ID of element
 * @param {string} tooltipText - Tooltip text
 */
function addTooltip(elementId, tooltipText) {
  const element = document.getElementById(elementId);
  if (element) {
    element.title = tooltipText;
    element.setAttribute('data-toggle', 'tooltip');
    element.setAttribute('data-placement', 'top');
  }
}

// ============================================
// 5. LOCAL STORAGE HELPERS
// ============================================

/**
 * Save data to localStorage
 * @param {string} key - Storage key
 * @param {*} value - Value to save
 */
function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
}

/**
 * Get data from localStorage
 * @param {string} key - Storage key
 * @returns {*} - Retrieved value or null
 */
function getFromLocalStorage(key) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
}

/**
 * Clear localStorage item
 * @param {string} key - Storage key
 */
function clearLocalStorage(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
}

// ============================================
// 6. PAGE INITIALIZATION
// ============================================

/**
 * Initialize page on DOM ready
 */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize tooltips (if Bootstrap tooltips are available)
  if (typeof $ !== 'undefined' && $.fn.tooltip) {
    $('[data-toggle="tooltip"]').tooltip();
  }

  // Add keyboard event to prevent accidental form submission
  const bookingForm = document.querySelector('form');
  if (bookingForm) {
    bookingForm.addEventListener('keypress', function(event) {
      if (event.key === 'Enter' && event.target !== document.querySelector('textarea')) {
        event.preventDefault();
      }
    });
  }

  // Log initialization complete
  console.log('Car Rental System initialized successfully');
});

// ============================================
// 7. EXPORT FOR EXTERNAL USE
// ============================================

// Make functions available globally if needed
window.carRentalApp = {
  validateEmail,
  validatePhone,
  validateBookingForm,
  showAlert,
  formatCurrency,
  formatDate,
  calculateDays,
  addCharacterCounter,
  smoothScroll,
  addTooltip,
  saveToLocalStorage,
  getFromLocalStorage,
  clearLocalStorage
};
