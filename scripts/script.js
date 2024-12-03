document.addEventListener("DOMContentLoaded", () => {
  // 1. Menu Toggle for Small Screens
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // 2. Smooth Scroll for Navigation Links
  const links = document.querySelectorAll(".nav-links a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior

      const targetId = link.getAttribute("href").substring(1); // Extract the ID (remove '#')
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth", // Enable smooth scrolling
        });
      }
    });
  });

  // 3. Navbar Scroll Effect
  const navbar = document.querySelector(".navbar");
  const changePoint = document.querySelector("#change-point");
  if (navbar && changePoint) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            navbar.classList.add("scrolled"); // Add white background
          } else {
            navbar.classList.remove("scrolled"); // Make it transparent
          }
        });
      },
      { root: null, threshold: 0 }
    );

    observer.observe(changePoint);
  }

  // 4. Scroll to Top (if needed for additional functionality)
  const scrollToHero = document.getElementById("scrollToTop");
  const heroSection = document.getElementById("change-point");
  if (scrollToHero && heroSection) {
    scrollToHero.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior

      heroSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  // 5. Text Transitioning Animation
  const textList = [
    "Content Hosting",
    "Digital Marketing",
    "Subscription Management",
  ];
  const animatedText = document.getElementById("animatedText");
  if (animatedText) {
    let index = 0; 

    setInterval(() => {
      animatedText.classList.remove("fade");
      void animatedText.offsetWidth; // Trigger reflow to restart animation
      animatedText.classList.add("fade");

      // Update the text content
      index = (index + 1) % textList.length; 
      animatedText.textContent = textList[index];
    }, 3000); // Match the duration of the CSS animation
  }
});
