/* ============================================================
   SCHOOL ADMIN PANEL - JAVASCRIPT ENGINE
   نظام إدارة وتحكم مدارس إدارة السنبلاوين التعليمية
   ============================================================ */

'use strict';

const SCHOOL_ADMIN_PASSWORD = 'edarh@com';
const SCHOOL_AUTH_SESSION_KEY = 'school_admin_authenticated';

// ======================== 18 SCHOOLS MASTER CONFIG ========================
const ALL_18_SCHOOLS = [
    {
        id: 1,
        slug: "school-1",
        name: "مدرسة السادات الثانوية بنين",
        type: "boys",
        typeName: "ثانوي عام - بنين",
        location: "السنبلاوين - شارع الإدارة التعليمية",
        area: "السنبلاوين المدينة",
        code: "210408",
        studentsCount: "1,350 طالب",
        principal: "إدارة مدرسة السادات الثانوية بنين",
        image: "../q.jpeg",
        description: "إحدى أعرق المدارس الثانوية للبنين بإدارة السنبلاوين، مجهزة بأحدث معامل التطوير التكنولوجي والشاشات التفاعلية والفصول الذكية.",
        founded: "1982",
        classrooms: "24 فصلاً",
        teachers: "75 معلماً",
        features: ["معامل علوم متطورة", "شاشات تفاعلية ذكية", "منظومة إلكترونية متكاملة", "أنشطة رياضية وكشفية"],
        speech: "أبنائي الطلاب، إن مدرسة السادات الثانوية بنين تسعى دائماً لتوفير بيئة تعليمية حديثة تحفزكم على التفوق والابتكار وصناعة مستقبل مشرق لوطننا الحبيب مصر."
    },
    {
        id: 2,
        slug: "school-2",
        name: "مدرسة المقاطعة الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشترك",
        location: "قرية المقاطعة - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210415",
        studentsCount: "1,120 طالب وطالبة",
        principal: "إدارة مدرسة المقاطعة الثانوية",
        image: "../a.jpeg",
        description: "صرح تعليمي يخدم طلاب وطالبات قرية المقاطعة والقرى المجاورة، يتميز بنسب تفوق عالية في امتحانات الثانوية العامة والأنشطة.",
        founded: "1994",
        classrooms: "24 فصلاً",
        teachers: "68 معلماً ومعلمة",
        features: ["مكتبة تعليمية شاملة", "معمل حاسب آلي مطور", "أنشطة ثقافية متميزة", "شبكة تابلت وألياف ضوئية"],
        speech: "نرحب بأبنائنا وبناتنا الطلاب في صرح المقاطعة الثانوي، ونؤكد التزامنا التام بتوفير أعلى مستويات التعليم والمتابعة التربوية المستمرة."
    },
    {
        id: 3,
        slug: "school-3",
        name: "أحمد لطفي السيد الثانوية بنين",
        type: "boys",
        typeName: "ثانوي عام - بنين",
        location: "السنبلاوين - شارع المدارس (بجوار الادارة التعليميه)",
        area: "السنبلاوين المدينة",
        code: "210422",
        studentsCount: "1,380 طالب",
        principal: "إدارة مدرسة أحمد لطفي السيد",
        image: "../i.jpeg",
        description: "مدرسة رائدة تحمل اسم مفكر مصر ورائد التنوير أحمد لطفي السيد، وتضم كادراً تعليمياً متميزاً وبيئة تربوية منضبطة.",
        founded: "1978",
        classrooms: "28 فصلاً",
        teachers: "82 معلماً",
        features: ["بيئة تعليمية منضبطة", "مسابقات أوائل الطلبة", "صالات تدريب رياضي", "معامل لغات متقدمة"],
        speech: "فخورون بحمل اسم أستاذ الجيل أحمد لطفي السيد، ونغرس في طلابنا قيم العلم والتنوير والانضباط ليكونوا رواد الغد وقادة المستقبل."
    },
    {
        id: 4,
        slug: "school-4",
        name: "السنبلاوين الرسمية للغات المشتركة",
        type: "languages",
        typeName: "رسمي لغات - مشتركة",
        location: "السنبلاوين - بجوار الإدارة التعليمية",
        area: "السنبلاوين المدينة",
        code: "210430",
        studentsCount: "950 طالب وطالبة",
        principal: "إدارة مدرسة السنبلاوين الرسمية للغات",
        image: "../u.jpeg",
        description: "المدرسة الرسمية للغات الأولى بالمركز، تدرس المناهج باللغة الإنجليزية بإشراف مباشر من توجيه اللغات بالمديرية مع نوادي علوم وابتكار.",
        founded: "2002",
        classrooms: "20 فصلاً",
        teachers: "62 معلماً ومعلمة",
        features: ["تدريس اللغات الأجنبية", "معامل لغات وصوتيات متقدمة", "مناهج دولية معتمدة", "نوادي روبوتكس وعلوم"],
        speech: "نحرص على بناء شخصية الطالب ثنائية اللغة المتسلحة بالعلم الحديث ومهارات القرن الحادي والعشرين، ونفتح آفاقاً رحبة للمستقبل."
    },
    {
        id: 5,
        slug: "school-5",
        name: "مدرسة كفر غنام الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية كفر غنام - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210444",
        studentsCount: "890 طالب وطالبة",
        principal: "إدارة مدرسة كفر غنام الثانوية",
        image: "../w.jpeg",
        description: "مدرسة حديثة التطوير تخدم قطاع جنوب السنبلاوين ومجهزة بأحدث وسائل التعلم الحديثة وشبكة الألياف الضوئية.",
        founded: "2006",
        classrooms: "18 فصلاً",
        teachers: "50 معلماً ومعلمة",
        features: ["إنترنت فائق السرعة", "فصول مجهزة بشاشات ذكية", "ملاعب رياضية حديثة", "معارض علمية دورية"],
        speech: "هدفنا الأساسي هو الاستثمار في عقول أبنائنا الطلاب وتقديم خدمة تعليمية نموذجية ترتقي بمجتمعنا وتوفر فرص التميز للجميع."
    },
    {
        id: 6,
        slug: "school-6",
        name: "السنبلاوين الثانوية بنات",
        type: "girls",
        typeName: "ثانوي عام - بنات",
        location: "السنبلاوين - شارع الجمهورية (حي النزهة)",
        area: "السنبلاوين المدينة",
        code: "210450",
        studentsCount: "1,600 طالبة",
        principal: "إدارة مدرسة السنبلاوين الثانوية بنات",
        image: "../خ.jpg",
        description: "أكبر مدارس المرحلة الثانوية للبنات بالمركز، تمتاز بتخريج أوائل المحافظة سنوياً والتميز في الأنشطة الطلابية والمسابقات الإبداعية.",
        founded: "1968",
        classrooms: "32 فصلاً",
        teachers: "95 معلمة ومعلماً",
        features: ["مسرح مدرسي متكامل", "معامل أحياء وفيزياء وكيمياء", "أندية فتيات وموهوبين", "فصول متفوقات مجهزة"],
        speech: "لبناتنا الطالبات: أنتن أمل مصر وبانيات أجيالها، ونحن نسخر كل إمكانات المدرسة لنمكنكن من التفوق الدراسي واكتساب أرقى المهارات."
    },
    {
        id: 7,
        slug: "school-7",
        name: "ابوقراميط الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية أبو قراميط - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210461",
        studentsCount: "1,250 طالب وطالبة",
        principal: "إدارة مدرسة ابوقراميط الثانوية المشتركة",
        image: "../ق.jpg",
        description: "صرح تعليمي يخدم قطاع قرية أبو قراميط والقرى المجاورة، مجهزة بمعامل علمية وفصول ذكية وشبكات تكنولوجية متطورة.",
        founded: "1988",
        classrooms: "22 فصلاً",
        teachers: "70 معلماً ومعلمة",
        features: ["فصول نموذجية حديثة", "معامل تابلت وشبكات متطورة", "أنشطة لياقة بدنية وثقافية", "منظومة تقييم أسبوعية دقيقة"],
        speech: "التعليم وبناء الشخصية هما ركيزتا التفوق. نعمل على صقل شخصية الطالب علمياً وبدنياً وتربوياً ليكون قدوة في مجتمعه."
    },
    {
        id: 8,
        slug: "school-8",
        name: "طهواى الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية طهواي - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210472",
        studentsCount: "980 طالب وطالبة",
        principal: "إدارة مدرسة طهواى الثانوية المشتركة",
        image: "../ن.jpg",
        description: "صرح تعليمي عريق يخدم قرية طهواي وتوابعها، ويوفر بيئة تربوية هادئة ومحفزة على الإبداع والتفوق العلمي.",
        founded: "1998",
        classrooms: "20 فصلاً",
        teachers: "58 معلماً ومعلمة",
        features: ["مكتبة إلكترونية وبنك المعرفة", "معارض علمية وفنية", "تواصل إلكتروني مع أولياء الأمور", "رعاية الموهوبين"],
        speech: "نؤمن بأن كل طالب يمتلك طاقة إبداعية، ومهمتنا هي اكتشافها وتنميتها من خلال بيئة تعليمية قائمة على التفاعل والمحبة."
    },
    {
        id: 9,
        slug: "school-9",
        name: "ميت غراب وشبراهور الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية ميت غراب - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210480",
        studentsCount: "820 طالب وطالبة",
        principal: "إدارة مدرسة ميت غراب وشبراهور الثانوية",
        image: "../WhatsApp Image 2026-09-27 at 5.56.24 PM.jpeg",
        description: "مدرسة متميزة بنشاطها الاجتماعي والتربوي ومشاريع الطلاب، تخدم قريتي ميت غراب وشبراهور بالقطاع الغربي للإدارة.",
        founded: "2004",
        classrooms: "18 فصلاً",
        teachers: "52 معلماً ومعلمة",
        features: ["فصول نموذجية وشاشات ذكية", "إشراف تربوي متكامل", "أنشطة بيئية وتوعوية", "مجموعات دعم مدرسي"],
        speech: "التعاون الوثيق بين المدرسة والأسرة هو سر نجاح طلابنا، ونعدكم بمواصلة التطوير والارتقاء بكل جوانب العملية التعليمية."
    },
    {
        id: 10,
        slug: "school-10",
        name: "الشهيد محمد الراعي الثانوية بالجلايله المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية الجلايلة - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210492",
        studentsCount: "1,050 طالب وطالبة",
        principal: "إدارة مدرسة الشهيد محمد الراعي الثانوية",
        image: "../WhatsApp Image 2026-09-27 at 6.03.07 PM.jpeg",
        description: "تخدم قطاع قرية الجلايلة والقرى المجاورة وتتمتع ببنية تكنولوجية حديثة وكادر تدريسي متميز لتدريس منظومة الثانوية العامة.",
        founded: "1999",
        classrooms: "22 فصلاً",
        teachers: "65 معلماً ومعلمة",
        features: ["شبكة إنترنت ألياف ضوئية", "غرفة تدريب وتطوير تكنولوجي", "فريق مسابقات أوائل الطلبة", "إذاعة مدرسية متطورة"],
        speech: "نحمل بفخر اسم شهيد الوطن محمد الراعي، ونجعل من تضحيته نبراساً يلهم طلابنا بالجد والاجتهاد وخدمة بلدهم العظيم."
    },
    {
        id: 11,
        slug: "school-11",
        name: "السنبلاوين الرسمية المتميزة لغات المشتركة",
        type: "languages",
        typeName: "رسمي لغات متميز - مشتركة",
        location: "السنبلاوين - شارع المعاهدة (بجوار الأزهري)",
        area: "السنبلاوين المدينة",
        code: "210501",
        studentsCount: "780 طالب وطالبة",
        principal: "إدارة مدرسة السنبلاوين الرسمية المتميزة للغات",
        image: "../WhatsApp Image 2026-09-27 at 6.05.21 PM.jpeg",
        description: "مؤسسة تعليمية نوعية بمدينة السنبلاوين تهدف إلى تقديم تعليم لغات رفيع المستوى ورعاية خاصة للطلاب الموهوبين والمتفوقين.",
        founded: "2012",
        classrooms: "16 فصلاً",
        teachers: "48 معلماً ومعلمة",
        features: ["رعاية الفائقين والمبدعين", "قاعات ورش عمل تفاعلية", "معامل حاسب ومكتبة رقمية", "مناهج لغات متقدمة"],
        speech: "التميز ليس شعاراً بل هو واقع نعمل على تجسيده يومياً في أداء طلابنا ومعلمينا، لنكون دائماً في الصدارة."
    },
    {
        id: 12,
        slug: "school-12",
        name: "غزالة الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية غزالة - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210515",
        studentsCount: "710 طالب وطالبة",
        principal: "إدارة مدرسة غزالة الثانوية",
        image: "../Gemini_Generated_Image_g9c38tg9c38tg9c3.jpg",
        description: "مدرسة هادئة وواعدة توفر مناخاً دراسياً نموذجياً يتيح للطلاب التركيز والتفوق في كافة الشعب العلمية والأدبية.",
        founded: "2008",
        classrooms: "15 فصلاً",
        teachers: "42 معلماً ومعلمة",
        features: ["متابعة دراسية دقيقة", "مجموعات تقوية مجانية", "أنشطة صحافة مدرسية", "معامل مجهزة"],
        speech: "الهدوء والتركيز والانضباط هي أسلحتنا لتحقيق أعلى المجموعات والدرجات، ونحن فخورون بكل إنجاز يحققه طلابنا."
    },
    {
        id: 13,
        slug: "school-13",
        name: "الزهايره الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية الزهايرة - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210522",
        studentsCount: "670 طالب وطالبة",
        principal: "إدارة مدرسة الزهايرة الثانوية المشتركة",
        image: "../WhatsApp Image 2026-09-27 at 6.06.50 PM.jpeg",
        description: "مؤسسة تعليمية نموذجية تخدم قرية الزهايرة وتوابعها، حاصلة على شهادات تقدير من الإدارة لحسن الانضباط المدرسي والمستوى التعليمي.",
        founded: "2005",
        classrooms: "14 فصلاً",
        teachers: "40 معلماً ومعلمة",
        features: ["انضباط دراسي تام", "مكتبة حديثة", "معمل لغات وعلوم", "أنشطة اجتماعية هادفة"],
        speech: "الانضباط وحب التعلم هما سر نجاحنا المستمر، ورسالتنا هي مساعدة كل طالب على اكتشاف قدراته وصقلها."
    },
    {
        id: 14,
        slug: "school-14",
        name: "الشهيد مصطفى فتوح جبر الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية كفر طنبول القديم - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210530",
        studentsCount: "850 طالب وطالبة",
        principal: "إدارة مدرسة الشهيد مصطفى فتوح جبر الثانوية",
        image: "../Gemini_Generated_Image_cvqxkmcvqxkmcvqx.jpg",
        description: "صرح تعليمي ثانوي يخدم أبناء قرية كفر طنبول القديم والقرى المجاورة، يحمل اسم شهيد الوطن البطل مصطفى فتوح جبر تقديراً لتضحيته.",
        founded: "2001",
        classrooms: "18 فصلاً",
        teachers: "50 معلماً ومعلمة",
        features: ["فصول دراسية حديثة", "معامل علوم وتطوير تكنولوجي", "أنشطة وطنية ورياضية", "متابعة دورية للواجبات"],
        speech: "اسم الشهيد مصطفى فتوح جبر يذكرنا دائماً بأن التضحية والعطاء هما أساس رفعة الوطن، وهذا ما نغرسه في عقول طلابنا."
    },
    {
        id: 15,
        slug: "school-15",
        name: "طوخ الأقلام الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية طوخ الأقلام - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210540",
        studentsCount: "950 طالب وطالبة",
        principal: "إدارة مدرسة طوخ الأقلام الثانوية المشتركة",
        image: "../Gemini_Generated_Image_720j40720j40720j.jpg",
        description: "صرح تعليمي يخدم قطاع قرية طوخ الأقلام وتوابعها بمركز السنبلاوين، مجهزة بكافة الوسائل التعليمية الحديثة والأنشطة الطلابية المتنوعة.",
        founded: "1997",
        classrooms: "20 فصلاً",
        teachers: "56 معلماً ومعلمة",
        features: ["معامل تكنولوجية متطورة", "مكتبة علمية شاملة", "أنشطة ثقافية ورياضية", "منظومة إشراف متكاملة"],
        speech: "نعمل بروح الفريق الواحد مع المجتمع المحلي وأولياء الأمور لتوفير بيئة تعليمية دافئة تدعم تطلعات الطلاب الجامعية."
    },
    {
        id: 16,
        slug: "school-16",
        name: "صبح كاعوه الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية برهمتوش - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210555",
        studentsCount: "1,220 طالب وطالبة",
        principal: "إدارة مدرسة صبح كاعوه الثانوية المشتركة",
        image: "../Gemini_Generated_Image_k8uhd4k8uhd4k8uh.jpg",
        description: "إحدى كبرى المدارس الثانوية بقطاع قرى السنبلاوين، تقع بقرية برهمتوش وتخدم عدداً من القرى المجاورة بفصولها ومرافقها المتطورة.",
        founded: "1985",
        classrooms: "26 فصلاً",
        teachers: "78 معلماً ومعلمة",
        features: ["مساحات وملاعب واسعة", "معامل علمية وتكنولوجية حديثة", "شاشات تفاعلية ذكية", "أنشطة طلابية متنوعة"],
        speech: "التعليم هو قاطرة التنمية، وطلابنا هم سواعد مصر الفتية القادرة على خدمة الوطن وقيادة مسيرة النجاح والتطوير."
    },
    {
        id: 17,
        slug: "school-17",
        name: "حسين عثمان الثانوية المشتركة بشبرا سندى",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية شبرا سندي - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210568",
        studentsCount: "1,100 طالب وطالبة",
        principal: "إدارة مدرسة حسين عثمان الثانوية المشتركة",
        image: "../Gemini_Generated_Image_5uuyar5uuyar5uuy.jpg",
        description: "صرح تعليمي يخدم طلاب وطالبات قرية شبرا سندي والقرى المحيطة، وتوفر بيئة تعليمية منضبطة وداعمة للتفوق الدراسي وبناء الشخصية.",
        founded: "1980",
        classrooms: "24 فصلاً",
        teachers: "72 معلماً ومعلمة",
        features: ["فصول نموذجية حديثة", "معمل حاسب آلي وتطوير", "مكتبة مدرسية شاملة", "رعاية وتوجيه تربوي مستمر"],
        speech: "بناء العقول هو أسمى رسالة، ونحن نسعى لغرس قيم العلم والانتماء والتميز في كل طالب وطالبة ينتمون لصرحنا التعليمي."
    },
    {
        id: 18,
        slug: "school-18",
        name: "البلامون الثانوية المشتركة",
        type: "mixed",
        typeName: "ثانوي عام - مشتركة",
        location: "قرية البلامون - مركز السنبلاوين",
        area: "قرى السنبلاوين",
        code: "210579",
        studentsCount: "1,180 طالب وطالبة",
        principal: "إدارة مدرسة البلامون الثانوية المشتركة",
        image: "../Gemini_Generated_Image_6xhnxw6xhnxw6xhn.jpg",
        description: "مدرسة ثانوية متميزة تخدم أهالي وطلاب قرية البلامون والقرى المجاورة، وتتميز بنسب تفوق مشرفة في الثانوية العامة والأنشطة المتعددة.",
        founded: "1996",
        classrooms: "25 فصلاً",
        teachers: "70 معلمة ومعلماً",
        features: ["معامل علوم متكاملة", "شبكة إنترنت وألياف ضوئية", "أنشطة رياضية وفنية", "فصول ذكية مهيأة"],
        speech: "نحول العلم والمعرفة إلى قوة حقيقية تبني المستقبل، ونمكن أبناءنا وبناتنا من تحقيق أحلامهم وطموحاتهم الجامعية بكل جدارة."
    }
];

