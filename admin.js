/* =========================================
   ADMIN PANEL - JAVASCRIPT ENGINE
   إدارة السنبلاوين التعليمية
   ========================================= */

'use strict';

const ADMIN_PASSWORD = 'م/ادهم محمد';
const ADMIN_AUTH_SESSION_KEY = 'admin_authenticated';

// ======================== DEFAULT DATA ========================
const DEFAULT_SCHOOLS = [
    { id: 1, name: "مدرسة السادات الثانوية بنين", type: "boys", typeName: "ثانوي عام - بنين", location: "السنبلاوين - شارع الإدارة التعليمية", area: "السنبلاوين المدينة", code: "210408", studentsCount: "1,350 طالب", principal: "إدارة مدرسة السادات الثانوية بنين", image: "q.jpeg", link: "https://el-sadat-school.vercel.app/", hasLiveSite: true, description: "إحدى أعرق المدارس الثانوية للبنين بإدارة السنبلاوين، مجهزة بأحدث معامل التطوير التكنولوجي والشاشات التفاعلية والفصول الذكية.", features: ["معامل علوم متطورة", "شاشات تفاعلية ذكية", "موقع إلكتروني متكامل", "أنشطة رياضية وكشفية"] },
    { id: 2, name: "المقاطعة الثانوية المشتركة", type: "mixed", typeName: "ثانوي عام - مشترك", location: "قرية المقاطعة - مركز السنبلاوين", area: "قرى السنبلاوين", code: "210415", studentsCount: "1,120 طالب وطالبة", principal: "إدارة مدرسة المقاطعة الثانوية", image: "a.jpeg", link: "schools/school-2.html", hasLiveSite: true, description: "صرح تعليمي يخدم طلاب وطالبات قرية المقاطعة والقرى المجاورة، يتميز بنسب تفوق عالية في امتحانات الثانوية العامة والأنشطة.", features: ["مكتبة تعليمية شاملة", "معمل حاسب آلي مطور", "أنشطة ثقافية متميزة"] },
    { id: 3, name: "أحمد لطفي السيد الثانوية بنين", type: "boys", typeName: "ثانوي عام - بنين", location: "السنبلاوين - شارع المدارس (بجوار الادارة التعليميه)", area: "السنبلاوين المدينة", code: "210422", studentsCount: "1,380 طالب", principal: "إدارة مدرسة أحمد لطفي السيد", image: "i.jpeg", link: "schools/school-3.html", hasLiveSite: true, description: "مدرسة رائدة تحمل اسم مفكر مصر ورائد التنوير أحمد لطفي السيد، وتضم كادراً تعليمياً متميزاً وبيئة تربوية منضبطة.", features: ["بيئة تعليمية منضبطة", "مسابقات أوائل الطلبة", "صالات تدريب رياضي"] },
    { id: 4, name: "السنبلاوين الرسمية للغات المشتركة", type: "languages", typeName: "رسمي لغات - مشتركة", location: "السنبلاوين - بجوار الإدارة التعليمية", area: "السنبلاوين المدينة", code: "210430", studentsCount: "950 طالب وطالبة", principal: "إدارة مدرسة السنبلاوين الرسمية للغات", image: "u.jpeg", link: "schools/school-4.html", hasLiveSite: true, description: "المدرسة الرسمية للغات الأولى بالمركز، تدرس المناهج باللغة الإنجليزية بإشراف مباشر من توجيه اللغات بالمديرية.", features: ["تدريس اللغات الأجنبية", "معامل لغات متقدمة", "مناهج دولية معتمدة", "نوادي علوم وابتكار"] },
    { id: 5, name: "كفر غنام الثانوية المشتركة", type: "mixed", typeName: "ثانوي عام - مشتركة", location: "قرية كفر غنام - مركز السنبلاوين", area: "قرى السنبلاوين", code: "210444", studentsCount: "890 طالب وطالبة", principal: "إدارة مدرسة كفر غنام الثانوية", image: "w.jpeg", link: "schools/school-5.html", hasLiveSite: true, description: "مدرسة حديثة التطوير تخدم قطاع جنوب السنبلاوين ومجهزة بأحدث وسائل التعلم الحديثة وشبكة الألياف الضوئية.", features: ["إنترنت فائق السرعة", "فصول مجهزة وشاشات ذكية", "ملاعب رياضية حديثة"] },
    { id: 6, name: "السنبلاوين الثانوية بنات", type: "girls", typeName: "ثانوي عام - بنات", location: "السنبلاوين - شارع الجمهورية (حي النزهة)", area: "السنبلاوين المدينة", code: "210450", studentsCount: "1,600 طالبة", principal: "إدارة مدرسة السنبلاوين الثانوية بنات", image: "خ.jpg", link: "schools/school-6.html", hasLiveSite: true, description: "أكبر مدارس المرحلة الثانوية للبنات بالمركز، تمتاز بتخريج أوائل المحافظة سنوياً والتميز في الأنشطة الطلابية والمسابقات الإبداعية.", features: ["مسرح مدرسي متكامل", "معامل أحياء وفيزياء وكيمياء", "أندية فتيات وموهوبين"] },
    { id: 7, name: "ابوقراميط الثانوية المشتركة", type: "mixed", typeName: "ثانوي عام - مشتركة", location: "قرية أبو قراميط - مركز السنبلاوين", area: "قرى السنبلاوين", code: "210461", studentsCount: "1,250 طالب وطالبة", principal: "إدارة مدرسة ابوقراميط الثانوية المشتركة", image: "ق.jpg", link: "schools/school-7.html", hasLiveSite: true, description: "صرح تعليمي يخدم قطاع قرية أبو قراميط والقرى المجاورة، مجهزة بمعامل علمية وفصول ذكية وشبكات تكنولوجية متطورة.", features: ["فصول نموذجية حديثة", "معامل تابلت وشبكات", "أنشطة لياقة بدنية وثقافية"] },
    { id: 8, name: "طهواى الثانوية المشتركة", type: "mixed", typeName: "ثانوي عام - مشتركة", location: "قرية طهواي - مركز السنبلاوين", area: "قرى السنبلاوين", code: "210472", studentsCount: "980 طالب وطالبة", principal: "إدارة مدرسة طهواى الثانوية المشتركة", image: "ن.jpg", link: "schools/school-8.html", hasLiveSite: true, description: "صرح تعليمي عريق يخدم قرية طهواي وتوابعها، ويوفر بيئة تربوية هادئة ومحفزة على الإبداع والتفوق العلمي.", features: ["مكتبة إلكترونية وبنك المعرفة", "معارض علمية وفنية", "تواصل إلكتروني مع أولياء الأمور"] },
    { id: 9, name: "ميت غراب وشبراهور الثانوية المشتركة", type: "mixed", typeName: "ثانوي عام - مشتركة", location: "قرية ميت غراب - مركز السنبلاوين", area: "قرى السنبلاوين", code: "210480", studentsCount: "820 طالب وطالبة", principal: "إدارة مدرسة ميت غراب وشبراهور الثانوية", image: "WhatsApp Image 2026-09-27 at 5.56.24 PM.jpeg", link: "schools/school-9.html", hasLiveSite: true, description: "مدرسة متميزة بنشاطها الاجتماعي والتربوي ومشاريع الطلاب، تخدم قريتي ميت غراب وشبراهور بالقطاع الغربي للإدارة.", features: ["فصول نموذجية وشاشات ذكية", "إشراف تربوي متكامل", "أنشطة بيئية وتوعوية"] },
    { id: 10, name: "الشهيد محمد الراعي الثانوية بالجلايله المشتركة", type: "mixed", typeName: "ثانوي عام - مشتركة", location: "قرية الجلايلة - مركز السنبلاوين", area: "قرى السنبلاوين", code: "210492", studentsCount: "1,050 طالب وطالبة", principal: "إدارة مدرسة الشهيد محمد الراعي الثانوية", image: "WhatsApp Image 2026-09-27 at 6.03.07 PM.jpeg", link: "schools/school-10.html", hasLiveSite: true, description: "تخدم قطاع قرية الجلايلة والقرى المجاورة وتتمتع ببنية تكنولوجية حديثة وكادر تدريسي متميز لتدريس منظومة الثانوية العامة.", features: ["شبكة إنترنت ألياف ضوئية", "غرفة تدريب وتطوير تكنولوجي", "فريق مسابقات أوائل الطلبة"] },
    { id: 11, name: "السنبلاوين الرسمية المتميزة لغات المشتركة", type: "languages", typeName: "رسمي لغات متميز - مشتركة", location: "السنبلاوين - شارع المعاهدة (بجوار الأزهري)", area: "السنبلاوين المدينة", code: "210501", studentsCount: "780 طالب وطالبة", principal: "إدارة مدرسة السنبلاوين الرسمية المتميزة للغات", image: "WhatsApp Image 2026-09-27 at 6.05.21 PM.jpeg", link: "schools/school-11.html", hasLiveSite: true, description: "مؤسسة تعليمية نوعية بمدينة السنبلاوين تهدف إلى تقديم تعليم لغات رفيع المستوى ورعاية خاصة للطلاب الموهوبين والمتفوقين.", features: ["رعاية الفائقين والمبدعين", "قاعات ورش عمل تفاعلية", "معامل حاسب ومكتبة رقمية"] },
    { id: 12, name: "غزالة الثانوية المشتركة", type: "mixed", typeName: "ثانوي عام - مشتركة", location: "قرية غزالة - مركز السنبلاوين", area: "قرى السنبلاوين", code: "210515", studentsCount: "710 طالب وطالبة", principal: "إدارة مدرسة غزالة الثانوية", image: "Gemini_Generated_Image_g9c38tg9c38tg9c3.jpg", link: "schools/school-12.html", hasLiveSite: true, description: "مدرسة هادئة وواعدة توفر مناخاً دراسياً نموذجياً يتيح للطلاب التركيز والتفوق في كافة الشعب العلمية والأدبية.", features: ["متابعة دراسية دقيقة", "مجموعات تقوية مجانية", "أنشطة صحافة مدرسية"] },
    { id: 13, name: "الزهايره الثانوية المشتركة", type: "mixed", typeName: "ثانوي عام - مشتركة", location: "قرية الزهايرة - مركز السنبلاوين", area: "قرى السنبلاوين", code: "210522", studentsCount: "670 طالب وطالبة", principal: "إدارة مدرسة الزهايرة الثانوية المشتركة", image: "WhatsApp Image 2026-09-27 at 6.06.50 PM.jpeg", link: "schools/school-13.html", hasLiveSite: true, description: "مؤسسة تعليمية نموذجية تخدم قرية الزهايرة وتوابعها، حاصلة على شهادات تقدير من الإدارة لحسن الانضباط المدرسي والمستوى التعليمي.", features: ["انضباط دراسي تام", "مكتبة حديثة", "معمل لغات وعلوم"] },
    { id: 14, name: "الشهيد مصطفى فتوح جبر الثانوية المشتركة", type: "mixed", typeName: "ثانوي عام - مشتركة", location: "قرية كفر طنبول القديم - مركز السنبلاوين", area: "قرى السنبلاوين", code: "210530", studentsCount: "850 طالب وطالبة", principal: "إدارة مدرسة الشهيد مصطفى فتوح جبر الثانوية", image: "Gemini_Generated_Image_cvqxkmcvqxkmcvqx.jpg", link: "schools/school-14.html", hasLiveSite: true, description: "صرح تعليمي ثانوي يخدم أبناء قرية كفر طنبول القديم والقرى المجاورة، يحمل اسم شهيد الوطن البطل مصطفى فتوح جبر تقديراً لتضحيته.", features: ["فصول دراسية حديثة", "معامل علوم وتطوير تكنولوجي", "أنشطة وطنية ورياضية"] },
    { id: 15, name: "طوخ الأقلام الثانوية المشتركة", type: "mixed", typeName: "ثانوي عام - مشتركة", location: "قرية طوخ الأقلام - مركز السنبلاوين", area: "قرى السنبلاوين", code: "210540", studentsCount: "950 طالب وطالبة", principal: "إدارة مدرسة طوخ الأقلام الثانوية المشتركة", image: "Gemini_Generated_Image_720j40720j40720j.jpg", link: "schools/school-15.html", hasLiveSite: true, description: "صرح تعليمي يخدم قطاع قرية طوخ الأقلام وتوابعها بمركز السنبلاوين، مجهزة بكافة الوسائل التعليمية الحديثة والأنشطة الطلابية المتنوعة.", features: ["معامل تكنولوجية متطورة", "مكتبة علمية شاملة", "أنشطة ثقافية ورياضية"] },
    { id: 16, name: "صبح كاعوه الثانوية المشتركة", type: "mixed", typeName: "ثانوي عام - مشتركة", location: "قرية برهمتوش - مركز السنبلاوين", area: "قرى السنبلاوين", code: "210555", studentsCount: "1,220 طالب وطالبة", principal: "إدارة مدرسة صبح كاعوه الثانوية المشتركة", image: "Gemini_Generated_Image_k8uhd4k8uhd4k8uh.jpg", link: "schools/school-16.html", hasLiveSite: true, description: "إحدى كبرى المدارس الثانوية بقطاع قرى السنبلاوين، تقع بقرية برهمتوش وتخدم عدداً من القرى المجاورة بفصولها ومرافقها المتطورة.", features: ["مساحات وملاعب واسعة", "معامل علمية وتكنولوجية حديثة", "شاشات تفاعلية ذكية"] },
    { id: 17, name: "حسين عثمان الثانوية المشتركة بشبرا سندى", type: "mixed", typeName: "ثانوي عام - مشتركة", location: "قرية شبرا سندي - مركز السنبلاوين", area: "قرى السنبلاوين", code: "210568", studentsCount: "1,100 طالب وطالبة", principal: "إدارة مدرسة حسين عثمان الثانوية المشتركة", image: "Gemini_Generated_Image_5uuyar5uuyar5uuy.jpg", link: "schools/school-17.html", hasLiveSite: true, description: "صرح تعليمي يخدم طلاب وطالبات قرية شبرا سندي والقرى المحيطة، وتوفر بيئة تعليمية منضبطة وداعمة للتفوق الدراسي وبناء الشخصية.", features: ["فصول نموذجية حديثة", "معمل حاسب آلي وتطوير", "مكتبة مدرسية شاملة"] },
    { id: 18, name: "البلامون الثانوية المشتركة", type: "mixed", typeName: "ثانوي عام - مشتركة", location: "قرية البلامون - مركز السنبلاوين", area: "قرى السنبلاوين", code: "210579", studentsCount: "1,180 طالب وطالبة", principal: "إدارة مدرسة البلامون الثانوية المشتركة", image: "Gemini_Generated_Image_6xhnxw6xhnxw6xhn.jpg", link: "schools/school-18.html", hasLiveSite: true, description: "مدرسة ثانوية متميزة تخدم أهالي وطلاب قرية البلامون والقرى المجاورة، وتتميز بنسب تفوق مشرفة في الثانوية العامة والأنشطة المتعددة.", features: ["معامل علوم متكاملة", "شبكة إنترنت وألياف ضوئية", "أنشطة رياضية وفنية"] }
];

