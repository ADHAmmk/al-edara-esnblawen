/**
 * بوابة إدارة السنبلاوين التعليمية - نظام إدارة وبحث المدارس التفاعلي
 */

// قائمة المدارس الثانوية التابعة لإدارة السنبلاوين التعليمية
const schoolsData = [
    {
        id: 1,
        name: "مدرسة السادات الثانوية بنين",
        type: "boys",
        typeName: "ثانوي عام - بنين",
        location: "السنبلاوين - شارع المدارس",
        area: "السنبلاوين المدينة",
        code: "210408",
        studentsCount: "1,450 طالب",
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
        typeName: "رسمي لغات - تجريبي",
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
        typeName: "ثانوي عام - مشترك",
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
        image: "WhatsApp Image 2026-09-29 at 5.19.11 PM.jpeg",
        link: "",
        hasLiveSite: false,
        description: "أكبر مدارس المرحلة الثانوية للبنات بالمركز، تمتاز بتخريج أوائل المحافظة سنوياً والتميز في الأنشطة الطلابية.",
        features: ["مسرح مدرسي متكامل", "معامل أحياء وفيزياء وكيمياء", "أندية فتيات وموهوبين"]
    },
    {
        id: 7,
        name: "الشهيد محمود شاكر الثانوية",
        type: "boys",
        typeName: "ثانوي عام - بنين",
        location: "السنبلاوين - طريق المعاهدة",
        area: "السنبلاوين المدينة",
        code: "210461",
        studentsCount: "1,250 طالب",
        principal: "إدارة مدرسة الشهيد محمود شاكر",
        image: "WhatsApp Image 2026-09-27 at 4.35.20 PM.jpeg",
        link: "",
        hasLiveSite: false,
        description: "مدرسة عسكرية متميزة تجمع بين الانضباط العالي والتحصيل العلمي المتقدم، وتضم فصول التأسيس العسكري.",
        features: ["تأسيس عسكري منضبط", "أنشطة لياقة بدنية", "معامل تابلت وشبكات"]
    },
    {
        id: 8,
        name: "برقين الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشترك",
        location: "قرية برقين - السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210472",
        studentsCount: "980 طالب وطالبة",
        principal: "إدارة مدرسة برقين الثانوية",
        image: "WhatsApp Image 2026-09-29 at 5.19.11 P7.jpeg",
        link: "",
        hasLiveSite: false,
        description: "صرح تعليمي عريق يخدم قرى الوحدة المحلية ببرقين ويوفر بيئة تربوية هادئة ومحفزة على الإبداع والتفوق.",
        features: ["مكتبة إلكترونية", "معارض علمية وفنية", "تواصل إلكتروني مع أولياء الأمور"]
    },
    {
        id: 9,
        name: "ميت غريطة الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشترك",
        location: "قرية ميت غريطة - السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210480",
        studentsCount: "820 طالب وطالبة",
        principal: "إدارة مدرسة ميت غريطة",
        image: "a.jpeg",
        link: "",
        hasLiveSite: false,
        description: "مدرسة متميزة بنشاطها الاجتماعي والتربوي ومشاريع التخرج الطلابية على مستوى إدارة السنبلاوين التعليمية.",
        features: ["فصول نموذجية", "إشراف تربوي متكامل", "أنشطة بيئية وتوعوية"]
    },
    {
        id: 10,
        name: "شبراهور الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشترك",
        location: "قرية شبراهور - السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210492",
        studentsCount: "1,050 طالب وطالبة",
        principal: "إدارة مدرسة شبراهور",
        image: "w.jpeg",
        link: "",
        hasLiveSite: false,
        description: "تخدم قطاعاً واسعاً من قرى غرب السنبلاوين وتتمتع ببنية تكنولوجية حديثة لتدريس منظومة الثانوية العامة.",
        features: ["شبكة إنترنت ألياف ضوئية", "غرفة تدريب وتطوير تكنولوجي", "فريق مسابقات أوائل"]
    },
    {
        id: 11,
        name: "طمبول الكبرى الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشترك",
        location: "قرية طمبول الكبرى - السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210501",
        studentsCount: "780 طالب وطالبة",
        principal: "إدارة مدرسة طمبول الكبرى",
        image: "q.jpeg",
        link: "",
        hasLiveSite: false,
        description: "مؤسسة تعليمية تهدف إلى رفع الكفاءة العلمية وتقديم رعاية خاصة للطلاب الموهوبين والمتفوقين علمياً.",
        features: ["رعاية الفائقين", "قاعات ورش عمل", "معامل حاسب ومكتبة"]
    },
    {
        id: 12,
        name: "غزالة الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشترك",
        location: "قرية غزالة - السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210515",
        studentsCount: "710 طالب وطالبة",
        principal: "إدارة مدرسة غزالة",
        image: "i.jpeg",
        link: "",
        hasLiveSite: false,
        description: "مدرسة هادئة وواعدة توفر مناخاً دراسياً نموذجياً يتيح للطلاب التركيز والتفوق في كافة الشعب العلمية والأدبية.",
        features: ["متابعة دراسية دقيقة", "مجموعات تقوية مجانية", "أنشطة صحافة مدرسية"]
    },
    {
        id: 13,
        name: "البشاشة الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشترك",
        location: "قرية البشاشة - السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210522",
        studentsCount: "670 طالب وطالبة",
        principal: "إدارة مدرسة البشاشة",
        image: "u.jpeg",
        link: "",
        hasLiveSite: false,
        description: "مؤسسة تعليمية نموذجية حاصلة على شهادات تقدير من الإدارة لحسن الانضباط المدرسي والمستوى التعليمي.",
        features: ["انضباط دراسي تام", "مكتبة حديثة", "معمل لغات وعلوم"]
    },
    {
        id: 14,
        name: "السنبلاوين الفندقية والخدمات السياحية",
        type: "vocational",
        typeName: "ثانوي فني - فندقي",
        location: "السنبلاوين - مجمع المدارس",
        area: "السنبلاوين المدينة",
        code: "210530",
        studentsCount: "850 طالب وطالبة",
        principal: "إدارة المدرسة الفندقية بالسنبلاوين",
        image: "WhatsApp Image 2026-09-27 at 4.35.20 PM.jpeg",
        link: "",
        hasLiveSite: false,
        description: "المدرسة المتخصصة في التعليم الفندقي والضيافة، وتوفر تدريباً عملياً في المطاعم والفنادق الكبرى وتأهيلاً لسوق العمل.",
        features: ["مطابخ تدريب احترافية", "قاعات محاكاة فندقية", "فرص تدريب وتوظيف فورية"]
    },
    {
        id: 15,
        name: "السنبلاوين التجارية بنات",
        type: "girls",
        typeName: "ثانوي فني - تجاري",
        location: "السنبلاوين - شارع البحر",
        area: "السنبلاوين المدينة",
        code: "210540",
        studentsCount: "1,350 طالبة",
        principal: "إدارة السنبلاوين التجارية بنات",
        image: "WhatsApp Image 2026-09-29 at 5.19.11 PM.jpeg",
        link: "",
        hasLiveSite: false,
        description: "تعد الطالبات في مجالات السكرتارية وإدارة الأعمال والمحاسبة المالية والحاسب الآلي وتطبيقات الأعمال الذكية.",
        features: ["معامل محاسبة إلكترونية", "برامج مهارات تسويق وسكرتارية", "قاعات تكنولوجيا المعلومات"]
    },
    {
        id: 16,
        name: "السنبلاوين الصناعية بنين",
        type: "vocational",
        typeName: "ثانوي فني - صناعي",
        location: "السنبلاوين - المنطقة الصناعية",
        area: "السنبلاوين المدينة",
        code: "210555",
        studentsCount: "1,520 طالب",
        principal: "إدارة المدرسة الصناعية بنين",
        image: "q.jpeg",
        link: "",
        hasLiveSite: false,
        description: "مدرسة صناعية كبرى تضم تخصصات الكهرباء والميكانيكا والسيارات والتبريد والتكييف، وشريكة في مبادرات رأس المال.",
        features: ["ورش ميكانيكا وكهرباء حديثة", "تدريب ميداني متقدم", "تخصصات الطاقة والسيارات"]
    },
    {
        id: 17,
        name: "السنبلاوين الزراعية المشتركة",
        type: "vocational",
        typeName: "ثانوي فني - زراعي",
        location: "السنبلاوين - طريق المنصورة",
        area: "السنبلاوين المدينة",
        code: "210568",
        studentsCount: "1,100 طالب وطالبة",
        principal: "إدارة مدرسة السنبلاوين الزراعية",
        image: "a.jpeg",
        link: "",
        hasLiveSite: false,
        description: "مجمع زراعي تعليمي متكامل يضم حقول تدريبية ومزارع إنتاج حيواني وصناعات غذائية متقدمة.",
        features: ["حقول وصوب زراعية", "معامل تكنولوجيا تصنيع زراعي", "منافذ تدريب وإنتاج"]
    },
    {
        id: 18,
        name: "السنبلاوين الفنية بنات (صنايع بنات)",
        type: "girls",
        typeName: "ثانوي فني - صناعي",
        location: "السنبلاوين - حي النور",
        area: "السنبلاوين المدينة",
        code: "210579",
        studentsCount: "1,180 طالبة",
        principal: "إدارة السنبلاوين الفنية بنات",
        image: "w.jpeg",
        link: "",
        hasLiveSite: false,
        description: "تؤهل الطالبات في تخصصات الملابس الجاهزة، والزخرفة والإعلان، والتطريز الآلي، والتركيبات الكهربائية الحديثة.",
        features: ["خطوط إنتاج ملابس جاهزة", "معامل تصميم وزخرفة", "معارض فنية سنوية"]
    }
];

