// Language translations
const translations = {
    en: {
        // Navigation
        'nav-about': 'About',
        'nav-portfolio': 'Portfolio',
        'nav-process': 'Process',
        'nav-booking': 'Book Now',

        // Hero Section
        'hero-label': 'HONG KONG EXCLUSIVE · FEB 6-8, 2025',
        'hero-title-line1': 'Korean',
        'hero-title-line2': 'PMU Artist',
        'hero-tagline': 'Natural · Safe · Precise',
        'hero-desc1': 'Experience the artistry of Korean brow technique',
        'hero-desc2': 'by master artist <strong>Hani</strong>',
        'hero-btn-primary': 'Book Consultation',
        'hero-btn-secondary': 'Learn More',
        'hero-stat1-number': '8+',
        'hero-stat1-label': 'Years',
        'hero-stat2-number': '1000+',
        'hero-stat2-label': 'Clients',
        'hero-stat3-number': '100%',
        'hero-stat3-label': 'Natural',
        'hero-scroll': 'Scroll to explore',

        // Featured Quote
        'quote-text': 'I create brows that are comfortable to look at over time, rather than overly bold ones',
        'quote-author-name': 'Hani',
        'quote-author-title': 'Master Brow Artist',

        // About Section
        'about-label': 'About the Artist',
        'about-title': 'Hani',
        'artist-experience': '8+ Years of Excellence',
        'date-banner-label': 'Hong Kong Exclusive',
        'date-banner-dates': 'FEB 6-8, 2025',
        'date-banner-location': 'Limited Slots Available',
        'about-lead': 'A brow artist based in Korea, I have developed and refined a Hair Stroke technique that minimizes skin damage.',
        'about-text': 'I precisely calculate the depth and direction of each stroke to design natural, long-lasting brows. Rather than following trends, I provide customized designs optimized for each individual\'s face shape and skin condition.',
        'expertise1-title': 'Skin-Friendly Technique',
        'expertise1-desc': 'Shallow and precise depth that minimizes skin irritation',
        'expertise2-title': 'Korean Standard',
        'expertise2-desc': 'Same hygiene and technical standards as Korea flagship studio',
        'expertise3-title': 'Personalized Design',
        'expertise3-desc': 'Custom design tailored to individual face shape and skin tone',
        'about-badge': 'Years of<br>Excellence',

        // HK Trip Section
        'trip-badge': 'Last November',
        'trip-title': 'Hong Kong',
        'trip-desc': 'Our November Hong Kong visit was met with overwhelming response.<br>Due to popular demand, we\'re returning this February.<br>Experience the same Korean standard in Hong Kong.',
        'trip-desc-en': 'Our November Hong Kong visit was met with overwhelming response.<br>Due to popular demand, we\'re returning this February.<br>Experience the same Korean standard in Hong Kong.',

        // HK November Portfolio Section
        'hk-portfolio-label': 'November 2024 · Hong Kong',
        'hk-portfolio-title': 'Real Results from HK Pop-Up',
        'hk-portfolio-desc': 'Actual clients from our November Hong Kong visit',
        'hk-portfolio-caption': 'Hong Kong Client',

        // Portfolio Section
        'portfolio-label': 'Portfolio',
        'portfolio-title': 'Before & After',
        'portfolio-desc': 'Natural, subtle transformations that enhance your features',
        'portfolio-label1': 'Natural Hair Stroke',
        'portfolio-label2': 'Skin-Friendly Method',
        'portfolio-label3': 'Precise Strokes',
        'portfolio-label4': 'Long-Lasting Results',
        'comparison-before': 'Before',
        'comparison-after': 'After',

        // Technique Section
        'technique-label': 'Our Technique',
        'technique-title': 'Skin-Friendly<br>Hair Stroke',
        'technique-visual-title': 'Precision<br>Hair Strokes',
        'technique-lead': 'I work at a shallow and precise depth that doesn\'t damage the skin, creating natural strokes that flow with your skin\'s texture.',
        'technique-text': 'Minimizing color bleeding and spreading to maintain clear and beautiful brows for a long time. A safe technique that even sensitive skin can trust.',
        'technique-feature1-title': 'Sensitive Skin',
        'technique-feature1-desc': 'Safe technique that minimizes skin irritation',
        'technique-feature2-title': 'Existing Tattoo Correction',
        'technique-feature2-desc': 'Naturally correct over-drawn brows',
        'technique-feature3-title': 'Natural Results',
        'technique-feature3-desc': 'Brows that look natural even without makeup',

        // Process Section
        'process-label': 'Our Process',
        'process-title': 'The Experience',
        'process-desc': 'A meticulous approach to creating your perfect brows',
        'process1-title': 'Consultation',
        'process1-desc': 'We analyze your face shape, skin condition, and desired style in detail to propose the optimal design',
        'process1-detail1': 'Face shape analysis',
        'process1-detail2': 'Skin type assessment',
        'process1-detail3': 'Style preference discussion',
        'process2-title': 'Design',
        'process2-desc': 'Together we carefully design your brow shape and finalize it',
        'process2-detail1': 'Custom shape design',
        'process2-detail2': 'Color matching',
        'process2-detail3': 'Final approval',
        'process3-title': 'Application',
        'process3-desc': 'I carefully proceed with the procedure using precise Hair Stroke technique',
        'process3-detail1': 'Precise hair strokes',
        'process3-detail2': 'Premium pigments',
        'process3-detail3': 'Minimal discomfort',
        'process4-title': 'Aftercare',
        'process4-desc': 'Detailed aftercare instructions to help maintain the best results long-term',
        'process4-detail1': 'Detailed care guide',
        'process4-detail2': 'Follow-up support',
        'process4-detail3': 'Long-term maintenance',

        // Ideal Clients Section
        'clients-perfect-title': 'Perfect For',
        'clients-perfect1': 'Those who want natural-looking brows',
        'clients-perfect2': 'Those with sensitive skin',
        'clients-perfect3': 'Those with excessive or faded existing brow tattoos',
        'clients-perfect4': 'Those who want a clean look without makeup',
        'clients-perfect5': 'Those who want to save morning time in busy daily life',
        'clients-not-title': 'Not Ideal For',
        'clients-not1': 'Those who want very bold makeup-style brows',
        'clients-not2': 'Those who want dramatic change in one session',

        // Schedule Section
        'schedule-label': 'Limited Availability',
        'schedule-title': 'Hong Kong Pop-Up',
        'schedule-month': 'Feb 6-8',
        'schedule-year': '2025',
        'schedule-detail1-title': 'February 6-8, 2025',
        'schedule-detail1-desc': '3 days only · Limited slots available',
        'schedule-detail2-title': 'Limited Slots',
        'schedule-detail2-desc': 'Maximum 3-4 clients per day',
        'schedule-detail3-title': 'Private Location',
        'schedule-detail3-desc': 'Address shared after booking confirmation',
        'schedule-alert': 'This is the only scheduled Hong Kong session. Next visit date is TBD.',

        // Pricing Section
        'pricing-label': 'Investment',
        'pricing-title': 'Pricing',
        'pricing-service-title': 'Korean Hair Stroke Brow',
        'pricing-includes-title': 'What\'s Included',
        'pricing-include1': 'Comprehensive consultation & custom design',
        'pricing-include2': 'Premium Korean pigments (safe & long-lasting)',
        'pricing-include3': 'Professional aftercare kit & instructions',
        'pricing-include4': 'Follow-up consultation (online)',
        'pricing-include5': 'Retouch policy (details upon consultation)',
        'pricing-deposit': 'Deposit Required:',
        'pricing-deposit-text': 'To secure your booking',
        'pricing-standards': 'Standards:',
        'pricing-standards-text': 'Same as Korea flagship studio',

        // FAQ Section
        'faq-label': 'FAQ',
        'faq-title': 'Common Questions',
        'faq1-q': 'Can I return to daily life immediately after the procedure?',
        'faq1-a': 'Yes, you can. Hani\'s "Hair Stroke" technique minimizes skin damage, so your brows won\'t look overly dark right after the procedure. They will appear natural enough for you to go about your appointments or work on the same day.',
        'faq2-q': 'How long do the results last?',
        'faq2-a': 'It varies depending on individual skin type and lifestyle, but typically lasts 1.5 to 2 years. Those with oily skin may experience slightly faster fading compared to dry skin types.',
        'faq3-q': 'Does it hurt?',
        'faq3-a': 'Most clients say "it was so painless, I almost fell asleep." We use a high-performance, low-irritation numbing system and work shallowly and precisely on the skin surface, making it comfortable even for those sensitive to pain.',
        'faq4-q': 'What kind of pigments do you use?',
        'faq4-a': 'We only use premium natural pigments certified by Korea\'s KFDA and European safety standards. The color stays true over time without turning red or blue, maintaining its original clarity.',
        'faq5-q': 'I have an old brow tattoo. Can I still get this done?',
        'faq5-a': 'It depends on the depth and color of the residual tattoo. You must send unedited photos of your brows before booking. If the residual tattoo is too dark, we may recommend laser removal first. However, faded residual tattoos can often be naturally covered with Hani\'s technique.',
        'faq6-q': 'How does retouch work for the HK pop-up?',
        'faq6-a': 'Greengyeol\'s Hair Stroke technique is designed for high retention with just one session, and many clients are satisfied without a retouch. If you do want a retouch, you can book during our next Hong Kong visit (TBD) or visit our Korea flagship studio.',
        'faq7-q': 'Why is a deposit required?',
        'faq7-a': 'The Hong Kong pop-up is a private session with limited slots (3-4 clients per day) during a short period. The deposit prevents no-shows and ensures that those who truly want the service have the opportunity.',
        'faq8-q': 'When can I wash my face or exercise after the procedure?',
        'faq8-a': 'Avoid water on the treated area on the day of the procedure. From the next day, light water contact is fine. For stable pigment retention, avoid vigorous exercise, sauna, and swimming for about one week.',
        'faq-cta-text': 'More questions? Get in touch directly',
        'faq-cta-btn': 'Contact via WhatsApp',

        // Instagram Section
        'instagram-label': 'Follow Us',
        'instagram-title': 'More Beautiful Works',
        'instagram-desc': 'See more transformations on Instagram',
        'instagram-cta-btn': 'See More on Instagram',

        // Booking Section
        'booking-label': 'Ready to Begin?',
        'booking-title': 'Book Your Consultation',
        'booking-desc': 'Start your journey to effortless, natural brows',
        'booking-step1-title': 'Contact',
        'booking-step1-desc': 'Contact via WhatsApp',
        'booking-step2-title': 'Photos',
        'booking-step2-desc': 'Send bare-face brow photos',
        'booking-step3-title': 'Consult',
        'booking-step3-desc': 'Design consultation',
        'booking-step4-title': 'Confirm',
        'booking-step4-desc': 'Booking confirmation',
        'booking-qr-text': 'Scan QR code or click button below to connect via WhatsApp',
        'booking-btn': 'Book via WhatsApp',

        // Footer
        'footer-tagline': 'Natural · Safe · Precise',
        'footer-quick-links': 'Quick Links',
        'footer-connect': 'Connect',
        'footer-copyright': '© 2025 Greengyeol. All rights reserved.',
        'footer-location': 'Hong Kong Exclusive Pop-Up · Feb 6-8, 2025'
    },
    zh: {
        // Navigation
        'nav-about': '關於我哋',
        'nav-portfolio': '作品集',
        'nav-process': '流程',
        'nav-booking': '即刻預約',

        // Hero Section
        'hero-label': '香港獨家 · 2025年2月6-8日',
        'hero-title-line1': '韓國',
        'hero-title-line2': 'PMU 藝術家',
        'hero-tagline': '自然 · 安全 · 精準',
        'hero-desc1': '體驗韓國眉毛技術嘅藝術',
        'hero-desc2': '由大師級藝術家 <strong>Hani</strong> 操刀',
        'hero-btn-primary': '預約諮詢',
        'hero-btn-secondary': '了解更多',
        'hero-stat1-number': '8+',
        'hero-stat1-label': '年',
        'hero-stat2-number': '1000+',
        'hero-stat2-label': '客戶',
        'hero-stat3-number': '100%',
        'hero-stat3-label': '自然',
        'hero-scroll': '繼續向下睇',

        // Featured Quote
        'quote-text': '我做嘅眉毛唔係好濃，而係睇耐都覺得舒服嘅自然眉型',
        'quote-author-name': 'Hani',
        'quote-author-title': '大師級眉毛藝術家',

        // About Section
        'about-label': '關於藝術家',
        'about-title': 'Hani',
        'artist-experience': '8年以上專業經驗',
        'date-banner-label': '香港獨家',
        'date-banner-dates': '2025年2月6-8日',
        'date-banner-location': '名額有限',
        'about-lead': '我係喺韓國活躍嘅眉毛藝術家，開發咗將皮膚損傷減到最低嘅專業 Hair Stroke 技術。',
        'about-text': '精確計算每一條線條嘅深度同方向，設計自然持久嘅眉毛。我唔會追隨潮流，而係提供度身訂造、針對每個人臉型同皮膚狀況嘅設計。',
        'expertise1-title': 'Skin-Friendly Technique',
        'expertise1-desc': '將皮膚刺激減到最低嘅淺層精確深度',
        'expertise2-title': 'Korean Standard',
        'expertise2-desc': '同韓國總店一樣嘅衛生同技術標準',
        'expertise3-title': 'Personalized Design',
        'expertise3-desc': '度身訂造，針對個人臉型同膚色嘅設計',
        'about-badge': '專業<br>年資',

        // HK Trip Section
        'trip-badge': '去年十一月',
        'trip-title': '香港',
        'trip-desc': '去年11月嘅香港快閃獲得好大迴響，<br>應客人要求，我哋2月會再嚟。<br>喺香港都可以體驗到同樣嘅韓國標準。',
        'trip-desc-en': '去年11月嘅香港快閃獲得好大迴響，<br>應客人要求，我哋2月會再嚟。<br>喺香港都可以體驗到同樣嘅韓國標準。',

        // HK November Portfolio Section
        'hk-portfolio-label': '2024年11月 · 香港',
        'hk-portfolio-title': '香港快閃真實效果',
        'hk-portfolio-desc': '去年11月香港客人嘅真實效果',
        'hk-portfolio-caption': '香港客人',

        // Portfolio Section
        'portfolio-label': '作品集',
        'portfolio-title': '前後對比',
        'portfolio-desc': '突顯你特色嘅自然細緻變化',
        'portfolio-label1': '自然線條',
        'portfolio-label2': '護膚方法',
        'portfolio-label3': '精準筆觸',
        'portfolio-label4': '持久效果',
        'comparison-before': '之前',
        'comparison-after': '之後',

        // Technique Section
        'technique-label': '我哋嘅技術',
        'technique-title': '護膚型<br>線條眉',
        'technique-visual-title': '精準<br>線條眉',
        'technique-lead': '以唔損傷皮膚嘅淺層精確深度工作，創造順住皮膚紋理流動嘅自然線條。',
        'technique-text': '將顏色暈染同擴散減到最低，長期保持清晰靚嘅眉毛。呢個係敏感肌膚都可以放心接受嘅安全技術。',
        'technique-feature1-title': '敏感肌膚',
        'technique-feature1-desc': '將皮膚刺激減到最低嘅安全技術',
        'technique-feature2-title': '既有紋身修正',
        'technique-feature2-desc': '自然修正過度嘅眉毛',
        'technique-feature3-title': '自然效果',
        'technique-feature3-desc': '素顏都唔會突兀嘅眉毛',

        // Process Section
        'process-label': '我哋嘅流程',
        'process-title': '體驗',
        'process-desc': '打造完美眉毛嘅細緻方法',
        'process1-title': '諮詢',
        'process1-desc': '詳細分析你嘅臉型、皮膚狀況同期望風格，提出最佳設計',
        'process1-detail1': '臉型分析',
        'process1-detail2': '皮膚類型評估',
        'process1-detail3': '風格偏好討論',
        'process2-title': '設計',
        'process2-desc': '同你一齊仔細設計眉毛形狀並最終確定',
        'process2-detail1': '度身訂造設計',
        'process2-detail2': '顏色搭配',
        'process2-detail3': '最終確認',
        'process3-title': '施作',
        'process3-desc': '用精準嘅 Hair Stroke 技術細心進行施作',
        'process3-detail1': '精準嘅線條',
        'process3-detail2': '頂級色料',
        'process3-detail3': '最小不適感',
        'process4-title': '術後護理',
        'process4-desc': '詳細講解術後護理方法，幫你長期保持最佳效果',
        'process4-detail1': '詳細護理指南',
        'process4-detail2': '後續支援',
        'process4-detail3': '長期維護',

        // Ideal Clients Section
        'clients-perfect-title': '適合對象',
        'clients-perfect1': '想要自然眉毛嘅人',
        'clients-perfect2': '皮膚敏感嘅人',
        'clients-perfect3': '有眉毛紋身過度或者暈染嘅人',
        'clients-perfect4': '想唔化妝都可以保持整潔印象嘅人',
        'clients-perfect5': '喺忙碌生活中想節省朝早時間嘅人',
        'clients-not-title': '唔太適合',
        'clients-not1': '想要好濃密化妝眉嘅人',
        'clients-not2': '想一次就有好大變化嘅人',

        // Schedule Section
        'schedule-label': '名額有限',
        'schedule-title': '香港快閃',
        'schedule-month': '2月6-8日',
        'schedule-year': '2025',
        'schedule-detail1-title': '2025年2月6-8日',
        'schedule-detail1-desc': '只有3日 · 名額有限',
        'schedule-detail2-title': '名額有限',
        'schedule-detail2-desc': '每日最多3-4位客人',
        'schedule-detail3-title': '私人地點',
        'schedule-detail3-desc': '預約確認後分享地址',
        'schedule-alert': '呢個係唯一安排咗嘅香港場次。下次訪問日期未定。',

        // Pricing Section
        'pricing-label': '投資',
        'pricing-title': '價格',
        'pricing-service-title': '韓式線條眉',
        'pricing-includes-title': '包含項目',
        'pricing-include1': '全面諮詢同度身訂造設計',
        'pricing-include2': '頂級韓國色料（安全又持久）',
        'pricing-include3': '專業術後護理套裝同說明',
        'pricing-include4': '後續諮詢（線上）',
        'pricing-include5': '補色政策（諮詢時講細節）',
        'pricing-deposit': '需要訂金：',
        'pricing-deposit-text': '確保你嘅預約',
        'pricing-standards': '標準：',
        'pricing-standards-text': '同韓國旗艦店一樣',

        // Instagram Section
        'instagram-label': 'Follow 我哋',
        'instagram-title': '更多靚作品',
        'instagram-desc': '喺 Instagram 睇更多效果',
        'instagram-cta-btn': '喺 Instagram 睇更多',

        // FAQ Section
        'faq-label': '常見問題',
        'faq-title': '常見問題',
        'faq1-q': '做完之後可以即刻返日常生活嗎？',
        'faq1-a': '可以。Hani 嘅「線條眉」技術將皮膚損傷減到最低，所以做完之後唔會過分濃黑。當日即刻見人或者返工都唔會突兀，好自然。',
        'faq2-q': '可以維持幾耐？',
        'faq2-a': '因個人皮膚類型同生活習慣而異，但一般係1年半到2年左右。油性皮膚會比乾性皮膚快啲變淡。',
        'faq3-q': '會唔會好痛？',
        'faq3-a': '大部分客人都話「完全唔痛，差啲瞓著咗」。我哋用高性能低刺激嘅麻醉系統，而且喺皮膚表面淺層精確操作，就算對痛楚敏感嘅人都會覺得好舒服。',
        'faq4-q': '你哋用乜嘢色料？',
        'faq4-a': '我哋只用經過韓國食藥處(KFDA)認證同埋歐洲安全標準嘅頂級天然色料。時間過咗都唔會變紅或者變藍，會保持原本嘅清晰顏色。',
        'faq5-q': '我有舊嘅眉毛紋身痕跡，仲做唔做得？',
        'faq5-a': '要睇痕跡嘅深度同顏色。預約之前一定要send冇修圖嘅眉毛相片俾我哋。如果痕跡太深，可能要建議你先做激光去除。但如果係淡淡嘅痕跡，Hani 嘅技術可以自然遮蓋。',
        'faq6-q': '香港快閃點樣補色？',
        'faq6-a': 'Greengyeol 嘅線條眉技術設計成只做一次都有好高嘅著色率，好多客人唔需要補色都已經好滿意。如果你想補色，可以等下次嚟香港嘅時候預約（未定），或者去韓國總店做。',
        'faq7-q': '點解要俾訂金？',
        'faq7-a': '香港快閃係短期內嘅私人session，每日只做3-4個客。訂金係為咗防止爽約，確保真正想做嘅人有機會。',
        'faq8-q': '做完之後幾時可以洗面同做運動？',
        'faq8-a': '做嘅當日要避免沾水，第二日開始可以輕輕碰水。為咗色素穩定著色，建議一個禮拜內唔好做激烈運動、焗桑拿、游水。',
        'faq-cta-text': '仲有其他問題？直接聯絡我哋',
        'faq-cta-btn': '用 WhatsApp 聯絡',

        // Booking Section
        'booking-label': '準備好未？',
        'booking-title': '預約諮詢',
        'booking-desc': '開始你通往自然輕鬆眉毛嘅旅程',
        'booking-step1-title': '聯絡',
        'booking-step1-desc': '用 WhatsApp 聯絡',
        'booking-step2-title': '相片',
        'booking-step2-desc': 'Send 素顏眉毛相片',
        'booking-step3-title': '諮詢',
        'booking-step3-desc': '設計諮詢',
        'booking-step4-title': '確認',
        'booking-step4-desc': '預約確認',
        'booking-qr-text': 'Scan QR code 或者撳下面個掣用 WhatsApp 聯絡',
        'booking-btn': '用 WhatsApp 預約',

        // Footer
        'footer-tagline': '自然 · 安全 · 精準',
        'footer-quick-links': '快速連結',
        'footer-connect': '聯絡我哋',
        'footer-copyright': '© 2025 Greengyeol. 版權所有。',
        'footer-location': '香港獨家快閃 · 2025年2月6-8日'
    }
};

// Get current language from localStorage or default to English
let currentLang = localStorage.getItem('language') || 'en';

// Function to update text content
function updateContent(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // Use innerHTML for content with HTML tags (like <br>, <strong>)
            if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
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
