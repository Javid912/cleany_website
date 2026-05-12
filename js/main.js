// main.js — Cleany Vollreinigung

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile hamburger menu ---
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.navbar-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      this.classList.toggle('active');
      navLinks.classList.toggle('open');
      const expanded = this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
      this.setAttribute('aria-expanded', expanded);
    });

    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- Fade-in on scroll (Intersection Observer) ---
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length > 0) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Contact form handling ---
  const form = document.getElementById('contact-form');
  if (form) {
    const successMsg = document.getElementById('form-success');

    function showError(id, message) {
      const el = document.getElementById(id);
      if (el) {
        el.textContent = message;
        el.classList.add('visible');
      }
    }

    function clearErrors() {
      document.querySelectorAll('.form-error').forEach(function (e) {
        e.textContent = '';
        e.classList.remove('visible');
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      const firmenname = document.getElementById('firmenname');
      const ansprechpartner = document.getElementById('ansprechpartner');
      const email = document.getElementById('email');
      const branche = document.getElementById('branche');
      const haeufigkeit = document.getElementById('haeufigkeit');

      let valid = true;

      if (!firmenname.value.trim()) {
        showError('firmenname-error', 'Bitte geben Sie Ihren Firmennamen ein.');
        valid = false;
      }

      if (!ansprechpartner.value.trim()) {
        showError('ansprechpartner-error', 'Bitte geben Sie einen Ansprechpartner an.');
        valid = false;
      }

      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        showError('email-error', 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
        valid = false;
      }

      if (!branche.value) {
        showError('branche-error', 'Bitte wählen Sie eine Branche aus.');
        valid = false;
      }

      if (valid) {
        form.style.display = 'none';
        if (successMsg) {
          successMsg.classList.add('visible');
        }
      }
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navLinks) {
          hamburger.classList.remove('active');
          navLinks.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

});
