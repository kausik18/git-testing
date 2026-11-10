// Progressive enhancement only: every page is fully usable without JavaScript.
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // The contact form is a demo and does not send anything.
  const form = document.querySelector('[data-demo-form]');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('.form-status');
      if (status) {
        status.textContent = 'Thanks! This is a demo form, so your message was not sent.';
      }
      form.reset();
    });
  }
});
