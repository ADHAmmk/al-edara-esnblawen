/* ==========================================================================
   School Portal Interactive JavaScript - إدارة السنبلاوين التعليمية
   Dynamic Engine with Full School Admin Control Sync
   ========================================================================== */

'use strict';

// ======================== DEFAULT STUDENTS DATABASE ========================
window.STUDENTS_DATABASE = [
    {
        name: "ادهم محمد",
        code: "2104081",
        seatNumber: "14520",
        grade: "الصف الثاني الثانوي",
        section: "علمي علوم",
        status: "مقيد بانتظام",
        statusType: "success",
        attendance: "96.5%",
        tabletStatus: "مفعل ومسجل بالمنظومة",
        evaluations: "مكتملة وممتازة (أ)",
        totalScore: "266 / 280",
        percentage: "95.0%",
        rating: "ممتاز مرتفع",
        grades: [
            { subject: "اللغة العربية", score: "48 / 50", state: "ممتاز" },
            { subject: "اللغة الإنجليزية", score: "47 / 50", state: "ممتاز" },
            { subject: "الرياضيات", score: "57 / 60", state: "ممتاز" },
            { subject: "الكيمياء", score: "56 / 60", state: "ممتاز" },
            { subject: "الأحياء", score: "58 / 60", state: "ممتاز" }
        ],
        notes: "طالب متفوق ومتميز سلوكياً وأكاديمياً، مرشح للوحة شرف أوائل الطلبة بالمدرسة."
    },
    {
        name: "محمود علي حسن",
        code: "2104082",
        seatNumber: "14521",
        grade: "الصف الأول الثانوي",
        section: "عام",
        status: "مقيد بانتظام",
        statusType: "info",
        attendance: "88.2%",
        tabletStatus: "مفعل ومستلم للشريحة",
        evaluations: "مكتملة بانتظام (ب+)",
        totalScore: "228 / 280",
        percentage: "81.4%",
        rating: "جيد جداً",
        grades: [
            { subject: "اللغة العربية", score: "42 / 50", state: "جيد جداً" },
            { subject: "اللغة الإنجليزية", score: "40 / 50", state: "جيد جداً" },
            { subject: "الرياضيات", score: "49 / 60", state: "جيد جداً" },
            { subject: "العلوم المتكاملة", score: "48 / 60", state: "جيد جداً" },
            { subject: "التاريخ", score: "49 / 60", state: "جيد جداً" }
        ],
        notes: "مستوى دراسي طيب مع التزام جيد بالواجبات والتقييمات الأسبوعية."
    },
    {
        name: "سارة أحمد عبد الرحمن",
        code: "2104083",
        seatNumber: "14522",
        grade: "الصف الثالث الثانوي",
        section: "علمي رياضة",
        status: "مقيدة بانتظام",
        statusType: "success",
        attendance: "98.5%",
        tabletStatus: "مفعل ومتصل بالشبكة",
        evaluations: "مكتملة بنسبة 100%",
        totalScore: "392 / 410",
        percentage: "95.6%",
        rating: "أوائل المدرسة",
        grades: [
            { subject: "اللغة العربية", score: "78 / 80", state: "ممتاز" },
            { subject: "اللغة الإنجليزية", score: "49 / 50", state: "ممتاز" },
            { subject: "الرياضيات البحتة", score: "59 / 60", state: "ممتاز" },
            { subject: "الرياضيات التطبيقية", score: "58 / 60", state: "ممتاز" },
            { subject: "الفيزياء", score: "58 / 60", state: "ممتاز" },
            { subject: "الكيمياء", score: "57 / 60", state: "ممتاز" }
        ],
        notes: "طالبة مثالية حاصلة على المركز الأول في اختبارات الشهر والأنشطة العلمية."
    },
    {
        name: "يوسف خالد السيد",
        code: "2104084",
        seatNumber: "14523",
        grade: "الصف الأول الثانوي",
        section: "عام",
        status: "مقيد - يتطلب متابعة",
        statusType: "warning",
        attendance: "78.4%",
        tabletStatus: "مفعل - بحاجة لتحديث النظام",
        evaluations: "مكتملة بنسبة 65%",
        totalScore: "192 / 280",
        percentage: "68.5%",
        rating: "جيد",
        grades: [
            { subject: "اللغة العربية", score: "35 / 50", state: "جيد" },
            { subject: "اللغة الإنجليزية", score: "33 / 50", state: "مقبول" },
            { subject: "الرياضيات", score: "40 / 60", state: "جيد" },
            { subject: "العلوم المتكاملة", score: "41 / 60", state: "جيد" },
            { subject: "التاريخ", score: "43 / 60", state: "جيد" }
        ],
        notes: "يوصى بضرورة الالتزام بنظام الحضور والاهتمام بحل التقييمات الأسبوعية بانتظام لتحسين المجموع العام."
    }
];

