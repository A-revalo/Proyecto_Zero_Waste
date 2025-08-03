# Guía Completa de Estándares de Código - Zero Waste

## Stack Tecnológico Identificado
- **Frontend**: HTML5, CSS3, JavaScript Vanilla
- **Frameworks CSS**: Font Awesome, Google Fonts
- **Metodología**: Responsive Design, Mobile-First

---

## 1. Reglas de Nombres

### 1.1 HTML - Clases e IDs

**✅ Formato Aceptado: kebab-case**
```html
<!-- Clases -->
<div class="hero-content"></div>
<div class="section-title"></div>
<div class="benefits-grid"></div>
<div class="app-container"></div>

<!-- IDs -->
<section id="como-funciona"></section>
<section id="beneficios"></section>
<footer id="contacto"></footer>
```

**❌ Formato NO Aceptado**
```html
<!-- NO usar camelCase -->
<div class="heroContent"></div>
<div class="sectionTitle"></div>

<!-- NO usar snake_case -->
<div class="hero_content"></div>
<div class="section_title"></div>

<!-- NO usar PascalCase -->
<div class="HeroContent"></div>
```

### 1.2 CSS - Selectores y Propiedades

**✅ Formato Aceptado**
```css
/* Clases en kebab-case */
.hero-section { }
.nav-links { }
.auth-buttons { }
.footer-content { }

/* Variables CSS en kebab-case con prefijo */
:root {
  --primary-color: #2c5f41;
  --secondary-color: #4a8b3b;
  --text-color: #333;
  --border-radius: 8px;
}

/* Modificadores BEM */
.btn { }
.btn--outline { }
.btn--accent { }
```

**❌ Formato NO Aceptado**
```css
/* NO usar camelCase */
.heroSection { }
.navLinks { }

/* NO usar snake_case */
.hero_section { }
.nav_links { }
```

### 1.3 JavaScript - Variables y Funciones

**✅ Formato Aceptado: camelCase**
```javascript
// Variables
const heroSection = document.querySelector('.hero');
const navLinks = document.querySelectorAll('.nav-links a');
const authButtons = document.querySelector('.auth-buttons');
const currentUser = null;

// Funciones
function initializeApp() { }
function handleNavigation() { }
function showNotification() { }
function validateForm() { }

// Constantes en UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.zerowaste.com';
const MAX_RETRY_ATTEMPTS = 3;
const DEFAULT_TIMEOUT = 5000;

// Constructores y clases en PascalCase
class WasteManager { }
class NotificationService { }
```

**❌ Formato NO Aceptado**
```javascript
// NO usar snake_case para variables
const hero_section = document.querySelector('.hero');
const nav_links = document.querySelectorAll('.nav-links a');

// NO usar PascalCase para funciones
function InitializeApp() { }
function HandleNavigation() { }
```

---

## 2. Comentarios y Documentación Interna

### 2.1 HTML - Comentarios de Sección

**✅ Formato Aceptado**
```html
<!-- ========================================
     HEADER SECTION
     Contiene navegación principal y logo
========================================= -->
<header>
  <!-- Logo y navegación principal -->
  <nav class="navbar">
    <!-- Enlaces de navegación -->
    <ul class="nav-links">
      <li><a href="#inicio">Inicio</a></li>
    </ul>
  </nav>
</header>

<!-- ========================================
     HERO SECTION
     Sección principal con CTA y estadísticas
========================================= -->
<section id="inicio" class="hero">
  <!-- Contenido principal del hero -->
</section>

<!-- Fin de sección hero -->
```

**❌ Formato NO Aceptado**
```html
<!-- header -->
<header>
  <nav>
    <!--links-->
    <ul>
      <li><a href="#inicio">Inicio</a></li>
    </ul>
  </nav>
</header>
<!-- /header -->
```

### 2.2 CSS - Comentarios Organizacionales

