export function initializeButtons() {
    const btns = document.querySelectorAll(".btn");
  
    btns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const target = btn.getAttribute("data-target");
        const elementsToShow = document.querySelectorAll(target);
  
        btns.forEach((otherBtn) => {
          const otherTarget = otherBtn.getAttribute("data-target");
          const otherElementsToShow = document.querySelectorAll(otherTarget);
  
          if (
            otherBtn !== btn &&
            otherElementsToShow[0].classList.contains("show")
          ) {
            otherElementsToShow[0].classList.remove("show");
            setTimeout(() => {
              otherElementsToShow[0].style.display = "none";
            }, 500);
            otherBtn.innerHTML = '<i class="fa fa-plus" aria-hidden="true"></i>';
          }
        });
  
        if (!elementsToShow[0].classList.contains("show")) {
          elementsToShow[0].style.display = "block";
          setTimeout(() => {
            elementsToShow[0].classList.add("show");
          }, 10);
          btn.innerHTML = '<i class="fa fa-minus" aria-hidden="true"></i>';
        } else {
          elementsToShow[0].classList.remove("show");
          setTimeout(() => {
            elementsToShow[0].style.display = "none";
          }, 500);
          btn.innerHTML = '<i class="fa fa-plus" aria-hidden="true"></i>';
        }
      });
    });
  }
  