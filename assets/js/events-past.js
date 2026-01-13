document.addEventListener("DOMContentLoaded", () => {
  const eventos = document.querySelectorAll(".itemdate");
  const now = new Date();

  eventos.forEach((evento) => {
    const fechaInicio = new Date(evento.getAttribute("data-inicio"));
    const fechaFin = new Date(evento.getAttribute("data-fin"));

    if (now >= fechaInicio && now <= fechaFin) {
      evento.classList.add("date-active");
    }

    if (fechaFin < now) {
      evento.classList.add("date-past");
    }
  });
});