const DEFAULT_STATS = [
    { icon: "fa-school", number: "18+", label: "مدرسة ثانوية ورسمية" },
    { icon: "fa-user-graduate", number: "+25,000", label: "طالب وطالبة بالثانوي" },
    { icon: "fa-chalkboard-user", number: "+2,100", label: "معلم وإداري متميز" },
    { icon: "fa-award", number: "100%", label: "ربط وتطوير تكنولوجي" }
];

const DEFAULT_SERVICES = [
    { id: 1, title: "المكتبة الإلكترونية والتقييمات", icon: "fa-book-open-reader", desc: "الوصول المباشر إلى منصة التقييمات والأداءات والمصادر التعليمية الرقمية والمناهج المعتمدة من وزارة التربية والتعليم لكافة المراحل.", link: "https://ellibrary.moe.gov.eg/Performance_Assessments/", linkText: "دخول المكتبة والتقييمات" },
    { id: 2, title: "رعاية الموهوبين والأنشطة", icon: "fa-trophy", desc: "التسجيل في المسابقات الثقافية والعلمية، ودوري أوائل الطلبة، والمعارض الفنية على مستوى الإدارة.", link: "javascript:alert('باب التسجيل في مسابقات العام الدراسي مفتوح');", linkText: "استعراض المسابقات" }
];

