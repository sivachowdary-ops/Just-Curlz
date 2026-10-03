/**
 * =============================================================================
 * JUST CURLZ UNISEX SALON & SPA – SCRIPT ENGINE
 * =============================================================================
 * Production configuration for Just Curlz in Rajahmundry, Andhra Pradesh.
 * All phone numbers, addresses, hours, and verified services are configured here.
 * =============================================================================
 */

const JUST_CURLZ_CONFIG = {
  business: {
    name: "Just Curlz – Unisex Salon & Spa",
    shortName: "Just Curlz",
    tagline: "Where every curl, cut and calm feels premium.",
    category: "Unisex Hair Salon, Beauty Salon & Spa",
    city: "Rajahmundry (Rajamahendravaram)",
    district: "East Godavari",
    state: "Andhra Pradesh",
    pincode: "533101",
    country: "India",
    
    // <!-- TODO: CONFIRM WITH OWNER --> Replace 91XXXXXXXXXX with real WhatsApp number (no '+' or spaces)
    whatsappNumber: "91XXXXXXXXXX",
    
    // <!-- TODO: CONFIRM WITH OWNER --> Replace with official phone number
    phoneNumber: "+91 91XXXXXXXXXX",
    phoneTel: "+9191XXXXXXXXXX",

    // <!-- TODO: CONFIRM WITH OWNER --> Full street address and landmark
    address: {
      street: "Main Road (Opp. Reliance Trends / Landmark Placeholder)",
      locality: "Danavaipeta / T. Nagar Area",
      city: "Rajahmundry",
      pincode: "533101",
      fullAddress: "Just Curlz Unisex Salon & Spa, Main Road, Rajahmundry, Andhra Pradesh 533101",
      googleMapsUrl: "https://maps.google.com/?q=Just+Curlz+Unisex+Salon+Spa+Rajahmundry"
    },

    hours: {
      display: "10:00 AM – 9:00 PM",
      days: "Open all 7 days"
    },

    links: {
      instagram: "https://instagram.com/justcurlz_rajahmundry_placeholder",
      facebook: "https://facebook.com/justcurlzsalon_placeholder",
      googleReview: "https://maps.google.com/?q=Just+Curlz+Unisex+Salon+Spa+Rajahmundry"
    }
  },

  // Verified services and prices from Google Business Profile
  services: [
    {
      id: "hairstyling",
      name: "Hairstyling & Precision Haircuts",
      category: "hair",
      price: "₹150",
      isAnchorPrice: true,
      homeServiceAvailable: false,
      desc: "Precision unisex haircutting, scissor styling, beard contouring and blow-dry finish.",
      icon: "scissors"
    },
    {
      id: "manicure",
      name: "Manicure Care",
      category: "nails",
      price: "₹700",
      isAnchorPrice: true,
      homeServiceAvailable: true,
      desc: "Nourishing hand soak, cuticle cleanup, gentle exfoliation, and nail buffing.",
      icon: "sparkles"
    },
    {
      id: "tanning",
      name: "Tanning & De-tan Care",
      category: "skin",
      price: "₹250",
      isAnchorPrice: true,
      homeServiceAvailable: true,
      desc: "Instant sun-damage removal, skin tone brightening, and deep soothing hydration.",
      icon: "sun"
    },
    {
      id: "therapeutic-massage",
      name: "Therapeutic Body Massage",
      category: "spa",
      price: "From ₹2,500",
      isAnchorPrice: true,
      homeServiceAvailable: true,
      badge: "Home Service Available",
      desc: "Therapeutic massage with pain-relief herbal oils using fresh hygienic disposables for every guest. Available in-salon or at home.",
      icon: "lotus"
    },
    {
      id: "massage-at-home",
      name: "Body Massage at Home",
      category: "home-service",
      price: "From ₹2,500",
      isAnchorPrice: true,
      homeServiceAvailable: true,
      badge: "Most Requested",
      desc: "Pain-relief therapeutic massage brought straight to your doorstep with sterilized disposables, premium oils, and professional therapists.",
      icon: "home"
    },
    {
      id: "spa-at-home",
      name: "Spa at Home (Doorstep Service)",
      category: "home-service",
      price: "Price on request",
      isAnchorPrice: false,
      homeServiceAvailable: true,
      badge: "Doorstep Signature",
      desc: "Enjoy the luxury of our spa rituals in the complete privacy and comfort of your Rajahmundry home.",
      icon: "lotus"
    },
    {
      id: "body-waxing",
      name: "Body Waxing",
      category: "skin",
      price: "Price on request",
      isAnchorPrice: false,
      homeServiceAvailable: true,
      desc: "Smooth, hygienic waxing using gentle formulations suitable for sensitive Indian skin types.",
      icon: "feather"
    },
    {
      id: "eyebrow-threading",
      name: "Eyebrow Threading & Shaping",
      category: "skin",
      price: "Price on request",
      isAnchorPrice: false,
      homeServiceAvailable: false,
      desc: "Meticulous arch definition and gentle threading for immaculate facial framing.",
      icon: "eye"
    },
    {
      id: "facials",
      name: "Facials & Glow Therapies",
      category: "skin",
      price: "Price on request",
      isAnchorPrice: false,
      homeServiceAvailable: true,
      desc: "Targeted rejuvenating skin rituals for hydration, anti-pollution cleansing and bridal brilliance.",
      icon: "sparkles"
    },
    {
      id: "pedicure",
      name: "Spa Pedicure",
      category: "nails",
      price: "Price on request",
      isAnchorPrice: false,
      homeServiceAvailable: true,
      desc: "Relaxing foot soak, heel callus softening, exfoliation and stress-relief acupressure massage.",
      icon: "foot"
    },
    {
      id: "spa-services",
      name: "Full Spa Therapies",
      category: "spa",
      price: "Price on request",
      isAnchorPrice: false,
      homeServiceAvailable: true,
      desc: "Holistic head-to-toe relaxation, detox body scrubs, and calming aromatic head massage rituals.",
      icon: "lotus"
    }
  ]
};

