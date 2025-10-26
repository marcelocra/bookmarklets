/**
 * Bookmarklet Name: Font Size Adjuster
 * 
 * Description:
 * Increases the font size of all text on the current page by 20%, making
 * content easier to read. Can be clicked multiple times to further increase.
 * 
 * Usage:
 * 1. Save this bookmarklet to your bookmarks bar
 * 2. Navigate to any web page
 * 3. Click the bookmark to increase font size by 20%
 * 4. Click multiple times for larger text
 * 5. Refresh the page to reset to original size
 * 
 * Requirements:
 * - Any modern browser with JavaScript enabled
 * - Works on most text content across websites
 * 
 * Notes:
 * - Increases font size by 20% each click
 * - Affects all text elements on the page
 * - Changes persist until page refresh
 * - May affect page layout on some websites
 * - Useful for accessibility and readability
 */
javascript:(function(){
  var all = document.getElementsByTagName('*');
  
  for (var i = 0; i < all.length; i++) {
    var element = all[i];
    var style = window.getComputedStyle(element);
    var currentSize = parseFloat(style.fontSize);
    
    if (currentSize > 0) {
      element.style.fontSize = (currentSize * 1.2) + 'px';
    }
  }
  
  alert('Font size increased by 20%');
})();