**✅ Formato Aceptado**
```css
/* ================================================
   VARIABLES GLOBALES
   Definición de colores, tipografías y espaciados
================================================ */
:root {
  --primary-color: #2c5f41;
  --secondary-color: #4a8b3b;
}

/* ================================================
   RESET Y BASE STYLES
   Normalización y estilos base
================================================ */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ================================================
   HEADER STYLES
   Estilos para navegación y logo
================================================ */
header {
  /* Posicionamiento fijo para navegación sticky */
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.navbar {
  /* Flexbox para alineación horizontal */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* ================================================
   RESPONSIVE DESIGN
   Media queries para diferentes dispositivos
================================================ */
@media (max-width: 768px) {
  /* Estilos para tablets */
}

@media (max-width: 480px) {
  /* Estilos para móviles */
}
```

### 2.3 JavaScript - Documentación JSDoc

**✅ Formato Aceptado**
```javascript
/**
 * Inicializa la aplicación Zero Waste
 * Configura event listeners y estado inicial
 * @returns {void}
 */
function initializeApp() {
  setupEventListeners();
  loadUserPreferences();
  initializeMap();
}

/**
 * Maneja la navegación suave entre secciones
 * @param {Event} event - Evento de click del enlace
 * @param {string} targetId - ID del elemento destino
 * @returns {void}
 */
function handleSmoothNavigation(event, targetId) {
  event.preventDefault();
  
  const targetElement = document.getElementById(targetId);
  if (!targetElement) {
    console.warn(`Elemento con ID ${targetId} no encontrado`);
    return;
  }
  
  // Scroll suave al elemento
  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

/**
 * Configuración de la aplicación
 * @typedef {Object} AppConfig
 * @property {string} apiUrl - URL base de la API
 * @property {number} timeout - Timeout para requests
 * @property {boolean} debug - Modo debug activado
 */
const appConfig = {
  apiUrl: 'https://api.zerowaste.com',
  timeout: 5000,
  debug: true
};
```

---

## 3. Indentación y Estilo de Código

### 3.1 HTML - Estructura y Formato

**✅ Formato Aceptado**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zero Waste</title>
  <link rel="stylesheet" href="./assets/css/style.css">
</head>
<body>
  <!-- Indentación: 2 espacios -->
  <header>
    <div class="container">
      <nav class="navbar">
        <a href="./Index.html" class="logo">
          <img src="./assets/img/logo.png" alt="Zero Waste Logo">
        </a>
        <ul class="nav-links">
          <li><a href="#inicio" class="active">Inicio</a></li>
          <li><a href="#beneficios">Beneficios</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <section id="inicio" class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Transformando Bogotá, un residuo a la vez</h1>
          <p>
            Un proyecto innovador para gestionar residuos
            en sectores vulnerables.
          </p>
        </div>
      </div>
    </section>
  </main>
</body>
</html>
```

**❌ Formato NO Aceptado**
```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Zero Waste</title>
</head>
<body>
<header>
<div class="container">
<nav class="navbar"><a href="./Index.html" class="logo"><img src="./assets/img/logo.png" alt="Zero Waste Logo"></a>
<ul class="nav-links"><li><a href="#inicio">Inicio</a></li><li><a href="#beneficios">Beneficios</a></li></ul></nav>
</div>
</header>
</body>
</html>
```

### 3.2 CSS - Organización y Formato (basado en el código actual)

**✅ Formato Aceptado**
```css
/* ================================================
   RESET Y VARIABLES GLOBALES
================================================ */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ================================================
   TIPOGRAFÍAS Y COLORES BASE
================================================ */
body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: #333;
  overflow-x: hidden;
}

/* ================================================
   LAYOUT Y CONTENEDORES
================================================ */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* ================================================
   HEADER Y NAVEGACIÓN
================================================ */
header {
  background: #fff;
  padding: 10px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}

