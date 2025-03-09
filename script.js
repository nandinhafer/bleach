const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const images = card.querySelectorAll('.image');

  card.addEventListener('mouseenter', () => {
    images[0].classList.add('hidden');
    images[1].classList.remove('hidden');
  });

  card.addEventListener('mouseleave', () => {
    images[0].classList.remove('hidden');
    images[1].classList.add('hidden');
  });
});


function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