// Preset images list
const AVAILABLE_IMAGES = [
    { src: "../q.jpeg", name: "مدرسة السادات" },
    { src: "../a.jpeg", name: "المقاطعة المشتركة" },
    { src: "../i.jpeg", name: "أحمد لطفي السيد" },
    { src: "../u.jpeg", name: "السنبلاوين الرسمية لغات" },
    { src: "../w.jpeg", name: "كفر غنام المشتركة" },
    { src: "../خ.jpg", name: "السنبلاوين بنات" },
    { src: "../ن.jpg", name: "طهواي المشتركة" },
    { src: "../ق.jpg", name: "ابوقراميط المشتركة" },
    { src: "../Gemini_Generated_Image_5uuyar5uuyar5uuy.jpg", name: "حسين عثمان" },
    { src: "../Gemini_Generated_Image_6xhnxw6xhnxw6xhn.jpg", name: "البلامون" },
    { src: "../Gemini_Generated_Image_720j40720j40720j.jpg", name: "طوخ الأقلام" },
    { src: "../Gemini_Generated_Image_cvqxkmcvqxkmcvqx.jpg", name: "الشهيد مصطفى فتوح" },
    { src: "../Gemini_Generated_Image_g9c38tg9c38tg9c3.jpg", name: "غزالة" },
    { src: "../Gemini_Generated_Image_k8uhd4k8uhd4k8uh.jpg", name: "صبح كاعوه" },
    { src: "../WhatsApp Image 2026-09-27 at 5.56.24 PM.jpeg", name: "ميت غراب وشبراهور" },
    { src: "../WhatsApp Image 2026-09-27 at 6.03.07 PM.jpeg", name: "الشهيد محمد الراعي" },
    { src: "../WhatsApp Image 2026-09-27 at 6.05.21 PM.jpeg", name: "السنبلاوين المتميزة" },
    { src: "../WhatsApp Image 2026-09-27 at 6.06.50 PM.jpeg", name: "الزهايرة المشتركة" }
];