// حالة التصفية الحالية
const filterState = {
    searchQuery: "",
    category: "all",
    area: "all",
    sort: "default",
    viewMode: "grid" // 'grid' | 'list'
};

// تطبيع النصوص العربية لتسهيل البحث الدقيق
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

// تصفية وترتيب المدارس
function getFilteredSchools() {
    let result = [...schoolsData];

    // تصفية البحث النصي
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

    // تصفية التصنيف (بنين / بنات / مشترك / لغات / فني)
    if (filterState.category !== "all") {
        result = result.filter(school => school.type === filterState.category);
    }

    // تصفية المنطقة
    if (filterState.area !== "all") {
        result = result.filter(school => school.area === filterState.area);
    }

    // الترتيب
    if (filterState.sort === "name-asc") {
        result.sort((a, b) => a.name.localeCompare(b.name, "ar"));
    } else if (filterState.sort === "name-desc") {
        result.sort((a, b) => b.name.localeCompare(a.name, "ar"));
    }

    return result;
}

// إنشاء بطاقة المدرسة في واجهة المستخدم
function renderSchoolCard(school) {
    const isLive = school.hasLiveSite;
    const siteUrl = school.link && school.link.trim() !== "" ? school.link : `javascript:openSchoolModal(${school.id});`;
    const targetAttr = isLive ? 'target="_blank" rel="noopener noreferrer"' : '';

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
                    <a href="${siteUrl}" ${targetAttr} class="btn-card-visit" title="زيارة المنصة">
                        <i class="fa-solid ${isLive ? 'fa-arrow-up-right-from-square' : 'fa-circle-info'}"></i>
                        ${isLive ? 'زيارة الموقع' : 'تفاصيل المدرسة'}
                    </a>
                    <button type="button" class="btn-card-details" onclick="openSchoolModal(${school.id})">
                        <i class="fa-solid fa-file-lines"></i>
                        بيانات كاملة
                    </button>
                </div>
            </div>
        </article>
    `;
}

// تحديث عرض المدارس في الصفحة
function renderSchools() {
    const container = document.getElementById("schoolsGrid");
    const countBadge = document.getElementById("schoolsCount");
    if (!container) return;

    const filtered = getFilteredSchools();

    // تحديث العداد
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

// نافذة التفاصيل المنبثقة
function openSchoolModal(schoolId) {
    const school = schoolsData.find(s => s.id === schoolId);
    if (!school) return;

    const modal = document.getElementById("schoolModal");
    const modalContent = document.getElementById("modalDynamicContent");
    if (!modal || !modalContent) return;

    const isLive = school.hasLiveSite;
    const siteUrl = school.link && school.link.trim() !== "" ? school.link : "#";

    modalContent.innerHTML = `
        <div class="modal-cover">
            <img src="${school.image}" alt="${school.name}" onerror="this.src='q.jpeg'">
            <span class="modal-cover-badge">
                <i class="fa-solid fa-certificate"></i>
                ${school.typeName}
            </span>
        </div>
        
        <div class="modal-content-body">
            <h2 class="modal-school-name">${school.name}</h2>
            <div class="modal-school-loc">
                <i class="fa-solid fa-map-pin" style="color: #D9A72E;"></i>
                <span>${school.location}</span>
            </div>

            <p style="font-size: 14px; color: #4A6361; line-height: 1.7; margin-bottom: 20px;">
                ${school.description}
            </p>

            <div class="modal-info-grid">
                <div class="modal-info-item">
                    <strong>الرقم التعريفي (كود المدرسة):</strong>
                    <span>${school.code}</span>
                </div>
                <div class="modal-info-item">
                    <strong>الإدارة التعليمية:</strong>
                    <span>إدارة السنبلاوين التعليمية</span>
                </div>
                <div class="modal-info-item">
                    <strong>إجمالي الطلاب المقيدين:</strong>
                    <span>${school.studentsCount}</span>
                </div>
                <div class="modal-info-item">
                    <strong>الإدارة المسؤولة:</strong>
                    <span>${school.principal}</span>
                </div>
                <div class="modal-info-item">
                    <strong>الموقع الجغرافي:</strong>
                    <span>${school.area}</span>
                </div>
                <div class="modal-info-item">
                    <strong>حالة المنصة الذكية:</strong>
                    <span style="color: ${isLive ? '#10B981' : '#D9A72E'};">
                        ● ${isLive ? 'بوابة إلكترونية مستقلة مفعلة' : 'مدرجة بمنظومة الإدارة الموحدة'}
                    </span>
                </div>
            </div>

            <div style="margin-bottom: 22px;">
                <h4 style="font-size: 14px; font-weight: 800; color: #004C46; margin-bottom: 10px;">
                    <i class="fa-solid fa-star" style="color: #D9A72E; margin-left: 6px;"></i>
                    أبرز التجهيزات والمميزات:
                </h4>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${school.features.map(f => `
                        <span style="background: #F4F8F7; border: 1px solid #D8E7E4; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; color: #112826;">
                            ✓ ${f}
                        </span>
                    `).join("")}
                </div>
            </div>

            <div class="modal-actions">
                ${isLive ? `
                    <a href="${siteUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="flex: 1; justify-content: center;">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        زيارة الموقع الإلكتروني للمدرسة
                    </a>
                ` : `
                    <button class="btn-primary" onclick="alert('جاري إطلاق البوابة الرسمية لهذه المدرسة قريباً بتوجيه إدارة السنبلاوين');" style="flex: 1; justify-content: center;">
                        <i class="fa-solid fa-bell"></i>
                        طلب تفعيل منصة المدرسة
                    </button>
                `}
                <button class="btn-secondary" onclick="closeSchoolModal()" style="color: #004C46; border-color: #D8E7E4; background: #F4F8F7;">
                    إغلاق
                </button>
            </div>
        </div>
    `;

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeSchoolModal() {
    const modal = document.getElementById("schoolModal");
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
}

// إعادة ضبط جميع الفلاتر
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

// تهيئة الأحداث والصفحة
document.addEventListener("DOMContentLoaded", () => {
    // 1. عرض المدارس لأول مرة
    renderSchools();

    // 2. البحث النصي التفاعلي
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

    // 3. القوائم المنسدلة للتصفية
    const typeSelect = document.getElementById("typeFilter");
    if (typeSelect) {
        typeSelect.addEventListener("change", (e) => {
            filterState.category = e.target.value;
            
            // مزامنة الأزرار السريعة (chips)
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

    // 4. أزرار التصنيف السريعة (Filter Chips)
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

    // 5. تبديل طريقة العرض (شبكة / قائمة)
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

    // 6. القائمة المتنقلة للشاشات الصغيرة (Mobile Menu)
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("open");
            const icon = menuToggle.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");
            }
        });

        // إغلاق القائمة عند النقر على أي رابط
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                const icon = menuToggle.querySelector("i");
                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-xmark");
                }
            });
        });
    }

    // 7. زر الصعود للأعلى (Back to Top)
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

    // 8. إغلاق النافذة المنبثقة بالضغط على الخلفية أو مفتاح Escape
    const schoolModal = document.getElementById("schoolModal");
    if (schoolModal) {
        schoolModal.addEventListener("click", (e) => {
            if (e.target === schoolModal) {
                closeSchoolModal();
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeSchoolModal();
        }
    });

    // 9. ربط البحث القديم searchSchool إن تم استدعاؤه
    window.searchSchool = function() {
        const input = document.getElementById("schoolSearch");
        if (input) {
            filterState.searchQuery = input.value;
            renderSchools();
        }
    };
});