.logo img {
  height: 110px;
  width: auto;
  object-fit: contain;
  border-radius: 8px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

/* Efectos de hover con pseudo-elementos */
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #667eea;
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

/* ================================================
   BOTONES Y COMPONENTES INTERACTIVOS
================================================ */
.auth-buttons {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.auth-link {
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.btn {
  display: inline-block;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

/* Estados de botones con especificidad clara */
.btn:not(.btn-outline) {
  background: #92e095;
  color: white;
  box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
}

.btn:not(.btn-outline):hover {
  background: #45a049;
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(76, 175, 80, 0.4);
}

.btn-outline {
  border-color: white;
  color: white;
}

.btn-outline:hover {
  background: white;
  color: #333;
}

.btn-accent {
  background: #ff6b6b;
  color: white;
}

.btn-accent:hover {
  background: #ff5252;
}

/* ================================================
   SECCIONES PRINCIPALES
================================================ */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #667eea 100%);
  background-attachment: fixed;
  color: white;
  padding: 150px 0 100px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  animation: fadeInUp 1s ease;
}

/* ================================================
   GRIDS Y LAYOUTS FLEXIBLES
================================================ */
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  animation: fadeInUp 1s ease 0.6s both;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* ================================================
   TARJETAS Y COMPONENTES
================================================ */
.step {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* Pseudo-elementos para efectos visuales */
.step::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #4caf50, #81c784);
}

.step:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.step-number {
  position: absolute;
  top: -10px;
  right: 20px;
  background: #4caf50;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
}

/* ================================================
   ANIMACIONES Y TRANSICIONES
================================================ */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.loading {
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

/* ================================================
   RESPONSIVE DESIGN
================================================ */
@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero-btns {
    flex-direction: column;
    align-items: center;
  }

  .stats {
    grid-template-columns: 1fr;
  }

  .app-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 120px 0 80px;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .steps {
    grid-template-columns: 1fr;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }
}

/* ================================================
   UTILIDADES GLOBALES
================================================ */
html {
  scroll-behavior: smooth;
}

/* Performance optimizations */
.hero,
.step,
.benefit-card {
  will-change: transform;
}
```

### 3.3 JavaScript - Estilo y Organización

**✅ Formato Aceptado (basado en el código actual)**
```javascript
// Uso de const/let, evitar var
const APP_CONFIG = {
  version: '1.0.0',
  environment: 'production',
  animationDelay: 300,
  scrollOffset: 100
};

let lastScrollTop = 0;
let isLoaded = false;

// Funciones puras cuando sea posible
function formatWasteAmount(amount, unit = 'kg') {
  if (typeof amount !== 'number' || amount < 0) {
    throw new Error('Cantidad debe ser un número positivo');
  }
  
  return `${amount.toFixed(2)} ${unit}`;
}

// Event listeners organizados y documentados
function initializeEventListeners() {
  // Smooth scrolling para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', handleSmoothScroll);
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => toggleMobileMenu(navLinks));
  }

  // Header effects on scroll
  window.addEventListener('scroll', throttle(handleScrollEffects, 16));
  
  // Resize handler
  window.addEventListener('resize', handleResize);
  
  // Load handler
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    isLoaded = true;
  });
}

/**
 * Maneja el scroll suave entre secciones
 * @param {Event} event - Evento de click
 */
function handleSmoothScroll(event) {
  event.preventDefault();
  
  const targetSelector = event.target.getAttribute('href');
  const target = document.querySelector(targetSelector);
  
  if (!target) {
    console.warn(`Elemento ${targetSelector} no encontrado`);
    return;
  }
  
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
  
  // Cerrar menú móvil si está abierto
  if (window.innerWidth <= 768) {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.style.display = 'none';
    }
  }
}

/**
 * Toggle del menú móvil
 * @param {HTMLElement} navLinks - Elemento de navegación
 */
function toggleMobileMenu(navLinks) {
  const isVisible = navLinks.style.display === 'flex';
  navLinks.style.display = isVisible ? 'none' : 'flex';
}

/**
 * Maneja efectos de scroll (header, active links, parallax)
 */
function handleScrollEffects() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  updateHeaderOnScroll(scrollTop);
  updateActiveNavLinks();
  updateParallaxEffect(scrollTop);
  
  lastScrollTop = scrollTop;
}

/**
 * Actualiza el estilo del header basado en scroll
 * @param {number} scrollTop - Posición actual del scroll
 */
function updateHeaderOnScroll(scrollTop) {
  const header = document.querySelector('header');
  if (!header) return;
  
  if (scrollTop > APP_CONFIG.scrollOffset) {
    header.style.backgroundColor = 'rgba(255,255,255,0.98)';
    header.style.boxShadow = '0 5px 25px rgba(0,0,0,0.1)';
    header.style.backdropFilter = 'blur(15px)';
  } else {
    header.style.backgroundColor = 'rgba(255,255,255,0.95)';
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    header.style.backdropFilter = 'blur(10px)';
  }
}

