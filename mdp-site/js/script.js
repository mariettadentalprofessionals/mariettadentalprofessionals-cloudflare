document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  // Header shadow on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 20px rgba(15,76,74,0.14)';
      } else {
        header.style.boxShadow = '0 2px 14px rgba(15,76,74,0.08)';
      }
    });
  }

  // Note: no scroll-triggered reveal animation is used here. Content
  // is always fully visible by default, so it never depends on a
  // scroll event, an observer, or JS timing to become readable.

  // Contact form validation (static front-end only)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      var fields = form.querySelectorAll('[data-required]');

      fields.forEach(function (field) {
        var group = field.closest('.form-group');
        var value = field.value.trim();
        var ok = true;

        if (!value) {
          ok = false;
        } else if (field.type === 'email') {
          ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        } else if (field.type === 'tel') {
          ok = value.replace(/[^0-9]/g, '').length >= 7;
        }

        if (!ok) {
          valid = false;
          group.classList.add('invalid');
        } else {
          group.classList.remove('invalid');
        }
      });

      var msg = document.getElementById('form-msg');
      if (!valid) {
        msg.textContent = 'Please fill out all required fields correctly before submitting.';
        msg.className = 'form-msg error';
        return;
      }

      msg.textContent = 'Thank you! Your message has been received. Our team will contact you shortly.';
      msg.className = 'form-msg success';
      form.reset();
    });

    form.querySelectorAll('[data-required]').forEach(function (field) {
      field.addEventListener('input', function () {
        field.closest('.form-group').classList.remove('invalid');
      });
    });
  }

  // Set active nav link based on current page
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.main-nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});
