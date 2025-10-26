# Contributing to Bookmarklets

Thank you for contributing to this bookmarklets collection! This guide will help you maintain consistent, high-quality documentation.

## Bookmarklet Documentation Standards

Every bookmarklet file in this repository **must** include documentation at the top of the file that explains:

1. **What it does** - A clear, concise description of the bookmarklet's purpose
2. **How to use it** - Brief instructions on how to install and use the bookmarklet
3. **Requirements** - Any browser requirements or limitations
4. **Notes** - Any important caveats or behaviors users should know about

### Documentation Format

Use JavaScript block comments at the top of each bookmarklet file:

```javascript
/**
 * Bookmarklet Name: [Clear, descriptive name]
 * 
 * Description:
 * [Simple explanation of what this bookmarklet does in 1-2 sentences]
 * 
 * Usage:
 * 1. Drag this bookmarklet to your bookmarks bar
 * 2. Navigate to the target website
 * 3. Click the bookmark to activate
 * 
 * Requirements:
 * - Modern browser with JavaScript enabled
 * - [Any specific website or browser requirements]
 * 
 * Notes:
 * - [Any important behavior or limitations]
 */
```

### Example Documentation

Here's an example of properly documented bookmarklet:

```javascript
/**
 * Bookmarklet Name: Highlight All Links
 * 
 * Description:
 * Highlights all clickable links on the current page with a bright yellow
 * background, making it easier to identify interactive elements.
 * 
 * Usage:
 * 1. Save this bookmarklet to your bookmarks bar
 * 2. Navigate to any web page
 * 3. Click the bookmark to highlight all links
 * 4. Click again to remove highlighting
 * 
 * Requirements:
 * - Any modern browser with JavaScript enabled
 * - Works on most websites (may not work on sites with strict CSP)
 * 
 * Notes:
 * - Highlighting persists until page refresh or toggled off
 * - Does not modify the actual page structure
 */
javascript:(function(){...})();
```

## Best Practices

1. **Keep it simple** - Documentation should be easy to read and understand
2. **Be accurate** - Ensure the documentation matches what the bookmarklet actually does
3. **Update documentation** - When modifying a bookmarklet, always update its documentation
4. **Test your bookmarklet** - Verify it works as described before submitting

## Code Review Checklist

Before submitting a bookmarklet, ensure:

- [ ] Documentation is present at the top of the file
- [ ] Description accurately explains what the bookmarklet does
- [ ] Usage instructions are clear and complete
- [ ] Requirements are listed (if any)
- [ ] The bookmarklet has been tested and works as documented
- [ ] Code is minified (if appropriate)

## Questions?

If you have questions about documentation standards, please open an issue!