/**
 * Actualiza el enlace activo en la navegación
 */
function updateActiveNavLinks() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - APP_CONFIG.scrollOffset;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (current && link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
}

/**
 * Aplica efecto parallax al hero
 * @param {number} scrollTop - Posición actual del scroll
 */
function updateParallaxEffect(scrollTop) {
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrollTop * 0.5}px)`;
  }
}

/**
 * Función throttle para optimizar performance
 * @param {Function} func - Función a throttle
 * @param {number} limit - Límite en ms
 * @returns {Function}
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Anima contadores con números
 * @param {HTMLElement} element - Elemento a animar
 * @param {number} target - Número objetivo
 */
function animateCounter(element, target) {
  let count = 0;
  const increment = target / 50;
  
  const timer = setInterval(() => {
    count += increment;
    
    if (count >= target) {
      const displayValue = target.toString().includes('%') 
        ? target 
        : target.toLocaleString() + '+';
      element.textContent = displayValue;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(count).toLocaleString();
    }
  }, 30);
}

/**
 * Inicializa observadores de intersección para animaciones
 */
function initializeIntersectionObservers() {
  // Observador general para elementos loading
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const generalObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = Math.random() * 0.3 + 's';
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observar elementos loading
  document.querySelectorAll('.loading').forEach((el) => {
    generalObserver.observe(el);
  });

  // Observador específico para estadísticas
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statNumbers = entry.target.querySelectorAll('.stat-number');
          
          statNumbers.forEach((stat) => {
            const text = stat.textContent;
            const target = text.includes('%') 
              ? parseInt(text) 
              : parseInt(text.replace(/[^0-9]/g, ''));
              
            animateCounter(stat, target);
          });
          
          statsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observar sección de estadísticas
  const statsSection = document.querySelector('.stats');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }
}

/**
 * Maneja el redimensionamiento de ventana
 */
function handleResize() {
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks) return;
  
  if (window.innerWidth > 768) {
    navLinks.style.display = 'flex';
  } else {
    navLinks.style.display = 'none';
  }
}

/**
 * Inicializa efectos de hover suaves
 */
function initializeHoverEffects() {
  const interactiveCards = document.querySelectorAll(
    '.step, .benefit-card, .testimonial'
  );
  
  interactiveCards.forEach((card) => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Inicialización principal
document.addEventListener('DOMContentLoaded', () => {
  initializeEventListeners();
  initializeIntersectionObservers();
  initializeHoverEffects();
  
  console.log('Zero Waste App inicializada correctamente');
});

// Manejo de errores globales
window.addEventListener('error', (event) => {
  console.error('Error en Zero Waste App:', event.error);
});

// Event delegation para mejor performance
document.addEventListener('click', (event) => {
  if (event.target.matches('.eco-button')) {
    handleEcoButtonClick(event);
  }
  
  if (event.target.matches('.waste-item')) {
    handleWasteItemClick(event);
  }
});
```

---

## 4. Ejemplos Específicos del Proyecto

### 4.1 Estructura de Archivos Recomendada

```
zero-waste/
├── index.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── components/
│   │   │   ├── header.css
│   │   │   ├── hero.css
│   │   │   ├── benefits.css
│   │   │   └── footer.css
│   │   └── utils/
│   │       ├── variables.css
│   │       ├── mixins.css
│   │       └── responsive.css
│   ├── js/
│   │   ├── script.js
│   │   ├── components/
│   │   │   ├── navigation.js
│   │   │   ├── map.js
│   │   │   └── notifications.js
│   │   └── utils/
│   │       ├── helpers.js
│   │       └── api.js
│   └── img/
├── controller/
│   └── login.html
└── README.md
```

### 4.2 Nomenclatura Específica del Proyecto

**✅ Nombres Relacionados con Zero Waste**
```html
<!-- Secciones principales -->
<section id="puntos-ecologicos"></section>
<section id="mapa-residuos"></section>
<section id="educacion-ambiental"></section>

<!-- Clases específicas -->
<div class="waste-container"></div>
<div class="recycling-point"></div>
<div class="collection-route"></div>
<div class="eco-tip"></div>
```

