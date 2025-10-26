/**
 * Namecheap - Increase the height of the filter/TLD section
 * 
 * Increases the height of the filter panel on Namecheap domain search results,
 * making it easier to browse and select TLDs without scrolling.
 */
(function() {
  const targetHostname = 'www.namecheap.com';
  const targetPath = '/domains/registration/results/';

  // Validate we're on the correct page
  if (window.location.hostname !== targetHostname || 
      !window.location.pathname.startsWith(targetPath)) {
    alert('This bookmarklet only works on Namecheap domain search results');
    return;
  }

  // Find and modify the filter element
  const element = document.querySelector('#beast-filters');
  
  if (element) {
    element.style.height = '600px';
  } else {
    alert('Element #beast-filters not found');
  }
})();