// ======================== STATE ========================
let currentSchoolId = 1;
let currentSchoolData = null;
let hasUnsavedChanges = false;
let activeScheduleDay = 'sun';
let currentEditStudentIndex = -1;

// ======================== INITIALIZATION ========================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Determine active school from URL query (?id=2 or ?school=2)
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = parseInt(urlParams.get('id') || urlParams.get('school'), 10);
    if (idParam && idParam >= 1 && idParam <= 18) {
        currentSchoolId = idParam;
    }

    // 2. Populate School Selector in header & sidebar
    populateSchoolSelectors();

    // 3. Check Session Authentication
    checkSessionAuth();

    // 4. Load School Data into form
    loadSchoolData(currentSchoolId);

    // 5. Setup Event Listeners
    initSidebar();
    initClock();
    setupPresetImages();
});

// ======================== AUTHENTICATION ========================
function checkSessionAuth() {
    const isAuth = sessionStorage.getItem(SCHOOL_AUTH_SESSION_KEY);
    const loginScreen = document.getElementById('loginScreen');
    if (isAuth === 'true') {
        if (loginScreen) loginScreen.classList.add('hidden');
    } else {
        if (loginScreen) loginScreen.classList.remove('hidden');
    }
}

let failedLoginAttempts = 0;

function playSecurityAlarmSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';

        const now = ctx.currentTime;
        osc.frequency.setValueAtTime(850, now);
        osc.frequency.linearRampToValueAtTime(420, now + 0.15);
        osc.frequency.linearRampToValueAtTime(950, now + 0.3);
        osc.frequency.linearRampToValueAtTime(380, now + 0.48);

        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.52);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.52);
    } catch(e) {
        console.warn('Alarm audio error:', e);
    }
}

function attemptLogin() {
    const passwordInput = document.getElementById('schoolPasswordInput');
    const loginError = document.getElementById('loginError');
    const loginBox = document.getElementById('loginBox');

    if (passwordInput && passwordInput.value === SCHOOL_ADMIN_PASSWORD) {
        sessionStorage.setItem(SCHOOL_AUTH_SESSION_KEY, 'true');
        failedLoginAttempts = 0;
        if (loginError) loginError.classList.remove('show');
        if (loginBox) loginBox.classList.remove('shake-alarm');
        document.getElementById('loginScreen')?.classList.add('hidden');
        showToast('تم تسجيل الدخول بنجاح إلى لوحة التحكم', 'success');
        return;
    }

    // ALARM ON WRONG PASSWORD
    failedLoginAttempts++;
    playSecurityAlarmSound();

    if (loginBox) {
        loginBox.classList.remove('shake-alarm');
        void loginBox.offsetWidth; // trigger reflow
        loginBox.classList.add('shake-alarm');
    }

    if (loginError) {
        loginError.innerHTML = `
            <i class="fa-solid fa-triangle-exclamation" style="font-size:20px;color:#EF4444;"></i>
            <div>
                <strong style="color:#EF4444;display:block;">⚠️ إنذار أمني: كلمة المرور خاطئة!</strong>
                <span style="font-size:11.5px;color:#FCA5A5;">محاولة غير مصرح بها رقم (${failedLoginAttempts}) - تأكد من إدخال كلمة المرور الصحيحة.</span>
            </div>
        `;
        loginError.classList.add('show');
    }

    showToast(`⚠️ إنذار أمني: محاولة دخول خاطئة رقم (${failedLoginAttempts})`, 'error');
    passwordInput?.focus();
}

