/**
 * Bookmarklet Name: Highlight All Links
 * 
 * Description:
 * Highlights all clickable links on the current page with a bright yellow
 * background, making it easier to identify interactive elements and navigation.
 * 
 * Usage:
 * 1. Drag this bookmarklet to your bookmarks bar
 * 2. Navigate to any web page
 * 3. Click the bookmark to highlight all links
 * 4. Click again to remove highlighting (toggle on/off)
 * 
 * Requirements:
 * - Any modern browser with JavaScript enabled
 * - Works on most websites (may not work on sites with strict Content Security Policy)
 * 
 * Notes:
 * - Highlighting persists until page refresh or toggled off
 * - Does not modify the actual page structure or links
 * - Uses yellow background and red border for visibility
 */
javascript:(function(){
  var links = document.getElementsByTagName('a');
  var dataAttr = 'data-bookmarklet-highlighted';
  var highlighted = false;
  
  // Check if links are already highlighted by checking data attribute
  if (links.length > 0 && links[0].hasAttribute(dataAttr)) {
    highlighted = true;
  }
  
  // Toggle highlighting
  for (var i = 0; i < links.length; i++) {
    if (highlighted) {
      links[i].style.backgroundColor = '';
      links[i].style.border = '';
      links[i].removeAttribute(dataAttr);
    } else {
      links[i].style.backgroundColor = 'yellow';
      links[i].style.border = '2px solid red';
      links[i].setAttribute(dataAttr, 'true');
    }
  }
  
  alert(highlighted ? 'Links unhighlighted!' : 'Links highlighted!');
})();
