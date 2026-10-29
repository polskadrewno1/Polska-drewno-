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
    const whatsapp = document.getElementById("whatsapp")?.value.trim() || "";
    const quantity = document.getElementById("quantity")?.value || "";
    const unit = document.getElementById("unit")?.value || "";
    const message = document.getElementById("message")?.value.trim() || "";

    if (!name || !email || !whatsapp || !quantity || !unit || !message) {
      alert("Proszę wypełnić wszystkie wymagane pola.");
      return;
    }

    if (Number(quantity) <= 0 || !Number.isFinite(Number(quantity))) {
      alert("Proszę podać prawidłową ilość drewna.");
      return;
    }

    const recipient = "chevelardi@gmail.com";

    const subject = encodeURIComponent(
      "Zapytanie ze strony Polska Drewno"
    );

    const body = encodeURIComponent(
      `Imię klienta: ${name}\n` +
      `Adres e-mail klienta: ${email}\n` +
      `Numer WhatsApp klienta: ${whatsapp}\n` +
      `Wybrany produkt: ${product}\n` +
      `Ilość drewna: ${quantity}\n` +
      `Jednostka: ${unit}\n` +
      `Wiadomość: ${message}`
    );

    window.location.href =
      `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}