// Helper: Normalize Arabic string for query matching
function normalizeArabicText(text) {
    if (!text) return "";
    return text
        .toString()
        .trim()
        .toLowerCase()
        .replace(/[إأآا]/g, "ا")
        .replace(/ة/g, "ه")
        .replace(/ى/g, "ي")
        .replace(/[ًٌٍَُِّْـ]/g, "")
        .replace(/\s+/g, " ");
}

// Student search function
function findStudentData(query) {
    if (!query) return null;
    const qNorm = normalizeArabicText(query);
    if (!qNorm) return null;

    const db = window.STUDENTS_DATABASE || [];

    const matched = db.find(s => {
        const nameNorm = normalizeArabicText(s.name || "");
        const codeNorm = normalizeArabicText(s.code || "");
        const seatNorm = normalizeArabicText(s.seatNumber || "");

        const isNameMatch = (nameNorm === qNorm) || (qNorm.length >= 3 && nameNorm.includes(qNorm));
        const isCodeMatch = (codeNorm === qNorm);
        const isSeatMatch = (seatNorm === qNorm);

        return isNameMatch || isCodeMatch || isSeatMatch;
    });

    return matched || null;
}

// Get current school ID from pathname or query
function getCurrentSchoolId() {
    const pagePath = window.location.pathname;
    const match = pagePath.match(/school-(\d+)\.html/);
    if (match) return parseInt(match[1], 10);
    const urlId = new URLSearchParams(window.location.search).get('id');
    if (urlId) return parseInt(urlId, 10);
    return 1;
}

// ======================== DOM INITIALIZATION ========================
document.addEventListener("DOMContentLoaded", () => {
    const schoolId = getCurrentSchoolId();

    // 1. Sync and apply custom school data from LocalStorage
    syncSchoolDataFromStorage(schoolId);

    // 2. Inject School Admin Panel Links in Header, Nav and Footer
    injectSchoolAdminLinks(schoolId);

    // 3. Setup Mobile Navigation Toggle
    initMobileNav();

    // 4. Setup Schedule Tabs Switcher
    initScheduleTabs();

    // 5. Setup FAQ Accordion
    initFaqAccordion();

    // 6. Setup Student Inquiry Search
    initStudentInquiry();

    // 7. Setup Contact Form
    initContactForm();

    // 8. Setup National Anthem Music Player
    initAnthemPlayer();
});

