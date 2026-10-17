
const schoolsData = [
    {
        id: 1,
        name: "مدرسة السادات الثانوية بنين",
        type: "boys",
        typeName: "ثانوي عام - بنين",
        location: "السنبلاوين -  شارع الاداره",
        area: "السنبلاوين المدينة",
        code: "210408",
        studentsCount: "350 طالب",
        principal: "أ / مدير مدرسة السادات الثانوية",
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
        link: "",
        hasLiveSite: false,
        description: "صرح تعليمي يخدم طلاب وطالبات قرية المقاطعة والقرى المجاورة، يتميز بنسب تفوق عالية في امتحانات الثانوية العامة.",
        features: ["مكتبة تعليمية شاملة", "معمل حاسب آلي مطور", "أنشطة ثقافية متميزة"]
    },
    {
        id: 3,
        name: "أحمد لطفي السيد الثانوية بنين",
        type: "boys",
        typeName: "ثانوي عام - بنين",
        location: "السنبلاوين - حي الزهور",
        area: "السنبلاوين المدينة",
        code: "210422",
        studentsCount: "1,380 طالب",
        principal: "إدارة مدرسة أحمد لطفي السيد",
        image: "i.jpeg",
        link: "",
        hasLiveSite: false,
        description: "مدرسة رائدة تحمل اسم رائد التنوير والمفكر المصري الكبير أحمد لطفي السيد، وتضم كادراً تعليمياً متميزاً.",
        features: ["بيئة تعليمية منضبطة", "مسابقات أوائل الطلبة", "صالات تدريب رياضي"]
    },
    {
        id: 4,
        name: "السنبلاوين الرسمية للغات المشتركة",
        type: "languages",
        typeName: "رسمي لغات - مشتركه",
        location: "السنبلاوين - بجوار الإدارة التعليمية",
        area: "السنبلاوين المدينة",
        code: "210430",
        studentsCount: "950 طالب وطالبة",
        principal: "إدارة المدرسة التجريبية للغات",
        image: "u.jpeg",
        link: "",
        hasLiveSite: false,
        description: "المدرسة الرسمية للغات الأولى بالمركز، تدرس المناهج باللغة الإنجليزية بإشراف مباشر من توجيه اللغات بالمديرية.",
        features: ["تدريس اللغات الأجنبية", "معامل لغات متقدمة", "مناهج دولية معتمدة", "نوادي علوم وابتكار"]
    },
    {
        id: 5,
        name: "كفر غنام الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركه",
        location: "قرية كفر غنام - السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210444",
        studentsCount: "890 طالب وطالبة",
        principal: "إدارة مدرسة كفر غنام الثانوية",
        image: "w.jpeg",
        link: "",
        hasLiveSite: false,
        description: "مدرسة حديثة التطوير تخدم قطاع جنوب السنبلاوين ومجهزة بأحدث وسائل التعلم الحديثة وشبكة الألياف الضوئية.",
        features: ["إنترنت فائق السرعة", "فصول مجهزة وشاشات ذكية", "ملاعب رياضية حديثة"]
    },
    {
        id: 6,
        name: "السنبلاوين الثانوية بنات",
        type: "girls",
        typeName: "ثانوي عام - بنات",
        location: "السنبلاوين - شارع الجمهورية",
        area: "السنبلاوين المدينة",
        code: "210450",
        studentsCount: "1,600 طالبة",
        principal: "إدارة السنبلاوين الثانوية بنات",
        image: "خ.jpg",
        link: "",
        hasLiveSite: false,
        description: "أكبر مدارس المرحلة الثانوية للبنات بالمركز، تمتاز بتخريج أوائل المحافظة سنوياً والتميز في الأنشطة الطلابية.",
        features: ["مسرح مدرسي متكامل", "معامل أحياء وفيزياء وكيمياء", "أندية فتيات وموهوبين"]
    },
    {
        id: 7,
        name: "ابوقراميط الثانوية المشتركة",
        type: "boys",
        typeName: "ثانوي عام - مشتركه",
        location: "السنبلاوين - طريق المعاهدة",
        area: "السنبلاوين المدينة",
        code: "210461",
        studentsCount: "1,250 طالب",
        principal: "إدارة مدرسهابوقراميط الثانوية المشتركة",
        image: "ق.jpg",
        link: "",
        hasLiveSite: false,
        description: "مدرسة عسكرية متميزة تجمع بين الانضباط العالي والتحصيل العلمي المتقدم، وتضم فصول التأسيس العسكري.",
        features: ["تأسيس عسكري منضبط", "أنشطة لياقة بدنية", "معامل تابلت وشبكات"]
    },
    {
        id: 8,
        name: "طهواى الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركه",
        location: "قرية برقين - السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210472",
        studentsCount: "980 طالب وطالبة",
        principal: "إدارة مدرسة طهواى الثانوية ",
        image: "ن.jpg",
        link: "",
        hasLiveSite: false,
        description: "صرح تعليمي عريق يخدم قرى الوحدة المحلية ببرقين ويوفر بيئة تربوية هادئة ومحفزة على الإبداع والتفوق.",
        features: ["مكتبة إلكترونية", "معارض علمية وفنية", "تواصل إلكتروني مع أولياء الأمور"]
    },
    {
        id: 9,
        name: "ميت غراب وشبراهور الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركه",
        location: "قرية ميت غريطة - السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210480",
        studentsCount: "820 طالب وطالبة",
        principal: "إدارة مدرسة ميت غريطة",
        image: "WhatsApp Image 2026-09-27 at 5.56.24 PM.jpeg",
        link: "",
        hasLiveSite: false,
        description: "مدرسة متميزة بنشاطها الاجتماعي والتربوي ومشاريع التخرج الطلابية على مستوى إدارة السنبلاوين التعليمية.",
        features: ["فصول نموذجية", "إشراف تربوي متكامل", "أنشطة بيئية وتوعوية"]
    },
    {
        id: 10,
        name: "الشهيد محمد الراعي الثانوية بالجلايله المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركه",
        location: "قرية شبراهور - السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210492",
        studentsCount: "1,050 طالب وطالبة",
        principal: "إدارة مدرسة شبراهور",
        image: "WhatsApp Image 2026-09-27 at 6.03.07 PM.jpeg",
        link: "",
        hasLiveSite: false,
        description: "تخدم قطاعاً واسعاً من قرى غرب السنبلاوين وتتمتع ببنية تكنولوجية حديثة لتدريس منظومة الثانوية العامة.",
        features: ["شبكة إنترنت ألياف ضوئية", "غرفة تدريب وتطوير تكنولوجي", "فريق مسابقات أوائل"]
    },
    {
        id: 11,
        name: "السنبلاوين الرسمية المتميزة لغات المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركه",
        location: "قرية طمبول الكبرى - السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210501",
        studentsCount: "780 طالب وطالبة",
        principal: "إدارة مدرسة طمبول الكبرى",
        image: "WhatsApp Image 2026-09-27 at 6.05.21 PM.jpeg",
        link: "",
        hasLiveSite: false,
        description: "مؤسسة تعليمية تهدف إلى رفع الكفاءة العلمية وتقديم رعاية خاصة للطلاب الموهوبين والمتفوقين علمياً.",
        features: ["رعاية الفائقين", "قاعات ورش عمل", "معامل حاسب ومكتبة"]
    },
    {
        id: 12,
        name: "غزالة الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركه",
        location: "قرية غزالة - السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210515",
        studentsCount: "710 طالب وطالبة",
        principal: "إدارة مدرسة غزالة",
        image: "Gemini_Generated_Image_g9c38tg9c38tg9c3.jpg",
        link: "",
        hasLiveSite: false,
        description: "مدرسة هادئة وواعدة توفر مناخاً دراسياً نموذجياً يتيح للطلاب التركيز والتفوق في كافة الشعب العلمية والأدبية.",
        features: ["متابعة دراسية دقيقة", "مجموعات تقوية مجانية", "أنشطة صحافة مدرسية"]
    },
    {
        id: 13,
        name: "الزهايره الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركه",
        location: "قرية البشاشة - السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210522",
        studentsCount: "670 طالب وطالبة",
        principal: "إدارة مدرسة البشاشة",
        image: "WhatsApp Image 2026-09-27 at 6.06.50 PM.jpeg",
        link: "",
        hasLiveSite: false,
        description: "مؤسسة تعليمية نموذجية حاصلة على شهادات تقدير من الإدارة لحسن الانضباط المدرسي والمستوى التعليمي.",
        features: ["انضباط دراسي تام", "مكتبة حديثة", "معمل لغات وعلوم"]
    },
    {
        id: 14,
        name: "الشهيد مصطفى فتوح جبر المشتركة",
        type: "vocational",
        typeName: "ثانوي عام - مشتركه",
        location: "السنبلاوين - مجمع المدارس",
        area: "السنبلاوين المدينة",
        code: "210530",
        studentsCount: "850 طالب وطالبة",
        principal: "إدارة المدرسة الفندقية بالسنبلاوين",
        image: "Gemini_Generated_Image_cvqxkmcvqxkmcvqx.jpg",
        link: "",
        hasLiveSite: false,
        description: "المدرسة المتخصصة في التعليم الفندقي والضيافة، وتوفر تدريباً عملياً في المطاعم والفنادق الكبرى وتأهيلاً لسوق العمل.",
        features: ["مطابخ تدريب احترافية", "قاعات محاكاة فندقية", "فرص تدريب وتوظيف فورية"]
    },
    {
        id: 15,
        name: "طوخ الأقلام الثانوية المشتركة",
        type: "girls",
        typeName: "ثانوي عام - مشتركه",
        location: "السنبلاوين - شارع البحر",
        area: "السنبلاوين المدينة",
        code: "210540",
        studentsCount: "1,350 طالبة",
        principal: "إدارة السنبلاوين التجارية بنات",
        image: "Gemini_Generated_Image_720j40720j40720j.jpg",
        link: "",
        hasLiveSite: false,
        description: "تعد الطالبات في مجالات السكرتارية وإدارة الأعمال والمحاسبة المالية والحاسب الآلي وتطبيقات الأعمال الذكية.",
        features: ["معامل محاسبة إلكترونية", "برامج مهارات تسويق وسكرتارية", "قاعات تكنولوجيا المعلومات"]
    },
    {
        id: 16,
        name: "صبح كاعوه الثانوية المشتركة",
        type: "vocational",
        typeName: "ثانوي عام - مشتركه",
        location: "السنبلاوين - المنطقة الصناعية",
        area: "السنبلاوين المدينة",
        code: "210555",
        studentsCount: "1,520 طالب",
        principal: "إدارة المدرسة الصناعية بنين",
        image: "Gemini_Generated_Image_k8uhd4k8uhd4k8uh.jpg",
        link: "",
        hasLiveSite: false,
        description: "مدرسة صناعية كبرى تضم تخصصات الكهرباء والميكانيكا والسيارات والتبريد والتكييف، وشريكة في مبادرات رأس المال.",
        features: ["ورش ميكانيكا وكهرباء حديثة", "تدريب ميداني متقدم", "تخصصات الطاقة والسيارات"]
    },
    {
        id: 17,
        name: "حسين عثمان الثانوية المشتركة بشبرا سندى",
        type: "vocational",
        typeName: "ثانوي عام - مشتركه",
        location: "السنبلاوين - طريق المنصورة",
        area: "السنبلاوين المدينة",
        code: "210568",
        studentsCount: "1,100 طالب وطالبة",
        principal: "إدارة مدرسة السنبلاوين الزراعية",
        image: "Gemini_Generated_Image_5uuyar5uuyar5uuy.jpg",
        link: "",
        hasLiveSite: false,
        description: "مجمع زراعي تعليمي متكامل يضم حقول تدريبية ومزارع إنتاج حيواني وصناعات غذائية متقدمة.",
        features: ["حقول وصوب زراعية", "معامل تكنولوجيا تصنيع زراعي", "منافذ تدريب وإنتاج"]
    },
    {
        id: 18,
        name: "البلامون الثانوية المشتركة",
        type: "girls",
        typeName: "ثانوي عام - مشتركه",
        location: "السنبلاوين - حي النور",
        area: "السنبلاوين المدينة",
        code: "210579",
        studentsCount: "1,180 طالبة",
        principal: "إدارة السنبلاوين الفنية بنات",
        image: "Gemini_Generated_Image_6xhnxw6xhnxw6xhn.jpg",
        link: "",
        hasLiveSite: false,
        description: "تؤهل الطالبات في تخصصات الملابس الجاهزة، والزخرفة والإعلان، والتطريز الآلي، والتركيبات الكهربائية الحديثة.",
        features: ["خطوط إنتاج ملابس جاهزة", "معامل تصميم وزخرفة", "معارض فنية سنوية"]
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
                <h3 class="card-title" title="${school.name}">${school.name}</h3>
                
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