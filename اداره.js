
/* ============================================================
   🎛️ ADMIN PANEL INTEGRATION
   يقرأ الموقع البيانات من لوحة التحكم (localStorage) تلقائياً
   ============================================================ */
(function applyAdminChanges() {
    // Apply text content changes
    document.addEventListener('DOMContentLoaded', () => {
        try {
            const content = JSON.parse(localStorage.getItem('admin_content') || '{}');

            // Helper
            const setText = (selector, value, attr) => {
                if (!value) return;
                const el = document.querySelector(selector);
                if (!el) return;
                if (attr) el.setAttribute(attr, value);
                else el.textContent = value;
            };

            const setHtml = (selector, value) => {
                if (!value) return;
                const el = document.querySelector(selector);
                if (el) el.innerHTML = value;
            };

            if (content.noticeText) setText('.notice-text', content.noticeText);
            if (content.noticeBadgeText) {
                const badge = document.querySelector('.notice-badge');
                if (badge) badge.innerHTML = `<i class="fa-solid fa-bullhorn"></i> ${content.noticeBadgeText}`;
            }
            if (content.workHours) {
                const wh = document.querySelector('.top-bar-links a:first-child');
                if (wh) wh.innerHTML = `<i class="fa-solid fa-clock"></i> مواعيد العمل: ${content.workHours}`;
            }
            if (content.locationText) {
                const loc = document.querySelector('.top-bar-links a:last-child');
                if (loc) loc.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${content.locationText}`;
            }
            if (content.heroPill) setText('.hero-pill', content.heroPill);
            if (content.heroTitle || content.heroTitleSpan) {
                const titleEl = document.querySelector('.hero-title');
                if (titleEl) {
                    const t = content.heroTitle || 'جميع مدارس السنبلاوين التعليمية ';
                    const s = content.heroTitleSpan || 'في منصة ذكية واحدة';
                    titleEl.innerHTML = `${t}<span>${s}</span>`;
                }
            }
            if (content.heroDesc) setText('.hero-desc', content.heroDesc);
            if (content.heroBtnPrimary) {
                const btn = document.querySelector('.hero-buttons .btn-primary');
                if (btn) btn.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i> ${content.heroBtnPrimary}`;
            }
            if (content.heroBtnSecondary) {
                const btn = document.querySelector('.hero-buttons .btn-secondary');
                if (btn) btn.innerHTML = `<i class="fa-solid fa-grid-2"></i> ${content.heroBtnSecondary}`;
            }
            if (content.emblumTitle) {
                const el = document.querySelector('.hero-emblem-card h4');
                if (el) el.textContent = content.emblumTitle;
            }
            if (content.emblumDesc) {
                const el = document.querySelector('.hero-emblem-card p');
                if (el) el.textContent = content.emblumDesc;
            }
            if (content.subMinistry) setText('.sub-ministry', content.subMinistry);
            if (content.mainTitle) setText('.main-title', content.mainTitle);
            if (content.tagline) setText('.tagline', content.tagline);
            if (content.pageTitle) document.title = content.pageTitle;
            if (content.schoolsSectionSub) {
                const els = document.querySelectorAll('.section-subtitle');
                if (els[0]) els[0].innerHTML = `<i class="fa-solid fa-circle-check"></i> ${content.schoolsSectionSub}`;
            }
            if (content.schoolsSectionMain) {
                const els = document.querySelectorAll('.section-main-title');
                if (els[0]) els[0].innerHTML = `<i class="fa-solid fa-building-columns"></i> ${content.schoolsSectionMain}`;
            }
            if (content.filterTitle) {
                const el = document.querySelector('.filter-title');
                if (el) el.innerHTML = `<i class="fa-solid fa-sliders"></i> ${content.filterTitle}`;
            }
            if (content.servicesSectionSub) {
                const els = document.querySelectorAll('.section-subtitle');
                if (els[1]) els[1].innerHTML = `<i class="fa-solid fa-sparkles"></i> ${content.servicesSectionSub}`;
            }
            if (content.servicesSectionMain) {
                const els = document.querySelectorAll('.section-main-title');
                if (els[1]) els[1].innerHTML = `<i class="fa-solid fa-laptop-code"></i> ${content.servicesSectionMain}`;
            }
            if (content.ctaBtnText) {
                const btn = document.querySelector('.btn-header-cta');
                if (btn) btn.innerHTML = `<i class="fa-solid fa-bolt"></i> ${content.ctaBtnText}`;
            }
            if (content.ctaBtnLink) {
                const btn = document.querySelector('.btn-header-cta');
                if (btn) btn.href = content.ctaBtnLink;
            }
            if (content.aboutSub) {
                const el = document.querySelector('.about-section .section-subtitle');
                if (el) el.innerHTML = `<i class="fa-solid fa-landmark"></i> ${content.aboutSub}`;
            }
            if (content.aboutTitle) {
                const el = document.querySelector('.about-section .section-main-title');
                if (el) el.textContent = content.aboutTitle;
            }
            if (content.aboutDesc) {
                const el = document.querySelector('.about-content > p');
                if (el) el.textContent = content.aboutDesc;
            }
            if (content.aboutAddress) {
                const el = document.querySelector('.about-overlay-card p');
                if (el) el.textContent = content.aboutAddress;
            }
            if (content.aboutHQTitle) {
                const el = document.querySelector('.about-overlay-card h5');
                if (el) el.textContent = content.aboutHQTitle;
            }
            if (content.footerBrandDesc) {
                const el = document.querySelector('.footer-brand-info > p');
                if (el) el.textContent = content.footerBrandDesc;
            }
            if (content.footerCopyright) {
                const el = document.querySelector('.footer-bottom');
                if (el) {
                    const credEl = el.querySelector('.footer-bottom-inner > div:last-child');
                    if (credEl) credEl.textContent = content.footerCopyright;
                }
            }

            // About features
            const aboutFeatures = JSON.parse(localStorage.getItem('admin_aboutFeatures') || 'null');
            if (aboutFeatures && Array.isArray(aboutFeatures)) {
                const container = document.querySelector('.about-features');
                if (container) {
                    container.innerHTML = aboutFeatures.map(f => `
                        <div class="about-feat-item">
                            <i class="fa-solid fa-check-circle"></i>
                            <span>${f}</span>
                        </div>
                    `).join('');
                }
            }

            // Stats ribbon
            const adminStats = JSON.parse(localStorage.getItem('admin_stats') || 'null');
            if (adminStats && Array.isArray(adminStats)) {
                const grid = document.querySelector('.stats-grid');
                if (grid) {
                    grid.innerHTML = adminStats.map(stat => `
                        <div class="stat-item">
                            <div class="stat-icon"><i class="fa-solid ${stat.icon}"></i></div>
                            <div>
                                <div class="stat-number">${stat.number}</div>
                                <div class="stat-label">${stat.label}</div>
                            </div>
                        </div>
                    `).join('');
                }
            }

            // Services section
            const adminServices = JSON.parse(localStorage.getItem('admin_services') || 'null');
            if (adminServices && Array.isArray(adminServices)) {
                const grid = document.querySelector('.services-grid');
                if (grid) {
                    grid.innerHTML = adminServices.map(sv => `
                        <div class="service-card">
                            <div class="service-icon-wrap">
                                <i class="fa-solid ${sv.icon}"></i>
                            </div>
                            <h4 class="service-title">${sv.title}</h4>
                            <p class="service-desc">${sv.desc}</p>
                            <a href="${sv.link}" target="_blank" rel="noopener noreferrer" class="service-link">
                                ${sv.linkText} <i class="fa-solid fa-arrow-left"></i>
                            </a>
                        </div>
                    `).join('');
                }
            }

            // Navigation links
            const adminNav = JSON.parse(localStorage.getItem('admin_navLinks') || 'null');
            if (adminNav && Array.isArray(adminNav)) {
                const navUl = document.querySelector('.nav-links');
                if (navUl) {
                    // Keep mobile header and mobile CTA, replace middle items
                    const mobileHeader = navUl.querySelector('.mobile-drawer-header');
                    const mobileCTA = navUl.querySelector('.mobile-drawer-cta');
                    const newLinks = adminNav.map(link => `
                        <li><a href="${link.href}" class="awas">
                            <i class="fa-solid ${link.icon || 'fa-circle'}"></i> ${link.text}
                        </a></li>
                    `).join('');
                    navUl.innerHTML = (mobileHeader ? mobileHeader.outerHTML : '') + newLinks + (mobileCTA ? mobileCTA.outerHTML : '');
                }
            }

            // Footer quick links
            const footerQL = JSON.parse(localStorage.getItem('admin_footerQuickLinks') || 'null');
            if (footerQL && Array.isArray(footerQL)) {
                const ul = document.querySelector('.footer-links-list');
                if (ul) {
                    ul.innerHTML = footerQL.map(link => `
                        <li><a href="${link.href}" ${link.href.startsWith('http') ? 'target="_blank"' : ''}>
                            <i class="fa-solid fa-chevron-left"></i> ${link.text}
                        </a></li>
                    `).join('');
                }
            }

            // Footer platforms
            const footerPlatforms = JSON.parse(localStorage.getItem('admin_footerPlatforms') || 'null');
            if (footerPlatforms && Array.isArray(footerPlatforms)) {
                const uls = document.querySelectorAll('.footer-links-list');
                if (uls[1]) {
                    uls[1].innerHTML = footerPlatforms.map(link => `
                        <li><a href="${link.href}" target="_blank" rel="noopener">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> ${link.text}
                        </a></li>
                    `).join('');
                }
            }

        } catch(e) {
            console.warn('Admin integration error:', e);
        }
    });
})();

