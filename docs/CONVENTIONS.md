# Convenciones del proyecto

Este sitio se mantiene como semiestatico: paginas HTML por seccion, CSS compartido y JavaScript por feature.

## CSS

- `assets/css/templatemo-cyborg-gaming.css` queda como base historica/template.
- `assets/css/nidos-system.css` contiene tokens, utilidades, ajustes visuales y mejoras UX nuevas.
- Cualquier pagina que use el template debe cargar `nidos-system.css` despues de `templatemo-cyborg-gaming.css`.
- Los nuevos estilos compartidos deben ir primero en `nidos-system.css`.
- Solo agregar estilos al template base si se esta corrigiendo una regla existente o una dependencia del template.

## HTML

- Cada pagina indexable debe tener un solo `h1`.
- Si el titulo visible ya esta cubierto por el diseno, usar `<h1 class="sr-only">...</h1>`.
- Cada pagina indexable debe tener canonical absoluto.
- Evitar estilos inline nuevos. Si una regla se repite, moverla a CSS.
- Mantener scripts propios con `defer` salvo que una dependencia obligue a otra cosa.

## JavaScript

- `assets/js/menu.js` es el unico responsable del header, menu mobile y dropdown principal.
- `assets/js/footer.js` es el unico responsable del footer comun.
- Los scripts de feature deben vivir cerca del dominio que renderizan: `assets/js/guias`, `assets/js/temporada` o `assets/js/*.js`.
- Para nuevas features, separar datos de renderizado cuando el archivo empiece a mezclar listas grandes, templates HTML y eventos.
- No cargar librerias globales en HTML si la pagina no las usa.

## Assets

- No borrar assets pesados sin verificar uso.
- Para imagenes nuevas, preferir WebP/AVIF cuando no se requiera transparencia PNG.
- El favicon usado por HTML es `assets/images/logo/favicon-64.png`.
- `assets/images/logo/favicon.png` se conserva como imagen social/source historica.

## SEO y accesibilidad

- Mantener `sitemap.xml` actualizado al agregar o retirar paginas.
- Los controles interactivos deben ser `button` cuando no navegan.
- Agregar `aria-label` a botones icon-only.
- Cualquier elemento clickeable no nativo debe tener soporte de teclado o convertirse a button.
