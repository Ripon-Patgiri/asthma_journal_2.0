function showContent(contentId) {
  // Hide all content divs
  document.querySelectorAll("#main-content > div").forEach((div) => {
    div.style.display = "none";
  });

  const contentDiv = document.getElementById(contentId);
  if (contentDiv) {
    contentDiv.style.display = "block";
  }
}
