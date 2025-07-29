// TYPEWRITER EFFECT (only runs on index.html if element exists)
const typewriterEl = document.querySelector(".hero-container h1");
if (typewriterEl) {
  const nameText = "Hi, I'm Andrea Arias!";
  let i = 0;
  typewriterEl.textContent = "";

  function typeWriter() {
    if (i < nameText.length) {
      typewriterEl.textContent += nameText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  window.addEventListener("DOMContentLoaded", typeWriter);
}

// MOBILE MENU TOGGLE
const navContainer = document.querySelector(".nav-container");
if (navContainer) {
  const hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");
  hamburger.innerHTML = "&#9776;";
  navContainer.parentElement.insertBefore(hamburger, navContainer);

  hamburger.addEventListener("click", () => {
    navContainer.classList.toggle("active");
  });
}

// PROJECT CAROUSEL
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".project-card");
  if (cards.length > 0) {
    let currentIndex = 0;

    const nextBtn = document.createElement("button");
    const prevBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    prevBtn.textContent = "Prev";
    nextBtn.classList.add("carousel-button");
    prevBtn.classList.add("carousel-button");

    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("projects-carousel-buttons");
    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);

    const projectsSection = document.querySelector(".projects-container");
    projectsSection.parentNode.insertBefore(buttonWrapper, projectsSection.nextSibling);

   function showSlide(index) {
  cards.forEach((card, i) => {
    card.style.display = (i === index || i === index + 1) ? "block" : "none";
  });
}

    showSlide(currentIndex);

   nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 2) % cards.length;
  showSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 2 + cards.length) % cards.length;
  showSlide(currentIndex);
});

  }
});
