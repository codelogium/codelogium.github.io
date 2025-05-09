/* THIS ENSURE THAT CONTENT IS HIDDEN BY DEFAULT WITH CSS UNTIL IT NEED 
  THE GOOD THING IS THAT THE CONTENT IS THERE, AND WHEN NEEDED THIS JS WILL JUST ADD THE CLASS THAT WILL DISPLAY IT
*/

document.addEventListener('DOMContentLoaded', function() {
  const path = window.location.pathname;
  const isBlogPage = path.includes('blog');
  
  // If it's a "blog" page, show contributors and feedback, otherwise hide them
  if (isBlogPage) {
    // Ensure the contributors and feedback are visible on blog pages
    document.body.classList.add('show-contrib-feedback');
  } else {
    // Hide them on non-blog pages
    document.body.classList.remove('show-contrib-feedback');
  }
});

// THIS WORKS WELL, BUT IT LOADS THE METADATA BEFORE IT HIDES IT

// // File: docs/javascripts/hide-contributors.js
// // Add this to your mkdocs.yml:
// // extra_javascript:
// //   - javascripts/hide-contributors.js

// document.addEventListener('DOMContentLoaded', function () {
//   const path = window.location.pathname;

//   // Only show contributors and feedback on blog pages
//   const isBlogPage = path.includes('/blog/');

//   if (!isBlogPage) {
//     // Hide contributors
//     const contributorElements = document.querySelectorAll('.md-source-file');
//     contributorElements.forEach(function (element) {
//       element.style.display = 'none';
//     });

//     // Hide feedback form
//     const feedbackElements = document.querySelectorAll('.md-feedback');
//     feedbackElements.forEach(function (element) {
//       element.style.display = 'none';
//     });
//   }
// });
