function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".hamburger");
  const isActive = sidebar.classList.toggle("active");

  sidebar.setAttribute("aria-hidden", !isActive);
  hamburger.setAttribute("aria-expanded", isActive);
}

// Close sidebar on outside click (optional for accessibility)
document.addEventListener("click", function (e) {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".hamburger");
  if (
    sidebar.classList.contains("active") &&
    !sidebar.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    toggleSidebar();
  }
});

// Allow keyboard toggle with Enter key
document.querySelector(".hamburger").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    toggleSidebar();
  }
});