function togglePasswordVisibility() {
    const input = document.getElementById('schoolPasswordInput');
    const icon = document.getElementById('eyeIcon');
    if (!input || !icon) return;

    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function doLogout() {
    sessionStorage.removeItem(SCHOOL_AUTH_SESSION_KEY);
    const input = document.getElementById('schoolPasswordInput');
    if (input) input.value = '';
    document.getElementById('loginScreen')?.classList.remove('hidden');
    showToast('تم تسجيل الخروج من لوحة التحكم', 'info');
}

// ======================== SCHOOL SELECTOR ========================
function populateSchoolSelectors() {
    const sel = document.getElementById('schoolSelector');
    if (!sel) return;

    sel.innerHTML = ALL_18_SCHOOLS.map(s => `
        <option value="${s.id}" ${s.id === currentSchoolId ? 'selected' : ''}>
            ${s.id}. ${s.name} (${s.typeName})
        </option>
    `).join('');
}

function onSchoolSelectChange(newId) {
    const id = parseInt(newId, 10);
    if (!id || id === currentSchoolId) return;

    if (hasUnsavedChanges) {
        if (!confirm('لديك تعديلات غير محفوظة للمدرسة الحالية، هل تريد الانتقال لمدرسة أخرى دون حفظ؟')) {
            document.getElementById('schoolSelector').value = currentSchoolId;
            return;
        }
    }

    currentSchoolId = id;
    // Update URL query without page reload
    const url = new URL(window.location);
    url.searchParams.set('id', id);
    window.history.pushState({}, '', url);

    loadSchoolData(currentSchoolId);
    showToast(`تم التبديل إلى: ${currentSchoolData.name}`, 'info');
}

// ======================== DEFAULT GENERATOR ========================
function getDefaultSchoolData(id) {
    const base = ALL_18_SCHOOLS.find(s => s.id === id) || ALL_18_SCHOOLS[0];

    return {
        id: base.id,
        name: base.name,
        code: base.code,
        type: base.type,
        typeName: base.typeName,
        location: base.location,
        area: base.area,
        founded: base.founded,
        studentsCount: base.studentsCount,
        classrooms: base.classrooms,
        teachers: base.teachers,
        extraStat: "100% ربط تكنولوجي",
        image: base.image,
        description: base.description,
        heroTitle: `مرحباً بكم في ${base.name}`,
        heroBtnPrimary: "الخدمات الإلكترونية للطلاب",
        heroBtnSecondary: "جدول الحصص والتطبيقات",

        // Announcements bar
        noticeBarEnabled: true,
        noticeBadge: "صرح معتمد",
        noticeText: "أهلاً بكم في البوابة الرسمية لمدرسة " + base.name + " - إدارة السنبلاوين التعليمية",
        workHours: "8:00 ص - 2:00 م",

        // Vision & Mission
        vision: `توفير تعليم ثانوي متميز قائم على مهارات القرن الحادي والعشرين والتحول الرقمي، وتخريج جيل مبدع متمسك بالقيم الوطنية قادر على المنافسة العلمية والجامعية.`,
        mission: `تقديم بيئة تربوية محفزة تسخر المعامل الذكية والشاشات التفاعلية لدعم التفكير النقدي لدى الطلاب، وتنمية قدرات الكادر التعليمي، وبناء شراكة مجتمعية وثيقة مع أولياء الأمور.`,
        principal: base.principal,
        speech: base.speech,

        // Facilities (6 default labs and areas)
        facilities: [
            {
                title: "معامل العلوم المتكاملة",
                desc: "مجهزة بأحدث أدوات تجارب الكيمياء والفيزياء والأحياء لإجراء التطبيقات العملية بأمان تام.",
                icon: "fa-flask-vial"
            },
            {
                title: "مركز التطوير التكنولوجي",
                desc: "قاعات مجهزة بأحدث أجهزة الحاسب وشبكات السيرفرات المتصلة بمنظومة تابلت الثانوية العامة.",
                icon: "fa-network-wired"
            },
            {
                title: "فصول الشاشات الذكية",
                desc: "شاشات تفاعلية متصلة بالإنترنت تمكن المعلمين من شرح الدروس التفاعلية وعرض المجسمات.",
                icon: "fa-chalkboard-user"
            },
            {
                title: "المكتبة الرقمية والورقية",
                desc: "تضم آلاف الكتب العلمية والأدبية، مع منصات حاسوبية للوصول المباشر إلى بنك المعرفة المصري.",
                icon: "fa-book-bookmark"
            },
            {
                title: "الملاعب والأنشطة الرياضية",
                desc: "ملاعب مجهزة لكرة القدم والسلة والطائرة، لدعم النشاط البدني وإعداد فرق المدرسة للبطولات.",
                icon: "fa-volleyball"
            },
            {
                title: "المسرح والقاعة الكبرى",
                desc: "قاعة مخصصة للاحتفالات المدرسية، المسابقات الثقافية، معارض الفنون، والندوات التوعوية.",
                icon: "fa-masks-theater"
            }
        ],

        // Weekly schedule
        schedule: {
            sun: [
                { time: "8:00 - 8:45", subject: "اللغة العربية" },
                { time: "8:45 - 9:30", subject: "الرياضيات / الجبر" },
                { time: "9:45 - 10:30", subject: "اللغة الإنجليزية" },
                { time: "10:30 - 11:15", subject: "الفيزياء / الكيمياء" },
                { time: "11:30 - 12:15", subject: "تاريخ / جغرافيا" },
                { time: "12:15 - 1:00", subject: "حاسب آلي وتكنولوجيا" }
            ],
            mon: [
                { time: "8:00 - 8:45", subject: "اللغة الإنجليزية" },
                { time: "8:45 - 9:30", subject: "اللغة العربية" },
                { time: "9:45 - 10:30", subject: "الأحياء / الجيولوجيا" },
                { time: "10:30 - 11:15", subject: "التطبيقات والتقييم الأسبوعي" },
                { time: "11:30 - 12:15", subject: "اللغة الأجنبية الثانية" },
                { time: "12:15 - 1:00", subject: "تربية رياضية وصحية" }
            ],
            tue: [
                { time: "8:00 - 8:45", subject: "الرياضيات" },
                { time: "8:45 - 9:30", subject: "اللغة العربية" },
                { time: "9:45 - 10:30", subject: "الفيزياء" },
                { time: "10:30 - 11:15", subject: "التاريخ" },
                { time: "11:30 - 12:15", subject: "اللغة الإنجليزية" },
                { time: "12:15 - 1:00", subject: "نشاط تربوي" }
            ],
            wed: [
                { time: "8:00 - 8:45", subject: "الكيمياء" },
                { time: "8:45 - 9:30", subject: "اللغة الأجنبية" },
                { time: "9:45 - 10:30", subject: "الرياضيات" },
                { time: "10:30 - 11:15", subject: "الأحياء" },
                { time: "11:30 - 12:15", subject: "تطبيقات عملية" },
                { time: "12:15 - 1:00", subject: "تربية رياضية" }
            ],
            thu: [
                { time: "8:00 - 8:45", subject: "المراجعة الشاملة" },
                { time: "8:45 - 9:30", subject: "أداء التقييم الأسبوعي" },
                { time: "9:45 - 10:30", subject: "اللغة العربية" },
                { time: "10:30 - 11:15", subject: "اللغة الأجنبية" },
                { time: "11:30 - 12:15", subject: "دوري أوائل الفصول" },
                { time: "12:15 - 1:00", subject: "أنشطة كشفية ورياضية" }
            ]
        },

        // School Subjects
        subjects: [
            { id: 1, name: "اللغة العربية", maxScore: 50, grade: "جميع الصفوف", teacher: "قسم اللغة العربية" },
            { id: 2, name: "اللغة الإنجليزية", maxScore: 50, grade: "جميع الصفوف", teacher: "قسم اللغات" },
            { id: 3, name: "الرياضيات", maxScore: 60, grade: "جميع الصفوف", teacher: "قسم الرياضيات" },
            { id: 4, name: "الكيمياء", maxScore: 60, grade: "الصف الثاني والثالث", teacher: "معامل الكيمياء" },
            { id: 5, name: "الفيزياء", maxScore: 60, grade: "الصف الثاني والثالث", teacher: "معامل الفيزياء" },
            { id: 6, name: "الأحياء", maxScore: 60, grade: "الصف الثاني والثالث", teacher: "معامل الأحياء" },
            { id: 7, name: "العلوم المتكاملة", maxScore: 60, grade: "الصف الأول الثانوي", teacher: "قسم العلوم" },
            { id: 8, name: "التاريخ", maxScore: 60, grade: "جميع الصفوف", teacher: "قسم الدراسات" },
            { id: 9, name: "الجغرافيا", maxScore: 60, grade: "الصف الثاني والثالث", teacher: "قسم الدراسات" },
            { id: 10, name: "اللغة الأجنبية الثانية", maxScore: 40, grade: "جميع الصفوف", teacher: "قسم اللغات الثانية" }
        ],

        // Services
        services: [
            {
                title: "التقييمات والأداءات الأسبوعية",
                desc: "الوصول المباشر لكراسات التقييم الأسبوعي والواجبات المنزلية المعتمدة من وزارة التربية والتعليم.",
                link: "https://ellibrary.moe.gov.eg/Performance_Assessments/",
                btnText: "دخول منصة التقييمات",
                icon: "fa-clipboard-check"
            },
            {
                title: "الدعم الفني للتابلت المدرسي",
                desc: "خدمات تفعيل شريحة التابلت، تحديث منصة الامتحان Swift Assess، وحل المشكلات التقنية.",
                link: "javascript:alert('فريق التطوير التكنولوجي متاح يومياً بمعمل المدرسة');",
                btnText: "طلب دعم التابلت",
                icon: "fa-tablet-screen-button"
            },
            {
                title: "استخراج بيان النجاح والشهادات",
                desc: "طلب إفادة قيد، استخراج بيان درجات رسمي، أو تصديق الأوراق من شؤون الطلاب بالإدارة.",
                link: "javascript:alert('يرجى التوجه لمكتب شؤون الطلاب بالمدرسة مع صورة بطاقة ولي الأمر');",
                btnText: "طلب إفادة مدرسية",
                icon: "fa-file-invoice"
            }
        ],

        // Students database
        students: [
            {
                name: "ادهم محمد",
                code: `${base.code}1`,
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
                code: `${base.code}2`,
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
                code: `${base.code}3`,
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
                code: `${base.code}4`,
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
        ],

        // FAQs
        faqs: [
            {
                q: "ما هي مواعيد الحضور والانصراف وطابور الصباح؟",
                a: "يبدأ طابور الصباح المدرسي تمام الساعة 7:45 صباحاً، وتبدأ الحصة الأولى في تمام الساعة 8:00 صباحاً. وينتهي اليوم الدراسي في تمام الساعة 1:45 ظهراً وفقاً للجدول المعتمد."
            },
            {
                q: "كيف يتم استلام التابلت المدرسي وتفعيله؟",
                a: "يتم سداد تأمين التابلت بمكاتب البريد المصري بإيصال رسمي، ثم يتوجه الطالب ومعه ولي الأمر إلى قسم التطوير التكنولوجي بالمدرسة لاستلام الجهاز وتفعيله على شبكة الوزارة."
            },
            {
                q: "ما هي آلية احتساب درجات أعمال السنة والتقييمات الأسبوعية؟",
                a: "تتوزع درجات أعمال السنة وفقاً للقرارات الوزارية: كشكول الحصة، الواجب المنزلي، التقييم الأسبوعي، السلوك والمواظبة، والاختبارات الشهرية التي تعقد على مستوى الإدارة التعليمية."
            },
            {
                q: "كيف يمكن لولي الأمر متابعة غياب ودرجات ابنه/ابنته؟",
                a: "من خلال البوابة الإلكترونية للمدرسة (الاستعلام برقم الجلوس أو الكود)، أو الحضور المباشر للمدرسة خلال المواعيد المخصصة لمقابلة أولياء الأمور يومي الأحد والثلاثاء."
            }
        ],

        // Audio National Anthem
        anthemEnabled: true,
        anthemSrc: "./Albumaty.Com_wtnyt_msryt_alnshyd_alwtny_almsry.mp3",
        anthemBtnText: "🔊 تشغيل النشيد الوطني",

        // Footer & Contact
        footerDesc: `إحدى المدارس الثانوية المتميزة التابعة لإدارة السنبلاوين التعليمية بمحافظة الدقهلية. نعمل وفق أحدث استراتيجيات وزارة التربية والتعليم لبناء جيل متميز يواكب العصر.`,
        phone: "050-6690123",
        email: `school${base.id}@sinbillawein-edu.gov.eg`,
        facebook: "https://facebook.com",
        copyright: `جميع الحقوق محفوظة © 2026 • ${base.name} • إدارة السنبلاوين التعليمية`
    };
}

// ======================== LOAD SCHOOL DATA ========================
function loadSchoolData(id) {
    try {
        const raw = localStorage.getItem(`school_data_${id}`);
        if (raw) {
            currentSchoolData = JSON.parse(raw);
        } else {
            currentSchoolData = getDefaultSchoolData(id);
        }
    } catch (e) {
        console.error('Error loading school data:', e);
        currentSchoolData = getDefaultSchoolData(id);
    }

    // Populate UI elements
    updateHeaderInfo();
    populateFormFields();
    renderFacilitiesAdmin();
    renderSubjectsAdmin();
    renderScheduleAdmin();
    renderServicesAdmin();
    renderStudentsAdmin();
    renderFaqsAdmin();
    clearUnsaved();
}

function updateHeaderInfo() {
    // Header title and active tags
    const titleEl = document.getElementById('topSchoolTitle');
    const badgeEl = document.getElementById('topSchoolBadge');
    const codeEl = document.getElementById('topSchoolCode');
    const previewBtn = document.getElementById('btnPreviewSchool');

    if (titleEl) titleEl.textContent = currentSchoolData.name;
    if (badgeEl) badgeEl.textContent = currentSchoolData.typeName;
    if (codeEl) codeEl.textContent = `كود: ${currentSchoolData.code}`;
    if (previewBtn) {
        previewBtn.href = `school-${currentSchoolId}.html`;
        previewBtn.target = "_blank";
    }
    const sidePrev = document.getElementById('sidebarPreviewBtn');
    if (sidePrev) sidePrev.href = `school-${currentSchoolId}.html`;
    const sideSub = document.getElementById('sidebarSchoolSub');
    if (sideSub) sideSub.textContent = currentSchoolData.name;

    // Also update School Selector value
    const sel = document.getElementById('schoolSelector');
    if (sel && parseInt(sel.value, 10) !== currentSchoolId) {
        sel.value = currentSchoolId;
    }

    // Dashboard Banner
    const dTitle = document.getElementById('dashSchoolName');
    const dType = document.getElementById('dashSchoolType');
    const dCode = document.getElementById('dashSchoolCode');
    const dStudents = document.getElementById('dashStudentsCount');
    const dClasses = document.getElementById('dashClassesCount');
    const dTeachers = document.getElementById('dashTeachersCount');
    const dInquiryNum = document.getElementById('dashInquiryNum');

    if (dTitle) dTitle.textContent = currentSchoolData.name;
    if (dType) dType.textContent = currentSchoolData.typeName;
    if (dCode) dCode.textContent = `كود المدرسة: ${currentSchoolData.code}`;
    if (dStudents) dStudents.textContent = currentSchoolData.studentsCount;
    if (dClasses) dClasses.textContent = currentSchoolData.classrooms;
    if (dTeachers) dTeachers.textContent = currentSchoolData.teachers;
    if (dInquiryNum) dInquiryNum.textContent = (currentSchoolData.students || []).length;
}

function populateFormFields() {
    const bindVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.value = val !== undefined ? val : '';
    };

    const bindChecked = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.checked = !!val;
    };

    // General
    bindVal('schoolName', currentSchoolData.name);
    bindVal('schoolCode', currentSchoolData.code);
    bindVal('schoolType', currentSchoolData.type);
    bindVal('schoolTypeName', currentSchoolData.typeName);
    bindVal('schoolLocation', currentSchoolData.location);
    bindVal('schoolArea', currentSchoolData.area);
    bindVal('schoolFounded', currentSchoolData.founded);
    bindVal('heroTitle', currentSchoolData.heroTitle);
    bindVal('heroDesc', currentSchoolData.description);
    bindVal('heroBtnPrimary', currentSchoolData.heroBtnPrimary);
    bindVal('heroBtnSecondary', currentSchoolData.heroBtnSecondary);
    bindVal('heroImageInput', currentSchoolData.image);
    updateHeroPreview(currentSchoolData.image);

    // Notice
    bindChecked('noticeBarEnabled', currentSchoolData.noticeBarEnabled);
    bindVal('noticeBadge', currentSchoolData.noticeBadge);
    bindVal('noticeText', currentSchoolData.noticeText);
    bindVal('workHours', currentSchoolData.workHours);

    // Stats
    bindVal('statStudents', currentSchoolData.studentsCount);
    bindVal('statClasses', currentSchoolData.classrooms);
    bindVal('statTeachers', currentSchoolData.teachers);
    bindVal('statExtra', currentSchoolData.extraStat);

    // Vision
    bindVal('schoolVision', currentSchoolData.vision);
    bindVal('schoolMission', currentSchoolData.mission);
    bindVal('principalName', currentSchoolData.principal);
    bindVal('principalSpeech', currentSchoolData.speech);

    // Anthem
    bindChecked('anthemEnabled', currentSchoolData.anthemEnabled);
    bindVal('anthemSrc', currentSchoolData.anthemSrc);
    bindVal('anthemBtnText', currentSchoolData.anthemBtnText);

    // Footer
    bindVal('footerDesc', currentSchoolData.footerDesc);
    bindVal('footerPhone', currentSchoolData.phone);
    bindVal('footerEmail', currentSchoolData.email);
    bindVal('footerFacebook', currentSchoolData.facebook);
    bindVal('footerCopyright', currentSchoolData.copyright);
}

