const materialsSizeContainer = document.querySelector('.materials-size-container');
const body = document.body;
let materialScrolledToTop = false;

// Scroll to the top of the materialsSizeContainer when the page is loaded
window.onload = function() {
  window.scrollTo(0, 0); // Scroll to the top of the page
};

materialsSizeContainer.addEventListener('scroll', function(event) {
    const isScrolledToBottom = materialsSizeContainer.scrollHeight - materialsSizeContainer.clientHeight <= materialsSizeContainer.scrollTop + 1;
    
    materialScrolledToTop = materialsSizeContainer.scrollTop === 0;

    if (isScrolledToBottom || materialScrolledToTop) {
        // Enable scrolling for the body once the bottom is reached or materialsSizeContainer is scrolled to the top
        body.style.overflowY = 'auto';
    } else {
        // Disable scrolling for the body until the bottom is reached
        body.style.overflowY = 'hidden';
    }
});

// Enable scrolling on the body if the top of materialsSizeContainer is at the top of the viewport
document.body.addEventListener('wheel', function(event) {
    if (materialScrolledToTop && event.deltaY < 0) {
        // Allow scrolling up through the body if the top of materialsSizeContainer is at the top of the viewport
        body.style.overflowY = 'auto';
        return;
    }

    if (body.style.overflowY === 'auto') {
        // Allow scrolling on the body if enabled
        return;
    }

    // Scroll the materialsSizeContainer instead
    materialsSizeContainer.scrollTop += event.deltaY;

    // Prevent default scrolling behavior on the body
    event.preventDefault();
});

window.addEventListener('scroll', function() {
  const scrolledPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  console.log('Scrolled percentage:', scrolledPercentage.toFixed(2) + '%');

  
  // Check if the scrolled percentage exceeds 59.84%
  if (scrolledPercentage <= 14.90 || scrolledPercentage >= 15.84) {
      // Disable scrolling on the body
      document.body.style.overflowY = 'auto';
  } else {
      // Enable scrolling on the body
      document.body.style.overflowY = 'hidden';
  }
  
});
