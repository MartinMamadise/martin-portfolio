// EmailJS initialisation  
emailjs.init('N0a_bY-78DZN9r6Ja');

// Scroll-to-top button visibility  
var topBtn = document.getElementById('top-btn');

window.addEventListener('scroll', function () {
  if (window.scrollY > 400) {
    topBtn.classList.add('visible');
  } else {
    topBtn.classList.remove('visible');
  }
});

topBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

//  Active nav link on scroll 
var sections = document.querySelectorAll('section[id]');
var navLinks  = document.querySelectorAll('nav ul li a');

function updateActiveNav() {
  var scrollY = window.scrollY + 80;

  sections.forEach(function (section) {
    var top    = section.offsetTop;
    var bottom = top + section.offsetHeight;
    var id     = section.getAttribute('id');

    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Contact form (EmailJS)
var contactForm = document.getElementById('contact-form');
var formStatus  = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    var name    = document.getElementById('f-name').value.trim();
    var email   = document.getElementById('f-email').value.trim();
    var subject = document.getElementById('f-subject').value.trim();
    var message = document.getElementById('f-message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
      formStatus.textContent = 'Please fill in all required fields.';
      formStatus.style.color = '#c0392b';
      return;
    }

    var serviceID  = 'service_5cg0tof';
    var templateID = 'template_e4lfva6';

    var templateParams = {
      from_name:    name,
      from_email:   email,
      subject:      subject,
      message:      message
    };

    try {
      var response = await emailjs.send(serviceID, templateID, templateParams);

      if (response.status === 200) {
        formStatus.textContent = 'Message sent successfully!';
        formStatus.style.color = '#2d8a4e';
        contactForm.reset();
      } else {
        formStatus.textContent = 'Failed to send message.';
        formStatus.style.color = '#c0392b';
      }
    } catch (err) {
      formStatus.textContent = 'Something went wrong. Try again later.';
      formStatus.style.color = '#c0392b';
    }
  });
}