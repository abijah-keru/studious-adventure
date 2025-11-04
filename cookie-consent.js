// Cookie Consent Management System
(function() {
    'use strict';

    // Consent preferences stored in localStorage
    const CONSENT_KEY = 'nairobiDatesConsent';
    const CONSENT_VERSION = '1.0';

    // Default consent state
    const defaultConsent = {
        version: CONSENT_VERSION,
        analytics: false,
        location: false,
        forms: false,
        timestamp: null
    };

    // Get consent preferences from localStorage
    function getConsent() {
        try {
            const stored = localStorage.getItem(CONSENT_KEY);
            if (stored) {
                const consent = JSON.parse(stored);
                // Check if version matches (for future updates)
                if (consent.version === CONSENT_VERSION) {
                    return consent;
                }
            }
        } catch (e) {
            console.error('Error reading consent preferences:', e);
        }
        return null;
    }

    // Save consent preferences to localStorage
    function saveConsent(consent) {
        try {
            consent.version = CONSENT_VERSION;
            consent.timestamp = Date.now();
            localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
            return true;
        } catch (e) {
            console.error('Error saving consent preferences:', e);
            return false;
        }
    }

    // Check if user has given consent
    function hasConsent() {
        const consent = getConsent();
        return consent !== null;
    }

    // Check specific consent type
    function hasConsentFor(type) {
        const consent = getConsent();
        if (!consent) return false;
        
        // If user accepted all, return true for all types
        if (consent.acceptedAll) {
            return true;
        }
        
        return consent[type] === true;
    }

    // Load Google Analytics only if consent is given
    function loadGoogleAnalytics() {
        if (!hasConsentFor('analytics')) {
            return;
        }

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

    // Accept all cookies
    function acceptAll() {
        const consent = {
            acceptedAll: true,
            analytics: true,
            location: true,
            forms: true
        };
        saveConsent(consent);
        hideBanner();
        loadGoogleAnalytics();
        enableLocationFeatures();
        enableFormTracking();
    }

    // Reject all cookies (only essential)
    function rejectAll() {
        const consent = {
            acceptedAll: false,
            analytics: false,
            location: false,
            forms: false
        };
        saveConsent(consent);
        hideBanner();
    }

    // Save custom preferences
    function savePreferences(preferences) {
        const consent = {
            acceptedAll: false,
            analytics: preferences.analytics || false,
            location: preferences.location || false,
            forms: preferences.forms || false
        };
        saveConsent(consent);
        
        // Load/unload scripts based on preferences
        if (consent.analytics) {
            loadGoogleAnalytics();
        }
        
        if (consent.location) {
            enableLocationFeatures();
        } else {
            disableLocationFeatures();
        }
        
        if (consent.forms) {
            enableFormTracking();
        }
    }

    // Show cookie banner
    function showBanner() {
        const banner = document.getElementById('cookieBanner');
        if (banner) {
            banner.classList.add('show');
            document.body.style.paddingBottom = '80px'; // Add padding to prevent content overlap
        }
    }

    // Hide cookie banner
    function hideBanner() {
        const banner = document.getElementById('cookieBanner');
        if (banner) {
            banner.classList.remove('show');
            banner.style.display = 'none';
            document.body.style.paddingBottom = '0';
        }
    }

    // Enable location-based features
    function enableLocationFeatures() {
        // Location features are already in script.js, just need to ensure consent check
        window.locationConsentGranted = true;
    }

    // Disable location-based features
    function disableLocationFeatures() {
        window.locationConsentGranted = false;
        // Clear any stored location data
        try {
            sessionStorage.removeItem('userLocation');
        } catch (e) {
            // Ignore errors
        }
    }

    // Enable form tracking (if needed in future)
    function enableFormTracking() {
        window.formTrackingEnabled = true;
    }

    // Initialize consent system
    function init() {
        // Check if user has already given consent
        if (hasConsent()) {
            const consent = getConsent();
            
            // Load scripts based on saved preferences
            if (consent.analytics || consent.acceptedAll) {
                loadGoogleAnalytics();
            }
            
            if (consent.location || consent.acceptedAll) {
                enableLocationFeatures();
            }
            
            if (consent.forms || consent.acceptedAll) {
                enableFormTracking();
            }
            
            // Don't show banner if consent already given
            return;
        }

        // Show banner if no consent given
        showBanner();
    }

    // Expose public API
    window.CookieConsent = {
        acceptAll: acceptAll,
        rejectAll: rejectAll,
        savePreferences: savePreferences,
        hasConsent: hasConsent,
        hasConsentFor: hasConsentFor,
        getConsent: getConsent,
        showBanner: showBanner,
        hideBanner: hideBanner
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