// ============================================================
//  Load schools from admin panel if available
// ============================================================
let schoolsData = (function() {
    try {
        const saved = JSON.parse(localStorage.getItem('admin_schools'));
        if (saved && Array.isArray(saved) && saved.length > 0) return saved;
    } catch(e) {}
    return null;
})() || [
    {
        id: 1,
        name: "مدرسة السادات الثانوية بنين",
        type: "boys",
        typeName: "ثانوي عام - بنين",
        location: "السنبلاوين - شارع الإدارة التعليمية",
        area: "السنبلاوين المدينة",
        code: "210408",
        studentsCount: "1,350 طالب",
        principal: "إدارة مدرسة السادات الثانوية بنين",
        image: "q.jpeg",
        link: "https://el-sadat-school.vercel.app/",
        hasLiveSite: true,
        description: "إحدى أعرق المدارس الثانوية للبنين بإدارة السنبلاوين، مجهزة بأحدث معامل التطوير التكنولوجي والشاشات التفاعلية والفصول الذكية.",
        features: ["معامل علوم متطورة", "شاشات تفاعلية ذكية", "موقع إلكتروني متكامل", "أنشطة رياضية وكشفية"]
    },
    {
        id: 2,
        name: "المقاطعة الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشترك",
        location: "قرية المقاطعة - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210415",
        studentsCount: "1,120 طالب وطالبة",
        principal: "إدارة مدرسة المقاطعة الثانوية",
        image: "a.jpeg",
        link: "schools/school-2.html",
        hasLiveSite: true,
        description: "صرح تعليمي يخدم طلاب وطالبات قرية المقاطعة والقرى المجاورة، يتميز بنسب تفوق عالية في امتحانات الثانوية العامة والأنشطة.",
        features: ["مكتبة تعليمية شاملة", "معمل حاسب آلي مطور", "أنشطة ثقافية متميزة"]
    },
    {
        id: 3,
        name: "أحمد لطفي السيد الثانوية بنين",
        type: "boys",
        typeName: "ثانوي عام - بنين",
        location: "السنبلاوين - شارع المدارس (بجوار الادارة التعليميه)",
        area: "السنبلاوين المدينة",
        code: "210422",
        studentsCount: "1,380 طالب",
        principal: "إدارة مدرسة أحمد لطفي السيد",
        image: "i.jpeg",
        link: "schools/school-3.html",
        hasLiveSite: true,
        description: "مدرسة رائدة تحمل اسم مفكر مصر ورائد التنوير أحمد لطفي السيد، وتضم كادراً تعليمياً متميزاً وبيئة تربوية منضبطة.",
        features: ["بيئة تعليمية منضبطة", "مسابقات أوائل الطلبة", "صالات تدريب رياضي"]
    },
    {
        id: 4,
        name: "السنبلاوين الرسمية للغات المشتركة",
        type: "languages",
        typeName: "رسمي لغات - مشتركة",
        location: "السنبلاوين - بجوار الإدارة التعليمية",
        area: "السنبلاوين المدينة",
        code: "210430",
        studentsCount: "950 طالب وطالبة",
        principal: "إدارة مدرسة السنبلاوين الرسمية للغات",
        image: "u.jpeg",
        link: "schools/school-4.html",
        hasLiveSite: true,
        description: "المدرسة الرسمية للغات الأولى بالمركز، تدرس المناهج باللغة الإنجليزية بإشراف مباشر من توجيه اللغات بالمديرية.",
        features: ["تدريس اللغات الأجنبية", "معامل لغات متقدمة", "مناهج دولية معتمدة", "نوادي علوم وابتكار"]
    },
    {
        id: 5,
        name: "كفر غنام الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية كفر غنام - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210444",
        studentsCount: "890 طالب وطالبة",
        principal: "إدارة مدرسة كفر غنام الثانوية",
        image: "w.jpeg",
        link: "schools/school-5.html",
        hasLiveSite: true,
        description: "مدرسة حديثة التطوير تخدم قطاع جنوب السنبلاوين ومجهزة بأحدث وسائل التعلم الحديثة وشبكة الألياف الضوئية.",
        features: ["إنترنت فائق السرعة", "فصول مجهزة وشاشات ذكية", "ملاعب رياضية حديثة"]
    },
    {
        id: 6,
        name: "السنبلاوين الثانوية بنات",
        type: "girls",
        typeName: "ثانوي عام - بنات",
        location: "السنبلاوين - شارع الجمهورية (حي النزهة)",
        area: "السنبلاوين المدينة",
        code: "210450",
        studentsCount: "1,600 طالبة",
        principal: "إدارة مدرسة السنبلاوين الثانوية بنات",
        image: "خ.jpg",
        link: "schools/school-6.html",
        hasLiveSite: true,
        description: "أكبر مدارس المرحلة الثانوية للبنات بالمركز، تمتاز بتخريج أوائل المحافظة سنوياً والتميز في الأنشطة الطلابية والمسابقات الإبداعية.",
        features: ["مسرح مدرسي متكامل", "معامل أحياء وفيزياء وكيمياء", "أندية فتيات وموهوبين"]
    },
    {
        id: 7,
        name: "ابوقراميط الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية أبو قراميط - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210461",
        studentsCount: "1,250 طالب وطالبة",
        principal: "إدارة مدرسة ابوقراميط الثانوية المشتركة",
        image: "ق.jpg",
        link: "schools/school-7.html",
        hasLiveSite: true,
        description: "صرح تعليمي يخدم قطاع قرية أبو قراميط والقرى المجاورة، مجهزة بمعامل علمية وفصول ذكية وشبكات تكنولوجية متطورة.",
        features: ["فصول نموذجية حديثة", "معامل تابلت وشبكات", "أنشطة لياقة بدنية وثقافية"]
    },
    {
        id: 8,
        name: "طهواى الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية طهواي - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210472",
        studentsCount: "980 طالب وطالبة",
        principal: "إدارة مدرسة طهواى الثانوية المشتركة",
        image: "ن.jpg",
        link: "schools/school-8.html",
        hasLiveSite: true,
        description: "صرح تعليمي عريق يخدم قرية طهواي وتوابعها، ويوفر بيئة تربوية هادئة ومحفزة على الإبداع والتفوق العلمي.",
        features: ["مكتبة إلكترونية وبنك المعرفة", "معارض علمية وفنية", "تواصل إلكتروني مع أولياء الأمور"]
    },
    {
        id: 9,
        name: "ميت غراب وشبراهور الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية ميت غراب - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210480",
        studentsCount: "820 طالب وطالبة",
        principal: "إدارة مدرسة ميت غراب وشبراهور الثانوية",
        image: "WhatsApp Image 2026-09-27 at 5.56.24 PM.jpeg",
        link: "schools/school-9.html",
        hasLiveSite: true,
        description: "مدرسة متميزة بنشاطها الاجتماعي والتربوي ومشاريع الطلاب، تخدم قريتي ميت غراب وشبراهور بالقطاع الغربي للإدارة.",
        features: ["فصول نموذجية وشاشات ذكية", "إشراف تربوي متكامل", "أنشطة بيئية وتوعوية"]
    },
    {
        id: 10,
        name: "الشهيد محمد الراعي الثانوية بالجلايله المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية الجلايلة - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210492",
        studentsCount: "1,050 طالب وطالبة",
        principal: "إدارة مدرسة الشهيد محمد الراعي الثانوية",
        image: "WhatsApp Image 2026-09-27 at 6.03.07 PM.jpeg",
        link: "schools/school-10.html",
        hasLiveSite: true,
        description: "تخدم قطاع قرية الجلايلة والقرى المجاورة وتتمتع ببنية تكنولوجية حديثة وكادر تدريسي متميز لتدريس منظومة الثانوية العامة.",
        features: ["شبكة إنترنت ألياف ضوئية", "غرفة تدريب وتطوير تكنولوجي", "فريق مسابقات أوائل الطلبة"]
    },
    {
        id: 11,
        name: "السنبلاوين الرسمية المتميزة لغات المشتركة",
        type: "languages",
        typeName: "رسمي لغات متميز - مشتركة",
        location: "السنبلاوين - شارع المعاهدة (بجوار الأزهري)",
        area: "السنبلاوين المدينة",
        code: "210501",
        studentsCount: "780 طالب وطالبة",
        principal: "إدارة مدرسة السنبلاوين الرسمية المتميزة للغات",
        image: "WhatsApp Image 2026-09-27 at 6.05.21 PM.jpeg",
        link: "schools/school-11.html",
        hasLiveSite: true,
        description: "مؤسسة تعليمية نوعية بمدينة السنبلاوين تهدف إلى تقديم تعليم لغات رفيع المستوى ورعاية خاصة للطلاب الموهوبين والمتفوقين.",
        features: ["رعاية الفائقين والمبدعين", "قاعات ورش عمل تفاعلية", "معامل حاسب ومكتبة رقمية"]
    },
    {
        id: 12,
        name: "غزالة الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية غزالة - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210515",
        studentsCount: "710 طالب وطالبة",
        principal: "إدارة مدرسة غزالة الثانوية",
        image: "Gemini_Generated_Image_g9c38tg9c38tg9c3.jpg",
        link: "schools/school-12.html",
        hasLiveSite: true,
        description: "مدرسة هادئة وواعدة توفر مناخاً دراسياً نموذجياً يتيح للطلاب التركيز والتفوق في كافة الشعب العلمية والأدبية.",
        features: ["متابعة دراسية دقيقة", "مجموعات تقوية مجانية", "أنشطة صحافة مدرسية"]
    },
    {
        id: 13,
        name: "الزهايره الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية الزهايرة - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210522",
        studentsCount: "670 طالب وطالبة",
        principal: "إدارة مدرسة الزهايرة الثانوية المشتركة",
        image: "WhatsApp Image 2026-09-27 at 6.06.50 PM.jpeg",
        link: "schools/school-13.html",
        hasLiveSite: true,
        description: "مؤسسة تعليمية نموذجية تخدم قرية الزهايرة وتوابعها، حاصلة على شهادات تقدير من الإدارة لحسن الانضباط المدرسي والمستوى التعليمي.",
        features: ["انضباط دراسي تام", "مكتبة حديثة", "معمل لغات وعلوم"]
    },
    {
        id: 14,
        name: "الشهيد مصطفى فتوح جبر الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية كفر طنبول القديم - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210530",
        studentsCount: "850 طالب وطالبة",
        principal: "إدارة مدرسة الشهيد مصطفى فتوح جبر الثانوية",
        image: "Gemini_Generated_Image_cvqxkmcvqxkmcvqx.jpg",
        link: "schools/school-14.html",
        hasLiveSite: true,
        description: "صرح تعليمي ثانوي يخدم أبناء قرية كفر طنبول القديم والقرى المجاورة، يحمل اسم شهيد الوطن البطل مصطفى فتوح جبر تقديراً لتضحيته.",
        features: ["فصول دراسية حديثة", "معامل علوم وتطوير تكنولوجي", "أنشطة وطنية ورياضية"]
    },
    {
        id: 15,
        name: "طوخ الأقلام الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية طوخ الأقلام - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210540",
        studentsCount: "950 طالب وطالبة",
        principal: "إدارة مدرسة طوخ الأقلام الثانوية المشتركة",
        image: "Gemini_Generated_Image_720j40720j40720j.jpg",
        link: "schools/school-15.html",
        hasLiveSite: true,
        description: "صرح تعليمي يخدم قطاع قرية طوخ الأقلام وتوابعها بمركز السنبلاوين، مجهزة بكافة الوسائل التعليمية الحديثة والأنشطة الطلابية المتنوعة.",
        features: ["معامل تكنولوجية متطورة", "مكتبة علمية شاملة", "أنشطة ثقافية ورياضية"]
    },
    {
        id: 16,
        name: "صبح كاعوه الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية برهمتوش - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210555",
        studentsCount: "1,220 طالب وطالبة",
        principal: "إدارة مدرسة صبح كاعوه الثانوية المشتركة",
        image: "Gemini_Generated_Image_k8uhd4k8uhd4k8uh.jpg",
        link: "schools/school-16.html",
        hasLiveSite: true,
        description: "إحدى كبرى المدارس الثانوية بقطاع قرى السنبلاوين، تقع بقرية برهمتوش وتخدم عدداً من القرى المجاورة بفصولها ومرافقها المتطورة.",
        features: ["مساحات وملاعب واسعة", "معامل علمية وتكنولوجية حديثة", "شاشات تفاعلية ذكية"]
    },
    {
        id: 17,
        name: "حسين عثمان الثانوية المشتركة بشبرا سندى",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية شبرا سندي - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210568",
        studentsCount: "1,100 طالب وطالبة",
        principal: "إدارة مدرسة حسين عثمان الثانوية المشتركة",
        image: "Gemini_Generated_Image_5uuyar5uuyar5uuy.jpg",
        link: "schools/school-17.html",
        hasLiveSite: true,
        description: "صرح تعليمي يخدم طلاب وطالبات قرية شبرا سندي والقرى المحيطة، وتوفر بيئة تعليمية منضبطة وداعمة للتفوق الدراسي وبناء الشخصية.",
        features: ["فصول نموذجية حديثة", "معمل حاسب آلي وتطوير", "مكتبة مدرسية شاملة"]
    },
    {
        id: 18,
        name: "البلامون الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية البلامون - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210579",
        studentsCount: "1,180 طالب وطالبة",
        principal: "إدارة مدرسة البلامون الثانوية المشتركة",
        image: "Gemini_Generated_Image_6xhnxw6xhnxw6xhn.jpg",
        link: "schools/school-18.html",
        hasLiveSite: true,
        description: "مدرسة ثانوية متميزة تخدم أهالي وطلاب قرية البلامون والقرى المجاورة، وتتميز بنسب تفوق مشرفة في الثانوية العامة والأنشطة المتعددة.",
        features: ["معامل علوم متكاملة", "شبكة إنترنت وألياف ضوئية", "أنشطة رياضية وفنية"]
    }
];

