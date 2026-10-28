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

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const product = document.getElementById("product")?.value || "";
    const message = document.getElementById("message")?.value.trim() || "";

    if (!name || !email || !message) {
      alert("Proszę wypełnić wszystkie wymagane pola.");
      return;
    }

    const recipient = "chevelardi@gmail.com";
    const subject = encodeURIComponent(
      "Zapytanie ze strony Polska Drewno"
    );

    const body = encodeURIComponent(
      `Imię: ${name}\nAdres e-mail klienta: ${email}\nProdukt: ${product}\nWiadomość: ${message}`
    );

    window.location.href =
      `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}
