/**
 * Car Rental System - Vehicle Filtering & Search
 * Provides real-time vehicle filtering by type and price
 */

// Store original vehicle list for filtering
let originalVehicles = [];

/**
 * Initialize vehicle filtering system
 */
function initializeVehicleFiltering() {
  // Store original vehicle cards
  const vehicleContainer = document.querySelector('.row');
  if (vehicleContainer) {
    originalVehicles = Array.from(vehicleContainer.querySelectorAll('.card'));
  }

  // Add event listeners to filter elements if they exist
  const priceFilter = document.getElementById('priceFilter');
  const typeFilter = document.getElementById('typeFilter');
  const searchInput = document.getElementById('vehicleSearch');

  if (priceFilter) {
    priceFilter.addEventListener('change', applyFilters);
  }
  if (typeFilter) {
    typeFilter.addEventListener('change', applyFilters);
  }
  if (searchInput) {
    searchInput.addEventListener('keyup', applyFilters);
  }

  console.log('Vehicle filtering initialized');
}

/**
 * Filter vehicles based on current filter criteria
 */
function applyFilters() {
  const priceFilter = document.getElementById('priceFilter')?.value || 'all';
  const typeFilter = document.getElementById('typeFilter')?.value || '';
  const searchTerm = document.getElementById('vehicleSearch')?.value.toLowerCase() || '';

  let filteredVehicles = originalVehicles.filter(card => {
    const carName = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
    const carPrice = parseInt(card.querySelector('.card-text')?.textContent.match(/\d+/) || '0');

    // Search filter
    if (searchTerm && !carName.includes(searchTerm)) {
      return false;
    }

    // Price filter
    if (priceFilter !== 'all') {
      if (priceFilter === 'budget' && carPrice > 3000) return false;
      if (priceFilter === 'mid' && (carPrice < 3000 || carPrice > 6000)) return false;
      if (priceFilter === 'premium' && carPrice < 6000) return false;
    }

    // Type filter
    if (typeFilter && !carName.toLowerCase().includes(typeFilter.toLowerCase())) {
      return false;
    }

    return true;
  });

  // Display filtered results
  const vehicleContainer = document.querySelector('.row');
  if (vehicleContainer) {
    vehicleContainer.innerHTML = '';

    if (filteredVehicles.length === 0) {
      vehicleContainer.innerHTML = '<p class="col-12 text-center text-muted">No vehicles found matching your criteria.</p>';
    } else {
      filteredVehicles.forEach(vehicle => {
        vehicleContainer.appendChild(vehicle.cloneNode(true));
      });
    }
  }

  // Show result count
  displayResultCount(filteredVehicles.length);
}

/**
 * Display count of filtered results
 * @param {number} count - Number of results
 */
function displayResultCount(count) {
  let counter = document.getElementById('resultCount');
  if (!counter) {
    counter = document.createElement('p');
    counter.id = 'resultCount';
    counter.style.cssText = 'text-align: center; color: #666; margin: 10px 0;';
    const vehicleContainer = document.querySelector('.row');
    if (vehicleContainer.parentElement) {
      vehicleContainer.parentElement.insertBefore(counter, vehicleContainer);
    }
  }
  counter.textContent = `Showing ${count} vehicle${count !== 1 ? 's' : ''}`;
}

/**
 * Reset all filters
 */
function resetFilters() {
  const priceFilter = document.getElementById('priceFilter');
  const typeFilter = document.getElementById('typeFilter');
  const searchInput = document.getElementById('vehicleSearch');
  
  if (priceFilter) priceFilter.value = 'all';
  if (typeFilter) typeFilter.value = '';
  if (searchInput) searchInput.value = '';

  const vehicleContainer = document.querySelector('.row');
  if (vehicleContainer) {
    vehicleContainer.innerHTML = '';
    originalVehicles.forEach(vehicle => {
      vehicleContainer.appendChild(vehicle.cloneNode(true));
    });
  }

  displayResultCount(originalVehicles.length);
  if (typeof showAlert === 'function') {
    showAlert('info', 'Filters have been reset', 3000);
  }
}

/**
 * Quick book a vehicle
 * @param {string} carName - Name of the car to book
 */
function quickBookCar(carName) {
  if (!carName) {
    if (typeof showAlert === 'function') {
      showAlert('error', 'Unable to determine car to book', 3000);
    }
    return;
  }
  window.location.href = `/bill?car=${encodeURIComponent(carName)}`;
}

/**
 * Smooth scroll to vehicle by name
 * @param {string} carName - Name of the car to scroll to
 */
function scrollToVehicle(carName) {
  const vehicleContainer = document.querySelector('.row');
  if (!vehicleContainer) return;

  const cards = vehicleContainer.querySelectorAll('.card');
  for (let card of cards) {
    const title = card.querySelector('.card-title')?.textContent;
    if (title && title.toLowerCase() === carName.toLowerCase()) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.style.boxShadow = '0 0 20px rgba(0,123,255,0.5)';
      setTimeout(() => {
        card.style.boxShadow = '';
      }, 2000);
      return;
    }
  }

  if (typeof showAlert === 'function') {
    showAlert('warning', 'Vehicle not found', 3000);
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  initializeVehicleFiltering();
});
