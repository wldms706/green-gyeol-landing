// Language translations
const translations = {
    en: {
        // Navigation
        'nav-about': 'About',
        'nav-portfolio': 'Portfolio',
        'nav-process': 'Process',
        'nav-booking': 'Book Now',

        // Hero Section
        'hero-label': 'HONG KONG EXCLUSIVE · FEBRUARY 2025',
        'hero-title-line1': 'Korean Hair',
        'hero-title-line2': 'Stroke Brow',
        'hero-tagline': 'Natural · Safe · Precise',
        'hero-desc1': 'Experience the artistry of Korean brow technique',
        'hero-desc2': 'by master artist <strong>Hani</strong>',
        'hero-btn-primary': 'Book Consultation',
        'hero-btn-secondary': 'Learn More',
        'hero-stat1-number': '5+',
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
        'trip-badge': 'Previous Visit',
        'trip-title': '2024.11 HK Business Trip',
        'trip-desc': 'Our first Hong Kong pop-up was a tremendous success.<br>Experience the same Korean standard this February.',

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
        'schedule-month': 'February',
        'schedule-year': '2025',
        'schedule-detail1-title': 'Early February',
        'schedule-detail1-desc': 'Exact dates confirmed upon booking',
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
        'faq1-q': 'How does retouch work?',
        'faq1-a': 'Retouch availability during the Hong Kong schedule will be provided during consultation. Retouch is also possible when visiting Korea. Generally, a retouch is recommended 6-8 weeks after the first procedure to achieve optimal results.',
        'faq2-q': 'How long does it last?',
        'faq2-a': 'It varies depending on skin type and lifestyle, but on average 1-2 years. Oily skin may fade faster, and frequent sun exposure can also shorten the duration.',
        'faq3-q': 'Can it be done over existing brow tattoos?',
        'faq3-a': 'We will advise after checking the condition. Photo consultation is required, and removal or correction work may precede depending on the color, depth, and condition of the existing tattoo.',
        'faq4-q': 'How long does the procedure take?',
        'faq4-a': 'It takes about 2-3 hours including consultation and design. We recommend scheduling with plenty of time as we work carefully and thoroughly.',
        'faq5-q': 'Can I resume daily activities after the procedure?',
        'faq5-a': 'Yes, you can resume daily activities immediately. However, for 1 week after the procedure, avoid water, sweat, and sauna, and carefully follow the aftercare instructions.',

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
        'footer-copyright': '© 2025 Green Gyeol. All rights reserved.',
        'footer-location': 'Hong Kong Exclusive Pop-Up · February 2025'
    },
    ko: {
        // Navigation
        'nav-about': '소개',
        'nav-portfolio': '포트폴리오',
        'nav-process': '프로세스',
        'nav-booking': '예약하기',

        // Hero Section
        'hero-label': '홍콩 단독 · 2025년 2월',
        'hero-title-line1': '한국식',
        'hero-title-line2': '결 눈썹',
        'hero-tagline': '자연스러움 · 안전함 · 정밀함',
        'hero-desc1': '한국 기술의 예술성을 경험하세요',
        'hero-desc2': '마스터 아티스트 <strong>하니</strong>',
        'hero-btn-primary': '상담 예약',
        'hero-btn-secondary': '더 알아보기',
        'hero-stat1-number': '5+',
        'hero-stat1-label': '년',
        'hero-stat2-number': '1000+',
        'hero-stat2-label': '고객',
        'hero-stat3-number': '100%',
        'hero-stat3-label': '자연스러움',
        'hero-scroll': '스크롤하여 탐색',

        // Featured Quote
        'quote-text': '진한 눈썹보다 오래 봐도 편안한 눈썹을 만듭니다',
        'quote-author-name': 'Hani',
        'quote-author-title': '마스터 브로우 아티스트',

        // About Section
        'about-label': '아티스트 소개',
        'about-title': 'Hani',
        'about-lead': '한국에서 활동 중인 브로우 아티스트로, 피부 손상을 최소화하는 Hair Stroke 전용 테크닉을 개발하고 발전시켜왔습니다.',
        'about-text': '결 하나하나의 깊이와 방향을 정밀하게 계산하여 자연스럽고 오래 지속되는 눈썹을 디자인합니다. 유행을 따르기보다는 각 개인의 얼굴형과 피부 상태에 최적화된 맞춤 디자인을 제공합니다.',
        'expertise1-title': 'Skin-Friendly Technique',
        'expertise1-desc': '피부 자극을 최소화한 얕고 정확한 깊이',
        'expertise2-title': 'Korean Standard',
        'expertise2-desc': '한국 본점과 동일한 위생 및 기술 기준',
        'expertise3-title': 'Personalized Design',
        'expertise3-desc': '개인별 얼굴형과 피부톤에 맞춘 맞춤 디자인',
        'about-badge': '경력<br>년수',

        // HK Trip Section
        'trip-badge': '이전 방문',
        'trip-title': '2024.11 홍콩 출장',
        'trip-desc': '첫 홍콩 팝업이 큰 성공을 거두었습니다.<br>올해 2월에도 동일한 한국 기준을 경험하세요.',

        // Portfolio Section
        'portfolio-label': '포트폴리오',
        'portfolio-title': '비포 & 애프터',
        'portfolio-desc': '당신의 특징을 살리는 자연스럽고 미묘한 변화',
        'portfolio-label1': '자연스러운 결',
        'portfolio-label2': '피부 친화적 방법',
        'portfolio-label3': '정밀한 스트로크',
        'portfolio-label4': '오래가는 결과',
        'comparison-before': '전',
        'comparison-after': '후',

        // Technique Section
        'technique-label': '우리의 기술',
        'technique-title': '피부 친화적<br>헤어 스트로크',
        'technique-visual-title': '정밀한<br>헤어 스트로크',
        'technique-lead': '피부를 손상시키지 않는 얕고 정확한 깊이로 작업하며, 피부 결을 따라 흐르는 자연스러운 스트로크를 만듭니다.',
        'technique-text': '색 번짐과 퍼짐을 최소화하여 오래도록 선명하고 아름다운 눈썹을 유지합니다. 민감한 피부도 안심하고 시술받을 수 있는 안전한 기법입니다.',
        'technique-feature1-title': '민감성 피부',
        'technique-feature1-desc': '피부 자극을 최소화한 안전한 테크닉',
        'technique-feature2-title': '기존 문신 보정',
        'technique-feature2-desc': '과한 눈썹을 자연스럽게 교정',
        'technique-feature3-title': '자연스러운 결과',
        'technique-feature3-desc': '민낯에도 어색하지 않은 눈썹',

        // Process Section
        'process-label': '우리의 프로세스',
        'process-title': '경험',
        'process-desc': '완벽한 눈썹을 만들기 위한 세심한 접근',
        'process1-title': '상담',
        'process1-desc': '얼굴형, 피부 상태, 원하시는 스타일을 상세히 분석하여 최적의 디자인을 제안합니다',
        'process1-detail1': '얼굴형 분석',
        'process1-detail2': '피부 타입 평가',
        'process1-detail3': '스타일 선호도 상담',
        'process2-title': '디자인',
        'process2-desc': '고객님과 함께 눈썹 모양을 세밀하게 디자인하고 최종 확정합니다',
        'process2-detail1': '맞춤 디자인',
        'process2-detail2': '색상 매칭',
        'process2-detail3': '최종 승인',
        'process3-title': '시술',
        'process3-desc': '정밀한 Hair Stroke 테크닉으로 하나하나 세심하게 시술을 진행합니다',
        'process3-detail1': '정밀한 헤어 스트로크',
        'process3-detail2': '프리미엄 색소',
        'process3-detail3': '최소한의 불편함',
        'process4-title': '애프터케어',
        'process4-desc': '애프터케어 방법을 상세히 안내하여 최상의 결과를 오래 유지할 수 있도록 돕습니다',
        'process4-detail1': '상세한 케어 가이드',
        'process4-detail2': '후속 지원',
        'process4-detail3': '장기 유지 관리',

        // Ideal Clients Section
        'clients-perfect-title': '추천 대상',
        'clients-perfect1': '자연스러운 눈썹을 원하시는 분',
        'clients-perfect2': '피부가 예민하고 민감한 분',
        'clients-perfect3': '기존 눈썹 문신이 과하거나 퍼진 분',
        'clients-perfect4': '메이크업 없이도 깔끔한 인상을 원하시는 분',
        'clients-perfect5': '바쁜 일상에서 아침 시간을 절약하고 싶은 분',
        'clients-not-title': '비추천 대상',
        'clients-not1': '매우 진한 메이크업 눈썹을 원하시는 분',
        'clients-not2': '한 번에 극적인 변화를 원하시는 분',

        // Schedule Section
        'schedule-label': '제한된 예약',
        'schedule-title': '홍콩 팝업',
        'schedule-month': '2월',
        'schedule-year': '2025',
        'schedule-detail1-title': '2월 초',
        'schedule-detail1-desc': '정확한 날짜는 예약 시 확정',
        'schedule-detail2-title': '제한된 슬롯',
        'schedule-detail2-desc': '하루 최대 3-4명',
        'schedule-detail3-title': '프라이빗 장소',
        'schedule-detail3-desc': '예약 확정 후 주소 공유',
        'schedule-alert': '홍콩에서 예정된 유일한 세션입니다. 다음 방문 날짜는 미정입니다.',

        // Pricing Section
        'pricing-label': '가격',
        'pricing-title': '요금',
        'pricing-service-title': '한국식 헤어 스트로크 브로우',
        'pricing-includes-title': '포함 사항',
        'pricing-include1': '종합 상담 및 맞춤 디자인',
        'pricing-include2': '프리미엄 한국산 색소 (안전하고 오래 지속)',
        'pricing-include3': '전문 애프터케어 키트 및 안내',
        'pricing-include4': '후속 상담 (온라인)',
        'pricing-include5': '리터치 정책 (상담 시 세부 사항 안내)',
        'pricing-deposit': '예치금 필요:',
        'pricing-deposit-text': '예약 확정을 위해',
        'pricing-standards': '기준:',
        'pricing-standards-text': '한국 본점과 동일',

        // FAQ Section
        'faq-label': '자주 묻는 질문',
        'faq-title': '자주 묻는 질문',
        'faq1-q': '리터치는 어떻게 하나요?',
        'faq1-a': '홍콩 일정 중 리터치 가능 여부는 상담 시 안내드립니다. 한국 방문 시 리터치도 가능합니다. 일반적으로 첫 시술 후 6-8주 후 리터치를 권장하며, 이를 통해 최적의 결과를 얻을 수 있습니다.',
        'faq2-q': '유지 기간은 얼마나 되나요?',
        'faq2-a': '피부 타입과 생활 습관에 따라 다르지만 평균 1-2년입니다. 지성 피부의 경우 조금 더 빨리 옅어질 수 있으며, 햇빛 노출이 많은 경우에도 지속 기간이 짧아질 수 있습니다.',
        'faq3-q': '기존 눈썹 문신 위에도 시술 가능한가요?',
        'faq3-a': '상태 확인 후 가능 여부를 안내드립니다. 사진 상담이 필수이며, 기존 문신의 색상, 깊이, 상태에 따라 제거 또는 보정 작업이 선행될 수 있습니다.',
        'faq4-q': '시술 시간은 얼마나 걸리나요?',
        'faq4-a': '상담 및 디자인 포함하여 약 2-3시간 소요됩니다. 충분한 시간을 두고 꼼꼼하게 작업하므로 여유 있게 일정을 잡으시는 것을 권장합니다.',
        'faq5-q': '시술 후 일상생활이 가능한가요?',
        'faq5-a': '네, 바로 일상생활이 가능합니다. 다만 시술 후 1주일간은 물, 땀, 사우나 등을 피하시고 애프터케어 안내를 철저히 따라주셔야 합니다.',

        // Booking Section
        'booking-label': '시작할 준비가 되셨나요?',
        'booking-title': '상담 예약하기',
        'booking-desc': '자연스럽고 편안한 눈썹으로 가는 여정을 시작하세요',
        'booking-step1-title': '연락',
        'booking-step1-desc': 'WhatsApp으로 연락',
        'booking-step2-title': '사진',
        'booking-step2-desc': '민낯 눈썹 사진 전송',
        'booking-step3-title': '상담',
        'booking-step3-desc': '디자인 상담',
        'booking-step4-title': '확정',
        'booking-step4-desc': '예약 확정',
        'booking-qr-text': 'QR 코드를 스캔하거나 아래 버튼을 클릭하여 WhatsApp으로 연결하세요',
        'booking-btn': 'WhatsApp으로 예약',

        // Footer
        'footer-tagline': '자연스러움 · 안전함 · 정밀함',
        'footer-quick-links': '빠른 링크',
        'footer-connect': '연결',
        'footer-copyright': '© 2025 그린결. All rights reserved.',
        'footer-location': '홍콩 단독 팝업 · 2025년 2월'
    },
    zh: {
        // Navigation
        'nav-about': '關於',
        'nav-portfolio': '作品集',
        'nav-process': '流程',
        'nav-booking': '立即預約',

        // Hero Section
        'hero-label': '香港獨家 · 2025年2月',
        'hero-title-line1': '韓式',
        'hero-title-line2': '線條眉',
        'hero-tagline': '自然 · 安全 · 精準',
        'hero-desc1': '體驗韓國眉毛技術的藝術性',
        'hero-desc2': '由大師級藝術家 <strong>Hani</strong> 操刀',
        'hero-btn-primary': '預約諮詢',
        'hero-btn-secondary': '了解更多',
        'hero-stat1-number': '5+',
        'hero-stat1-label': '年',
        'hero-stat2-number': '1000+',
        'hero-stat2-label': '客戶',
        'hero-stat3-number': '100%',
        'hero-stat3-label': '自然',
        'hero-scroll': '向下滾動探索',

        // Featured Quote
        'quote-text': '我創造的眉毛不是濃重的，而是看久也舒服的自然眉型',
        'quote-author-name': 'Hani',
        'quote-author-title': '大師級眉毛藝術家',

        // About Section
        'about-label': '關於藝術家',
        'about-title': 'Hani',
        'about-lead': '我是在韓國活躍的眉毛藝術家，開發並改進了將皮膚損傷降至最低的專業 Hair Stroke 技術。',
        'about-text': '精確計算每一條線條的深度和方向，設計自然持久的眉毛。我不追隨潮流，而是提供針對每個人臉型和皮膚狀況優化的客製化設計。',
        'expertise1-title': 'Skin-Friendly Technique',
        'expertise1-desc': '將皮膚刺激降至最低的淺層精確深度',
        'expertise2-title': 'Korean Standard',
        'expertise2-desc': '與韓國總店相同的衛生及技術標準',
        'expertise3-title': 'Personalized Design',
        'expertise3-desc': '針對個人臉型和膚色的客製化設計',
        'about-badge': '專業<br>年資',

        // HK Trip Section
        'trip-badge': '上次訪問',
        'trip-title': '2024.11 香港出差',
        'trip-desc': '我們的首次香港快閃活動獲得了巨大成功。<br>今年2月也能體驗相同的韓國標準。',

        // Portfolio Section
        'portfolio-label': '作品集',
        'portfolio-title': '前後對比',
        'portfolio-desc': '突顯您特色的自然細緻變化',
        'portfolio-label1': '自然線條',
        'portfolio-label2': '護膚方法',
        'portfolio-label3': '精準筆觸',
        'portfolio-label4': '持久效果',
        'comparison-before': '之前',
        'comparison-after': '之後',

        // Technique Section
        'technique-label': '我們的技術',
        'technique-title': '護膚型<br>線條眉',
        'technique-visual-title': '精準<br>線條眉',
        'technique-lead': '以不損傷皮膚的淺層精確深度工作，創造順著皮膚紋理流動的自然線條。',
        'technique-text': '將顏色暈染和擴散降至最低，長期保持清晰美麗的眉毛。這是敏感肌膚也能安心接受的安全技術。',
        'technique-feature1-title': '敏感肌膚',
        'technique-feature1-desc': '將皮膚刺激降至最低的安全技術',
        'technique-feature2-title': '既有紋身修正',
        'technique-feature2-desc': '自然修正過度的眉毛',
        'technique-feature3-title': '自然效果',
        'technique-feature3-desc': '素顏也不突兀的眉毛',

        // Process Section
        'process-label': '我們的流程',
        'process-title': '體驗',
        'process-desc': '打造完美眉毛的細緻方法',
        'process1-title': '諮詢',
        'process1-desc': '詳細分析您的臉型、皮膚狀況和期望風格，提出最佳設計',
        'process1-detail1': '臉型分析',
        'process1-detail2': '皮膚類型評估',
        'process1-detail3': '風格偏好討論',
        'process2-title': '設計',
        'process2-desc': '與您一起仔細設計眉毛形狀並最終確定',
        'process2-detail1': '客製化設計',
        'process2-detail2': '顏色搭配',
        'process2-detail3': '最終確認',
        'process3-title': '施作',
        'process3-desc': '使用精準的 Hair Stroke 技術細心進行施作',
        'process3-detail1': '精準的線條',
        'process3-detail2': '頂級色料',
        'process3-detail3': '最小不適感',
        'process4-title': '術後護理',
        'process4-desc': '詳細說明術後護理方法，協助您長期保持最佳效果',
        'process4-detail1': '詳細護理指南',
        'process4-detail2': '後續支援',
        'process4-detail3': '長期維護',

        // Ideal Clients Section
        'clients-perfect-title': '適合對象',
        'clients-perfect1': '想要自然眉毛的人',
        'clients-perfect2': '皮膚敏感的人',
        'clients-perfect3': '既有眉毛紋身過度或暈染的人',
        'clients-perfect4': '希望不化妝也能保持整潔印象的人',
        'clients-perfect5': '在忙碌生活中想節省早晨時間的人',
        'clients-not-title': '不適合對象',
        'clients-not1': '想要非常濃密化妝眉的人',
        'clients-not2': '希望一次就有戲劇性變化的人',

        // Schedule Section
        'schedule-label': '名額有限',
        'schedule-title': '香港快閃',
        'schedule-month': '二月',
        'schedule-year': '2025',
        'schedule-detail1-title': '2月初',
        'schedule-detail1-desc': '確切日期將於預約時確認',
        'schedule-detail2-title': '名額有限',
        'schedule-detail2-desc': '每天最多3-4位客戶',
        'schedule-detail3-title': '私人地點',
        'schedule-detail3-desc': '預約確認後分享地址',
        'schedule-alert': '這是唯一排定的香港場次。下次訪問日期待定。',

        // Pricing Section
        'pricing-label': '投資',
        'pricing-title': '價格',
        'pricing-service-title': '韓式線條眉',
        'pricing-includes-title': '包含項目',
        'pricing-include1': '全面諮詢及客製化設計',
        'pricing-include2': '頂級韓國色料（安全且持久）',
        'pricing-include3': '專業術後護理套組及說明',
        'pricing-include4': '後續諮詢（線上）',
        'pricing-include5': '補色政策（諮詢時說明細節）',
        'pricing-deposit': '需要訂金：',
        'pricing-deposit-text': '確保您的預約',
        'pricing-standards': '標準：',
        'pricing-standards-text': '與韓國旗艦店相同',

        // FAQ Section
        'faq-label': '常見問題',
        'faq-title': '常見問題',
        'faq1-q': '補色如何進行？',
        'faq1-a': '香港期間是否可以補色將在諮詢時告知。訪問韓國時也可以補色。通常建議在首次施作後6-8週進行補色，以獲得最佳效果。',
        'faq2-q': '維持期有多長？',
        'faq2-a': '因皮膚類型和生活習慣而異，但平均為1-2年。油性皮膚可能會更快變淡，經常曝曬於陽光下也會縮短持續時間。',
        'faq3-q': '可以在既有眉毛紋身上施作嗎？',
        'faq3-a': '確認狀況後將告知是否可行。需要提供照片諮詢，根據既有紋身的顏色、深度和狀況，可能需要先進行移除或修正作業。',
        'faq4-q': '施作時間需要多久？',
        'faq4-a': '包含諮詢和設計約需2-3小時。由於我們會仔細認真工作，建議預留充足時間。',
        'faq5-q': '施作後可以恢復日常生活嗎？',
        'faq5-a': '是的，可以立即恢復日常生活。但施作後一週內需避免接觸水、汗水和桑拿，並嚴格遵守術後護理說明。',

        // Booking Section
        'booking-label': '準備好開始了嗎？',
        'booking-title': '預約諮詢',
        'booking-desc': '開始您通往自然輕鬆眉毛的旅程',
        'booking-step1-title': '聯繫',
        'booking-step1-desc': '透過 WhatsApp 聯繫',
        'booking-step2-title': '照片',
        'booking-step2-desc': '傳送素顏眉毛照片',
        'booking-step3-title': '諮詢',
        'booking-step3-desc': '設計諮詢',
        'booking-step4-title': '確認',
        'booking-step4-desc': '預約確認',
        'booking-qr-text': '掃描 QR 碼或點擊下方按鈕透過 WhatsApp 聯繫',
        'booking-btn': '透過 WhatsApp 預約',

        // Footer
        'footer-tagline': '自然 · 安全 · 精準',
        'footer-quick-links': '快速連結',
        'footer-connect': '聯繫',
        'footer-copyright': '© 2025 Green Gyeol. 版權所有。',
        'footer-location': '香港獨家快閃 · 2025年2月'
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