const DEFAULT_NAV_LINKS = [
    { text: "الرئيسية", href: "#hero", icon: "fa-house" },
    { text: "دليل المدارس", href: "#schools", icon: "fa-school" },
    { text: "الخدمات الإلكترونية", href: "#services", icon: "fa-laptop-code" },
    { text: "عن الإدارة", href: "#about", icon: "fa-landmark" }
];

const DEFAULT_ABOUT_FEATURES = [
    "بنية تحتية وشبكات ألياف ضوئية",
    "شاشات وفصول تفاعلية ذكية",
    "مراكز تدريب وتطوير تكنولوجي معتمدة",
    "رعاية متكاملة للفائقين والمبتكرين"
];

const DEFAULT_FOOTER_QUICK_LINKS = [
    { text: "الصفحة الرئيسية", href: "#hero" },
    { text: "دليل المدارس الثانوية", href: "#schools" },
    { text: "بوابة الخدمات الإلكترونية", href: "#services" },
    { text: "الرؤية والرسالة التربوية", href: "#about" },
    { text: "موقع مدرسة السادات بنين", href: "https://el-sadat-school.vercel.app/" }
];

const DEFAULT_FOOTER_PLATFORMS = [
    { text: "وزارة التربية والتعليم", href: "https://moe.gov.eg/" },
    { text: "المكتبة الإلكترونية والتقييمات", href: "https://ellibrary.moe.gov.eg/Performance_Assessments/" },
    { text: "بنك المعرفة المصري", href: "https://www.ekb.eg/" },
    { text: "منصة مدرستنا التعليمية", href: "https://madrasetna.moe.gov.eg/" },
    { text: "مركز معلومات الوزارة (EMIS)", href: "https://emis.gov.eg/" }
];

