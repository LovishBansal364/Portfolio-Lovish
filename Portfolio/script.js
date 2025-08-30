// Navigation 
const navbar = document.getElementById("navigation");
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // adjust scroll amount
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('shadow');
  }
});

// Typewriter
const roles = ["Web Designer", "UI/UX Designer", "Front-End Developer", "AI Prompt Engineer", "Computer Vision"];
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenRoles = 1500;

let currentRoleIndex = 0;
let charIndex = 0;
let typing = true;

const textElement = document.getElementById("typed-text");

function type() {
  const currentRole = roles[currentRoleIndex];

  if (typing) {
    if (charIndex < currentRole.length) {
      textElement.textContent += currentRole.charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      typing = false;
      setTimeout(type, delayBetweenRoles);
    }
  } else {
    if (charIndex > 0) {
      textElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, erasingSpeed);
    } else {
      typing = true;
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      setTimeout(type, typingSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

 const aboutBtn = document.getElementById('aboutBtn');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');
    const progressBars = document.querySelectorAll('.progress-bar');

    // Function to animate progress bars
    function animateProgress() {
        progressBars.forEach(bar => {
            let target = parseInt(bar.getAttribute('data-progress'));
            let current = 0;
            let interval = setInterval(() => {
                if (current >= target) {
                    clearInterval(interval);
                } else {
                    current++;
                    bar.style.width = current + '%';
                    bar.textContent = current + '%';
                }
            }, 15); // Speed of animation
        });
    }

    // Open overlay
    aboutBtn.addEventListener('click', () => {
        overlay.style.display = 'flex';
        animateProgress();
    });

    // Close overlay when clicking close button
    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    // Close overlay when clicking outside the content
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });

// Get elements
const serviceOverlay = document.getElementById("serviceOverlay");
var closeBtn2 = serviceOverlay.querySelector(".close-btn2");
var buttons1 = document.querySelectorAll(".s1_btn button");

// Open overlay on button click
buttons1.forEach(btn => {
  btn.addEventListener("click", () => {
    serviceOverlay.style.display = "flex";
  });
});

// Close overlay on close button
closeBtn2.addEventListener("click", () => {
  serviceOverlay.style.display = "none";
});

// Close overlay when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === serviceOverlay) {
    serviceOverlay.style.display = "none";
  }
});


// Second overlay
const serviceOverlay_f = document.getElementById("serviceOverlay_f");
const closeBtn3 = serviceOverlay_f.querySelector(".close-btn3");
const buttons2 = document.querySelectorAll(".s2_btn button");

// Open overlay
buttons2.forEach(btn => {
  btn.addEventListener("click", () => {
    serviceOverlay_f.style.display = "flex";
  });
});

// Close overlay with cross button
closeBtn3.addEventListener("click", () => {
  serviceOverlay_f.style.display = "none";
});

// Close overlay by clicking outside
window.addEventListener("click", (e) => {
  if (e.target === serviceOverlay_f) {
    serviceOverlay_f.style.display = "none";
  }
});

// Third overlay
const serviceOverlay_c = document.getElementById("serviceOverlay_c");
const closeBtn4 = serviceOverlay_c.querySelector(".close-btn4");
const buttons3 = document.querySelectorAll(".s3_btn button");

// Open overlay
buttons3.forEach(btn => {
  btn.addEventListener("click", () => {
    serviceOverlay_c.style.display = "flex";
  });
});

// Close overlay with cross button
closeBtn4.addEventListener("click", () => {
  serviceOverlay_c.style.display = "none";
});

// Close overlay by clicking outside
window.addEventListener("click", (e) => {
  if (e.target === serviceOverlay_c) {
    serviceOverlay_c.style.display = "none";
  }
});

// Hamburger Menu 
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");  // animate bars
  navLinks.classList.toggle("show");     // toggle menu
});




document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector("#about");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // run once
      }
    });
  }, {
    threshold: 0.4 // trigger when ~30% of section is visible
  });

  if (aboutSection) {
    observer.observe(aboutSection);
  }
});

// Select all elements with animation classes
const animatedElements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-up, .scroll-slide-right, .scroll-slide-left');

// Create intersection observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // add visible class
      observer.unobserve(entry.target);      // run only once
    }
  });
}, { threshold: 0.3 }); // trigger when 20% visible

// Observe each element
animatedElements.forEach(el => observer.observe(el));




document.addEventListener("DOMContentLoaded", () => {
  const serviceCards = document.querySelectorAll(".service1");
  const servicesSection = document.querySelector("#services");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        serviceCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("visible");
          }, index * 300); // delay each card (300ms apart)
        });
        observer.unobserve(entry.target); // trigger once
      }
    });
  }, { threshold: 0.7 });

  if (servicesSection) {
    observer.observe(servicesSection);
  }
});











