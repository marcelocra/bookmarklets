# Bookmarklets Collection

A collection of useful bookmarklets to enhance your web browsing experience on various sites.

<details>
<summary>Available Bookmarklets</summary>

**Google Calendar**
- Increase Tasks Width: Automatically adjusts the Google Tasks sidebar width based on your screen resolution.
  - <a href="javascript:(function(){if(!window.location.hostname.includes('calendar.google.com')){alert('This bookmarklet only works on Google Calendar');return;}const screenWidth=window.screen.width;let newWidth;if(screenWidth<=1366){newWidth='400px';}else if(screenWidth<=1920){newWidth='500px';}else{newWidth='600px';}let override=prompt(`Will set to '${newWidth}'. Override? (Type the value as a number.)`);document.documentElement.style.setProperty('--companion-shell-width',override?`${override}px`:newWidth);})();">Drag this to your bookmarks bar</a> ([code](./google-calendar/increase-tasks-width.js))
- Resizable Tasks Pane: Adds a draggable handle to the Tasks sidebar for manual resizing. ⚠️ Not 100% stable—works better for increasing width than reducing it.
  - <a href="javascript:(function(){if(!window.location.hostname.includes('calendar.google.com')){alert('This bookmarklet only works on Google Calendar');return;}function findShell(){let s=document.querySelector('.dOqRGf');if(!s)s=document.querySelector('.Kk7lMc-ae3xF.Kk7lMc-Ia7Qfc-CZjX4e');if(!s){const els=document.querySelectorAll('div');for(let el of els){if(el.offsetWidth===300&&el.offsetHeight>100){s=el;break;}}}return s;}const shell=findShell();if(!shell){alert('Companion shell not found. Make sure it is open');return;}const existing=document.getElementById('companion-resize-handle');if(existing)existing.remove();const handle=document.createElement('div');handle.id='companion-resize-handle';handle.style.cssText='position:absolute;left:-2px;top:0;width:4px;height:100%;background:transparent;cursor:ew-resize;z-index:10000;user-select:none;';if(getComputedStyle(shell).position==='static')shell.style.position='relative';shell.appendChild(handle);let isResizing=false,startX=0,startWidth=0,resizeTimeout;function updateWidth(w){if(resizeTimeout)clearTimeout(resizeTimeout);resizeTimeout=setTimeout(()=>document.documentElement.style.setProperty('--companion-shell-width',w+'px'),16);}handle.addEventListener('mousedown',function(e){isResizing=true;startX=e.clientX;startWidth=shell.offsetWidth;document.body.style.userSelect='none';document.body.style.cursor='ew-resize';e.preventDefault();e.stopPropagation();});document.addEventListener('mousemove',function(e){if(!isResizing)return;const deltaX=startX-e.clientX;const newWidth=Math.max(250,Math.min(800,startWidth+deltaX));updateWidth(newWidth);e.preventDefault();});document.addEventListener('mouseup',function(e){if(isResizing){isResizing=false;document.body.style.userSelect='';document.body.style.cursor='';if(resizeTimeout){clearTimeout(resizeTimeout);resizeTimeout=null;}}});handle.addEventListener('mouseenter',function(){this.style.background='rgba(66,133,244,0.4)';});handle.addEventListener('mouseleave',function(){if(!isResizing)this.style.background='transparent';});})();">Drag this to your bookmarks bar</a> ([code](./google-calendar/resizable-tasks-pane.js))

**F1TV**
- Enable Picture-in-Picture: Enables native Picture-in-Picture on F1TV videos. Uses MutationObserver to persist across navigation.
  - <a href="javascript:(function(){if(!window.location.hostname.includes('f1tv.formula1.com')){alert('This bookmarklet only works on F1TV');return;}const videos=document.querySelectorAll('video[disablepictureinpicture]');if(videos.length===0){const allVideos=document.querySelectorAll('video');if(allVideos.length===0){alert('No videos found');return;}console.log('PiP already enabled');return;}videos.forEach(v=>v.removeAttribute('disablepictureinpicture'));const observer=new MutationObserver(mutations=>mutations.forEach(m=>m.addedNodes.forEach(node=>{if(node.nodeType===1){const vids=node.tagName==='VIDEO'?[node]:node.querySelectorAll?node.querySelectorAll('video[disablepictureinpicture]'):[];vids.forEach(v=>{if(v.hasAttribute('disablepictureinpicture'))v.removeAttribute('disablepictureinpicture');});}})));observer.observe(document.body,{childList:true,subtree:true});console.log(`PiP enabled for ${videos.length} video(s) + auto-watcher active`);})();">Drag this to your bookmarks bar</a> ([code](./f1tv/enable-pip.js))

**Namecheap**
- Increase Filter Height: Increases the TLD filter panel height on domain search results for easier browsing.
  - <a href="javascript:(function(){const targetHostname='www.namecheap.com';const targetPath='/domains/registration/results/';if(window.location.hostname!==targetHostname||!window.location.pathname.startsWith(targetPath)){alert('This bookmarklet only works on Namecheap domain search results');return;}const element=document.querySelector('#beast-filters');if(element){element.style.height='600px';}else{alert('Element #beast-filters not found');}})();">Drag this to your bookmarks bar</a> ([code](./namecheap/increase-filter-height.js))

</details>

## What are Bookmarklets?

Bookmarklets are small JavaScript programs stored as bookmarks in your browser. When clicked, they execute code to modify or enhance the current webpage.

## Installation

### Method 1: Drag and Drop (Recommended)

Simply drag the "Drag this to your bookmarks bar" link from the bookmarklet list above directly to your browser's bookmarks bar.

### Method 2: Manual Creation

1. Create a new bookmark in your browser
2. Name it appropriately (e.g., "GCal: Resize Tasks")
3. In the URL/Location field, paste the **minified version** (`.min.js` files in this repo)
4. Save the bookmark

### Method 3: Copy from Repository

1. Open the `.min.js` file for the bookmarklet you want
2. Copy the entire contents
3. Create a new bookmark and paste into the URL field

## Compatibility

- **Browsers tested:** Brave (Chromium-based. Should work in Chrome, Edge and similar)

## Developer Information

### Repository Structure

```
bookmarklets/
├── [README.md](http://README.md)
├── google-calendar/
│   ├── increase-tasks-width.js         (developer-friendly)
│   ├── increase-tasks-width.min.js     (production/bookmarklet)
│   ├── resizable-tasks-pane.js         (developer-friendly)
│   └── resizable-tasks-pane.min.js     (production/bookmarklet)
├── f1tv/
│   ├── enable-pip.js                   (developer-friendly)
│   └── enable-pip.min.js               (production/bookmarklet)
└── namecheap/
├── increase-filter-height.js       (developer-friendly)
└── increase-filter-height.min.js   (production/bookmarklet)
```

## Disclaimer

⚠️ **Use at your own risk.** These bookmarklets manipulate page DOM and may break if sites change their structure. They are provided as-is without warranty.

## Contributing

Found a bug? Have an improvement? Feel free to open an issue or submit a pull request!
