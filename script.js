document.addEventListener("DOMContentLoaded", () => {
  const tiles = document.querySelectorAll(".tile"); // Select all tiles

  tiles.forEach((tile) => {
    const icon = tile.querySelector("i"); // Select the icon inside each tile

    // Check if the icon is being selected correctly
    if (!icon) {
      console.log("No icon found in this tile!");
      return;
    }

    tile.addEventListener("mouseenter", () => {
      // Generate a random degree of rotation from -15 to 15 degrees
      const randomDegree = Math.floor(Math.random() * 31) - 15; // Range from -15 to 15
      console.log(`Rotating icon by ${randomDegree} degrees`); // Log rotation for debugging
      icon.style.transform = `rotate(${randomDegree}deg)`; // Apply random rotation
    });

    tile.addEventListener("mouseleave", () => {
      icon.style.transform = "rotate(0deg)"; // Reset to original rotation
    });
  });
  // This will ensure that the page always scrolls back to the splash page on reload
  window.onload = () => {
    window.scrollTo(0, 0);
  };
});
