/**
 * F1TV - Enable Picture in Picture
 * 
 * Removes the disablepictureinpicture attribute from video elements on F1TV,
 * enabling the native Picture-in-Picture functionality.
 * Uses MutationObserver to automatically enable PiP for videos loaded dynamically.
 */
(function() {
  // Validate we're on F1TV
  if (!window.location.hostname.includes('f1tv.formula1.com')) {
    alert('This bookmarklet only works on F1TV');
    return;
  }

  // Find all videos with PiP disabled
  const videos = document.querySelectorAll('video[disablepictureinpicture]');

  if (videos.length === 0) {
    // Check if there are any videos at all
    const allVideos = document.querySelectorAll('video');
    if (allVideos.length === 0) {
      alert('No videos found');
      return;
    }
    
    console.log('PiP already enabled');
    return;
  }

  // Enable PiP on existing videos
  videos.forEach(video => video.removeAttribute('disablepictureinpicture'));

  /**
   * Set up MutationObserver to handle dynamically loaded videos
   * (e.g., when navigating in a Single Page Application)
   */
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        // Only process element nodes
        if (node.nodeType === 1) {
          // Check if the node itself is a video, or find videos within it
          const videosToFix = node.tagName === 'VIDEO' 
            ? [node]
            : node.querySelectorAll 
              ? node.querySelectorAll('video[disablepictureinpicture]')
              : [];

          videosToFix.forEach(video => {
            if (video.hasAttribute('disablepictureinpicture')) {
              video.removeAttribute('disablepictureinpicture');
            }
          });
        }
      });
    });
  });

  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  console.log(`PiP enabled for ${videos.length} video(s) + auto-watcher active`);
})();
