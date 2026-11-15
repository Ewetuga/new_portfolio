/* ============================================
   CONFIGURATION — Edit these values
   ============================================ */
/* ============================================
   CONFIGURATION — Edit these values
   ============================================ */
const CONFIG = {
  projects: [
    {
      title: 'PrepUp',
      description: 'Examination preparation and CBT practice platform designed for JAMB, WAEC, and other examinations with timed practice, performance tracking, and learning analytics.',
      stack: ['React.js', 'PHP', 'MySQL'],
      category: 'saas',
      liveUrl: 'https://prepup.com.ng',
      githubUrl: 'https://github.com/Ewetuga'
    },
    {
      title: 'MerryJay Hotel & Event Place',
      description: 'Modern hotel and event-place website showcasing accommodation options, event facilities, room pricing, and WhatsApp enquiries.',
      stack: ['HTML5', 'CSS3', 'JavaScript' , 'PHP','MySQL'],
      category: 'web',
      liveUrl: 'https://merryjay.ng',
      githubUrl: 'https://github.com/Ewetuga'
    },
    {
      title: 'Camspaced',
      description: 'A modern digital platform built with clean, responsive design and smooth interactions to deliver a premium user experience.',
      stack: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'web',
      liveUrl: 'https://calmspaced.netlify.app',
      githubUrl: 'https://github.com/Ewetuga'
    },
   
    {
      title: 'Omizzy Official',
      description: 'A professional brand website with a clean layout, smooth navigation, and a strong visual identity built for impact.',
      stack: ['HTML5', 'CSS3', 'JavaScript','PHP','MySQL'],
      category: 'web',
      liveUrl: 'https://omizzyofficial.com',
      githubUrl: 'https://github.com/Ewetuga'
    },
    {
      title: 'Kogbaagidi',
      description: 'Modern foodstuff e-commerce frontend featuring product browsing, shopping cart functionality, wishlist, and invoice generation.',
      stack: ['React.js', 'JavaScript', 'CSS3'],
      category: 'ecommerce',
      liveUrl: 'https://kogba.netlify.app',
      githubUrl: 'https://github.com/Ewetuga'
    }
  ],
  contactEmail: 'tobilobamary9@gmail.com',
  contactEndpoint: ''
};
/* ============================================
   PRELOADER
   ============================================ */
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(function() {
      preloader.classList.add('hide');
    }, 600);
  }
});

/* ============================================
   CUSTOM CURSOR
   ============================================ */
(function initCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;
  if (window.matchMedia('(pointer: coarse)').matches) {
    dot.style.display = 'none';
    ring.style.display = 'none';
    return;
  }
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = (mouseX - 4) + 'px';
    dot.style.top = (mouseY - 4) + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = (ringX - 16) + 'px';
    ring.style.top = (ringY - 16) + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover effect on interactive elements
  const interactives = document.querySelectorAll('a, button, .skill-tag, .project-card, .service-card');
  interactives.forEach(function(el) {
    el.addEventListener('mouseenter', function() {
      ring.style.width = '48px';
      ring.style.height = '48px';
      ring.style.background = 'rgba(0, 224, 255, 0.1)';
    });
    el.addEventListener('mouseleave', function() {
      ring.style.width = '32px';
      ring.style.height = '32px';
      ring.style.background = 'transparent';
    });
  });
})();

/* ============================================
   NAVIGATION
   ============================================ */
