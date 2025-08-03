      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      // Mobile menu toggle
      const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
      const navLinks = document.querySelector(".nav-links");

      mobileMenuBtn.addEventListener("click", () => {
        navLinks.style.display =
          navLinks.style.display === "flex" ? "none" : "flex";
      });

      // Close mobile menu when clicking on a link
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          if (window.innerWidth <= 768) {
            navLinks.style.display = "none";
          }
        });
      });

      // Header effect on scroll
      let lastScrollTop = 0;
      window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
          header.style.backgroundColor = "rgba(255,255,255,0.98)";
          header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.1)";
          header.style.backdropFilter = "blur(15px)";
        } else {
          header.style.backgroundColor = "rgba(255,255,255,0.95)";
          header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
          header.style.backdropFilter = "blur(10px)";
        }

        lastScrollTop = scrollTop;
      });

      // Active link based on scroll position
      const sections = document.querySelectorAll("section");
      const navLinksList = document.querySelectorAll(".nav-links a");

      window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.clientHeight;

          if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
          ) {
            current = section.getAttribute("id");
          }
        });

        navLinksList.forEach((link) => {
          link.classList.remove("active");
          if (current && link.getAttribute("href").includes(current)) {
            link.classList.add("active");
          }
        });
      });

      // Intersection Observer for animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = Math.random() * 0.3 + "s";
            entry.target.classList.add("animate");
          }
        });
      }, observerOptions);

      // Observe all loading elements
      document.querySelectorAll(".loading").forEach((el) => {
        observer.observe(el);
      });

      // Counter animation for stats
      function animateCounter(element, target) {
        let count = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          count += increment;
          if (count >= target) {
            element.textContent = target.toString().includes("%")
              ? target
              : target.toLocaleString() + "+";
            clearInterval(timer);
          } else {
            element.textContent = Math.floor(count).toLocaleString();
          }
        }, 30);
      }

      // Trigger counter animation when stats are visible
      const statsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const statNumbers = entry.target.querySelectorAll(".stat-number");
              statNumbers.forEach((stat) => {
                const text = stat.textContent;
                if (text.includes("%")) {
                  animateCounter(stat, parseInt(text));
                } else {
                  animateCounter(stat, parseInt(text.replace(/[^0-9]/g, "")));
                }
              });
              statsObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      const statsSection = document.querySelector(".stats");
      if (statsSection) {
        statsObserver.observe(statsSection);
      }

      // Add loading states
      window.addEventListener("load", () => {
        document.body.classList.add("loaded");
      });

      // Resize handler for mobile menu
      window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
          navLinks.style.display = "flex";
        } else {
          navLinks.style.display = "none";
        }
      });

      // Add smooth hover effects
      document
        .querySelectorAll(".step, .benefit-card, .testimonial")
        .forEach((card) => {
          card.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-8px) scale(1.02)";
          });

          card.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0) scale(1)";
          });
        });

      // Parallax effect for hero background
      window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector(".hero");
        if (hero) {
          hero.style.transform = "translateY(" + scrolled * 0.5 + "px)";
        }
      });