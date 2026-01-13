document.addEventListener("DOMContentLoaded", function () {
    // Crea el contenedor para la leyenda legal
    const legalNotice = document.createElement("div");
    legalNotice.className = "legal-notice";
  
    // Agrega el contenido de la leyenda en español
    legalNotice.innerHTML = `
      <p class="text-notice">
        Este sitio web no está afiliado oficialmente con Pokémon GO y está diseñado para un uso similar a cualquier otro sitio informativo como una wiki.<br>
        Pokémon y sus marcas registradas son ©1995-2025 Nintendo, Creatures y GAMEFREAK.<br>
        Todas las imágenes y nombres son propiedad de sus respectivos dueños: Nintendo, Niantic, The Pokémon Company y GAMEFREAK. <br/>
         <a href="/politicas-de-privacidad">Política de Privacidad</a>
      </p>
     
    `;
  
    // Encuentra el footer existente y añade la leyenda después
    const footer = document.querySelector("footer");
    if (footer) {
      footer.insertAdjacentElement("afterend", legalNotice);
    }
  });
  