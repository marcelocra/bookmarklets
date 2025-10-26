/**
 * Bookmarklet Name: Show Image Alt Text
 * 
 * Description:
 * Displays the alt text attribute of all images on the current page as a tooltip
 * overlay, helping you verify accessibility and understand image context.
 * 
 * Usage:
 * 1. Save this bookmarklet to your bookmarks bar
 * 2. Navigate to any web page with images
 * 3. Click the bookmark to show alt text for all images
 * 4. Alt text appears as a dark overlay on each image
 * 5. Refresh the page to remove the overlays
 * 
 * Requirements:
 * - Any modern browser with JavaScript enabled
 * - Works on pages with image elements
 * 
 * Notes:
 * - Shows "No alt text" for images without alt attributes
 * - Overlays are positioned absolutely over each image
 * - Helpful for accessibility testing and content auditing
 * - Does not modify the actual images or their attributes
 */
javascript:(function(){
  var images = document.getElementsByTagName('img');
  var count = 0;
  
  for (var i = 0; i < images.length; i++) {
    var img = images[i];
    var altText = img.alt || 'No alt text';
    
    // Create overlay div
    var overlay = document.createElement('div');
    overlay.textContent = altText;
    overlay.style.position = 'absolute';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.color = 'white';
    overlay.style.padding = '5px';
    overlay.style.fontSize = '12px';
    overlay.style.zIndex = '10000';
    overlay.style.maxWidth = '200px';
    overlay.style.wordWrap = 'break-word';
    
    // Position overlay on image
    var rect = img.getBoundingClientRect();
    overlay.style.left = (rect.left + window.scrollX) + 'px';
    overlay.style.top = (rect.top + window.scrollY) + 'px';
    
    document.body.appendChild(overlay);
    count++;
  }
  
  alert('Showing alt text for ' + count + ' images. Refresh page to remove.');
})();
