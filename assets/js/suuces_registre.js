document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".cochet");

  function animateCards(index) {
    if (index < cards.length) {
      setTimeout(() => {
        cards[index].classList.add("active");
        animateCards(index);
      }, 500);
    };
  };
  animateCards(0);
});