```css
/* Variables temáticas */
:root {
  --eco-green: #2c5f41;
  --nature-green: #4a8b3b;
  --waste-gray: #6c757d;
  --clean-white: #ffffff;
  --earth-brown: #8d6e63;
}

/* Clases temáticas */
.eco-button { }
.waste-separator { }
.green-impact { }
.sustainability-metric { }
```

```javascript
// Variables y funciones temáticas
const wasteCategories = ['ordinario', 'aprovechable', 'peligroso'];
const collectionRoutes = [];
const ecoPoints = [];

function calculateEnvironmentalImpact() { }
function scheduleWasteCollection() { }
function findNearestEcoPoint() { }
function trackRecyclingProgress() { }
```

---

## 5. Reglas de Validación y Calidad

### 5.1 HTML - Validación

**✅ Buenas Prácticas**
```html
<!-- Siempre incluir lang -->
<html lang="es">

<!-- Meta tags esenciales -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Zero Waste - Gestión inteligente de residuos en Bogotá">

<!-- Atributos alt en imágenes -->
<img src="./assets/img/logo.png" alt="Logo Zero Waste - Gestión de residuos">

<!-- Estructura semántica -->
<header>
  <nav>
    <main>
      <section>
        <article>
          <aside>
            <footer>
```

### 5.2 CSS - Optimización

**✅ Buenas Prácticas**
```css
/* Variables CSS para consistencia */
:root {
  --primary-color: #2c5f41;
  --font-family: 'Poppins', sans-serif;
  --border-radius: 8px;
  --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Mobile-first approach */
.hero {
  padding: 60px 0; /* Móvil por defecto */
}

@media (min-width: 768px) {
  .hero {
    padding: 120px 0; /* Desktop */
  }
}

/* Prefijos para compatibilidad */
.gradient-bg {
  background: -webkit-linear-gradient(135deg, #2c5f41 0%, #4a8b3b 100%);
  background: linear-gradient(135deg, #2c5f41 0%, #4a8b3b 100%);
}
```

---

## 6. Patrones Identificados en el Código Actual

### 6.1 Estructura CSS Actual

**✅ Patrones Positivos Identificados**
```css
/* Uso consistente de box-shadow */
header {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.step {
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.08);
}

.step:hover {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

/* Uso consistente de border-radius */
.logo img {
  border-radius: 8px;
}

.auth-buttons {
  border-radius: 25px;
}

.btn {
  border-radius: 50px;
}

.step {
  border-radius: 20px;
}

/* Paleta de colores consistente */
:root {
  --primary-blue: #667eea;
  --success-green: #4caf50;
  --light-green: #92e095;
  --dark-green: #2d5a27;
  --text-gray: #333;
  --light-gray: #f8f9fa;
  --border-gray: rgba(0, 0, 0, 0.1);
}

/* Transiciones uniformes */
.nav-links a,
.btn,
.step,
.benefit-card {
  transition: all 0.3s ease;
}
```

**❌ Áreas de Mejora Identificadas**
```css
/* PROBLEMA: Duplicación de estilos */
/* En lugar de repetir gradientes: */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #667eea 100%);
}

.app-preview {
  background: linear-gradient(135deg, #667eea 0%, #667eea 100%);
}

.cta {
  background: linear-gradient(135deg, #667eea 0%, #667eea 100%);
}

/* MEJOR: Usar clase utilitaria */
.gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #667eea 100%);
}

/* PROBLEMA: Valores hardcodeados */
.hero {
  padding: 150px 0 100px; /* Valores específicos */
}

/* MEJOR: Usar variables */
:root {
  --section-padding-large: 150px 0 100px;
  --section-padding-medium: 100px 0;
  --section-padding-small: 60px 0;
}
```

### 6.2 Patrones JavaScript Actuales

**✅ Funcionalidades Bien Implementadas**
```javascript
// Smooth scrolling bien estructurado
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Uso efectivo de Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = Math.random() * 0.3 + 's';
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

// Animación de contadores bien optimizada
function animateCounter(element, target) {
  let count = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    count += increment;
    if (count >= target) {
      element.textContent = target.toString().includes('%')
        ? target
        : target.toLocaleString() + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(count).toLocaleString();
    }
  }, 30);
}
```

