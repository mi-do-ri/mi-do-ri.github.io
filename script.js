const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");
const systemUsesDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  themeButton.setAttribute("aria-label", theme === "dark" ? "Use light theme" : "Use dark theme");

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.setAttribute("content", theme === "dark" ? "#0a1626" : "#ffffff");
  }
}

setTheme(savedTheme || (systemUsesDark ? "dark" : "light"));

themeButton.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

document.querySelectorAll(".current-year").forEach((year) => {
  year.textContent = String(new Date().getFullYear());
});