// ======================== PRESET IMAGES & PREVIEW ========================
function setupPresetImages() {
    const grid = document.getElementById('presetImagesGrid');
    if (!grid) return;

    grid.innerHTML = AVAILABLE_IMAGES.map(img => `
        <img class="preset-thumb" src="${img.src}" title="${img.name}" alt="${img.name}" onclick="selectPresetImage('${img.src}')">
    `).join('');
}

function selectPresetImage(src) {
    const input = document.getElementById('heroImageInput');
    if (input) input.value = src;
    updateHeroPreview(src);
    markUnsaved();
}

function updateHeroPreview(src) {
    const preview = document.getElementById('heroPreviewImg');
    if (preview) {
        preview.src = src || '../q.jpeg';
    }
}

function handleCustomImageUpload(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const dataUrl = e.target.result;
            const heroInput = document.getElementById('heroImageInput');
            if (heroInput) heroInput.value = dataUrl;
            updateHeroPreview(dataUrl);
            markUnsaved();
            showToast('تم تحميل الصورة بنجاح كـ Base64', 'success');
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// ======================== SAVE ALL CHANGES ========================
function saveAllChanges() {
    const getVal = (id) => document.getElementById(id)?.value || '';
    const getChecked = (id) => !!document.getElementById(id)?.checked;

    // Read General & Hero
    currentSchoolData.name = getVal('schoolName');
    currentSchoolData.code = getVal('schoolCode');
    currentSchoolData.type = getVal('schoolType');
    currentSchoolData.typeName = getVal('schoolTypeName');
    currentSchoolData.location = getVal('schoolLocation');
    currentSchoolData.area = getVal('schoolArea');
    currentSchoolData.founded = getVal('schoolFounded');
    currentSchoolData.heroTitle = getVal('heroTitle');
    currentSchoolData.description = getVal('heroDesc');
    currentSchoolData.heroBtnPrimary = getVal('heroBtnPrimary');
    currentSchoolData.heroBtnSecondary = getVal('heroBtnSecondary');
    currentSchoolData.image = getVal('heroImageInput');

    // Read Notice
    currentSchoolData.noticeBarEnabled = getChecked('noticeBarEnabled');
    currentSchoolData.noticeBadge = getVal('noticeBadge');
    currentSchoolData.noticeText = getVal('noticeText');
    currentSchoolData.workHours = getVal('workHours');

    // Read Stats
    currentSchoolData.studentsCount = getVal('statStudents');
    currentSchoolData.classrooms = getVal('statClasses');
    currentSchoolData.teachers = getVal('statTeachers');
    currentSchoolData.extraStat = getVal('statExtra');

    // Read Vision
    currentSchoolData.vision = getVal('schoolVision');
    currentSchoolData.mission = getVal('schoolMission');
    currentSchoolData.principal = getVal('principalName');
    currentSchoolData.speech = getVal('principalSpeech');

    // Read Anthem
    currentSchoolData.anthemEnabled = getChecked('anthemEnabled');
    currentSchoolData.anthemSrc = getVal('anthemSrc');
    currentSchoolData.anthemBtnText = getVal('anthemBtnText');

    // Read Footer
    currentSchoolData.footerDesc = getVal('footerDesc');
    currentSchoolData.phone = getVal('footerPhone');
    currentSchoolData.email = getVal('footerEmail');
    currentSchoolData.facebook = getVal('footerFacebook');
    currentSchoolData.copyright = getVal('footerCopyright');

    // Save to LocalStorage
    localStorage.setItem(`school_data_${currentSchoolId}`, JSON.stringify(currentSchoolData));

    // Also synchronize main admin_schools image & name if exists
    try {
        const adminSchools = JSON.parse(localStorage.getItem('admin_schools') || '[]');
        const idx = adminSchools.findIndex(s => s.id === currentSchoolId);
        if (idx !== -1) {
            adminSchools[idx].name = currentSchoolData.name;
            adminSchools[idx].image = currentSchoolData.image;
            adminSchools[idx].studentsCount = currentSchoolData.studentsCount;
            adminSchools[idx].location = currentSchoolData.location;
            adminSchools[idx].description = currentSchoolData.description;
            localStorage.setItem('admin_schools', JSON.stringify(adminSchools));
        }
    } catch(e) {}

    clearUnsaved();
    updateHeaderInfo();
    showToast(`تم حفظ جميع التعديلات بنجاح لمدرسة (${currentSchoolData.name})`, 'success');
}

// ======================== FACILITIES ADMIN ========================
function renderFacilitiesAdmin() {
    const grid = document.getElementById('facilitiesGrid');
    if (!grid) return;

    const list = currentSchoolData.facilities || [];
    if (list.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:30px;">لا توجد مرافق مضافة حالياً.</div>`;
        return;
    }

    grid.innerHTML = list.map((f, i) => `
        <div class="admin-item-card">
            <div class="admin-item-header">
                <div class="admin-item-icon"><i class="fa-solid ${f.icon || 'fa-school'}"></i></div>
                <div class="admin-item-title">${f.title}</div>
            </div>
            <div class="admin-item-desc">${f.desc}</div>
            <div class="admin-item-actions">
                <button type="button" class="table-action-btn" onclick="openEditFacilityModal(${i})">
                    <i class="fa-solid fa-pen"></i> تعديل
                </button>
                <button type="button" class="table-action-btn danger" onclick="deleteFacility(${i})">
                    <i class="fa-solid fa-trash"></i> حذف
                </button>
            </div>
        </div>
    `).join('');
}

function openAddFacilityModal() {
    document.getElementById('facilityModalTitle').textContent = 'إضافة مرفق / معمل جديد';
    document.getElementById('facilityEditIndex').value = '-1';
    document.getElementById('facilityTitleInput').value = '';
    document.getElementById('facilityDescInput').value = '';
    document.getElementById('facilityIconInput').value = 'fa-flask-vial';
    openModal('facilityModal');
}

function openEditFacilityModal(index) {
    const item = currentSchoolData.facilities[index];
    if (!item) return;
    document.getElementById('facilityModalTitle').textContent = 'تعديل بيانات المرفق';
    document.getElementById('facilityEditIndex').value = index;
    document.getElementById('facilityTitleInput').value = item.title;
    document.getElementById('facilityDescInput').value = item.desc;
    document.getElementById('facilityIconInput').value = item.icon || 'fa-school';
    openModal('facilityModal');
}

function saveFacilityModal() {
    const idx = parseInt(document.getElementById('facilityEditIndex').value, 10);
    const title = document.getElementById('facilityTitleInput').value.trim();
    const desc = document.getElementById('facilityDescInput').value.trim();
    const icon = document.getElementById('facilityIconInput').value.trim() || 'fa-school';

    if (!title) {
        alert('يرجى كتابة عنوان المرفق');
        return;
    }

    if (!currentSchoolData.facilities) currentSchoolData.facilities = [];

    if (idx === -1) {
        currentSchoolData.facilities.push({ title, desc, icon });
    } else {
        currentSchoolData.facilities[idx] = { title, desc, icon };
    }

    closeModal('facilityModal');
    renderFacilitiesAdmin();
    markUnsaved();
    showToast('تم تحديث بيانات المعامل والمرافق', 'success');
}

function deleteFacility(index) {
    if (confirm('هل أنت متأكد من حذف هذا المرفق؟')) {
        currentSchoolData.facilities.splice(index, 1);
        renderFacilitiesAdmin();
        markUnsaved();
        showToast('تم حذف المرفق', 'info');
    }
}

// ======================== SCHEDULE ADMIN ========================
function renderScheduleAdmin() {
    const container = document.getElementById('scheduleEditorContainer');
    if (!container) return;

    const daySchedule = (currentSchoolData.schedule && currentSchoolData.schedule[activeScheduleDay]) || [];

    // Render 6 periods
    let html = '';
    for (let i = 0; i < 6; i++) {
        const item = daySchedule[i] || { time: `الحصة ${i + 1}`, subject: '' };
        html += `
            <div class="period-edit-row">
                <div>
                    <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px;">الحصة والتوقيت</label>
                    <input type="text" class="input-field" style="padding:6px 10px;font-size:12px;" value="${item.time}" id="period_time_${i}" onchange="markUnsaved()">
                </div>
                <div>
                    <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px;">اسم المادة الدراسية / النشاط</label>
                    <input type="text" class="input-field" style="padding:6px 10px;font-size:13px;font-weight:700;" value="${item.subject}" id="period_subj_${i}" onchange="markUnsaved()">
                </div>
                <div style="display:flex;align-items:flex-end;">
                    <span class="student-tag-pill" style="padding:8px 12px;font-size:12px;width:100%;text-align:center;">
                        الحصة #${i + 1}
                    </span>
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
}

function switchScheduleDay(dayKey) {
    // Save current fields before switching
    saveCurrentDayScheduleFromFields();

    activeScheduleDay = dayKey;
    document.querySelectorAll('.schedule-day-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-day') === dayKey);
    });

    renderScheduleAdmin();
}

function saveCurrentDayScheduleFromFields() {
    if (!currentSchoolData.schedule) currentSchoolData.schedule = {};
    const periods = [];
    for (let i = 0; i < 6; i++) {
        const time = document.getElementById(`period_time_${i}`)?.value || `الحصة ${i + 1}`;
        const subject = document.getElementById(`period_subj_${i}`)?.value || '';
        periods.push({ time, subject });
    }
    currentSchoolData.schedule[activeScheduleDay] = periods;
}

// ======================== DIGITAL SERVICES ADMIN ========================
function renderServicesAdmin() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    const list = currentSchoolData.services || [];
    if (list.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:30px;">لا توجد خدمات إلكترونية مضافة.</div>`;
        return;
    }

    grid.innerHTML = list.map((s, i) => `
        <div class="admin-item-card">
            <div class="admin-item-header">
                <div class="admin-item-icon"><i class="fa-solid ${s.icon || 'fa-bolt'}"></i></div>
                <div class="admin-item-title">${s.title}</div>
            </div>
            <div class="admin-item-desc">${s.desc}</div>
            <div style="font-size:12px;color:var(--text-muted);margin-top:4px;">
                <i class="fa-solid fa-link"></i> ${s.btnText || 'دخول الخدمة'}
            </div>
            <div class="admin-item-actions">
                <button type="button" class="table-action-btn" onclick="openEditServiceModal(${i})">
                    <i class="fa-solid fa-pen"></i> تعديل
                </button>
                <button type="button" class="table-action-btn danger" onclick="deleteService(${i})">
                    <i class="fa-solid fa-trash"></i> حذف
                </button>
            </div>
        </div>
    `).join('');
}

function openAddServiceModal() {
    document.getElementById('serviceModalTitle').textContent = 'إضافة خدمة رقمية جديدة';
    document.getElementById('serviceEditIndex').value = '-1';
    document.getElementById('serviceTitleInput').value = '';
    document.getElementById('serviceDescInput').value = '';
    document.getElementById('serviceLinkInput').value = '';
    document.getElementById('serviceBtnTextInput').value = 'دخول الخدمة';
    document.getElementById('serviceIconInput').value = 'fa-bolt';
    openModal('serviceModal');
}

function openEditServiceModal(index) {
    const item = currentSchoolData.services[index];
    if (!item) return;
    document.getElementById('serviceModalTitle').textContent = 'تعديل الخدمة الرقمية';
    document.getElementById('serviceEditIndex').value = index;
    document.getElementById('serviceTitleInput').value = item.title;
    document.getElementById('serviceDescInput').value = item.desc;
    document.getElementById('serviceLinkInput').value = item.link;
    document.getElementById('serviceBtnTextInput').value = item.btnText || 'دخول الخدمة';
    document.getElementById('serviceIconInput').value = item.icon || 'fa-bolt';
    openModal('serviceModal');
}

function saveServiceModal() {
    const idx = parseInt(document.getElementById('serviceEditIndex').value, 10);
    const title = document.getElementById('serviceTitleInput').value.trim();
    const desc = document.getElementById('serviceDescInput').value.trim();
    const link = document.getElementById('serviceLinkInput').value.trim() || '#';
    const btnText = document.getElementById('serviceBtnTextInput').value.trim() || 'دخول الخدمة';
    const icon = document.getElementById('serviceIconInput').value.trim() || 'fa-bolt';

    if (!title) {
        alert('يرجى كتابة عنوان الخدمة');
        return;
    }

    if (!currentSchoolData.services) currentSchoolData.services = [];

    const obj = { title, desc, link, btnText, icon };
    if (idx === -1) {
        currentSchoolData.services.push(obj);
    } else {
        currentSchoolData.services[idx] = obj;
    }

    closeModal('serviceModal');
    renderServicesAdmin();
    markUnsaved();
    showToast('تم حفظ الخدمة الإلكترونية', 'success');
}

function deleteService(index) {
    if (confirm('هل أنت متأكد من حذف هذه الخدمة؟')) {
        currentSchoolData.services.splice(index, 1);
        renderServicesAdmin();
        markUnsaved();
        showToast('تم حذف الخدمة', 'info');
    }
}

// ======================== STUDENTS DATABASE ADMIN ========================
function renderStudentsAdmin(filterQuery = '') {
    const tbody = document.getElementById('studentsTableBody');
    const countBadge = document.getElementById('studentsTotalCount');
    if (!tbody) return;

    let list = currentSchoolData.students || [];

    if (countBadge) countBadge.textContent = `${list.length} طالب مسجل`;

    const q = filterQuery.toLowerCase().trim();
    if (q) {
        list = list.filter(s =>
            (s.name && s.name.toLowerCase().includes(q)) ||
            (s.code && s.code.toString().includes(q)) ||
            (s.seatNumber && s.seatNumber.toString().includes(q)) ||
            (s.grade && s.grade.includes(q))
        );
    }

    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:40px;color:var(--text-muted);">لا يوجد طلاب مطابقون للبحث. يمكنك إضافة طالب جديد بالضغط على زر "إضافة طالب".</td></tr>`;
        return;
    }

    tbody.innerHTML = list.map((s, i) => `
        <tr>
            <td>
                <div style="font-weight:700;color:var(--text-primary);font-size:14px;">${s.name}</div>
                <div style="font-size:11px;color:var(--text-muted);">${s.notes ? s.notes.substring(0, 45) + '...' : ''}</div>
            </td>
            <td>
                <span class="student-tag-pill"><i class="fa-solid fa-id-card"></i> ${s.code || '---'}</span>
                <span class="student-tag-pill"><i class="fa-solid fa-hashtag"></i> ${s.seatNumber || '---'}</span>
            </td>
            <td>
                <div style="font-weight:600;">${s.grade || 'الصف الأول الثانوي'}</div>
                <div style="font-size:11px;color:var(--text-secondary);">${s.section || 'عام'}</div>
            </td>
            <td>
                <div style="font-weight:700;color:var(--gold);">${s.totalScore || '---'}</div>
                <div style="font-size:11px;">${s.percentage || ''} • <strong style="color:var(--primary);">${s.rating || ''}</strong></div>
            </td>
            <td>
                <span class="student-status-tag ${s.statusType || 'info'}">
                    ${s.status || 'مقيد بانتظام'}
                </span>
                <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">حضور: ${s.attendance || '90%'}</div>
            </td>
            <td>
                <span class="student-tag-pill" title="التقييمات">${s.evaluations || 'مكتملة'}</span>
            </td>
            <td style="display:flex;gap:6px;justify-content:flex-end;">
                <button type="button" class="table-action-btn" onclick="openEditStudentModal(${i})" title="تعديل">
                    <i class="fa-solid fa-user-pen"></i>
                </button>
                <button type="button" class="table-action-btn danger" onclick="deleteStudent(${i})" title="حذف">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function onStudentSearchInput(query) {
    renderStudentsAdmin(query);
}

function openAddStudentModal() {
    currentEditStudentIndex = -1;
    document.getElementById('studentModalTitle').textContent = 'إضافة طالب جديد لقاعدة بيانات المدرسة';
    document.getElementById('stName').value = '';
    document.getElementById('stCode').value = `${currentSchoolData.code || '2104'}${Math.floor(100 + Math.random() * 900)}`;
    document.getElementById('stSeat').value = `${Math.floor(10000 + Math.random() * 90000)}`;
    document.getElementById('stGrade').value = 'الصف الأول الثانوي';
    document.getElementById('stSection').value = 'عام';
    document.getElementById('stStatus').value = 'مقيد بانتظام';
    document.getElementById('stStatusType').value = 'success';
    document.getElementById('stAttendance').value = '95.0%';
    document.getElementById('stTablet').value = 'مفعل ومسجل بالمنظومة';
    document.getElementById('stEvaluations').value = 'مكتملة وممتازة (أ)';
    document.getElementById('stTotalScore').value = '260 / 280';
    document.getElementById('stPercentage').value = '92.8%';
    document.getElementById('stRating').value = 'ممتاز';
    document.getElementById('stNotes').value = 'طالب ملتزم ومتميز سلوكياً ودراسياً.';

    // Default 5 grades
    renderStudentGradesInputs([
        { subject: "اللغة العربية", score: "48 / 50", state: "ممتاز" },
        { subject: "اللغة الإنجليزية", score: "46 / 50", state: "ممتاز" },
        { subject: "الرياضيات", score: "56 / 60", state: "ممتاز" },
        { subject: "الكيمياء / العلوم", score: "55 / 60", state: "ممتاز" },
        { subject: "الفيزياء / التاريخ", score: "55 / 60", state: "ممتاز" }
    ]);

    openModal('studentModal');
}

function openEditStudentModal(index) {
    currentEditStudentIndex = index;
    const st = currentSchoolData.students[index];
    if (!st) return;

    document.getElementById('studentModalTitle').textContent = `تعديل بيانات الطالب: ${st.name}`;
    document.getElementById('stName').value = st.name || '';
    document.getElementById('stCode').value = st.code || '';
    document.getElementById('stSeat').value = st.seatNumber || '';
    document.getElementById('stGrade').value = st.grade || 'الصف الأول الثانوي';
    document.getElementById('stSection').value = st.section || 'عام';
    document.getElementById('stStatus').value = st.status || 'مقيد بانتظام';
    document.getElementById('stStatusType').value = st.statusType || 'success';
    document.getElementById('stAttendance').value = st.attendance || '90%';
    document.getElementById('stTablet').value = st.tabletStatus || 'مفعل';
    document.getElementById('stEvaluations').value = st.evaluations || 'مكتملة';
    document.getElementById('stTotalScore').value = st.totalScore || '';
    document.getElementById('stPercentage').value = st.percentage || '';
    document.getElementById('stRating').value = st.rating || 'ممتاز';
    document.getElementById('stNotes').value = st.notes || '';

    renderStudentGradesInputs(st.grades || []);
    openModal('studentModal');
}

function renderStudentGradesInputs(grades) {
    const container = document.getElementById('studentGradesContainer');
    if (!container) return;

    container.innerHTML = grades.map((g, idx) => `
        <div class="grade-edit-row" style="display:grid;grid-template-columns:1fr 100px 100px 30px;gap:8px;margin-bottom:6px;align-items:center;">
            <input type="text" class="input-field" placeholder="المادة" value="${g.subject}" id="gr_subj_${idx}">
            <input type="text" class="input-field" placeholder="الدرجة" value="${g.score}" id="gr_score_${idx}">
            <input type="text" class="input-field" placeholder="التقدير" value="${g.state}" id="gr_state_${idx}">
            <button type="button" class="table-action-btn danger" onclick="removeGradeRow(${idx})" title="حذف المادة"><i class="fa-solid fa-xmark"></i></button>
        </div>
    `).join('');
}

function addGradeRow() {
    const container = document.getElementById('studentGradesContainer');
    if (!container) return;
    const count = container.children.length;
    const div = document.createElement('div');
    div.className = 'grade-edit-row';
    div.style = 'display:grid;grid-template-columns:1fr 100px 100px 30px;gap:8px;margin-bottom:6px;align-items:center;';
    div.innerHTML = `
        <input type="text" class="input-field" placeholder="المادة" value="مادة جديدة" id="gr_subj_${count}">
        <input type="text" class="input-field" placeholder="الدرجة" value="50 / 50" id="gr_score_${count}">
        <input type="text" class="input-field" placeholder="التقدير" value="ممتاز" id="gr_state_${count}">
        <button type="button" class="table-action-btn danger" onclick="this.parentElement.remove()" title="حذف"><i class="fa-solid fa-xmark"></i></button>
    `;
    container.appendChild(div);
}

function removeGradeRow(idx) {
    const rows = document.querySelectorAll('#studentGradesContainer .grade-edit-row');
    if (rows[idx]) rows[idx].remove();
}

function saveStudentModal() {
    const name = document.getElementById('stName').value.trim();
    const code = document.getElementById('stCode').value.trim();
    const seatNumber = document.getElementById('stSeat').value.trim();

    if (!name) {
        alert('يرجى إدخال اسم الطالب');
        return;
    }

    // Collect grades
    const grades = [];
    const rows = document.querySelectorAll('#studentGradesContainer .grade-edit-row');
    rows.forEach(r => {
        const inputs = r.querySelectorAll('input');
        if (inputs.length >= 3 && inputs[0].value.trim()) {
            grades.push({
                subject: inputs[0].value.trim(),
                score: inputs[1].value.trim(),
                state: inputs[2].value.trim()
            });
        }
    });

    const studentObj = {
        name,
        code,
        seatNumber,
        grade: document.getElementById('stGrade').value,
        section: document.getElementById('stSection').value,
        status: document.getElementById('stStatus').value,
        statusType: document.getElementById('stStatusType').value,
        attendance: document.getElementById('stAttendance').value,
        tabletStatus: document.getElementById('stTablet').value,
        evaluations: document.getElementById('stEvaluations').value,
        totalScore: document.getElementById('stTotalScore').value,
        percentage: document.getElementById('stPercentage').value,
        rating: document.getElementById('stRating').value,
        grades,
        notes: document.getElementById('stNotes').value
    };

    if (!currentSchoolData.students) currentSchoolData.students = [];

    if (currentEditStudentIndex === -1) {
        currentSchoolData.students.unshift(studentObj);
    } else {
        currentSchoolData.students[currentEditStudentIndex] = studentObj;
    }

    closeModal('studentModal');
    renderStudentsAdmin();
    markUnsaved();
    showToast(`تم حفظ بيانات الطالب: ${name}`, 'success');
}

function deleteStudent(index) {
    const st = currentSchoolData.students[index];
    if (confirm(`هل أنت متأكد من حذف الطالب (${st.name}) من قاعدة البيانات؟`)) {
        currentSchoolData.students.splice(index, 1);
        renderStudentsAdmin();
        markUnsaved();
        showToast('تم حذف الطالب بنجاح', 'info');
    }
}

// Export / Import Students
function exportStudentsJson() {
    const list = currentSchoolData.students || [];
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(list, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `students_${currentSchoolData.slug || 'school'}.json`);
    dlAnchor.click();
    showToast('تم تصدير ملف بيانات الطلاب', 'success');
}

function importStudentsJson(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const parsed = JSON.parse(e.target.result);
                if (Array.isArray(parsed)) {
                    currentSchoolData.students = parsed;
                    renderStudentsAdmin();
                    markUnsaved();
                    showToast(`تم استيراد ${parsed.length} طالب بنجاح!`, 'success');
                } else {
                    alert('الملف غير صالح، يجب أن يحتوي على مصفوفة طلاب JSON.');
                }
            } catch(err) {
                alert('خطأ في قراءة ملف JSON: ' + err.message);
            }
        };
        reader.readAsText(input.files[0]);
    }
}

// ======================== FAQS ADMIN ========================
function renderFaqsAdmin() {
    const listWrap = document.getElementById('faqsList');
    if (!listWrap) return;

    const list = currentSchoolData.faqs || [];
    if (list.length === 0) {
        listWrap.innerHTML = `<div style="text-align:center;color:var(--text-muted);padding:30px;">لا توجد أسئلة شائعة مضافة.</div>`;
        return;
    }

    listWrap.innerHTML = list.map((f, i) => `
        <div class="admin-item-card" style="margin-bottom:12px;">
            <div style="font-weight:700;color:var(--text-primary);font-size:15px;display:flex;align-items:center;gap:8px;">
                <i class="fa-solid fa-circle-question" style="color:var(--primary)"></i>
                ${f.q}
            </div>
            <div style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin-top:6px;">
                ${f.a}
            </div>
            <div class="admin-item-actions">
                <button type="button" class="table-action-btn" onclick="openEditFaqModal(${i})">
                    <i class="fa-solid fa-pen"></i> تعديل
                </button>
                <button type="button" class="table-action-btn danger" onclick="deleteFaq(${i})">
                    <i class="fa-solid fa-trash"></i> حذف
                </button>
            </div>
        </div>
    `).join('');
}

function openAddFaqModal() {
    document.getElementById('faqModalTitle').textContent = 'إضافة سؤال شائع جديد';
    document.getElementById('faqEditIndex').value = '-1';
    document.getElementById('faqQuestionInput').value = '';
    document.getElementById('faqAnswerInput').value = '';
    openModal('faqModal');
}

function openEditFaqModal(index) {
    const item = currentSchoolData.faqs[index];
    if (!item) return;
    document.getElementById('faqModalTitle').textContent = 'تعديل السؤال الشائع';
    document.getElementById('faqEditIndex').value = index;
    document.getElementById('faqQuestionInput').value = item.q;
    document.getElementById('faqAnswerInput').value = item.a;
    openModal('faqModal');
}

function saveFaqModal() {
    const idx = parseInt(document.getElementById('faqEditIndex').value, 10);
    const q = document.getElementById('faqQuestionInput').value.trim();
    const a = document.getElementById('faqAnswerInput').value.trim();

    if (!q || !a) {
        alert('يرجى ملء السؤال والإجابة');
        return;
    }

    if (!currentSchoolData.faqs) currentSchoolData.faqs = [];

    if (idx === -1) {
        currentSchoolData.faqs.push({ q, a });
    } else {
        currentSchoolData.faqs[idx] = { q, a };
    }

    closeModal('faqModal');
    renderFaqsAdmin();
    markUnsaved();
    showToast('تم تحديث الأسئلة الشائعة', 'success');
}

function deleteFaq(index) {
    if (confirm('هل أنت متأكد من حذف هذا السؤال؟')) {
        currentSchoolData.faqs.splice(index, 1);
        renderFaqsAdmin();
        markUnsaved();
        showToast('تم حذف السؤال', 'info');
    }
}

// ======================== BACKUP & RESTORE ========================
function downloadFullSchoolBackup() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentSchoolData, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = `backup_${currentSchoolData.slug || 'school'}_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    showToast('تم تنزيل النسخة الاحتياطية لموقع المدرسة', 'success');
}

function restoreSchoolBackup(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const parsed = JSON.parse(e.target.result);
                if (parsed && parsed.name) {
                    currentSchoolData = parsed;
                    currentSchoolData.id = currentSchoolId; // retain school id
                    localStorage.setItem(`school_data_${currentSchoolId}`, JSON.stringify(currentSchoolData));
                    loadSchoolData(currentSchoolId);
                    showToast('تمت استعادة النسخة الاحتياطية بنجاح!', 'success');
                } else {
                    alert('ملف النسخة الاحتياطية غير صالح.');
                }
            } catch(err) {
                alert('خطأ في استعادة النسخة: ' + err.message);
            }
        };
        reader.readAsText(input.files[0]);
    }
}

