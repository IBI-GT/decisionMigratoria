window.addEventListener("DOMContentLoaded", () => {
  fetch("components/header.html")
    .then(res => res.text())
    .then(html => document.getElementById("header-placeholder").innerHTML = html);
 
  fetch("components/footer.html")
    .then(res => res.text())
    .then(html => document.getElementById("footer-placeholder").innerHTML = html);
});

function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("show");
}
 
// Detectar página activa
window.addEventListener("DOMContentLoaded", () => {
  const current = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});

let prevScrollPos = window.pageYOffset;
 
window.onscroll = () => {
  const topbar = document.querySelector(".topbar");
  const navbar = document.querySelector(".navbar");
  const currentScrollPos = window.pageYOffset;
 
  if (currentScrollPos === 0) {
    // Estamos en la parte superior
topbar.style.top = "0";
    navbar.classList.remove("sticky");
  } else {
    // Haciendo scroll hacia abajo
topbar.style.top = "-40px";
    navbar.classList.add("sticky");
  }
};
 
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("show");
}
 
// Cargar componentes y marcar navegación activa
window.addEventListener("DOMContentLoaded", () => {
  fetch("components/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header-placeholder").innerHTML = html;
 
      // Marcar navegación activa
      const current = window.location.pathname.split("/").pop();
      document.querySelectorAll(".nav-link").forEach(link => {
        if (link.getAttribute("href") === current) {
          link.classList.add("active");
        }
      });
    });
 
  fetch("components/footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footer-placeholder").innerHTML = html;
    });
});