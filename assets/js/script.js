'use strict';

// Function to toggle the 'active' class on an element
const elementToggleFunc = (elem) => {
  elem.classList.toggle("active");
};

// Sidebar toggle functionality for mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => {
  elementToggleFunc(sidebar);
});

// Page navigation functionality
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Handle page navigation based on clicked link
navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    const targetPage = link.dataset.page;
    
    pages.forEach(page => {
      if (targetPage === page.dataset.page) {
        page.classList.add("active");
        link.classList.add("active");
        window.scrollTo(0, 0); // Scroll to the top of the page
      } else {
        page.classList.remove("active");
        link.classList.remove("active");
      }
    });
  });
});

// Contact form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Enable or disable the submit button based on form validity
formInputs.forEach(input => {
  input.addEventListener("input", () => {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});
