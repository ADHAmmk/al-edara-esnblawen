/* ==========================================================================
   School Portal Interactive JavaScript - إدارة السنبلاوين التعليمية
   ========================================================================== */

/* ==========================================================================
   قائمة أسماء الطلاب وبياناتهم - Students Database
   يمكنك هنا وضع وتعديل أسماء الطلاب والدرجات وحالة الحضور والتقييمات بكل سهولة.
   البحث يتم فقط في هذه القائمة، وإذا لم يكن الطالب مسجلاً يظهر خطأ (Error).
   ========================================================================== */
window.STUDENTS_DATABASE = [
    {
        name: "ادهم محمد",
        code: "2104081",
        seatNumber: "14520",
        grade: "الصف الثاني الثانوي",
        section: "علمي علوم",
        status: "مقيد بانتظام",
        statusType: "success", // success | info | warning
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
    },
    {
        name: "مريم طارق الشربيني",
        code: "2104085",
        seatNumber: "14524",
        grade: "الصف الثاني الثانوي",
        section: "أدبي",
        status: "مقيدة بانتظام",
        statusType: "success",
        attendance: "94.0%",
        tabletStatus: "مفعل ومسجل بالمنظومة",
        evaluations: "مكتملة وممتازة (أ)",
        totalScore: "258 / 280",
        percentage: "92.1%",
        rating: "ممتاز",
        grades: [
            { subject: "اللغة العربية", score: "47 / 50", state: "ممتاز" },
            { subject: "اللغة الإنجليزية", score: "46 / 50", state: "ممتاز" },
            { subject: "التاريخ", score: "56 / 60", state: "ممتاز" },
            { subject: "الجغرافيا", score: "55 / 60", state: "ممتاز" },
            { subject: "علم النفس", score: "54 / 60", state: "ممتاز" }
        ],
        notes: "طالبة مجتهدة ومتميزة في المواد الأدبية والأنشطة الثقافية بالمدرسة."
    },
    {
        name: "عمر شريف الدسوقي",
        code: "2104086",
        seatNumber: "14525",
        grade: "الصف الثالث الثانوي",
        section: "علمي علوم",
        status: "مقيد بانتظام",
        statusType: "info",
        attendance: "91.5%",
        tabletStatus: "مفعل ومسجل بالمنظومة",
        evaluations: "مكتملة بانتظام (ب)",
        totalScore: "356 / 410",
        percentage: "86.8%",
        rating: "جيد جداً مرتفع",
        grades: [
            { subject: "اللغة العربية", score: "70 / 80", state: "جيد جداً" },
            { subject: "اللغة الإنجليزية", score: "44 / 50", state: "جيد جداً" },
            { subject: "الأحياء", score: "54 / 60", state: "ممتاز" },
            { subject: "الجيولوجيا", score: "55 / 60", state: "ممتاز" },
            { subject: "الكيمياء", score: "51 / 60", state: "جيد جداً" },
            { subject: "الفيزياء", score: "50 / 60", state: "جيد جداً" }
        ],
        notes: "أداء متميز وتطور ملحوظ في درجات الاختبارات التجريبية."
    }
];


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



window.addEventListener('click', function() {
        var music = document.getElementById('bgMusic');
        music.play();
    }, { once: true }); 




function findStudentData(query) {
    if (!query) return null;
    const qNorm = normalizeArabicText(query);
    if (!qNorm) return null;

    const db = window.STUDENTS_DATABASE || [];

    // بحث بالاسم أو الكود أو رقم الجلوس في قاعدة البيانات
    const matched = db.find(s => {
        const nameNorm = normalizeArabicText(s.name || "");
        const codeNorm = normalizeArabicText(s.code || "");
        const seatNorm = normalizeArabicText(s.seatNumber || "");

        // مطابقة الاسم: إما تطابق كامل أو جزء من الاسم (بشرط إدخال 3 أحرف فأكثر)
        const isNameMatch = (nameNorm === qNorm) || (qNorm.length >= 3 && nameNorm.includes(qNorm));
        const isCodeMatch = (codeNorm === qNorm);
        const isSeatMatch = (seatNorm === qNorm);

        return isNameMatch || isCodeMatch || isSeatMatch;
    });

    return matched || null;
}

document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Toggle
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

        // Close when clicking any nav link
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

    // 2. Schedule Tabs Switcher
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

    // 3. FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const questionBtn = item.querySelector(".faq-question");
        if (questionBtn) {
            questionBtn.addEventListener("click", () => {
                const isOpen = item.classList.contains("open");
                faqItems.forEach(i => i.classList.remove("open"));
                if (!isOpen) {
                    item.classList.add("open");
                }
            });
        }
    });

    // 4. Student Inquiry by Name or Code (البحث في قاعدة بيانات الطلاب المسجلين فقط)
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

            // إذا لم يكن الاسم مسجلاً في قاعدة البيانات -> إظهار كارت الخطأ (Error)
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

            // توليد كروت المواد والدرجات في حال وجود الطالب
            const gradesHtml = student.grades.map(g => `
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
                                    <span class="s-tag"><i class="fa-solid fa-id-card"></i> كود: ${student.code}</span>
                                    <span class="s-tag"><i class="fa-solid fa-hashtag"></i> رقم الجلوس: ${student.seatNumber}</span>
                                    <span class="s-tag"><i class="fa-solid fa-chalkboard-user"></i> ${student.grade} (${student.section})</span>
                                </div>
                            </div>
                        </div>
                        <div class="student-badge-wrap">
                            <span class="student-status-badge ${student.statusType}">
                                <i class="fa-solid ${student.statusType === 'warning' ? 'fa-triangle-exclamation' : 'fa-circle-check'}"></i>
                                ${student.status}
                            </span>
                            <div class="student-rating-label">${student.rating}</div>
                        </div>
                    </div>

                    <div class="student-stats-grid">
                        <div class="s-stat-box">
                            <span class="s-stat-title"><i class="fa-solid fa-chart-pie"></i> المجموع والنسبة</span>
                            <strong class="s-stat-value text-gold">${student.totalScore} (${student.percentage})</strong>
                        </div>
                        <div class="s-stat-box">
                            <span class="s-stat-title"><i class="fa-solid fa-calendar-check"></i> نسبة الحضور</span>
                            <strong class="s-stat-value">${student.attendance}</strong>
                        </div>
                        <div class="s-stat-box">
                            <span class="s-stat-title"><i class="fa-solid fa-tablet-screen-button"></i> حالة التابلت</span>
                            <strong class="s-stat-value">${student.tabletStatus}</strong>
                        </div>
                        <div class="s-stat-box">
                            <span class="s-stat-title"><i class="fa-solid fa-clipboard-check"></i> التقييمات الأسبوعية</span>
                            <strong class="s-stat-value">${student.evaluations}</strong>
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
                            <p>${student.notes}</p>
                        </div>
                    </div>
                </div>
            `;

            inquiryResult.classList.add("show");
            showToast(`تم عرض بيان درجات الطالب: ${student.name}`, "success");
        });
    }

    // 5. Contact Form Handler
    const contactForm = document.getElementById("schoolContactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            showToast("تم إرسال رسالتكم لإدارة المدرسة بنجاح. سيتم الرد قريباً.", "success");
            contactForm.reset();
        });
    }

    // 6. Toast Notification Helper
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
});