const filterState = {
    searchQuery: "",
    category: "all",
    area: "all",
    sort: "default",
    viewMode: "grid" // 'grid' | 'list'
};

function normalizeArabic(text) {
    if (!text) return "";
    return text
        .trim()
        .toLowerCase()
        .replace(/[إأآا]/g, "ا")
        .replace(/ة/g, "ه")
        .replace(/ى/g, "ي")
        .replace(/[ًٌٍَُِّْ]/g, ""); // إزالة التشكيل
}

function getFilteredSchools() {
    let result = [...schoolsData];

    if (filterState.searchQuery) {
        const queryNorm = normalizeArabic(filterState.searchQuery);
        result = result.filter(school => {
            const nameNorm = normalizeArabic(school.name);
            const locNorm = normalizeArabic(school.location);
            const typeNorm = normalizeArabic(school.typeName);
            const descNorm = normalizeArabic(school.description);
            return nameNorm.includes(queryNorm) || 
                   locNorm.includes(queryNorm) || 
                   typeNorm.includes(queryNorm) ||
                   descNorm.includes(queryNorm);
        });
    }

    if (filterState.category !== "all") {
        result = result.filter(school => school.type === filterState.category);
    }

    if (filterState.area !== "all") {
        result = result.filter(school => school.area === filterState.area);
    }

    if (filterState.sort === "name-asc") {
        result.sort((a, b) => a.name.localeCompare(b.name, "ar"));
    } else if (filterState.sort === "name-desc") {
        result.sort((a, b) => b.name.localeCompare(a.name, "ar"));
    }

    return result;
}

