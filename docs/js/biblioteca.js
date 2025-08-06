fetch("data/biblioteca.json")
  .then(res => res.json())
  .then(data => renderEstructura(data));
 
function renderEstructura(json) {
  const contenedor = document.getElementById("estructura");
 
  for (const carpeta in json) {
    const folder = document.createElement("div");
    folder.innerHTML = `<strong>📁 ${carpeta}</strong>`;
    contenedor.appendChild(folder);
 
    const ul = document.createElement("ul");
 
    json[carpeta].forEach(archivo => {
      const li = document.createElement("li");
 
      // No se pone href ni download para evitar comportamiento no deseado
      const link = document.createElement("span");
      link.classList.add("archivo-link");
      link.textContent = `📄 ${archivo.nombre}`;
      link.setAttribute("data-url", archivo.url);
      link.setAttribute("data-tipo", archivo.tipo);
      link.setAttribute("data-nombre", archivo.nombre);
link.style.cursor = "pointer";
link.style.color = "#3366cc";
link.style.textDecoration = "underline";
 
      li.appendChild(link);
      ul.appendChild(li);
    });
 
    contenedor.appendChild(ul);
  }
 
  // Escuchar eventos de clic en spans
  contenedor.addEventListener("click", function (e) {
if (e.target.classList.contains("archivo-link")) {
const url = e.target.dataset.url;
const tipo = e.target.dataset.tipo;
const nombre = e.target.dataset.nombre;
 
      const preview = document.getElementById("preview");
      preview.innerHTML = `<h3>${nombre}</h3>`;
 
      if (tipo === "pdf") {
        preview.innerHTML += `
<iframe src="https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true"
                  width="100%" height="100%" frameborder="0"></iframe>`;
      } else {
        preview.innerHTML += `<p>Vista previa no disponible para este tipo de archivo.</p>`;
      }
 
      preview.innerHTML += `<br><a href="${url}" target="_blank" rel="noopener noreferrer">
                              <button>Descargar</button></a>`;
    }
  });
  
const params = new URLSearchParams(window.location.search);
const preloadUrl = params.get("preload");
const encodedPreloadUrl = encodeURI(preloadUrl);
 
if (encodedPreloadUrl) {
  // Esperar un pequeño tiempo para asegurar que todo está renderizado
  setTimeout(() => {
	  
	const links = document.querySelectorAll(".archivo-link");
	let linkToClick = null;
	 
	links.forEach(link => {
	  if (link.dataset.url.includes(encodedPreloadUrl)) {
		linkToClick = link;
	  }
	});	  
	  
    if (linkToClick) {
		linkToClick.click();
    } else {
      //const preview = document.getElementById("preview");
      //preview.innerHTML = `<p>No se encontró el documento especificado en la URL.</p>`;
    }
  }, 100); 
}  
  
  
}