function resetSchoolToDefaults() {
    if (confirm(`تحذير: هل أنت متأكد من رغبتك في إعادة ضبط بيانات مدرسة (${currentSchoolData.name}) إلى الإعدادات الأولية الافتراضية؟ سيتم مسح التعديلات الخاصة بها.`)) {
        localStorage.removeItem(`school_data_${currentSchoolId}`);
        currentSchoolData = getDefaultSchoolData(currentSchoolId);
        loadSchoolData(currentSchoolId);
        showToast('تمت استعادة الإعدادات الأصلية للمدرسة بنجاح', 'success');
    }
}

// ======================== MODAL HELPERS ========================
function openModal(id) {
    const el = document.getElementById(id);
    if (el) {
        el.classList.add('open');
        el.classList.add('show');
    }
}

function closeModal(id) {
    const el = document.getElementById(id);
    if (el) {
        el.classList.remove('open');
        el.classList.remove('show');
    }
}

// ======================== SIDEBAR & PANELS ========================
function initSidebar() {
    const toggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const mainWrapper = document.getElementById('mainWrapper');

    if (toggle && sidebar) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            mainWrapper?.classList.toggle('expanded');
        });
    }

    // Nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const panel = item.getAttribute('data-panel');
            if (panel) {
                // Internal panel switch - prevent navigation
                e.preventDefault();
                switchPanel(panel);
                sidebar?.classList.remove('mobile-open');
                document.getElementById('sidebarOverlay')?.classList.remove('show');
            }
            // External links (no data-panel) navigate normally
        });
    });

    // Mobile trigger
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const overlay = document.getElementById('sidebarOverlay');
    if (mobileBtn && sidebar) {
        mobileBtn.addEventListener('click', () => {
            sidebar.classList.add('mobile-open');
            overlay?.classList.add('show');
        });
    }
    if (overlay && sidebar) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('mobile-open');
            overlay.classList.remove('show');
        });
    }
}

