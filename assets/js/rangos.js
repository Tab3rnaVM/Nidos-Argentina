document.addEventListener("DOMContentLoaded", function () {
    const rangosContainer = document.querySelector(".orden-rangos-container");
  
    if (rangosContainer) {
      const depth = "../".repeat(window.location.pathname.split("/").length - 2);
  
      const rangosHTML = `
        <b>Orden de rangos:</b>
        <a class="ordenrangos"><img src="PLACEHOLDER/assets/images/rangos/rango_S.png" alt="Rango S" /></a>
        <a class="ordenrangos"><img src="PLACEHOLDER/assets/images/rangos/rango_A+.png" alt="Rango A+" /></a>
        <a class="ordenrangos"><img src="PLACEHOLDER/assets/images/rangos/rango_A.png" alt="Rango A" /></a>
        <a class="ordenrangos"><img src="PLACEHOLDER/assets/images/rangos/rango_A-.png" alt="Rango A-" /></a>
        <a class="ordenrangos"><img src="PLACEHOLDER/assets/images/rangos/rango_B+.png" alt="Rango B+" /></a>
        <a class="ordenrangos"><img src="PLACEHOLDER/assets/images/rangos/rango_B.png" alt="Rango B" /></a>
        <a class="ordenrangos"><img src="PLACEHOLDER/assets/images/rangos/rango_B-.png" alt="Rango B-" /></a>
        <a class="ordenrangos"><img src="PLACEHOLDER/assets/images/rangos/rango_C+.png" alt="Rango C+" /></a>
        <a class="ordenrangos"><img src="PLACEHOLDER/assets/images/rangos/rango_C.png" alt="Rango C" /></a>
        <a class="ordenrangos"><img src="PLACEHOLDER/assets/images/rangos/rango_C-.png" alt="Rango C-" /></a>
        <a class="ordenrangos"><img src="PLACEHOLDER/assets/images/rangos/rango_D+.png" alt="Rango D+" /></a>
        <a class="ordenrangos"><img src="PLACEHOLDER/assets/images/rangos/rango_D.png" alt="Rango D" /></a>
        <a class="ordenrangos"><img src="PLACEHOLDER/assets/images/rangos/rango_D-.png" alt="Rango D-" /></a>
      `;
  
      rangosContainer.innerHTML = rangosHTML.replace(/PLACEHOLDER/g, depth);
    }
  });
  