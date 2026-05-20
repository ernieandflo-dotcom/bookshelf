/* ========================
   NAVIGATION MOBILE
   ======================== */
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

menuToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove('open');
  }
});

/* ========================
   BUY MODAL
   ======================== */
const buyModal = document.getElementById('buy-modal');
const openBuyBtns = document.querySelectorAll('[data-open-buy]');
const closeModalBtn = document.getElementById('modal-close-btn');

openBuyBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    buyModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  buyModal.classList.remove('open');
  document.body.style.overflow = '';
}

closeModalBtn.addEventListener('click', closeModal);

buyModal.addEventListener('click', (e) => {
  if (e.target === buyModal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