/**
 * Builds direct WhatsApp booking link with encoded service details
 */
function buildWhatsAppLink(serviceName = "Appointment", date = "", time = "", location = "At Salon", guestName = "") {
  let text = `Hi Just Curlz Unisex Salon & Spa,\nI would like to book an appointment for: ${serviceName}`;
  if (location) text += `\nLocation: ${location}`;
  if (date) text += `\nDate: ${date}`;
  if (time) text += `\nTime: ${time}`;
  if (guestName) text += `\nName: ${guestName}`;
  text += `\nPlease confirm availability. Thank you!`;
  
  return `https://wa.me/${JUST_CURLZ_CONFIG.business.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * App Initialization
 */
document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initHeaderScroll();
  initMobileMenu();
  initServicesFilter();
  initHomeDualCards();
  initFaqAccordion();
  initBookingModal();
  initScrollAnimations();
  initDesktopCursorGlow();
  initAnnouncementDismiss();
  initDynamicPhoneLinks();
});

/**
 * Replace config placeholders across DOM
 */
function initDynamicPhoneLinks() {
  const phone = JUST_CURLZ_CONFIG.business.phoneNumber;
  const tel = JUST_CURLZ_CONFIG.business.phoneTel;
  const waNum = JUST_CURLZ_CONFIG.business.whatsappNumber;
  const mapUrl = JUST_CURLZ_CONFIG.business.address.googleMapsUrl;
  
  document.querySelectorAll("[data-config-phone]").forEach(el => el.textContent = phone);
  document.querySelectorAll("[data-config-tel-href]").forEach(el => el.setAttribute("href", `tel:${tel}`));
  document.querySelectorAll("[data-config-wa-href]").forEach(el => el.setAttribute("href", `https://wa.me/${waNum}`));
  document.querySelectorAll("[data-config-maps-href]").forEach(el => el.setAttribute("href", mapUrl));
}

/**
 * Dismissible Announcement Bar
 */
function initAnnouncementDismiss() {
  const bar = document.getElementById("top-announcement");
  const dismissBtn = document.getElementById("dismiss-announcement");
  if (!bar || !dismissBtn) return;

  if (sessionStorage.getItem("jc_announcement_dismissed") === "true") {
    bar.style.display = "none";
  }

  dismissBtn.addEventListener("click", () => {
    bar.style.opacity = "0";
    bar.style.transform = "translateY(-100%)";
    setTimeout(() => {
      bar.style.display = "none";
      sessionStorage.setItem("jc_announcement_dismissed", "true");
    }, 250);
  });
}

/**
 * Preloader: auto-dismiss, never blocks SEO or users
 */
function initPreloader() {
  const preloader = document.getElementById("site-preloader");
  if (!preloader) return;

  const dismiss = () => {
    if (preloader.classList.contains("dismissed")) return;
    preloader.classList.add("dismissed");
    setTimeout(() => preloader.remove(), 400);
  };

  const timer = setTimeout(dismiss, 1000);
  window.addEventListener("load", () => {
    clearTimeout(timer);
    setTimeout(dismiss, 250);
  });

  preloader.addEventListener("click", dismiss);
}

/**
 * Sticky Glass Header
 */
