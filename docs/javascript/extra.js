/*
  THIS ENSURES THAT CONTENT (CONTRIBUTORS AND FEEDBACK) IS HIDDEN BY DEFAULT VIA CSS, 
  AND ONLY SHOWN ON PAGES THAT MATCH THE "BLOG" URL PATTERN.
  THE CONTENT REMAINS IN THE DOM BUT IS CONTROLLED BY A CLASS ADDED/REMOVED BY JAVASCRIPT, 
  MAKING IT EASY TO SHOW OR HIDE WHEN NECESSARY BASED ON THE PAGE URL.
*/

document.addEventListener('DOMContentLoaded', function () {
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