function renderSchoolCard(school) {
    const isLive = school.hasLiveSite && Boolean(school.link && school.link.trim() !== "");
    const siteUrl = isLive ? school.link : "https://el-sadat-school.vercel.app/";
    const targetAttr = 'target="_blank" rel="noopener noreferrer"';

    return `
        <article class="school-card" data-id="${school.id}">
            <div class="card-media">
                <img src="${school.image}" alt="${school.name}" loading="lazy" onerror="this.src='q.jpeg'">
                <span class="card-type-tag">
                    <i class="fa-solid fa-graduation-cap"></i>
                    ${school.typeName}
                </span>
                <span class="card-status-badge">
                    <span class="dot"></span>
                    ${isLive ? 'بوابة إلكترونية نشطة' : 'مقيد بالمنظومة'}
                </span>
            </div>
            
            <div class="card-body">
                <h3 class="card-title" title="${school.name}"><a href="${siteUrl}" ${targetAttr}>${school.name}</a></h3>
                
                <div class="card-meta-list">
                    <div class="meta-item">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>${school.location}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fa-solid fa-id-card"></i>
                        <span>كود المدرسة: <strong>${school.code}</strong></span>
                    </div>
                    <div class="meta-item">
                        <i class="fa-solid fa-users"></i>
                        <span>السعة: ${school.studentsCount}</span>
                    </div>
                </div>

                <div class="card-actions">
                    <a href="${siteUrl}" ${targetAttr} class="btn-card-visit" title="زيارة الموقع">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        زيارة الموقع
                    </a>
                </div>
            </div>
        </article>
    `;
}