function switchPanel(panelName) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-panel') === panelName);
    });

    document.querySelectorAll('.panel').forEach(p => {
        p.classList.remove('active');
    });

    const activePanel = document.getElementById(`panel-${panelName}`);
    if (activePanel) {
        activePanel.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ======================== CLOCK & TOAST ========================
function initClock() {
    function update() {
        const now = new Date();
        const timeEl = document.getElementById('headerTime');
        if (timeEl) {
            timeEl.textContent = now.toLocaleTimeString('ar-EG', {
                hour: '2-digit', minute: '2-digit', second: '2-digit'
            });
        }
    }
    update();
    setInterval(update, 1000);
}

function markUnsaved() {
    hasUnsavedChanges = true;
    const saveBtn = document.getElementById('btnSaveAll');
    if (saveBtn) saveBtn.classList.add('pulse');
    const badge = document.getElementById('unsavedBadge');
    if (badge) badge.style.display = 'inline-flex';
}

function clearUnsaved() {
    hasUnsavedChanges = false;
    const saveBtn = document.getElementById('btnSaveAll');
    if (saveBtn) saveBtn.classList.remove('pulse');
    const badge = document.getElementById('unsavedBadge');
    if (badge) badge.style.display = 'none';
}

function showToast(message, type = 'success') {
    let toast = document.getElementById('schoolToastBox');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'schoolToastBox';
        toast.className = 'toast-notice';
        document.body.appendChild(toast);
    }
    const icon = type === 'error' ? 'fa-triangle-exclamation' : (type === 'info' ? 'fa-circle-info' : 'fa-circle-check');
    const color = type === 'error' ? '#ef4444' : (type === 'info' ? '#60A5FA' : '#00C896');
    toast.innerHTML = `<i class="fa-solid ${icon}" style="color:${color};font-size:18px;"></i> <span>${message}</span>`;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}


