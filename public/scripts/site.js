const navToggle = document.querySelector("[data-nav-toggle]");
const navPanel = document.querySelector("[data-nav-panel]");

if (navToggle && navPanel) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navPanel.classList.toggle("hidden", expanded);
  });
}

const track = document.querySelector("[data-slider-track]");
const dots = [...document.querySelectorAll("[data-slide-dot]")];

if (track && dots.length > 1) {
  let current = 0;

  const updateDots = (index) => {
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("bg-white", dotIndex === index);
    });
  };

  const goTo = (index) => {
    const slide = track.children[index];
    if (!slide) return;
    track.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });
    current = index;
    updateDots(current);
  };

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = Number(dot.getAttribute("data-slide-index"));
      goTo(index);
    });
  });

  setInterval(() => {
    current = (current + 1) % dots.length;
    goTo(current);
  }, 5000);
}