// ======================== STATE ========================
let appState = {
    schools: [],
    stats: [],
    services: [],
    navLinks: [],
    aboutFeatures: [],
    footerQuickLinks: [],
    footerPlatforms: [],
    hasUnsaved: false
};

let deleteCallback = null;

// ======================== INIT ========================
document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem(ADMIN_AUTH_SESSION_KEY) === 'true') {
        document.getElementById('loginScreen')?.classList.add('hidden');
    }

    loadFromStorage();
    initSidebar();
    initClock();
    renderDashboard();
    renderSchoolsAdmin();
    renderServicesAdmin();
    renderStatsEditor();
    renderNavLinksEditor();
    renderAboutFeaturesEditor();
    renderFooterEditors();
    loadContentFields();
    initMobileMenu();
});

// ======================== LOGIN ========================
function attemptLogin() {
    const passwordInput = document.getElementById('adminPasswordInput');
    const loginError = document.getElementById('loginError');

    if (passwordInput.value === ADMIN_PASSWORD) {
        sessionStorage.setItem(ADMIN_AUTH_SESSION_KEY, 'true');
        loginError.classList.remove('show');
        document.getElementById('loginScreen').classList.add('hidden');
        return;
    }

    loginError.classList.add('show');
    passwordInput.focus();
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('adminPasswordInput');
    const eyeIcon = document.getElementById('eyeIcon');
    const isPasswordHidden = passwordInput.type === 'password';

    passwordInput.type = isPasswordHidden ? 'text' : 'password';
    eyeIcon.classList.toggle('fa-eye', !isPasswordHidden);
    eyeIcon.classList.toggle('fa-eye-slash', isPasswordHidden);
}

function doLogout() {
    sessionStorage.removeItem(ADMIN_AUTH_SESSION_KEY);
    document.getElementById('adminPasswordInput').value = '';
    document.getElementById('loginScreen').classList.remove('hidden');
}

// ======================== STORAGE ========================
function loadFromStorage() {
    try {
        appState.schools = JSON.parse(localStorage.getItem('admin_schools')) || [...DEFAULT_SCHOOLS];
        appState.stats = JSON.parse(localStorage.getItem('admin_stats')) || [...DEFAULT_STATS];
        appState.services = JSON.parse(localStorage.getItem('admin_services')) || [...DEFAULT_SERVICES];
        appState.navLinks = JSON.parse(localStorage.getItem('admin_navLinks')) || [...DEFAULT_NAV_LINKS];
        appState.aboutFeatures = JSON.parse(localStorage.getItem('admin_aboutFeatures')) || [...DEFAULT_ABOUT_FEATURES];
        appState.footerQuickLinks = JSON.parse(localStorage.getItem('admin_footerQuickLinks')) || [...DEFAULT_FOOTER_QUICK_LINKS];
        appState.footerPlatforms = JSON.parse(localStorage.getItem('admin_footerPlatforms')) || [...DEFAULT_FOOTER_PLATFORMS];
    } catch(e) {
        console.error('Error loading from storage:', e);
        resetToDefaults();
    }
}

function saveToStorage() {
    localStorage.setItem('admin_schools', JSON.stringify(appState.schools));
    localStorage.setItem('admin_stats', JSON.stringify(appState.stats));
    localStorage.setItem('admin_services', JSON.stringify(appState.services));
    localStorage.setItem('admin_navLinks', JSON.stringify(appState.navLinks));
    localStorage.setItem('admin_aboutFeatures', JSON.stringify(appState.aboutFeatures));
    localStorage.setItem('admin_footerQuickLinks', JSON.stringify(appState.footerQuickLinks));
    localStorage.setItem('admin_footerPlatforms', JSON.stringify(appState.footerPlatforms));

    // Save content fields
    const contentKeys = ['noticeText','noticeBadgeText','workHours','locationText','heroPill','heroTitle','heroTitleSpan','heroDesc','heroBtnPrimary','heroBtnSecondary','emblumTitle','emblumDesc','schoolsSectionSub','schoolsSectionMain','filterTitle','subMinistry','mainTitle','tagline','pageTitle','servicesSectionSub','servicesSectionMain','ctaBtnText','ctaBtnLink','aboutSub','aboutTitle','aboutDesc','aboutAddress','aboutHQTitle','aboutWorkHours','footerCredits1','footerCredits2','footerGift','footerCopyright','footerBrandDesc'];
    const contentData = {};
    contentKeys.forEach(key => {
        const el = document.getElementById(key);
        if (el) contentData[key] = el.value;
    });
    localStorage.setItem('admin_content', JSON.stringify(contentData));
}

function loadContentFields() {
    try {
        const saved = JSON.parse(localStorage.getItem('admin_content')) || {};
        Object.keys(saved).forEach(key => {
            const el = document.getElementById(key);
            if (el) el.value = saved[key];
        });
    } catch(e) {}
}

function markUnsaved() {
    appState.hasUnsaved = true;
    const badge = document.getElementById('unsavedBadge');
    if (badge) badge.style.display = 'block';
}