// ======================== SUBJECTS MANAGEMENT ========================
function renderSubjectsAdmin() {
    const grid = document.getElementById('subjectsGrid');
    if (!grid) return;

    const list = currentSchoolData.subjects || [];
    if (list.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px;"><i class="fa-solid fa-book-open" style="font-size:36px;margin-bottom:12px;display:block;"></i>لا توجد مواد دراسية مضافة حالياً. اضغط على "إضافة مادة دراسية جديدة" للبدء.</div>`;
        return;
    }

    grid.innerHTML = list.map((sub, i) => `
        <div class="subject-card">
            <div class="subject-card-top">
                <div class="subject-card-title">
                    <i class="fa-solid fa-book-bookmark" style="color:var(--primary);margin-left:6px;"></i>
                    ${sub.name}
                </div>
                <span class="subject-badge-score">
                    العظمى: ${sub.maxScore || 50}
                </span>
            </div>
            <div class="subject-meta-info">
                <span><i class="fa-solid fa-graduation-cap"></i> ${sub.grade || 'جميع الصفوف'}</span>
                <span><i class="fa-solid fa-chalkboard-user"></i> ${sub.teacher || 'كادر التدريس'}</span>
            </div>
            <div class="admin-item-actions">
                <button type="button" class="table-action-btn" onclick="openEditSubjectModal(${i})">
                    <i class="fa-solid fa-pen"></i> تعديل
                </button>
                <button type="button" class="table-action-btn danger" onclick="deleteSubject(${i})">
                    <i class="fa-solid fa-trash"></i> حذف
                </button>
            </div>
        </div>
    `).join('');
}

function openAddSubjectModal() {
    document.getElementById('subjectModalTitle').textContent = 'إضافة مادة دراسية جديدة للمدرسة';
    document.getElementById('subjectEditIndex').value = '-1';
    document.getElementById('subNameInput').value = '';
    document.getElementById('subMaxScoreInput').value = '50';
    document.getElementById('subGradeInput').value = 'جميع الصفوف';
    document.getElementById('subTeacherInput').value = '';
    openModal('subjectModal');
}

function openEditSubjectModal(index) {
    const sub = currentSchoolData.subjects[index];
    if (!sub) return;
    document.getElementById('subjectModalTitle').textContent = `تعديل المادة: ${sub.name}`;
    document.getElementById('subjectEditIndex').value = index;
    document.getElementById('subNameInput').value = sub.name;
    document.getElementById('subMaxScoreInput').value = sub.maxScore || 50;
    document.getElementById('subGradeInput').value = sub.grade || 'جميع الصفوف';
    document.getElementById('subTeacherInput').value = sub.teacher || '';
    openModal('subjectModal');
}

function saveSubjectModal() {
    const idx = parseInt(document.getElementById('subjectEditIndex').value, 10);
    const name = document.getElementById('subNameInput').value.trim();
    const maxScore = document.getElementById('subMaxScoreInput').value.trim() || '50';
    const grade = document.getElementById('subGradeInput').value.trim() || 'جميع الصفوف';
    const teacher = document.getElementById('subTeacherInput').value.trim() || 'كادر التدريس';

    if (!name) {
        alert('يرجى إدخال اسم المادة');
        return;
    }

    if (!currentSchoolData.subjects) currentSchoolData.subjects = [];

    const obj = { id: Date.now(), name, maxScore, grade, teacher };
    if (idx === -1) {
        currentSchoolData.subjects.push(obj);
    } else {
        currentSchoolData.subjects[idx] = obj;
    }

    closeModal('subjectModal');
    renderSubjectsAdmin();
    markUnsaved();
    showToast(`تم حفظ المادة الدراسية: ${name}`, 'success');
}

function deleteSubject(index) {
    const sub = currentSchoolData.subjects[index];
    if (confirm(`هل أنت متأكد من حذف مادة (${sub.name}) من قائمة مواد المدرسة؟`)) {
        currentSchoolData.subjects.splice(index, 1);
        renderSubjectsAdmin();
        markUnsaved();
        showToast('تم حذف المادة بنجاح', 'info');
    }
}

function populateStudentGradesFromSubjects() {
    const subjects = currentSchoolData.subjects || [];
    if (subjects.length === 0) {
        alert('لا توجد مواد مضافة في قائمة مواد المدرسة حالياً. أضف مواداً أولاً من قسم "المواد الدراسية والمناهج".');
        return;
    }

    const grades = subjects.map(s => ({
        subject: s.name,
        score: `${s.maxScore} / ${s.maxScore}`,
        state: "ممتاز"
    }));

    renderStudentGradesInputs(grades);
    showToast(`تم إدراج ${subjects.length} مادة للطالب بنجاح!`, 'success');
}
