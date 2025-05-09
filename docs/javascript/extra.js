// File: docs/javascripts/hide-contributors.js
// Add this to your mkdocs.yml:
// extra_javascript:
//   - javascripts/hide-contributors.js

document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname;

  // Only show contributors and feedback on blog pages
  const isBlogPage = path.includes('/blog/');

  if (!isBlogPage) {
    // Hide contributors
    const contributorElements = document.querySelectorAll('.md-source-file');
    contributorElements.forEach(function (element) {
      element.style.display = 'none';
    });

    // Hide feedback form
    const feedbackElements = document.querySelectorAll('.md-feedback');
    feedbackElements.forEach(function (element) {
      element.style.display = 'none';
    });
  }
});
