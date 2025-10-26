/**
 * Google Calendar - Increase width of Google Tasks pane
 * 
 * Automatically adjusts the width of the Google Tasks sidebar in Google Calendar
 * based on your screen resolution, with option to override with a custom value.
 */
(function() {
  // Validate we're on Google Calendar
  if (!window.location.hostname.includes('calendar.google.com')) {
    alert('This bookmarklet only works on Google Calendar');
    return;
  }

  // Determine appropriate width based on screen size
  const screenWidth = window.screen.width;
  let newWidth;

  if (screenWidth <= 1366) {
    newWidth = '400px';
  } else if (screenWidth <= 1920) {
    newWidth = '500px';
  } else {
    newWidth = '600px';
  }

  // Offer user the ability to override the calculated width
  let override = prompt(
    `Will set to '${newWidth}'. Override? (Type the value as a number.)`
  );

  // Apply the width using CSS custom property
  document.documentElement.style.setProperty(
    '--companion-shell-width',
    override ? `${override}px` : newWidth
  );
})();