**❌ Áreas de Mejora Identificadas**
```javascript
// PROBLEMA: Event listeners no organizados
// El código actual tiene listeners dispersos sin estructura clara

// PROBLEMA: Falta de manejo de errores
const target = document.querySelector(this.getAttribute('href'));
// Sin verificación de null antes de usar

// PROBLEMA: Variables globales sin namespace
let lastScrollTop = 0; // Podría causar conflictos

// MEJOR: Namespace o clase contenedora
const ZeroWasteApp = {
  state: {
    lastScrollTop: 0,
    isMenuOpen: false,
    isLoaded: false
  },
  
  init() {
    this.bindEvents();
    this.initObservers();
  },
  
  bindEvents() {
    // Organizar todos los event listeners aquí
  }
};
```

### 6.3 Convenciones de Nomenclatura Actuales

**✅ Patrones Consistentes Identificados**
```html
<!-- Nomenclatura de clases consistente -->
<div class="hero-content"></div>
<div class="section-title"></div>
<div class="benefits-grid"></div>
<div class="app-container"></div>
<div class="footer-content"></div>

<!-- IDs semánticos -->
<section id="como-funciona"></section>
<section id="beneficios"></section>
<section id="testimonios"></section>
```

```css
/* Clases de componentes bien estructuradas */
.step { }
.step-number { }
.step-icon { }

.benefit-card { }
.testimonial { }
.testimonial-text { }
.testimonial-author { }

.app-btn { }
.app-btn-text { }

.social-links { }
.footer-links { }
```

### 6.4 Recomendaciones Específicas

**Para CSS:**
```css
/* Implementar sistema de variables más completo */
:root {
  /* Colores */
  --color-primary: #667eea;
  --color-secondary: #4caf50;
  --color-accent: #92e095;
  --color-text: #333;
  --color-text-light: #666;
  --color-white: #ffffff;
  --color-gray-light: #f8f9fa;
  
  /* Espaciado */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 6rem;
  
  /* Tipografía */
  --font-primary: 'Poppins', sans-serif;
  --font-secondary: 'Roboto', sans-serif;
  --font-size-xs: 0.8rem;
  --font-size-sm: 0.9rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.1rem;
  --font-size-xl: 1.2rem;
  --font-size-2xl: 2rem;
  --font-size-3xl: 2.5rem;
  
  /* Sombras */
  --shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 5px 30px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.15);
  
  /* Transiciones */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

**Para JavaScript:**
```javascript
// Estructura modular recomendada
const ZeroWasteApp = {
  // Configuración
  config: {
    scrollOffset: 100,
    animationDuration: 300,
    breakpoints: {
      mobile: 480,
      tablet: 768,
      desktop: 1024
    }
  },
  
  // Estado de la aplicación
  state: {
    lastScrollTop: 0,
    currentSection: '',
    isMenuOpen: false,
    isLoaded: false
  },
  
  // Elementos DOM cacheados
  elements: {
    header: null,
    navLinks: null,
    mobileMenuBtn: null,
    sections: null
  },
  
  // Inicialización
  init() {
    this.cacheElements();
    this.bindEvents();
    this.initObservers();
    this.initAnimations();
    console.log('Zero Waste App inicializada');
  },
  
  // Cachear elementos DOM
  cacheElements() {
    this.elements = {
      header: document.querySelector('header'),
      navLinks: document.querySelector('.nav-links'),
      mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
      sections: document.querySelectorAll('section'),
      hero: document.querySelector('.hero'),
      statsSection: document.querySelector('.stats')
    };
  },
  
  // Event listeners centralizados
  bindEvents() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', this.handleSmoothScroll.bind(this));
    });
    
    // Mobile menu
    if (this.elements.mobileMenuBtn) {
      this.elements.mobileMenuBtn.addEventListener('click', this.toggleMobileMenu.bind(this));
    }
    
    // Scroll events
    window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16));
    window.addEventListener('resize', this.handleResize.bind(this));
    window.addEventListener('load', this.handleLoad.bind(this));
  },
  
  // Métodos de utilidad
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  ZeroWasteApp.init();
});
```

### 6.5 Optimizaciones de Performance Identificadas

**✅ Técnicas Actuales que Funcionan Bien**
```javascript
// Throttling para eventos de scroll
window.addEventListener('scroll', throttle(handleScrollEffects, 16));

