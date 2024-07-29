export function initializeScrollFunctions() {
    const topMenu = document.querySelector(".top-menu-bar");
    const scrollUp = document.querySelector(".scroll-up");
    const mainMenuLinks = document.querySelectorAll(".main-menu-links");
  
    if (topMenu) {
      scrollFunction(topMenu, "top-menu-bar-backgound", 100);
    }
  
    if (scrollUp) {
      scrollUp.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
      scrollFunction(scrollUp, "scroll-show", 200);
    }
  
    if (mainMenuLinks.length) {
      mainMenuLinks.forEach((link) => {
        scrollFunction(link, "main-menu-links-color", 100);
      });
    }
  }
  
  function scrollFunction(toScroll, className, threshold) {
    let lastScrollTop = 0;
    const handleScroll = () => {
      let scrollDistance = window.scrollY;
      if (scrollDistance > threshold && !toScroll.classList.contains(className)) {
        toScroll.classList.add(className);
      } else if (scrollDistance <= threshold && toScroll.classList.contains(className)) {
        toScroll.classList.remove(className);
      }
      lastScrollTop = scrollDistance <= 0 ? 0 : scrollDistance;
    };
    window.addEventListener("scroll", () => requestAnimationFrame(handleScroll));
  }
  