function showConsentBanner() {
    if (document.cookie.indexOf('consent=') === -1) {
        const banner = document.createElement('div');
        banner.id = 'consent-banner';
        banner.innerHTML = `
            <p>This website uses cookies to ensure you get the best experience. We use Google Analytics to track website usage. By clicking "Accept", you consent to our use of cookies for analytics.</p>
            <button id="accept">Accept</button>
            <button id="decline">Decline</button>
        `;
        document.body.appendChild(banner);

        document.getElementById('accept').addEventListener('click', () => {
            setConsent(true);
            banner.style.display = 'none';
        });

        document.getElementById('decline').addEventListener('click', () => {
            setConsent(false);
            banner.style.display = 'none';
        });
    }
}

function setConsent(consent) {
    const consentValue = consent ? 'granted' : 'denied';
    document.cookie = `consent=${consentValue};path=/;max-age=31536000`; // 1 year expiry
    gtag('consent', 'update', {
        'analytics_storage': consentValue,
        'ad_storage': consentValue,
        'ad_user_data': consentValue,
        'ad_personalization': consentValue
    });
}

window.onload = showConsentBanner;