(function initNav() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const links = navLinks ? navLinks.querySelectorAll('a') : [];

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  links.forEach(function(link) {
    link.addEventListener('click', function() {
      if (hamburger && navLinks) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(function(section) {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    links.forEach(function(link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
})();

/* ============================================
   THREE.JS HERO SCENE
   ============================================ */
(function initThree() {
  const canvas = document.getElementById('three-canvas');
  if (!canvas || typeof THREE === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lights
  const ambientLight = new THREE.AmbientLight(0x404060, 0.8);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0x00e0ff, 1.5, 20);
  pointLight1.position.set(3, 3, 5);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xa855f7, 1, 20);
  pointLight2.position.set(-3, -2, 4);
  scene.add(pointLight2);

  // Main object: wireframe icosahedron with inner glow
  const geometry = new THREE.IcosahedronGeometry(1.6, 1);
  const material = new THREE.MeshStandardMaterial({
    color: 0x00e0ff,
    wireframe: true,
    emissive: 0x00e0ff,
    emissiveIntensity: 0.3,
    transparent: true,
    opacity: 0.6
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Inner solid sphere
  const innerGeo = new THREE.IcosahedronGeometry(1.1, 0);
  const innerMat = new THREE.MeshStandardMaterial({
    color: 0x3b82f6,
    emissive: 0x3b82f6,
    emissiveIntensity: 0.5,
    flatShading: true,
    transparent: true,
    opacity: 0.15
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  scene.add(innerMesh);

  // Particles
  const particleCount = 600;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20;
    positions[i + 1] = (Math.random() - 0.5) * 20;
    positions[i + 2] = (Math.random() - 0.5) * 20;
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0x00e0ff,
    size: 0.03,
    transparent: true,
    opacity: 0.6
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // Mouse interaction
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', function(e) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Scroll interaction
  let scrollY = 0;
  window.addEventListener('scroll', function() {
    scrollY = window.scrollY;
  });

  // Resize
  window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Animation loop
  let time = 0;
  function animate() {
    requestAnimationFrame(animate);
    time += 0.005;

    mesh.rotation.x = time * 0.3 + mouseY * 0.2;
    mesh.rotation.y = time * 0.4 + mouseX * 0.3;

    innerMesh.rotation.x = -time * 0.2;
    innerMesh.rotation.y = -time * 0.25;

    particles.rotation.y = time * 0.05;

    // Scroll transformation: move object back and fade
    const scrollFactor = Math.min(scrollY / 600, 1);
    mesh.position.y = scrollFactor * 1.5;
    mesh.position.z = -scrollFactor * 2;
    innerMesh.position.copy(mesh.position);
    particles.position.y = scrollFactor * 1;

    renderer.render(scene, camera);
  }
  animate();
})();

/* ============================================
   PROJECTS RENDERING & FILTERING
   ============================================ */
(function initProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  function isPlaceholder(url) {
    return !url || url === '' || url.includes('example.com') || url.includes('yourusername');
  }

  function renderProjects(filter) {
    grid.innerHTML = '';
    const filtered = filter === 'all'
      ? CONFIG.projects
      : CONFIG.projects.filter(function(p) { return p.category === filter; });

    filtered.forEach(function(project, index) {
      const card = document.createElement('article');
      card.className = 'project-card reveal';
      card.style.transitionDelay = (index * 0.08) + 's';

      const liveDisabled = isPlaceholder(project.liveUrl);
      const githubDisabled = isPlaceholder(project.githubUrl);

      card.innerHTML =
        '<div class="project-image"><i class="fas fa-image"></i></div>' +
        '<div class="project-body">' +
          '<h3>' + project.title + '</h3>' +
          '<p>' + project.description + '</p>' +
          '<div class="project-tags">' +
            project.stack.map(function(t) { return '<span>' + t + '</span>'; }).join('') +
          '</div>' +
          '<div class="project-links">' +
            '<a class="btn btn-primary ' + (liveDisabled ? 'btn-disabled' : '') + '" ' +
              (liveDisabled ? 'aria-disabled="true" tabindex="-1"' : 'href="' + project.liveUrl + '" target="_blank" rel="noopener"') + '>' +
              '<i class="fas fa-external-link-alt"></i> Live Demo' +
            '</a>' +
            '<a class="btn btn-outline ' + (githubDisabled ? 'btn-disabled' : '') + '" ' +
              (githubDisabled ? 'aria-disabled="true" tabindex="-1"' : 'href="' + project.githubUrl + '" target="_blank" rel="noopener"') + '>' +
              '<i class="fab fa-github"></i> GitHub' +
            '</a>' +
          '</div>' +
        '</div>';

      grid.appendChild(card);
    });

    // Re-observe new reveal elements
    observeReveal();
  }

  // Filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });

  renderProjects('all');
})();

/* ============================================
   SCROLL REVEAL
   ============================================ */
function observeReveal() {
  const revealEls = document.querySelectorAll('.reveal:not(.visible), .timeline-item:not(.reveal)');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealEls.forEach(function(el) { el.classList.add('visible', 'reveal'); });
    return;
  }
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(function(el) { observer.observe(el); });
}

/* ============================================
   CONTACT FORM
   ============================================ */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formNote = document.getElementById('formNote');

    let valid = true;

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formNote.textContent = '';

    if (!name.value.trim()) {
      nameError.textContent = 'Please enter your name.';
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      emailError.textContent = 'Please enter your email.';
      valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      valid = false;
    }

    if (!message.value.trim()) {
      messageError.textContent = 'Please enter a message.';
      valid = false;
    }

    if (!valid) return;

    if (CONFIG.contactEndpoint) {
      // Send via configured endpoint
      fetch(CONFIG.contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.value.trim(),
          email: email.value.trim(),
          message: message.value.trim()
        })
      })
      .then(function(res) {
        if (res.ok) {
          formNote.textContent = 'Message sent successfully! I will get back to you soon.';
          formNote.style.color = '#00e0ff';
          form.reset();
        } else {
          throw new Error('Network error');
        }
      })
      .catch(function() {
        formNote.textContent = 'Could not send message. Please email me directly at ' + CONFIG.contactEmail;
        formNote.style.color = '#ff6b6b';
      });
    } else {
      // Mailto fallback
      const subject = encodeURIComponent('Portfolio Contact from ' + name.value.trim());
      const body = encodeURIComponent(
        'Name: ' + name.value.trim() + '\n' +
        'Email: ' + email.value.trim() + '\n\n' +
        message.value.trim()
      );
      window.location.href = 'mailto:' + CONFIG.contactEmail + '?subject=' + subject + '&body=' + body;
      formNote.textContent = 'Your email client should open. If not, email me directly at ' + CONFIG.contactEmail;
      formNote.style.color = '#a0a8b8';
    }
  });
})();

/* ============================================
   BACK TO TOP
   ============================================ */
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 600) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ============================================
   INIT REVEAL OBSERVER
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
  observeReveal();
});

