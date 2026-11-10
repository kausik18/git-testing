// Progressive enhancement only: all content is server-rendered by PHP.
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Demo contact form: nothing is sent.
  const form = document.querySelector('[data-demo-form]');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('.form-status');
      if (status) status.textContent = 'Thanks! This is a demo form, so your message was not sent.';
      form.reset();
    });
  }

  // Demo basket button on product pages.
  const cart = document.querySelector('[data-demo-cart]');
  if (cart) {
    cart.addEventListener('click', () => {
      const status = document.querySelector('.product .form-status');
      if (status) status.textContent = 'This is a demo shop, so nothing was added to a basket.';
    });
  }
});
