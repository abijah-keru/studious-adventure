(function() {
  'use strict';
  
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  // Helper function to show/hide banner
  function showBanner() {
    banner.style.display = 'flex';
    document.body.style.paddingBottom = '80px';
  }

  function hideBanner() {
    banner.style.display = 'none';
    document.body.style.paddingBottom = '0';
  }

  // Helper function to check if a specific consent is given
  function hasConsentFor(type) {
    const consentData = localStorage.getItem('cookieConsent');
    if (!consentData) return false;
    
    try {
      const preferences = JSON.parse(consentData);
      return preferences[type] === true;
    } catch (e) {
      // Legacy format - if it's 'all', all consents are granted
      return consentData === 'all';
    }
  }

  // Check if user already made a choice
  const consent = localStorage.getItem('cookieConsent');
  if (consent) {
    hideBanner();
    // Load features based on preferences
    if (hasConsentFor('analytics')) {
      enableOptionalFeatures();
    }
    if (hasConsentFor('location')) {
      window.locationConsentGranted = true;
    }
  } else {
    // Show banner if no consent has been given
    showBanner();
  }

  // Accept button handler - enable all features
  const acceptBtn = document.getElementById('accept-cookies');
  if (acceptBtn) {
    acceptBtn.onclick = function() {
      const preferences = { analytics: true, location: true, forms: true };
      localStorage.setItem('cookieConsent', JSON.stringify(preferences));
      hideBanner();
      enableOptionalFeatures();
      window.locationConsentGranted = true;
    };
  }

  // Decline button handler - disable all optional features
  const declineBtn = document.getElementById('decline-cookies');
  if (declineBtn) {
    declineBtn.onclick = function() {
      const preferences = { analytics: false, location: false, forms: false };
      localStorage.setItem('cookieConsent', JSON.stringify(preferences));
      hideBanner();
      window.locationConsentGranted = false;
      // Do not load optional scripts
    };
  }

  function enableOptionalFeatures() {
    // 1. Load Google Analytics dynamically
    if (typeof gtag === 'undefined') {
      // Load gtag.js
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-9PDYBT1ZXF';
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-9PDYBT1ZXF');
      
      window.gtag = gtag;
    }
  }

  // Expose function globally for privacy settings page
  window.enableOptionalFeatures = enableOptionalFeatures;
  
  // Function to check if consent is given (for analytics)
  window.hasCookieConsent = function() {
    return hasConsentFor('analytics');
  };
  
  // Expose hasConsentFor function globally
  window.hasConsentFor = hasConsentFor;
})();
