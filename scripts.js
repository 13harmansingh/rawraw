document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  // Cocktail Modal
  const cocktailItems = document.querySelectorAll(".cocktail-item");
  const modal = document.createElement("div");
  modal.classList.add("cocktail-modal");
  modal.innerHTML = `
      <div class="modal-content">
          <span class="close-btn">&times;</span>
          <h3></h3>
          <p class="description"></p>
          <h4>Ingredients</h4>
          <ul class="ingredients"></ul>
      </div>`;
  document.body.appendChild(modal);

  cocktailItems.forEach(item => {
    item.addEventListener("click", () => {
      const name = item.querySelector("h3").textContent;
      const description = item.querySelector("p").textContent;
  
      modal.querySelector("h3").textContent = name;
      modal.querySelector(".description").textContent = description;
  
      const ingredients = ["Premium Spirits", "Fresh Ingredients", "Secret Touch"];
  
      const ingredientsList = modal.querySelector(".ingredients");
      ingredientsList.innerHTML = "";
      ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
      });

      modal.classList.add("show"); // Trigger the modal to appear with the subtle pop-up effect
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("close-btn")) {
      modal.classList.remove("show");
    }
  });

  // Mobile Navigation Toggle
  const menuIcon = document.querySelector(".menu-icon");
  const navMenu = document.querySelector("header nav ul");

  menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuIcon.classList.toggle("open");
  });

  navMenu.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      navMenu.classList.remove("active");
      menuIcon.classList.remove("open");
    }
  });
});