// ======================== STORAGE SYNCHRONIZATION ========================
function syncSchoolDataFromStorage(schoolId) {
    try {
        const raw = localStorage.getItem(`school_data_${schoolId}`);
        let data = null;
        if (raw) {
            data = JSON.parse(raw);
        }

        // If custom data exists, apply all customized fields
        if (data) {
            // Update title
            if (data.name) {
                document.title = `${data.name} | البوابة الرسمية`;
            }

            // Navbar Brand
            const brandH1 = document.querySelector('.school-brand .brand-info h1');
            if (brandH1 && data.name) brandH1.textContent = data.name;

            const brandSpan = document.querySelector('.school-brand .brand-info span');
            if (brandSpan && data.code) brandSpan.textContent = `كود المنظومة الإلكترونية: ${data.code}`;

            // Top Notice Bar
            const topBar = document.querySelector('.top-notice-bar');
            if (topBar) {
                if (data.noticeBarEnabled === false) {
                    topBar.style.display = 'none';
                } else {
                    topBar.style.display = '';
                    const badge = topBar.querySelector('.top-badge');
                    if (badge && data.noticeBadge) {
                        badge.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${data.noticeBadge}`;
                    }
                    const textSpan = topBar.querySelector('.top-bar-right span:not(.top-badge)');
                    if (textSpan && data.noticeText) {
                        textSpan.textContent = data.noticeText;
                    }
                }
            }

            // Hero Section
            const heroBadgeType = document.querySelector('.hero-badge-wrap .badge-tag:first-child');
            if (heroBadgeType && data.typeName) {
                heroBadgeType.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> ${data.typeName}`;
            }

            const heroBadgeCode = document.querySelector('.hero-badge-wrap .badge-code');
            if (heroBadgeCode && data.code) {
                heroBadgeCode.innerHTML = `<i class="fa-solid fa-fingerprint"></i> كود: ${data.code}`;
            }

            const heroBadgeLoc = document.querySelector('.hero-badge-wrap .badge-tag:last-child');
            if (heroBadgeLoc && data.location) {
                heroBadgeLoc.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.location}`;
            }

            const heroTitle = document.querySelector('.hero-title');
            if (heroTitle) {
                if (data.heroTitle && data.heroTitle.includes('<span>')) {
                    heroTitle.innerHTML = data.heroTitle;
                } else if (data.name) {
                    heroTitle.innerHTML = `مرحباً بكم في <span>${data.name}</span>`;
                }
            }

            const heroDesc = document.querySelector('.hero-description');
            if (heroDesc && data.description) {
                heroDesc.textContent = `${data.description} نعمل برؤية رائدة لتخريج أجيال مبدعة ومسلحة بالمعرفة والمهارات التكنولوجية الحديثة وفق المعايير القومية للتعليم المصري.`;
            }

            // Hero Buttons
            const btnP = document.querySelector('.hero-actions .btn-hero-primary');
            if (btnP && data.heroBtnPrimary) {
                btnP.innerHTML = `<i class="fa-solid fa-id-card-clip"></i> ${data.heroBtnPrimary}`;
            }
            const btnS = document.querySelector('.hero-actions .btn-hero-secondary');
            if (btnS && data.heroBtnSecondary) {
                btnS.innerHTML = `<i class="fa-solid fa-calendar-check"></i> ${data.heroBtnSecondary}`;
            }

            // Hero Stats
            const statBoxes = document.querySelectorAll('.hero-stats-row .stat-box');
            if (statBoxes.length >= 3) {
                if (data.studentsCount) statBoxes[0].querySelector('.num').textContent = data.studentsCount;
                if (data.classrooms) statBoxes[1].querySelector('.num').textContent = data.classrooms;
                if (data.teachers) statBoxes[2].querySelector('.num').textContent = data.teachers;
            }

            // Hero Image
            if (data.image) {
                const heroImg = document.querySelector('.hero-img-wrapper img');
                if (heroImg) {
                    let src = data.image;
                    if (!src.startsWith('data:') && !src.startsWith('http://') && !src.startsWith('https://') && !src.startsWith('../') && !src.startsWith('./')) {
                        src = '../' + src;
                    }
                    heroImg.src = src;
                }
            }

            // Leadership
            const pRole = document.querySelector('.principal-role');
            if (pRole && data.principal) pRole.textContent = data.principal;

            const pSpeech = document.querySelector('.principal-speech p');
            if (pSpeech && data.speech) pSpeech.textContent = `"${data.speech}"`;

            // Vision & Mission
            const visionEl = document.querySelector('.vision-text');
            if (visionEl && data.vision) visionEl.textContent = data.vision;

            const missionEl = document.querySelector('.mission-text');
            if (missionEl && data.mission) missionEl.textContent = data.mission;

            // Facilities
            if (Array.isArray(data.facilities) && data.facilities.length > 0) {
                const facGrid = document.querySelector('.facilities-grid');
                if (facGrid) {
                    facGrid.innerHTML = data.facilities.map(f => `
                        <div class="facility-card">
                            <div class="facility-icon-wrap"><i class="fa-solid ${f.icon || 'fa-school'}"></i></div>
                            <h4>${f.title}</h4>
                            <p>${f.desc}</p>
                        </div>
                    `).join('');
                }
            }

            // Digital Services
            if (Array.isArray(data.services) && data.services.length > 0) {
                const srvGrid = document.querySelector('.services-school-grid');
                if (srvGrid) {
                    srvGrid.innerHTML = data.services.map(s => `
                        <div class="service-box-card">
                            <div>
                                <div class="srv-icon"><i class="fa-solid ${s.icon || 'fa-bolt'}"></i></div>
                                <h4 class="srv-title">${s.title}</h4>
                                <p class="srv-desc">${s.desc}</p>
                            </div>
                            <a href="${s.link || '#'}" ${s.link && s.link.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} class="srv-btn">
                                ${s.btnText || 'دخول الخدمة'} <i class="fa-solid fa-arrow-left"></i>
                            </a>
                        </div>
                    `).join('');
                }
            }

            // Students Database Override
            if (Array.isArray(data.students) && data.students.length > 0) {
                window.STUDENTS_DATABASE = data.students;
            }

            // FAQs
            if (Array.isArray(data.faqs) && data.faqs.length > 0) {
                const faqList = document.querySelector('.faq-list');
                if (faqList) {
                    faqList.innerHTML = data.faqs.map(f => `
                        <div class="faq-item">
                            <button class="faq-question">
                                <span>${f.q}</span>
                                <i class="fa-solid fa-chevron-down"></i>
                            </button>
                            <div class="faq-answer">${f.a}</div>
                        </div>
                    `).join('');
                }
            }

            // Footer
            const fBrandH4 = document.querySelector('.footer-brand h4');
            if (fBrandH4 && data.name) fBrandH4.textContent = data.name;

            const fBrandP = document.querySelector('.footer-brand p');
            if (fBrandP && data.footerDesc) fBrandP.textContent = data.footerDesc;

            const fBottom = document.querySelector('.footer-bottom');
            if (fBottom && data.copyright) fBottom.textContent = data.copyright;
        }

        // Fill vision and mission defaults if still empty
        const vText = document.querySelector('.vision-text');
        if (vText && !vText.textContent.trim()) {
            vText.textContent = "توفير تعليم ثانوي متميز قائم على مهارات القرن الحادي والعشرين والتحول الرقمي، وتخريج جيل مبدع متمسك بالقيم الوطنية قادر على التنافس العلمي والمعرفي.";
        }
        const mText = document.querySelector('.mission-text');
        if (mText && !mText.textContent.trim()) {
            mText.textContent = "تقديم بيئة تربوية محفزة تسخر المعامل الذكية والشاشات التفاعلية لدعم التفكير النقدي لدى الطلاب، وتنمية قدرات الكادر التعليمي، وبناء شراكة مجتمعية وثيقة مع أولياء الأمور.";
        }

    } catch(err) {
        console.warn('Notice loading school data:', err);
    }
}

// ======================== ADMIN SINGLE BUTTON INJECTION ========================
function injectSchoolAdminLinks(schoolId) {
    // Clean up any extra admin buttons from top bar or footer so there is strictly ONE button
    document.querySelectorAll('.top-admin-link, .footer-admin-link, .top-notice-bar .btn-school-admin, .footer-links .btn-school-admin').forEach(el => el.remove());

    // Ensure ONLY ONE single button exists in the main navbar
    const navMenu = document.getElementById("navMenu");
    if (navMenu) {
        const existingBtns = navMenu.querySelectorAll('.btn-school-admin');
        if (existingBtns.length > 1) {
            for (let i = 1; i < existingBtns.length; i++) {
                existingBtns[i].closest('li')?.remove();
            }
        } else if (existingBtns.length === 0) {
            const li = document.createElement("li");
            li.innerHTML = `
                <a href="school-admin.html?id=${schoolId}" class="btn-school-admin" title="لوحة تحكم الموقع">
                    <i class="fa-solid fa-gauge-high"></i>
                    لوحة التحكم
                </a>
            `;
            navMenu.appendChild(li);
        }
    }
}

// ======================== MOBILE NAVIGATION ========================
function initMobileNav() {
    const menuToggle = document.getElementById("mobileToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("mobile-open");
            const icon = menuToggle.querySelector("i");
            if (icon) {
                if (navMenu.classList.contains("mobile-open")) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                } else {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            }
        });

        navMenu.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("mobile-open");
                const icon = menuToggle.querySelector("i");
                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            });
        });
    }
}

// ======================== SCHEDULE TABS ========================
function initScheduleTabs() {
    const tabBtns = document.querySelectorAll(".schedule-tabs .tab-btn");
    const scheduleDays = document.querySelectorAll(".schedule-day-content");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const targetDay = btn.getAttribute("data-day");
            scheduleDays.forEach(day => {
                if (day.getAttribute("data-day") === targetDay) {
                    day.style.display = "block";
                } else {
                    day.style.display = "none";
                }
            });
        });
    });
}

// ======================== FAQ ACCORDION ========================
function initFaqAccordion() {
    document.querySelectorAll(".faq-item").forEach(item => {
        const questionBtn = item.querySelector(".faq-question");
        if (questionBtn) {
            questionBtn.onclick = function() {
                const isOpen = item.classList.contains("open");
                document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
                if (!isOpen) {
                    item.classList.add("open");
                }
            };
        }
    });
}

// ======================== STUDENT INQUIRY ========================
function initStudentInquiry() {
    const inquiryForm = document.getElementById("studentInquiryForm");
    const inquiryResult = document.getElementById("inquiryResult");

    if (inquiryForm && inquiryResult) {
        inquiryForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const inputVal = document.getElementById("studentCodeInput").value.trim();
            if (!inputVal) {
                showToast("يرجى كتابة اسم الطالب أو الكود للاستعلام", "error");
                return;
            }

            const student = findStudentData(inputVal);

            if (!student) {
                inquiryResult.innerHTML = `
                    <div class="student-error-card">
                        <div class="student-error-icon">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                        </div>
                        <div class="student-error-body">
                            <h4>عفواً، لم يتم العثور على بيانات الطالب</h4>
                            <p>الاسم أو الرقم الذي أدخلته (<strong>"${inputVal}"</strong>) غير مسجل في قاعدة بيانات طلاب المدرسة.</p>
                            <div class="student-error-tips">
                                <i class="fa-solid fa-circle-info"></i> يرجى التأكد من كتابة الاسم ثلاثياً بشكل صحيح أو استخدام كود الطالب / رقم الجلوس.
                            </div>
                        </div>
                    </div>
                `;
                inquiryResult.classList.add("show");
                showToast("عفواً، الاسم غير موجود بقاعدة البيانات", "error");
                return;
            }

            const gradesHtml = (student.grades || []).map(g => `
                <div class="grade-mini-card">
                    <div class="grade-subject">${g.subject}</div>
                    <div class="grade-score">${g.score}</div>
                    <span class="grade-pill">${g.state}</span>
                </div>
            `).join("");

            inquiryResult.innerHTML = `
                <div class="student-result-card">
                    <div class="student-result-header">
                        <div class="student-info-main">
                            <div class="student-avatar-badge">
                                <i class="fa-solid fa-user-graduate"></i>
                            </div>
                            <div>
                                <h4 class="student-result-name">${student.name}</h4>
                                <div class="student-tags-row">
                                    <span class="s-tag"><i class="fa-solid fa-id-card"></i> كود: ${student.code || '---'}</span>
                                    <span class="s-tag"><i class="fa-solid fa-hashtag"></i> رقم الجلوس: ${student.seatNumber || '---'}</span>
                                    <span class="s-tag"><i class="fa-solid fa-chalkboard-user"></i> ${student.grade || ''} (${student.section || ''})</span>
                                </div>
                            </div>
                        </div>
                        <div class="student-badge-wrap">
                            <span class="student-status-badge ${student.statusType || 'success'}">
                                <i class="fa-solid ${student.statusType === 'warning' ? 'fa-triangle-exclamation' : 'fa-circle-check'}"></i>
                                ${student.status || 'مقيد بانتظام'}
                            </span>
                            <div class="student-rating-label">${student.rating || 'ممتاز'}</div>
                        </div>
                    </div>

                    <div class="student-stats-grid">
                        <div class="s-stat-box">
                            <span class="s-stat-title"><i class="fa-solid fa-chart-pie"></i> المجموع والنسبة</span>
                            <strong class="s-stat-value text-gold">${student.totalScore || ''} (${student.percentage || ''})</strong>
                        </div>
                        <div class="s-stat-box">
                            <span class="s-stat-title"><i class="fa-solid fa-calendar-check"></i> نسبة الحضور</span>
                            <strong class="s-stat-value">${student.attendance || '90%'}</strong>
                        </div>
                        <div class="s-stat-box">
                            <span class="s-stat-title"><i class="fa-solid fa-tablet-screen-button"></i> حالة التابلت</span>
                            <strong class="s-stat-value">${student.tabletStatus || 'مفعل'}</strong>
                        </div>
                        <div class="s-stat-box">
                            <span class="s-stat-title"><i class="fa-solid fa-clipboard-check"></i> التقييمات الأسبوعية</span>
                            <strong class="s-stat-value">${student.evaluations || 'مكتملة'}</strong>
                        </div>
                    </div>

                    <div class="student-grades-table-wrap">
                        <h5 class="grades-table-title"><i class="fa-solid fa-award"></i> بيان درجات المواد والتقييم الشهري</h5>
                        <div class="grades-grid-cards">
                            ${gradesHtml}
                        </div>
                    </div>

                    <div class="student-notes-card">
                        <i class="fa-solid fa-message"></i>
                        <div>
                            <strong>ملاحظات وتوجيه إدارة المدرسة:</strong>
                            <p>${student.notes || 'طالب متميز وملتزم بالأنشطة والمناهج الدراسية.'}</p>
                        </div>
                    </div>
                </div>
            `;

            inquiryResult.classList.add("show");
            showToast(`تم عرض بيان درجات الطالب: ${student.name}`, "success");
        });
    }
}

// ======================== CONTACT FORM ========================
function initContactForm() {
    const contactForm = document.getElementById("schoolContactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            showToast("تم إرسال رسالتكم لإدارة المدرسة بنجاح. سيتم الرد قريباً.", "success");
            contactForm.reset();
        });
    }
}

// ======================== ANTHEM PLAYER ========================
function initAnthemPlayer() {
    let music = document.getElementById('bgMusic');
    let btn = document.getElementById('toggleBtn');
    const topBarLeft = document.querySelector(".top-bar-left");

    // Check if music exists or create dynamically
    if (!music && topBarLeft) {
        music = document.createElement("audio");
        music.id = "bgMusic";
        music.loop = true;
        music.src = "./Albumaty.Com_wtnyt_msryt_alnshyd_alwtny_almsry.mp3";
        topBarLeft.appendChild(music);
    }

    if (!btn && topBarLeft) {
        btn = document.createElement("button");
        btn.id = "toggleBtn";
        btn.className = "music-btn";
        btn.innerHTML = "🔊 النشيد الوطني";
        btn.onclick = toggleMusic;
        topBarLeft.appendChild(btn);
    }

    window.toggleMusic = function() {
        if (!music) return;
        if (music.paused) {
            music.play().then(() => {
                if (btn) btn.innerHTML = "🔇 إيقاف النشيد";
            }).catch(e => console.log('Audio play blocked:', e));
        } else {
            music.pause();
            if (btn) btn.innerHTML = "🔊 النشيد الوطني";
        }
    };
}

// ======================== TOAST HELPER ========================
window.showToast = function(message, type = "success") {
    let toast = document.getElementById("toastBox");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toastBox";
        toast.className = "toast-msg";
        document.body.appendChild(toast);
    }
    const isError = type === "error";
    const icon = isError ? "fa-circle-xmark" : "fa-circle-check";
    const color = isError ? "#ef4444" : "#D9A72E";
    toast.innerHTML = `<i class="fa-solid ${icon}" style="color: ${color}; font-size: 18px;"></i> <span>${message}</span>`;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 4000);
};
