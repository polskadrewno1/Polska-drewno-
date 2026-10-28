const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.getAttribute("data-product");
    const select = document.getElementById("product");

    if (select) {
      select.value = product;
    }

    document.getElementById("kontakt")?.scrollIntoView({
      behavior: "smooth"
    });
  });
});

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert(
      "Formularz kontaktowy jest jeszcze w konfiguracji. Prosimy o kontakt ze sprzedawcą."
    );
  });
}
