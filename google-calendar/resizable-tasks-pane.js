/**
 * Google Calendar - Make Google Tasks pane resizable
 * 
 * Adds a draggable handle to the left edge of the Google Tasks sidebar,
 * allowing you to resize it by dragging.
 * 
 * Note: This feature is not 100% stable yet, especially when trying to 
 * reduce the sidebar width. Works better for increasing width.
 */
(function() {
  // Validate we're on Google Calendar
  if (!window.location.hostname.includes('calendar.google.com')) {
    alert('This bookmarklet only works on Google Calendar');
    return;
  }

  /**
   * Attempt to locate the companion shell (Tasks sidebar) element
   * Tries multiple selectors as Google may change class names
   */
  function findShell() {
    let shell = document.querySelector('.dOqRGf');
    
    if (!shell) {
      shell = document.querySelector('.Kk7lMc-ae3xF.Kk7lMc-Ia7Qfc-CZjX4e');
    }
    
    // Fallback: search by dimensions (300px width is typical for closed state)
    if (!shell) {
      const elements = document.querySelectorAll('div');
      for (let el of elements) {
        if (el.offsetWidth === 300 && el.offsetHeight > 100) {
          shell = el;
          break;
        }
      }
    }
    
    return shell;
  }

  const shell = findShell();

  if (!shell) {
    alert('Companion shell not found. Make sure it is open');
    return;
  }

  // Remove any existing resize handle to avoid duplicates
  const existing = document.getElementById('companion-resize-handle');
  if (existing) {
    existing.remove();
  }

  // Create the resize handle element
  const handle = document.createElement('div');
  handle.id = 'companion-resize-handle';
  handle.style.cssText = [
    'position:absolute',
    'left:-2px',
    'top:0',
    'width:4px',
    'height:100%',
    'background:transparent',
    'cursor:ew-resize',
    'z-index:10000',
    'user-select:none'
  ].join(';');

  // Ensure shell has positioning context
  if (getComputedStyle(shell).position === 'static') {
    shell.style.position = 'relative';
  }

  shell.appendChild(handle);

  // Resize state
  let isResizing = false;
  let startX = 0;
  let startWidth = 0;
  let resizeTimeout;

  /**
   * Debounced width update to improve performance
   */
  function updateWidth(width) {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
    
    resizeTimeout = setTimeout(() => {
      document.documentElement.style.setProperty(
        '--companion-shell-width',
        width + 'px'
      );
    }, 16); // ~60fps
  }

  // Start resize on mousedown
  handle.addEventListener('mousedown', function(e) {
    isResizing = true;
    startX = e.clientX;
    startWidth = shell.offsetWidth;
    
    // Prevent text selection during drag
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'ew-resize';
    
    e.preventDefault();
    e.stopPropagation();
  });

  // Handle resize on mousemove
  document.addEventListener('mousemove', function(e) {
    if (!isResizing) return;

    // Calculate new width (dragging left increases width)
    const deltaX = startX - e.clientX;
    const newWidth = Math.max(250, Math.min(800, startWidth + deltaX));
    
    updateWidth(newWidth);
    e.preventDefault();
  });

  // End resize on mouseup
  document.addEventListener('mouseup', function(e) {
    if (isResizing) {
      isResizing = false;
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
      
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
        resizeTimeout = null;
      }
    }
  });

  // Visual feedback on hover
  handle.addEventListener('mouseenter', function() {
    this.style.background = 'rgba(66,133,244,0.4)';
  });

  handle.addEventListener('mouseleave', function() {
    if (!isResizing) {
      this.style.background = 'transparent';
    }
  });
})();
