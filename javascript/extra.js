// File: docs/javascripts/hide-contributors.js
// Add this to your mkdocs.yml:
// extra_javascript:
//   - javascripts/hide-contributors.js

document.addEventListener('DOMContentLoaded', function() {
  // Check if this is an index page
  const path = window.location.pathname;
  const isIndexPage = path.endsWith('/index') || 
                      path.endsWith('/index/') || 
                      path.endsWith('/') || 
                      path === '';
  
  // Hide contributors on index pages
  if (isIndexPage) {
    const contributorElements = document.querySelectorAll('.md-source-file');
    contributorElements.forEach(function(element) {
      element.style.display = 'none';
    });
    
    // Add a class to the body for potential CSS targeting
    document.body.classList.add('index-page');
  }
});