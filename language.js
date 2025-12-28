// Language translations
const translations = {
    en: {
        'nav-about': 'About',
        'nav-portfolio': 'Portfolio',
        'nav-process': 'Process',
        'nav-booking': 'Book Now'
    },
    ko: {
        'nav-about': '소개',
        'nav-portfolio': '포트폴리오',
        'nav-process': '프로세스',
        'nav-booking': '예약하기'
    },
    zh: {
        'nav-about': '關於',
        'nav-portfolio': '作品集',
        'nav-process': '流程',
        'nav-booking': '立即預約'
    }
};

// Get current language from localStorage or default to English
let currentLang = localStorage.getItem('language') || 'en';

// Function to update text content
function updateContent(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Function to switch language
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    updateContent(lang);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    updateContent(currentLang);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        }

        // Add click event listener
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
});