// Intersection Observer para animaciones
const observer = new IntersectionObserver((entries) => {
  // Código eficiente para animaciones
}, observerOptions);

// Cachear elementos DOM una sola vez
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');
```

**✅ Mejoras Adicionales Recomendadas**
```javascript
// Debounce para resize events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

window.addEventListener('resize', debounce(handleResize, 250));

// Lazy loading para imágenes
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      imageObserver.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});

// Preload critical resources
function preloadCriticalResources() {
  const criticalImages = [
    './assets/img/logo.png',
    './assets/img/hero-bg.jpg'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}
```

---

## 7. Accesibilidad - Mejoras Necesarias

### 7.1 Problemas Identificados en el Código Actual

**❌ Problemas Identificados**
```html
<!-- PROBLEMA: Falta de labels en navegación móvil -->
<div class="mobile-menu-btn">☰</div>

<!-- MEJOR -->
<button class="mobile-menu-btn" aria-label="Abrir menú de navegación" aria-expanded="false">
  <span aria-hidden="true">☰</span>
</button>

<!-- PROBLEMA: Enlaces sin contexto -->
<a href="#" class="btn">Descargar la App</a>

<!-- MEJOR -->
<a href="#" class="btn" aria-describedby="app-description">
  Descargar la App
</a>
<div id="app-description" class="sr-only">
  Descarga la aplicación Zero Waste para gestionar residuos
</div>
```

### 7.2 Mejoras de Accesibilidad Recomendadas

**✅ CSS para Accesibilidad**
```css
/* Clase para lectores de pantalla */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Focus visible mejorado */
.nav-links a:focus-visible,
.btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Indicadores de estado más claros */
.nav-links a.active {
  font-weight: 700;
  color: var(--color-primary);
}

.nav-links a.active::before {
  content: "Página actual: ";
  position: absolute;
  left: -9999px;
}

/* Respeto por preferencias de movimiento */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  html {
    scroll-behavior: auto;
  }
}
```

---

## 8. SEO y Meta Tags - Mejoras Sugeridas

### 8.1 Estructura HTML Semántica Mejorada

**✅ HTML Optimizado para SEO**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Meta tags SEO -->
  <title>Zero Waste - Gestión Inteligente de Residuos en Bogotá</title>
  <meta name="description" content="Transformamos la gestión de residuos en sectores vulnerables de Bogotá mediante tecnología, infraestructura y participación comunitaria.">
  <meta name="keywords" content="zero waste, gestión residuos, Bogotá, reciclaje, medio ambiente, sostenibilidad">
  
  <!-- Open Graph para redes sociales -->
  <meta property="og:title" content="Zero Waste - Gestión Inteligente de Residuos">
  <meta property="og:description" content="Un proyecto innovador para gestionar residuos en sectores vulnerables de Bogotá">
  <meta property="og:image" content="./assets/img/og-image.jpg">
  <meta property="og:url" content="https://zerowaste-bogota.com">
  <meta property="og:type" content="website">
  
  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Zero Waste - Gestión Inteligente de Residuos">
  <meta name="twitter:description" content="Transformando Bogotá, un residuo a la vez">
  <meta name="twitter:image" content="./assets/img/twitter-image.jpg">
  
  <!-- Favicon y iconos -->
  <link rel="icon" href="./assets/img/favicon.ico" type="image/x-icon">
  <link rel="apple-touch-icon" href="./assets/img/apple-touch-icon.png">
  
  <!-- Preconnect para optimización -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://cdnjs.cloudflare.com">
</head>
```

---

## 9. Checklist de Calidad de Código

### 9.1 HTML - Checklist de Validación

