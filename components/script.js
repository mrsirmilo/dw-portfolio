document.addEventListener("DOMContentLoaded", () => {
    // Animate the splash heading
    const splashName = document.querySelector("#splash-name");
    splashName.style.transition = "opacity 1s ease, transform 1s ease";
    splashName.style.opacity = "1";
    splashName.style.transform = "translateY(0)";
  
    // Add hover effects for the button
    const button = document.querySelector("#cta");
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.1)";
    });
  
    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
    });
  });
  