// ======================== SIDEBAR ========================
function initSidebar() {
    const toggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const mainWrapper = document.getElementById('mainWrapper');

    if (toggle && sidebar) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            mainWrapper.classList.toggle('expanded');
        });
    }

    // Nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const panel = item.getAttribute('data-panel');
            if (panel) switchPanel(panel);
            // Close mobile sidebar
            sidebar.classList.remove('mobile-open');
            document.getElementById('sidebarOverlay')?.classList.remove('show');
        });
    });
}

function switchPanel(panelName) {
    // Update nav active
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('data-panel') === panelName) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Show panel
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(`panel-${panelName}`);
    if (target) target.classList.add('active');

    // Update breadcrumb
    const labels = {
        dashboard: 'لوحة المعلومات', schools: 'إدارة المدارس', content: 'محتوى الصفحة',
        stats: 'الإحصائيات', services: 'الخدمات الإلكترونية', navigation: 'شريط التنقل',
        about: 'قسم عن الإدارة', footer: 'تذييل الصفحة', backup: 'النسخ الاحتياطي'
    };
    const bc = document.getElementById('breadcrumbText');
    if (bc) bc.textContent = labels[panelName] || panelName;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ======================== MOBILE MENU ========================
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-mobile-overlay';
    overlay.id = 'sidebarOverlay';
    document.body.appendChild(overlay);

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            sidebar.classList.add('mobile-open');
            overlay.classList.add('show');
        });
    }

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('show');
    });
}

// ======================== CLOCK ========================
function initClock() {
    function updateTime() {
        const now = new Date();
        const timeEl = document.getElementById('headerTime');
        if (timeEl) {
            timeEl.textContent = now.toLocaleTimeString('ar-EG', {
                hour: '2-digit', minute: '2-digit', second: '2-digit'
            });
        }
    }
    updateTime();
    setInterval(updateTime, 1000);
}

// ======================== DASHBOARD ========================
function renderDashboard() {
    updateDashStats();
    renderDashTable();
}

function updateDashStats() {
    const el = document.getElementById('dashSchoolsNum');
    const navCount = document.getElementById('navSchoolsCount');
    if (el) el.textContent = appState.schools.length;
    if (navCount) navCount.textContent = appState.schools.length;
}

