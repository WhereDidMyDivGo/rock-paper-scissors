// This script sets the --vh CSS variable to the actual viewport height for mobile browsers
function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
window.addEventListener("resize", setVh);
window.addEventListener("orientationchange", setVh);
setVh();