/* ============================================
   CONTACT 3D ORB
   ============================================ */
(function initContactOrb() {
  const canvas = document.getElementById('contact-canvas');
  if (!canvas || typeof THREE === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const wrap = canvas.parentElement;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  camera.position.z = 4.5;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  function setSize() {
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    if (w === 0 || h === 0) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  setSize();
  window.addEventListener('resize', setSize);

  // Lights
  scene.add(new THREE.AmbientLight(0x404060, 1.2));

  const keyLight = new THREE.PointLight(0x00e0ff, 2.2, 20);
  keyLight.position.set(3, 3, 5);
  scene.add(keyLight);

  const fillLight = new THREE.PointLight(0xa855f7, 1.6, 20);
  fillLight.position.set(-4, -2, 3);
  scene.add(fillLight);

  const rimLight = new THREE.PointLight(0xff7a2f, 1.0, 20);
  rimLight.position.set(0, -4, -3);
  scene.add(rimLight);

  // Group so everything rotates together
  const group = new THREE.Group();
  scene.add(group);

  // Outer wireframe icosahedron
  const outerGeo = new THREE.IcosahedronGeometry(1.7, 1);
  const outerMat = new THREE.MeshStandardMaterial({
    color: 0x00e0ff,
    wireframe: true,
    emissive: 0x00e0ff,
    emissiveIntensity: 0.35,
    transparent: true,
    opacity: 0.55
  });
  const outerMesh = new THREE.Mesh(outerGeo, outerMat);
  group.add(outerMesh);

  // Mid solid icosahedron with flat shading
  const midGeo = new THREE.IcosahedronGeometry(1.25, 0);
  const midMat = new THREE.MeshStandardMaterial({
    color: 0x3b82f6,
    emissive: 0x3b82f6,
    emissiveIntensity: 0.45,
    flatShading: true,
    transparent: true,
    opacity: 0.18
  });
  const midMesh = new THREE.Mesh(midGeo, midMat);
  group.add(midMesh);

  // Inner glowing core
  const coreGeo = new THREE.IcosahedronGeometry(0.55, 1);
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0x00e0ff,
    emissiveIntensity: 1.4,
    flatShading: true
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  group.add(coreMesh);

  // Orbiting particles ring
  const particleCount = 220;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const radius = 2.2 + Math.random() * 0.8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0x00e0ff,
    size: 0.045,
    transparent: true,
    opacity: 0.75,
    depthWrite: false
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  group.add(particles);

  // Mouse interaction — smooth lerp toward target rotation
  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };

  wrap.addEventListener('mousemove', function(e) {
    const rect = wrap.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    target.y = (nx - 0.5) * Math.PI * 1.2;
    target.x = (ny - 0.5) * Math.PI * 0.9;
  });

  wrap.addEventListener('mouseleave', function() {
    target.x = 0;
    target.y = 0;
  });

  // Touch support
  wrap.addEventListener('touchmove', function(e) {
    if (!e.touches[0]) return;
    const rect = wrap.getBoundingClientRect();
    const nx = (e.touches[0].clientX - rect.left) / rect.width;
    const ny = (e.touches[0].clientY - rect.top) / rect.height;
    target.y = (nx - 0.5) * Math.PI * 1.2;
    target.x = (ny - 0.5) * Math.PI * 0.9;
  }, { passive: true });

  wrap.addEventListener('touchend', function() {
    target.x = 0;
    target.y = 0;
  });

  // Animation loop
  let time = 0;
  function animate() {
    requestAnimationFrame(animate);
    time += 0.006;

    // Smooth follow
    current.x += (target.x - current.x) * 0.08;
    current.y += (target.y - current.y) * 0.08;

    group.rotation.x = current.x + Math.sin(time * 0.6) * 0.15;
    group.rotation.y = current.y + time * 0.35;

    // Independent spin on inner layers for depth
    midMesh.rotation.x = -time * 0.45;
    midMesh.rotation.z = time * 0.3;
    coreMesh.rotation.x = time * 0.9;
    coreMesh.rotation.y = time * 1.1;

    particles.rotation.y = -time * 0.25;
    particles.rotation.x = time * 0.12;

    // Subtle breathing on core
    const breath = 1 + Math.sin(time * 2.2) * 0.06;
    coreMesh.scale.setScalar(breath);

    // Lights orbit for dynamic shading
    keyLight.position.x = Math.cos(time * 0.7) * 4;
    keyLight.position.y = Math.sin(time * 0.7) * 4;
    fillLight.position.x = Math.cos(-time * 0.5) * 4;
    fillLight.position.y = Math.sin(-time * 0.5) * 4;

    renderer.render(scene, camera);
  }
  animate();

  // Pause rendering when off-screen for performance
  const section = document.getElementById('contact');
  const visibilityObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        renderer.setAnimationLoop(null);
        animate();
      }
    });
  }, { threshold: 0.01 });
  if (section) visibilityObserver.observe(section);
})();

/* ============================================
   FOOTER YEAR
   ============================================ */
(function setYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();