**✅ Estructura y Semántica**
- [ ] Uso correcto de elementos semánticos (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`)
- [ ] Atributo `lang` en elemento `<html>`
- [ ] Meta tags esenciales (charset, viewport, description)
- [ ] Atributos `alt` en todas las imágenes
- [ ] Estructura de headings jerárquica (h1 → h2 → h3)
- [ ] Links accesibles con texto descriptivo
- [ ] Formularios con labels apropiados

**✅ Accesibilidad**
- [ ] Contraste de colores adecuado (mínimo 4.5:1)
- [ ] Navegación por teclado funcional
- [ ] Atributos ARIA donde sea necesario
- [ ] Texto alternativo descriptivo en imágenes
- [ ] Focus visible en elementos interactivos

### 9.2 CSS - Checklist de Optimización

**✅ Organización y Estructura**
- [ ] Uso de variables CSS para valores repetidos
- [ ] Comentarios organizacionales claros
- [ ] Agrupación lógica de estilos relacionados
- [ ] Mobile-first approach en media queries
- [ ] Uso eficiente de selectores (evitar sobrespecificidad)

**✅ Performance**
- [ ] Minimización de reflows y repaints
- [ ] Uso de `will-change` en elementos animados
- [ ] Optimización de gradientes y sombras
- [ ] Carga eficiente de web fonts
- [ ] Uso de `transform` y `opacity` para animaciones

### 9.3 JavaScript - Checklist de Mejores Prácticas

**✅ Código Limpio**
- [ ] Uso de `const` y `let` en lugar de `var`
- [ ] Funciones con responsabilidad única
- [ ] Nombres descriptivos para variables y funciones
- [ ] Manejo apropiado de errores con try/catch
- [ ] Documentación JSDoc en funciones complejas

**✅ Performance**
- [ ] Event delegation donde sea apropiado
- [ ] Throttling/debouncing en eventos frecuentes
- [ ] Cacheo de elementos DOM
- [ ] Lazy loading para recursos no críticos
- [ ] Minimización de manipulaciones DOM

---

## 10. Herramientas de Desarrollo Recomendadas

### 10.1 Configuración de Prettier (.prettierrc)
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "htmlWhitespaceSensitivity": "css",
  "endOfLine": "lf"
}
```

### 10.2 Configuración de ESLint (.eslintrc.json)
```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "no-console": "warn",
    "no-unused-vars": "error",
    "prefer-const": "error",
    "no-var": "error",
    "eqeqeq": "error",
    "curly": "error",
    "no-multi-spaces": "error",
    "no-trailing-spaces": "error"
  }
}
```

### 10.3 Scripts de Desarrollo (package.json)
```json
{
  "scripts": {
    "dev": "live-server --host=localhost --port=3000 --open=/",
    "lint:js": "eslint assets/js/**/*.js",
    "lint:css": "stylelint assets/css/**/*.css",
    "format": "prettier --write \"**/*.{html,css,js}\"",
    "validate:html": "html-validate *.html",
    "optimize:images": "imagemin assets/img/*.{jpg,png,svg} --out-dir=dist/img",
    "build": "npm run lint:js && npm run lint:css && npm run format"
  }
}
```

### 10.4 Extensiones VSCode Recomendadas
```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "stylelint.vscode-stylelint",
    "bradlc.vscode-tailwindcss",
    "formulahendry.auto-rename-tag",
    "ritwickdey.liveserver",
    "ms-vscode.vscode-typescript-next",
    "christian-kohler.path-intellisense"
  ]
}
```

---

## 11. Implementación Gradual

### 11.1 Fase 1: Estándares Básicos (Semana 1-2)
- [ ] Implementar sistema de variables CSS
- [ ] Refactorizar comentarios según estándares
- [ ] Aplicar nomenclatura consistente
- [ ] Configurar Prettier y ESLint

### 11.2 Fase 2: Optimización (Semana 3-4)
- [ ] Refactorizar JavaScript a estructura modular
- [ ] Implementar mejoras de performance
- [ ] Añadir lazy loading de imágenes
- [ ] Optimizar animaciones

### 11.3 Fase 3: Accesibilidad y SEO (Semana 5-6)
- [ ] Implementar mejoras de accesibilidad
- [ ] Añadir meta tags completos
- [ ] Optimizar para motores de búsqueda
- [ ] Pruebas de validación

### 11.4 Fase 4: Documentación y Testing (Semana 7-8)
- [ ] Completar documentación técnica
- [ ] Implementar tests básicos
- [ ] Configurar CI/CD básico
- [ ] Capacitación del equipo

---
