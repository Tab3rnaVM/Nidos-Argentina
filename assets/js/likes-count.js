document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".count");
  const speed = 200; // Velocidad del contador

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-count");
      const count = +counter.innerText.replace(/[+,]/g, "");

      const increment = Math.max(1, Math.floor(target / speed));

      if (count < target) {
        counter.innerText =
          "+" + Math.min(count + increment, target).toLocaleString();
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = "+" + target.toLocaleString();
      }
    };

    updateCount();
  });
});