function renderDashTable() {
    const tbody = document.getElementById('dashSchoolsBody');
    if (!tbody) return;
    tbody.innerHTML = appState.schools.map((s, i) => `
        <tr>
            <td><strong style="color:var(--primary)">${i + 1}</strong></td>
            <td><strong style="color:var(--text-primary)">${s.name}</strong></td>
            <td><span class="table-type-badge badge-${s.type}">${s.typeName}</span></td>
            <td>${s.area}</td>
            <td>${s.studentsCount}</td>
            <td style="display:flex;gap:6px">
                <button class="table-action-btn" onclick="openEditSchoolModal(${s.id})"><i class="fa-solid fa-pen"></i> تعديل</button>
                <button class="table-action-btn danger" onclick="confirmDeleteSchool(${s.id})"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

// ======================== SCHOOLS ADMIN ========================
function renderSchoolsAdmin(filter = {}) {
    const grid = document.getElementById('schoolsAdminGrid');
    if (!grid) return;

    let schools = [...appState.schools];

    const searchQ = (filter.search || document.getElementById('adminSchoolSearch')?.value || '').toLowerCase();
    const typeF = filter.type || document.getElementById('adminTypeFilter')?.value || 'all';
    const areaF = filter.area || document.getElementById('adminAreaFilter')?.value || 'all';

    if (searchQ) schools = schools.filter(s => s.name.toLowerCase().includes(searchQ) || s.location.toLowerCase().includes(searchQ) || s.code.includes(searchQ));
    if (typeF !== 'all') schools = schools.filter(s => s.type === typeF);
    if (areaF !== 'all') schools = schools.filter(s => s.area === areaF);

    if (schools.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted)"><i class="fa-solid fa-magnifying-glass" style="font-size:40px;margin-bottom:16px;display:block"></i><p>لا توجد مدارس مطابقة للبحث</p></div>`;
        return;
    }

    grid.innerHTML = schools.map(s => `
        <div class="school-admin-card">
            <div style="position:relative">
                <img class="school-admin-card-img" src="${s.image}" alt="${s.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div class="school-admin-card-img-placeholder" style="display:none"><i class="fa-solid fa-school"></i></div>
                <div class="school-card-overlay">
                    <span class="table-type-badge badge-${s.type}" style="font-size:10px">${s.typeName}</span>
                </div>
            </div>
            <div class="school-card-body">
                <div class="school-card-name">${s.name}</div>
                <div class="school-card-meta"><i class="fa-solid fa-location-dot"></i> ${s.location}</div>
                <div class="school-card-meta"><i class="fa-solid fa-id-card"></i> كود: ${s.code}</div>
                <div class="school-card-meta"><i class="fa-solid fa-users"></i> ${s.studentsCount}</div>
                <div class="school-card-actions">
                    <button class="btn-card-edit" onclick="openEditSchoolModal(${s.id})">
                        <i class="fa-solid fa-pen-to-square"></i> تعديل
                    </button>
                    <button class="btn-card-delete" onclick="confirmDeleteSchool(${s.id})" title="حذف">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterAdminSchools() {
    renderSchoolsAdmin();
}

// ======================== SCHOOL MODAL ========================
function openAddSchoolModal() {
    document.getElementById('schoolModalTitle').textContent = 'إضافة مدرسة جديدة';
    document.getElementById('schoolEditId').value = '';
    clearSchoolForm();
    openModal('schoolModal');
}

function openEditSchoolModal(id) {
    const school = appState.schools.find(s => s.id === id);
    if (!school) return;

    document.getElementById('schoolModalTitle').textContent = 'تعديل بيانات المدرسة';
    document.getElementById('schoolEditId').value = id;
    document.getElementById('sName').value = school.name || '';
    document.getElementById('sCode').value = school.code || '';
    document.getElementById('sType').value = school.type || 'mixed';
    document.getElementById('sTypeName').value = school.typeName || '';
    document.getElementById('sArea').value = school.area || 'السنبلاوين المدينة';
    document.getElementById('sStudents').value = school.studentsCount || '';
    document.getElementById('sLocation').value = school.location || '';
    document.getElementById('sImage').value = school.image || '';
    document.getElementById('sLink').value = school.link || '';
    document.getElementById('sDesc').value = school.description || '';
    document.getElementById('sFeatures').value = (school.features || []).join('\n');
    document.getElementById('sHasLive').checked = school.hasLiveSite !== false;

    openModal('schoolModal');
}

function clearSchoolForm() {
    ['sName','sCode','sTypeName','sStudents','sLocation','sImage','sLink','sDesc','sFeatures'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    document.getElementById('sType').value = 'mixed';
    document.getElementById('sArea').value = 'السنبلاوين المدينة';
    document.getElementById('sHasLive').checked = true;
}

function saveSchool() {
    const name = document.getElementById('sName').value.trim();
    if (!name) { showToast('يرجى إدخال اسم المدرسة', 'error'); return; }

    const editId = document.getElementById('schoolEditId').value;
    const typeVal = document.getElementById('sType').value;
    const typeNames = { boys: 'ثانوي عام - بنين', girls: 'ثانوي عام - بنات', mixed: 'ثانوي عام - مشترك', languages: 'رسمي لغات وتجريبي' };

    const schoolData = {
        name,
        code: document.getElementById('sCode').value.trim(),
        type: typeVal,
        typeName: document.getElementById('sTypeName').value.trim() || typeNames[typeVal],
        area: document.getElementById('sArea').value,
        studentsCount: document.getElementById('sStudents').value.trim(),
        location: document.getElementById('sLocation').value.trim(),
        image: document.getElementById('sImage').value.trim() || 'q.jpeg',
        link: document.getElementById('sLink').value.trim(),
        description: document.getElementById('sDesc').value.trim(),
        features: document.getElementById('sFeatures').value.split('\n').map(f => f.trim()).filter(Boolean),
        hasLiveSite: document.getElementById('sHasLive').checked
    };

    if (editId) {
        const idx = appState.schools.findIndex(s => s.id == editId);
        if (idx > -1) {
            appState.schools[idx] = { ...appState.schools[idx], ...schoolData };
            showToast('تم تحديث بيانات المدرسة بنجاح ✅', 'success');
        }
    } else {
        const maxId = appState.schools.reduce((max, s) => Math.max(max, s.id), 0);
        appState.schools.push({ id: maxId + 1, principal: `إدارة ${name}`, ...schoolData });
        showToast('تمت إضافة المدرسة بنجاح ✅', 'success');
    }

    markUnsaved();
    closeSchoolModal();
    renderSchoolsAdmin();
    renderDashboard();
    saveToStorage();
}

function closeSchoolModal() { closeModal('schoolModal'); }

// ======================== DELETE ========================
function confirmDeleteSchool(id) {
    const school = appState.schools.find(s => s.id === id);
    if (!school) return;
    document.getElementById('deleteModalText').textContent = `هل أنت متأكد من حذف "${school.name}"؟ لا يمكن التراجع عن هذا الإجراء.`;
    deleteCallback = () => {
        appState.schools = appState.schools.filter(s => s.id !== id);
        saveToStorage();
        renderSchoolsAdmin();
        renderDashboard();
        showToast('تم حذف المدرسة بنجاح', 'success');
        closeDeleteModal();
    };
    openModal('deleteModal');
    document.getElementById('deleteConfirmBtn').onclick = deleteCallback;
}

function closeDeleteModal() { closeModal('deleteModal'); deleteCallback = null; }

// ======================== SERVICES ========================
function renderServicesAdmin() {
    const grid = document.getElementById('servicesAdminGrid');
    if (!grid) return;
    grid.innerHTML = appState.services.map(sv => `
        <div class="service-admin-card">
            <div class="service-admin-icon">
                <i class="fa-solid ${sv.icon}"></i>
            </div>
            <div class="service-admin-title">${sv.title}</div>
            <div class="service-admin-desc">${sv.desc}</div>
            <div class="service-admin-link"><i class="fa-solid fa-link"></i> ${sv.link}</div>
            <div class="school-card-actions" style="display:flex;gap:8px;margin-top:10px;padding-top:10px;border-top:1px solid var(--border)">
                <button class="btn-card-edit" onclick="openEditServiceModal(${sv.id})">
                    <i class="fa-solid fa-pen-to-square"></i> تعديل
                </button>
                <button class="btn-card-delete" onclick="confirmDeleteService(${sv.id})" title="حذف">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    `).join('') || '<p style="color:var(--text-muted);padding:20px">لا توجد خدمات بعد</p>';
}

function openAddServiceModal() {
    document.getElementById('serviceModalTitle').textContent = 'إضافة خدمة إلكترونية';
    document.getElementById('serviceEditId').value = '';
    ['svTitle','svIcon','svDesc','svLink','svLinkText'].forEach(id => { document.getElementById(id).value = ''; });
    openModal('serviceModal');
}

function openEditServiceModal(id) {
    const sv = appState.services.find(s => s.id === id);
    if (!sv) return;
    document.getElementById('serviceModalTitle').textContent = 'تعديل الخدمة';
    document.getElementById('serviceEditId').value = id;
    document.getElementById('svTitle').value = sv.title || '';
    document.getElementById('svIcon').value = sv.icon || '';
    document.getElementById('svDesc').value = sv.desc || '';
    document.getElementById('svLink').value = sv.link || '';
    document.getElementById('svLinkText').value = sv.linkText || '';
    openModal('serviceModal');
}

function saveService() {
    const title = document.getElementById('svTitle').value.trim();
    if (!title) { showToast('يرجى إدخال عنوان الخدمة', 'error'); return; }

    const editId = document.getElementById('serviceEditId').value;
    const data = {
        title,
        icon: document.getElementById('svIcon').value.trim() || 'fa-star',
        desc: document.getElementById('svDesc').value.trim(),
        link: document.getElementById('svLink').value.trim() || '#',
        linkText: document.getElementById('svLinkText').value.trim() || 'الدخول'
    };

    if (editId) {
        const idx = appState.services.findIndex(s => s.id == editId);
        if (idx > -1) appState.services[idx] = { ...appState.services[idx], ...data };
        showToast('تم تحديث الخدمة ✅', 'success');
    } else {
        const maxId = appState.services.reduce((max, s) => Math.max(max, s.id), 0);
        appState.services.push({ id: maxId + 1, ...data });
        showToast('تمت إضافة الخدمة ✅', 'success');
    }

    markUnsaved();
    closeServiceModal();
    renderServicesAdmin();
    saveToStorage();
}

function closeServiceModal() { closeModal('serviceModal'); }

function confirmDeleteService(id) {
    const sv = appState.services.find(s => s.id === id);
    if (!sv) return;
    document.getElementById('deleteModalText').textContent = `هل أنت متأكد من حذف خدمة "${sv.title}"؟`;
    document.getElementById('deleteConfirmBtn').onclick = () => {
        appState.services = appState.services.filter(s => s.id !== id);
        saveToStorage();
        renderServicesAdmin();
        showToast('تم حذف الخدمة', 'success');
        closeDeleteModal();
    };
    openModal('deleteModal');
}

// ======================== STATS EDITOR ========================
function renderStatsEditor() {
    const grid = document.getElementById('statsEditGrid');
    if (!grid) return;
    grid.innerHTML = appState.stats.map((stat, i) => `
        <div class="stat-edit-card">
            <div class="stat-edit-icon-wrap">
                <div class="stat-edit-icon"><i class="fa-solid ${stat.icon}"></i></div>
                <div class="stat-edit-num">${stat.number}</div>
            </div>
            <div class="form-group">
                <label class="form-label">الأيقونة (Font Awesome class)</label>
                <input type="text" class="admin-input" value="${stat.icon}" oninput="updateStat(${i},'icon',this.value)" placeholder="fa-school">
            </div>
            <div class="form-group">
                <label class="form-label">الرقم / القيمة</label>
                <input type="text" class="admin-input" value="${stat.number}" oninput="updateStat(${i},'number',this.value)" placeholder="18+">
            </div>
            <div class="form-group">
                <label class="form-label">التسمية</label>
                <input type="text" class="admin-input" value="${stat.label}" oninput="updateStat(${i},'label',this.value)" placeholder="مدرسة ثانوية">
            </div>
        </div>
    `).join('');
}

function updateStat(index, field, value) {
    if (appState.stats[index]) {
        appState.stats[index][field] = value;
        markUnsaved();
    }
}

function saveStatsChanges() {
    saveToStorage();
    showToast('تم حفظ الإحصائيات بنجاح ✅', 'success');
    renderStatsEditor();
}

// ======================== NAV LINKS ========================
function renderNavLinksEditor() {
    const container = document.getElementById('navLinksEditor');
    if (!container) return;
    container.innerHTML = appState.navLinks.map((link, i) => `
        <div class="nav-link-item">
            <span class="drag-handle"><i class="fa-solid fa-grip-dots-vertical"></i></span>
            <input type="text" value="${link.text}" placeholder="نص الرابط" oninput="updateNavLink(${i},'text',this.value)">
            <input type="text" value="${link.href}" placeholder="الرابط (#section أو URL)" style="direction:ltr;flex:0.8" oninput="updateNavLink(${i},'href',this.value)">
            <input type="text" value="${link.icon || ''}" placeholder="أيقونة" style="flex:0.6" oninput="updateNavLink(${i},'icon',this.value)">
            <button class="nav-remove-btn" onclick="removeNavLink(${i})"><i class="fa-solid fa-xmark"></i></button>
        </div>
    `).join('');
}

function updateNavLink(i, field, value) {
    if (appState.navLinks[i]) { appState.navLinks[i][field] = value; markUnsaved(); }
}

function addNavLink() {
    appState.navLinks.push({ text: 'رابط جديد', href: '#', icon: 'fa-link' });
    renderNavLinksEditor();
    markUnsaved();
}

function removeNavLink(i) {
    appState.navLinks.splice(i, 1);
    renderNavLinksEditor();
    markUnsaved();
}

function saveNavigationChanges() {
    saveToStorage();
    showToast('تم حفظ إعدادات التنقل ✅', 'success');
}

// ======================== ABOUT ========================
function renderAboutFeaturesEditor() {
    const container = document.getElementById('aboutFeaturesEditor');
    if (!container) return;
    container.innerHTML = appState.aboutFeatures.map((f, i) => `
        <div class="feature-item">
            <input type="text" value="${f}" placeholder="نقطة تميز" oninput="updateAboutFeature(${i},this.value)">
            <button class="feature-remove" onclick="removeAboutFeature(${i})"><i class="fa-solid fa-xmark"></i></button>
        </div>
    `).join('');
}

function updateAboutFeature(i, value) {
    appState.aboutFeatures[i] = value;
    markUnsaved();
}

function addAboutFeature() {
    appState.aboutFeatures.push('');
    renderAboutFeaturesEditor();
    markUnsaved();
    // Focus the new input
    const inputs = document.querySelectorAll('#aboutFeaturesEditor input');
    if (inputs.length > 0) inputs[inputs.length - 1].focus();
}

function removeAboutFeature(i) {
    appState.aboutFeatures.splice(i, 1);
    renderAboutFeaturesEditor();
    markUnsaved();
}

function saveAboutChanges() {
    // Read features from inputs
    const featureInputs = document.querySelectorAll('#aboutFeaturesEditor input');
    appState.aboutFeatures = Array.from(featureInputs).map(el => el.value.trim()).filter(Boolean);
    saveToStorage();
    showToast('تم حفظ قسم عن الإدارة ✅', 'success');
}

// ======================== FOOTER ========================
function renderFooterEditors() {
    renderFooterLinks('footerQuickLinksEditor', appState.footerQuickLinks, 'footerQuickLinks');
    renderFooterLinks('footerPlatformsEditor', appState.footerPlatforms, 'footerPlatforms');
}

function renderFooterLinks(containerId, links, stateKey) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = links.map((link, i) => `
        <div class="footer-link-item">
            <input type="text" value="${link.text}" placeholder="نص الرابط" oninput="updateFooterLink('${stateKey}',${i},'text',this.value)">
            <input type="text" value="${link.href}" placeholder="الرابط" style="direction:ltr;flex:1.2" oninput="updateFooterLink('${stateKey}',${i},'href',this.value)">
            <button class="feature-remove" onclick="removeFooterLink('${stateKey}',${i})"><i class="fa-solid fa-xmark"></i></button>
        </div>
    `).join('');
}

function updateFooterLink(stateKey, i, field, value) {
    if (appState[stateKey] && appState[stateKey][i]) {
        appState[stateKey][i][field] = value;
        markUnsaved();
    }
}

function addFooterQuickLink() {
    appState.footerQuickLinks.push({ text: 'رابط جديد', href: '#' });
    renderFooterEditors();
    markUnsaved();
}

function addFooterPlatform() {
    appState.footerPlatforms.push({ text: 'منصة جديدة', href: 'https://' });
    renderFooterEditors();
    markUnsaved();
}

function removeFooterLink(stateKey, i) {
    appState[stateKey].splice(i, 1);
    renderFooterEditors();
    markUnsaved();
}

function saveFooterChanges() {
    saveToStorage();
    showToast('تم حفظ تذييل الصفحة ✅', 'success');
}

// ======================== CONTENT SAVE ========================
function saveContentChanges() {
    saveToStorage();
    showToast('تم حفظ محتوى الصفحة ✅', 'success');
}

// ======================== SAVE ALL ========================
function saveAllChanges() {
    // Collect about features
    const featureInputs = document.querySelectorAll('#aboutFeaturesEditor input');
    if (featureInputs.length > 0) {
        appState.aboutFeatures = Array.from(featureInputs).map(el => el.value.trim()).filter(Boolean);
    }

    saveToStorage();
    appState.hasUnsaved = false;
    document.getElementById('unsavedBadge').style.display = 'none';
    showToast('✅ تم حفظ جميع التغييرات بنجاح! أعد تحميل الموقع لرؤيتها.', 'success');
}

// ======================== BACKUP ========================
function exportData() {
    const data = {
        schools: appState.schools,
        stats: appState.stats,
        services: appState.services,
        navLinks: appState.navLinks,
        aboutFeatures: appState.aboutFeatures,
        footerQuickLinks: appState.footerQuickLinks,
        footerPlatforms: appState.footerPlatforms,
        content: JSON.parse(localStorage.getItem('admin_content') || '{}'),
        exportedAt: new Date().toISOString(),
        version: '1.0'
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `senbellawein-backup-${new Date().toLocaleDateString('en-CA')}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('تم تصدير البيانات بنجاح ✅', 'success');
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.schools) appState.schools = data.schools;
            if (data.stats) appState.stats = data.stats;
            if (data.services) appState.services = data.services;
            if (data.navLinks) appState.navLinks = data.navLinks;
            if (data.aboutFeatures) appState.aboutFeatures = data.aboutFeatures;
            if (data.footerQuickLinks) appState.footerQuickLinks = data.footerQuickLinks;
            if (data.footerPlatforms) appState.footerPlatforms = data.footerPlatforms;
            if (data.content) localStorage.setItem('admin_content', JSON.stringify(data.content));

            saveToStorage();
            renderDashboard();
            renderSchoolsAdmin();
            renderServicesAdmin();
            renderStatsEditor();
            renderNavLinksEditor();
            renderAboutFeaturesEditor();
            renderFooterEditors();
            loadContentFields();

            showToast('تم استيراد البيانات بنجاح ✅', 'success');
        } catch(err) {
            showToast('ملف JSON غير صالح ❌', 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function resetAllData() {
    if (!confirm('⚠️ سيتم مسح جميع التغييرات والعودة للبيانات الأصلية. هل أنت متأكد؟')) return;
    resetToDefaults();
    saveToStorage();
    location.reload();
}

function resetToDefaults() {
    appState.schools = [...DEFAULT_SCHOOLS.map(s => ({...s}))];
    appState.stats = [...DEFAULT_STATS.map(s => ({...s}))];
    appState.services = [...DEFAULT_SERVICES.map(s => ({...s}))];
    appState.navLinks = [...DEFAULT_NAV_LINKS.map(s => ({...s}))];
    appState.aboutFeatures = [...DEFAULT_ABOUT_FEATURES];
    appState.footerQuickLinks = [...DEFAULT_FOOTER_QUICK_LINKS.map(s => ({...s}))];
    appState.footerPlatforms = [...DEFAULT_FOOTER_PLATFORMS.map(s => ({...s}))];
}

// ======================== PREVIEW ========================
function openPreview() {
    window.open('index.html', '_blank');
}

// ======================== MODAL HELPERS ========================
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('open');
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('open');
}

// Close modals on overlay click
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('open');
            }
        });
    });

    // ESC to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
        }
    });

    // Mark unsaved on any input change
    document.querySelectorAll('.admin-input').forEach(el => {
        el.addEventListener('input', markUnsaved);
    });
});

// ======================== TOAST ========================
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const icons = {
        success: 'fa-circle-check',
        error: 'fa-circle-xmark',
        warning: 'fa-triangle-exclamation',
        info: 'fa-circle-info'
    };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-icon"><i class="fa-solid ${icons[type] || icons.success}"></i></div>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
