
// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Basic RSVP click handler
document.querySelectorAll('[data-intent="rsvp"]').forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = 'contact.html';
  });
});
