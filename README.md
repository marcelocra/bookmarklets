# Bookmarklets Collection

A collection of useful bookmarklets to enhance your web browsing experience on various sites.

## What are Bookmarklets?

Bookmarklets are small JavaScript programs stored as bookmarks in your browser. When clicked, they execute code to modify or enhance the current webpage.

## Installation

### Method 1: Drag and Drop (Recommended)
1. Create a visual link on a test HTML page with the bookmarklet code
2. Drag the link to your bookmarks bar

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