function initHeaderScroll() {
  const header = document.getElementById("site-header");
  const bottomBar = document.getElementById("mobile-bottom-bar");
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 40) {
          header.classList.add("scrolled-glass");
        } else {
          header.classList.remove("scrolled-glass");
        }

        if (currentScrollY > 260 && currentScrollY > lastScrollY) {
          header.classList.add("header-hidden");
        } else {
          header.classList.remove("header-hidden");
        }

        if (bottomBar) {
          if (currentScrollY > 400) {
            bottomBar.classList.add("bar-visible");
          } else {
            bottomBar.classList.remove("bar-visible");
          }
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Mobile Drawer Menu
 */
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const drawer = document.getElementById("mobile-menu-drawer");
  const closeBtn = document.getElementById("mobile-menu-close");
  const links = drawer ? drawer.querySelectorAll("a") : [];

  if (!menuBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    menuBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  menuBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  links.forEach(l => l.addEventListener("click", closeDrawer));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) closeDrawer();
  });
}

/**
 * Services Filter & Rendering
 * NOTE: Service cards are rendered with immediate visibility (no hidden opacity bug).
 */
function initServicesFilter() {
  const filterButtons = document.querySelectorAll(".services-filter-btn");
  window.currentServiceCategory = "all";

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const category = btn.getAttribute("data-category");
      window.currentServiceCategory = category;
      renderServices(category);
    });
  });

  // Render initial services immediately
  renderServices("all");
}

function getIconSvg(iconName) {
  switch (iconName) {
    case "scissors":
      return `<svg class="svc-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`;
    case "sparkles":
      return `<svg class="svc-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`;
    case "sun":
      return `<svg class="svc-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
    case "lotus":
      return `<svg class="svc-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9Z"/><path d="M12 12c-3.5 0-7 2-7 6a5 5 0 0 0 5 4h4a5 5 0 0 0 5-4c0-4-3.5-6-7-6Z"/><path d="M5.5 14.5C3 16 2 18.5 2 20c2 0 4.5-1 6-3"/></svg>`;
    case "feather":
      return `<svg class="svc-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>`;
    case "eye":
      return `<svg class="svc-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`;
    case "foot":
      return `<svg class="svc-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1"/><path d="M7 10a4 4 0 0 1 8 0v6H7v-6Z"/></svg>`;
    case "home":
      return `<svg class="svc-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
    default:
      return `<svg class="svc-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/></svg>`;
  }
}

function getRelevantServiceTag(svc) {
  if (svc.badge) {
    return `✦ ${svc.badge.toUpperCase()}`;
  }
  switch (svc.category) {
    case "hair":
      return "✦ SIGNATURE HAIR CARE";
    case "nails":
      return "✦ NOURISHING HAND & FOOT SPA";
    case "skin":
      return "✦ SUN DAMAGE & GLOW";
    case "spa":
      return "✦ THERAPEUTIC WELLNESS";
    case "home-service":
      return "✦ DOORSTEP SPA SUITE";
    default:
      return "✦ ARTISAN CARE";
  }
}

function getPriceRateLabel(svc) {
  if (svc.price.toLowerCase().includes("from")) {
    return "Starting Rate";
  } else if (svc.price.toLowerCase().includes("request")) {
    return "Personalized Quote";
  } else {
    return "Standard Rate";
  }
}

function renderServices(category = "all") {
  const grid = document.getElementById("services-grid");
  if (!grid) return;

  const items = JUST_CURLZ_CONFIG.services.filter(s => {
    if (category === "all") return true;
    if (category === "home-service") return s.homeServiceAvailable || s.category === "home-service";
    return s.category === category;
  });

  // Render cards with tailored, relevant artisanal tags
  grid.innerHTML = items.map((svc) => {
    const waLink = buildWhatsAppLink(svc.name, "", "", svc.homeServiceAvailable ? "Home Service or Salon" : "At Salon");
    const tagText = getRelevantServiceTag(svc);
    const rateLabel = getPriceRateLabel(svc);

    return `
      <article class="service-card visible-card">
        <div class="card-tag-banner">${tagText}</div>
        
        <div class="service-card-header">
          <div class="service-icon-box" aria-hidden="true">
            ${getIconSvg(svc.icon)}
          </div>
          <span class="service-category-pill">${svc.category.toUpperCase()}</span>
        </div>

        <div class="service-card-body">
          <h3 class="service-title">${svc.name}</h3>
          <p class="service-desc">${svc.desc}</p>
          
          <div class="service-price-block">
            <div class="service-price-row">
              <span class="service-price">${svc.price}</span>
              <span class="service-meta-text">✦ ${rateLabel}</span>
            </div>
            <div class="service-avail-note">
              ${svc.homeServiceAvailable ? "✦ In-Salon &amp; Doorstep Available" : "✦ Salon Exclusive · Rajahmundry"}
            </div>
          </div>
        </div>

        <div class="service-card-footer">
          <button type="button" class="btn-card-primary" onclick="openBookingModalFor('${svc.name.replace(/'/g, "\\'")}')" aria-label="Book ${svc.name}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span>BOOK APPOINTMENT</span>
          </button>
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="service-text-link" aria-label="Consult on WhatsApp for ${svc.name}">
            <span>Consult on WhatsApp</span> &rarr;
          </a>
        </div>
      </article>
    `;
  }).join("");
}

