/* Progressive enhancement: the content and native accordions work without JS. */
(() => {
  'use strict';
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navegacion');
  const mobile = window.matchMedia('(max-width: 1023px)');

  if (header && toggle && nav) {
    toggle.hidden = false;
    document.documentElement.classList.add('has-menu');

    const setMenu = (open, restoreFocus = false) => {
      const isOpen = Boolean(open && mobile.matches);
      nav.classList.toggle('is-open', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
      if (restoreFocus) toggle.focus();
    };
    setMenu(false);
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
    });
    document.addEventListener('click', event => {
      if (!header.contains(event.target)) setMenu(false);
    });
    nav.addEventListener('click', event => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;
      const wasOpen = toggle.getAttribute('aria-expanded') === 'true';
      setMenu(false);
      if (wasOpen) {
        const target = document.getElementById(link.hash.slice(1));
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus({preventScroll: true});
          target.addEventListener('blur', () => target.removeAttribute('tabindex'), {once: true});
        }
      }
    });
    header.addEventListener('focusout', () => {
      window.setTimeout(() => { if (!header.contains(document.activeElement)) setMenu(false); }, 0);
    });
    const syncNavigation = () => {
      const focusedLink = nav.contains(document.activeElement);
      setMenu(false, mobile.matches && focusedLink);
    };
    if (mobile.addEventListener) mobile.addEventListener('change', syncNavigation);
    else mobile.addListener(syncNavigation);

    const syncHeaderHeight = () => document.documentElement.style.setProperty('--header-height', `${Math.ceil(header.getBoundingClientRect().height)}px`);
    syncHeaderHeight();
    if ('ResizeObserver' in window) new ResizeObserver(syncHeaderHeight).observe(header);
    else window.addEventListener('resize', syncHeaderHeight, {passive:true});
  }

  const contact = document.getElementById('contacto');
  if (contact && 'IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      document.body.classList.toggle('contact-visible', entries[0].isIntersecting);
    }, {threshold:0, rootMargin:'0px 0px -90px 0px'}).observe(contact);
  }
  // Keep the bottom action from covering a keyboard-focused footer link.
  document.addEventListener('focusin', event => {
    document.body.classList.toggle('focus-at-footer', Boolean(event.target.closest('footer')));
  });
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