function renderSchools() {
    const container = document.getElementById("schoolsGrid");
    const countBadge = document.getElementById("schoolsCount");
    if (!container) return;

    const filtered = getFilteredSchools();

    if (countBadge) {
        countBadge.textContent = filtered.length;
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-magnifying-glass"></i>
                <h3>لم نتمكن من العثور على مدارس مطابقة</h3>
                <p>يرجى تجربة كلمات بحث أخرى أو إعادة ضبط عوامل التصفية.</p>
                <button class="btn-reset-filters" onclick="resetAllFilters()">
                    <i class="fa-solid fa-rotate-right"></i>
                    إعادة ضبط خيارات البحث
                </button>
            </div>
        `;
        return;
    }

    container.className = `schools-grid ${filterState.viewMode === "list" ? "list-view" : ""}`;
    container.innerHTML = filtered.map(school => renderSchoolCard(school)).join("");
}



function openSchoolModal(schoolId) {}
function closeSchoolModal() {}

function resetAllFilters() {
    filterState.searchQuery = "";
    filterState.category = "all";
    filterState.area = "all";
    filterState.sort = "default";

    const searchInput = document.getElementById("schoolSearch");
    if (searchInput) searchInput.value = "";

    const searchClear = document.getElementById("searchClearBtn");
    if (searchClear) searchClear.style.display = "none";

    const typeSelect = document.getElementById("typeFilter");
    if (typeSelect) typeSelect.value = "all";

    const areaSelect = document.getElementById("areaFilter");
    if (areaSelect) areaSelect.value = "all";

    const sortSelect = document.getElementById("sortFilter");
    if (sortSelect) sortSelect.value = "default";

    document.querySelectorAll(".category-chip").forEach(chip => {
        if (chip.getAttribute("data-category") === "all") {
            chip.classList.add("active");
        } else {
            chip.classList.remove("active");
        }
    });

    renderSchools();
}

document.addEventListener("DOMContentLoaded", () => {
    renderSchools();

    const searchInput = document.getElementById("schoolSearch");
    const searchClear = document.getElementById("searchClearBtn");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            filterState.searchQuery = e.target.value;
            if (searchClear) {
                searchClear.style.display = e.target.value ? "block" : "none";
            }
            renderSchools();
        });
    }

    if (searchClear) {
        searchClear.addEventListener("click", () => {
            if (searchInput) {
                searchInput.value = "";
                filterState.searchQuery = "";
                searchClear.style.display = "none";
                searchInput.focus();
                renderSchools();
            }
        });
    }

    const typeSelect = document.getElementById("typeFilter");
    if (typeSelect) {
        typeSelect.addEventListener("change", (e) => {
            filterState.category = e.target.value;
            
            document.querySelectorAll(".category-chip").forEach(chip => {
                if (chip.getAttribute("data-category") === e.target.value) {
                    chip.classList.add("active");
                } else {
                    chip.classList.remove("active");
                }
            });

            renderSchools();
        });
    }

    const areaSelect = document.getElementById("areaFilter");
    if (areaSelect) {
        areaSelect.addEventListener("change", (e) => {
            filterState.area = e.target.value;
            renderSchools();
        });
    }

    const sortSelect = document.getElementById("sortFilter");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            filterState.sort = e.target.value;
            renderSchools();
        });
    }

    document.querySelectorAll(".category-chip").forEach(chip => {
        chip.addEventListener("click", () => {
            document.querySelectorAll(".category-chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");

            const cat = chip.getAttribute("data-category") || "all";
            filterState.category = cat;

            if (typeSelect) {
                typeSelect.value = cat;
            }

            renderSchools();
        });
    });

    const viewGridBtn = document.getElementById("viewGridBtn");
    const viewListBtn = document.getElementById("viewListBtn");

    if (viewGridBtn && viewListBtn) {
        viewGridBtn.addEventListener("click", () => {
            filterState.viewMode = "grid";
            viewGridBtn.classList.add("active");
            viewListBtn.classList.remove("active");
            renderSchools();
        });

        viewListBtn.addEventListener("click", () => {
            filterState.viewMode = "list";
            viewListBtn.classList.add("active");
            viewGridBtn.classList.remove("active");
            renderSchools();
        });
    }

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const navBackdrop = document.getElementById("navBackdrop");

    function closeMobileMenu() {
        if (navLinks) navLinks.classList.remove("open");
        if (navBackdrop) navBackdrop.classList.remove("show");
        if (menuToggle) {
            const icon = menuToggle.querySelector("i");
            if (icon) {
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-xmark");
            }
        }
        document.body.classList.remove("menu-locked");
    }

    function toggleMobileMenu() {
        if (!navLinks) return;
        const isOpen = navLinks.classList.toggle("open");
        if (navBackdrop) navBackdrop.classList.toggle("show", isOpen);
        if (menuToggle) {
            const icon = menuToggle.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars", !isOpen);
                icon.classList.toggle("fa-xmark", isOpen);
            }
        }
        document.body.classList.toggle("menu-locked", isOpen);
    }

    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMobileMenu);
    }

    if (navBackdrop) {
        navBackdrop.addEventListener("click", closeMobileMenu);
    }

    const drawerCloseBtn = document.getElementById("drawerCloseBtn");
    if (drawerCloseBtn) {
        drawerCloseBtn.addEventListener("click", closeMobileMenu);
    }

    if (navLinks) {
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMobileMenu);
        });
    }

    const backToTopBtn = document.getElementById("backToTop");
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    window.searchSchool = function() {
        const input = document.getElementById("schoolSearch");
        if (input) {
            filterState.searchQuery = input.value;
            renderSchools();
        }
    };
});