/**
 * Expandable Him & Her Panels
 */
function initHomeDualCards() {
  const panels = document.querySelectorAll(".dual-panel-column");
  panels.forEach(panel => {
    panel.addEventListener("mouseenter", () => {
      panels.forEach(p => p.classList.remove("expanded"));
      panel.classList.add("expanded");
    });
    panel.addEventListener("click", () => {
      panels.forEach(p => p.classList.remove("expanded"));
      panel.classList.add("expanded");
    });
  });
}

/**
 * Accessible FAQ Accordion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");

    if (!trigger || !content) return;

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      faqItems.forEach(other => {
        other.classList.remove("active");
        const otherTrigger = other.querySelector(".faq-trigger");
        const otherContent = other.querySelector(".faq-content");
        if (otherTrigger) otherTrigger.setAttribute("aria-expanded", "false");
        if (otherContent) otherContent.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("active");
        trigger.setAttribute("aria-expanded", "true");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

/**
 * Interactive WhatsApp Booking Modal
 */
let currentBookingService = "General Hair / Spa Appointment";

function openBookingModalFor(serviceName) {
  currentBookingService = serviceName || "General Hair / Spa Appointment";
  const modal = document.getElementById("booking-modal");
  const serviceSelect = document.getElementById("book-service-select");

  if (serviceSelect && serviceName) {
    serviceSelect.value = serviceName;
  }

  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

function initBookingModal() {
  const modal = document.getElementById("booking-modal");
  const closeBtn = document.getElementById("close-booking-modal");
  const form = document.getElementById("appointment-form");
  const cancelBtn = document.getElementById("btn-cancel-modal");
  const serviceSelect = document.getElementById("book-service-select");

  if (serviceSelect) {
    serviceSelect.innerHTML = JUST_CURLZ_CONFIG.services.map(s => {
      return `<option value="${s.name}">${s.name} (${s.price})</option>`;
    }).join("");
    const defaultOpt = document.createElement("option");
    defaultOpt.value = "General Consultation / Service";
    defaultOpt.textContent = "General Consultation / Other Service";
    serviceSelect.appendChild(defaultOpt);
  }

  const dateInput = document.getElementById("book-date");
  if (dateInput) {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    dateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("book-name").value.trim();
      const phone = document.getElementById("book-phone").value.trim();
      const service = document.getElementById("book-service-select").value;
      const locationType = document.querySelector('input[name="service-location"]:checked')?.value || "At Salon";
      const date = document.getElementById("book-date").value;
      const time = document.getElementById("book-time").value;

      if (!name || !phone) {
        alert("Please provide your name and contact phone number.");
        return;
      }

      const waUrl = buildWhatsAppLink(service, date, time, locationType, `${name} (${phone})`);
      window.open(waUrl, "_blank", "noopener,noreferrer");
      closeModal();
    });
  }

  document.querySelectorAll(".trigger-booking-modal").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const svc = btn.getAttribute("data-service-name") || "General Salon & Spa Booking";
      openBookingModalFor(svc);
    });
  });
}

/**
 * Scroll Animations (Safe: only observes static elements, doesn't hide dynamic items)
 */
function initScrollAnimations() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal-up").forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px -30px 0px",
    threshold: 0.08
  });

  document.querySelectorAll(".reveal-up").forEach(el => observer.observe(el));
}

/**
 * Subtle desktop cursor glow
 */
function initDesktopCursorGlow() {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const glow = document.createElement("div");
  glow.className = "desktop-cursor-ambient";
  glow.setAttribute("aria-hidden", "true");
  document.body.appendChild(glow);

  let mouseX = -100, mouseY = -100;
  let posX = -100, posY = -100;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function followMouse() {
    posX += (mouseX - posX) * 0.12;
    posY += (mouseY - posY) * 0.12;
    glow.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
    requestAnimationFrame(followMouse);
  }
  requestAnimationFrame(followMouse);
}
