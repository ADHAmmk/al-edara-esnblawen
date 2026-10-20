const fs = require('fs');
const path = require('path');

const schools = [
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
        speech: "نرحب بأبنائنا وبناتنا الطلاب في صرح المقاطعة الثانوي، ونؤكد التزامنا التام بتوفير أرقى مستويات التعليم والمتابعة التربوية المستمرة."
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
        features: ["رعاية الفائقين والمبدعين", "قاعات ورش عمل تفاعلية", "معامل حاسب ومكتبة رقمية", "أنشطة لغات دولية"],
        speech: "التميز ليس شعاراً بل ممارسة يومية في فصولنا ومعاملنا، ونسعى لتخريج قادة يمتلكون أدوات العصر ولغاته."
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
        features: ["متابعة دراسية دقيقة", "مجموعات تقوية مجانية", "أنشطة صحافة مدرسية", "فصول شمسية مهواة"],
        speech: "الهدوء والتركيز هما ميزة مدرسة غزالة، ونحن نوفر لأبنائنا كل ما يحتاجونه لتحقيق أعلى المراتب في الثانوية العامة."
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
        founded: "2010",
        classrooms: "14 فصلاً",
        teachers: "40 معلماً ومعلمة",
        features: ["انضباط دراسي تام", "مكتبة حديثة", "معمل لغات وعلوم", "منظومة تواصل إلكتروني"],
        speech: "الانضباط والاحترام المتبادل هما أساس كل نجاح، ونحن ملتزمون بغرس هذه القيم في نفوس أبنائنا وبناتنا الطلاب."
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
        founded: "2005",
        classrooms: "18 فصلاً",
        teachers: "55 معلماً ومعلمة",
        features: ["فصول دراسية حديثة", "معامل علوم وتطوير تكنولوجي", "أنشطة وطنية ورياضية", "بيئة تعليمية متميزة"],
        speech: "نفتح لأبنائنا أبواب التفوق والريادة في الثانوية العامة، بتعليم حديث وتربية وطنية تجعلهم فخراً لأسرهم ومجتمعهم."
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
        founded: "1991",
        classrooms: "22 فصلاً",
        teachers: "65 معلمة ومعلماً",
        features: ["معامل تكنولوجية متطورة", "مكتبة علمية شاملة", "أنشطة ثقافية ورياضية", "فصول ذكية تفاعلية"],
        speech: "نعمل بروح الفريق الواحد لصناعة بيئة تعليمية راقية تحفز الطلاب على التفكير والإبداع وتحقيق أعلى الدرجات."
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

function generateHtml(school, index) {
    const prevSchool = schools[(index - 1 + schools.length) % schools.length];
    const nextSchool = schools[(index + 1) % schools.length];

    return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="الموقع الرسمي لـ ${school.name} - إدارة السنبلاوين التعليمية بمحافظة الدقهلية. البوابة الإلكترونية للخدمات الطلابية والتواصل.">
    <meta name="keywords" content="${school.name}, مدارس السنبلاوين, إدارة السنبلاوين التعليمية, محافظة الدقهلية, وزارة التربية والتعليم">
    <meta name="theme-color" content="#004C46">
    <link rel="shortcut icon" href="../مدريه.png" type="image/x-icon">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="school-theme.css">
    <title>${school.name} | البوابة الرسمية</title>
</head>
<body>

    <div class="top-notice-bar">
        <div class="container">
            <div class="top-bar-right">
                <span class="top-badge"><i class="fa-solid fa-circle-check"></i> صرح معتمد</span>
                <span>وزارة التربية والتعليم • مديرية الدقهلية • إدارة السنبلاوين التعليمية</span>
            </div>
            <div class="top-bar-left">
                <a href="../index.html" class="btn-back-portal">
                    <i class="fa-solid fa-arrow-right"></i>
                    العودة لبوابة إدارة السنبلاوين
                </a>
            </div>
        </div>
    </div>

    <header class="school-navbar">
        <div class="nav-container">
            <div class="school-brand">
                <div class="brand-logos">
                    <img src="../مدريه.png" alt="شعار مديرية التربية والتعليم" class="brand-logo-img">
                    <img src="../b3541166-b282-4128-807c-af8892e0a2d4-removebg-preview.png" alt="نسر جمهورية مصر العربية" class="brand-logo-img" style="height: 40px;">
                </div>
                <div class="brand-info">
                    <h1>${school.name}</h1>
                </div>
            </div>

            <button class="mobile-menu-toggle" id="mobileToggle" aria-label="تبديل القائمة">
                <i class="fa-solid fa-bars"></i>
            </button>

            <ul class="nav-menu" id="navMenu">
                <li><a href="#hero" class="nav-link active"><i class="fa-solid fa-house"></i> الرئيسية</a></li>
                <li><a href="#about" class="nav-link"><i class="fa-solid fa-circle-info"></i> عن المدرسة</a></li>
                <li><a href="#facilities" class="nav-link"><i class="fa-solid fa-laptop-code"></i> المعامل والمرافق</a></li>
                <li><a href="#services" class="nav-link"><i class="fa-solid fa-bolt"></i> الخدمات الرقمية</a></li>
                <li>
                    <a href="../index.html#schools" class="btn-primary-action">
                        <i class="fa-solid fa-grip"></i>
                        دليل المدارس
                    </a>
                </li>
            </ul>
        </div>
    </header>

    <section class="school-hero" id="hero">
        <div class="container">
            <div class="hero-grid">
                <div class="hero-text-content">
                    <div class="hero-badge-wrap">
                        <span class="badge-tag"><i class="fa-solid fa-graduation-cap"></i> ${school.typeName}</span>
                        <span class="badge-tag badge-code"><i class="fa-solid fa-fingerprint"></i> كود: ${school.code}</span>
                        <span class="badge-tag"><i class="fa-solid fa-location-dot"></i> ${school.location}</span>
                    </div>

                    <h2 class="hero-title">
                        مرحباً بكم في
                        <span>${school.name}</span>
                    </h2>

                    <p class="hero-description">
                        ${school.description} نعمل برؤية رائدة لتخريج أجيال مبدعة ومسلحة بالمعرفة والمهارات التكنولوجية الحديثة وفق المعايير القومية للتعليم المصري.
                    </p>

                    <div class="hero-actions">
                        <a href="#services" class="btn-hero-primary">
                            <i class="fa-solid fa-id-card-clip"></i>
                            الخدمات الإلكترونية للطلاب
                        </a>
                    </div>

                    <div class="hero-stats-row">
                        <div class="stat-box">
                            <span class="num">${school.studentsCount}</span>
                            <span class="lbl">طاقة استيعابية للطلاب</span>
                        </div>
                        <div class="stat-box">
                            <span class="num">${school.classrooms}</span>
                            <span class="lbl">فصلاً وقاعة مجهزة</span>
                        </div>
                        <div class="stat-box">
                            <span class="num">${school.teachers}</span>
                            <span class="lbl">كادر تعليمي وتربوي</span>
                        </div>
                    </div>
                </div>

                <div class="hero-visual-card">
                    <div class="hero-img-wrapper">
                        <img src="${school.image}" alt="${school.name}" onerror="this.src='../q.jpeg'">
                    </div>
                    <div class="hero-overlay-badge">
                        <div class="overlay-icon">
                            <i class="fa-solid fa-award"></i>
                        </div>
                        <div class="overlay-info">
                            <h4>منظومة تعليمية متطورة</h4>
                            <p>تأسست عام ${school.founded} • إدارة السنبلاوين</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="quick-ticker-bar">
        <div class="container">
            <div class="ticker-items">
                <div class="ticker-item">
                    <i class="fa-solid fa-microchip"></i>
                    <div class="ticker-text">
                        <h5>بنية تكنولوجية ذكية</h5>
                        <span>شبكة ألياف ضوئية وشاشات تفاعلية</span>
                    </div>
                </div>
                <div class="ticker-item">
                    <i class="fa-solid fa-book-open"></i>
                    <div class="ticker-text">
                        <h5>بنك المعرفة المصري</h5>
                        <span>ربط رقمي مباشر بالمصادر المعتمدة</span>
                    </div>
                </div>
                <div class="ticker-item">
                    <i class="fa-solid fa-shield-halved"></i>
                    <div class="ticker-text">
                        <h5>انضباط ورعاية تربوية</h5>
                        <span>متابعة سلوكية وأكاديمية دورية</span>
                    </div>
                </div>
                <div class="ticker-item">
                    <i class="fa-solid fa-handshake-angle"></i>
                    <div class="ticker-text">
                        <h5>شراكة مع أولياء الأمور</h5>
                        <span>قنوات تواصل مفتوحة ومستمرة</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="section-pad" id="about">
        <div class="container">
            <div class="section-header">
                <span class="section-pill"><i class="fa-solid fa-compass"></i> التوجه الاستراتيجي</span>
                <h3 class="section-title">الرؤية والرسالة والأهداف التربوية</h3>
                <p class="section-desc">نبني بيئة تعليمية محفزة ترعى الموهبة وتغرس الانتماء الوطني والتميز العلمي</p>
            </div>

            <div class="about-grid">
                <div class="about-card">
                    <div class="about-card-icon">
                        <i class="fa-solid fa-eye"></i>
                    </div>
                    <h3>رؤية المدرسة</h3>
                    <p class="vision-text"></p>
                </div>

                <div class="about-card gold-border">
                    <div class="about-card-icon">
                        <i class="fa-solid fa-bullseye"></i>
                    </div>
                    <h3>رسالة المدرسة</h3>
                    <p class="mission-text"></p>
                </div>
            </div>
        </div>
    </section>

    <section class="section-pad leadership-section">
        <div class="container">
            <div class="principal-card">
                <div class="principal-avatar">
                    <i class="fa-solid fa-user-tie"></i>
                </div>
                <div class="principal-speech">
                    <h3>كلمة إدارة المدرسة</h3>
                    <span class="principal-role">${school.principal}</span>
                    <p>
                        "${school.speech}"
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="section-pad" id="facilities">
        <div class="container">
            <div class="section-header">
                <span class="section-pill"><i class="fa-solid fa-school-flag"></i> الصروح والتجهيزات</span>
                <h3 class="section-title">المعامل والمرافق التعليمية المتطورة</h3>
                <p class="section-desc">صممت مرافق المدرسة لتوفير أعلى معايير الجودة والأمان لجميع أبنائنا وبناتنا</p>
            </div>

            <div class="facilities-grid">
                <div class="facility-card">
                    <div class="facility-icon-wrap"><i class="fa-solid fa-flask-vial"></i></div>
                    <h4>معامل العلوم المتكاملة</h4>
                    <p>مجهزة بأحدث أدوات تجارب الكيمياء والفيزياء والأحياء لإجراء التطبيقات العملية بأمان تام.</p>
                </div>

                <div class="facility-card">
                    <div class="facility-icon-wrap"><i class="fa-solid fa-network-wired"></i></div>
                    <h4>مركز التطوير التكنولوجي</h4>
                    <p>قاعات مجهزة بأحدث أجهزة الحاسب وشبكات السيرفرات المتصلة بمنظومة تابلت الثانوية العامة.</p>
                </div>

                <div class="facility-card">
                    <div class="facility-icon-wrap"><i class="fa-solid fa-chalkboard-user"></i></div>
                    <h4>فصول الشاشات الذكية</h4>
                    <p>شاشات تفاعلية متصلة بالإنترنت تمكن المعلمين من شرح الدروس التفاعلية وعرض المجسمات ثلاثية الأبعاد.</p>
                </div>

                <div class="facility-card">
                    <div class="facility-icon-wrap"><i class="fa-solid fa-book-bookmark"></i></div>
                    <h4>المكتبة الرقمية والورقية</h4>
                    <p>تضم آلاف الكتب العلمية والأدبية، مع منصات حاسوبية للوصول المباشر إلى بنك المعرفة المصري.</p>
                </div>

                <div class="facility-card">
                    <div class="facility-icon-wrap"><i class="fa-solid fa-volleyball"></i></div>
                    <h4>الملاعب والأنشطة الرياضية</h4>
                    <p>ملاعب مجهزة لكرة القدم والسلة والطائرة، لدعم النشاط البدني وإعداد فرق المدرسة للبطولات الرسمية.</p>
                </div>

                <div class="facility-card">
                    <div class="facility-icon-wrap"><i class="fa-solid fa-masks-theater"></i></div>
                    <h4>المسرح والقاعة الكبرى</h4>
                    <p>قاعة مخصصة للاحتفالات المدرسية، المسابقات الثقافية، معارض الفنون، والندوات التوعوية لأولياء الأمور.</p>
                </div>
            </div>
        </div>
    </section>


    <section class="section-pad" id="services">
        <div class="container">
            <div class="section-header">
                <span class="section-pill"><i class="fa-solid fa-laptop-code"></i> الرقمنة والخدمات</span>
                <h3 class="section-title">بوابة الخدمات الإلكترونية للطلاب وأولياء الأمور</h3>
                <p class="section-desc">إنجاز المعاملات والاستعلام عن النتائج والتقييمات بكل سهولة وسرعة</p>
            </div>

            <div class="services-school-grid">
                <div class="service-box-card">
                    <div>
                        <div class="srv-icon"><i class="fa-solid fa-clipboard-check"></i></div>
                        <h4 class="srv-title">التقييمات والأداءات الأسبوعية</h4>
                        <p class="srv-desc">الوصول المباشر لكراسات التقييم الأسبوعي والواجبات المنزلية المعتمدة من وزارة التربية والتعليم.</p>
                    </div>
                    <a href="https://ellibrary.moe.gov.eg/Performance_Assessments/" target="_blank" rel="noopener noreferrer" class="srv-btn">
                        دخول منصة التقييمات <i class="fa-solid fa-arrow-left"></i>
                    </a>
                </div>

                <div class="service-box-card">
                    <div>
                        <div class="srv-icon"><i class="fa-solid fa-tablet-screen-button"></i></div>
                        <h4 class="srv-title">الدعم الفني للتابلت المدرسي</h4>
                        <p class="srv-desc">خدمات تفعيل شريحة التابلت، تحديث منصة الامتحان Swift Assess، وحل المشكلات التقنية.</p>
                    </div>
                    <button type="button" class="srv-btn" onclick="showToast('فريق التطوير التكنولوجي متاح يومياً بمعمل المدرسة')">
                        طلب دعم التابلت <i class="fa-solid fa-arrow-left"></i>
                    </button>
                </div>

                <div class="service-box-card">
                    <div>
                        <div class="srv-icon"><i class="fa-solid fa-file-invoice"></i></div>
                        <h4 class="srv-title">استخراج بيان النجاح والشهادات</h4>
                        <p class="srv-desc">طلب إفادة قيد، استخراج بيان درجات رسمي، أو تصديق الأوراق من شؤون الطلاب بالإدارة.</p>
                    </div>
                    <button type="button" class="srv-btn" onclick="showToast('يرجى التوجه لمكتب شؤون الطلاب بالمدرسة مع صورة بطاقة ولي الأمر')">
                        طلب إفادة مدرسية <i class="fa-solid fa-arrow-left"></i>
                    </button>
                </div>

            </div>

            <div class="inquiry-mock-box">
                <div class="inquiry-content">
                    <h3><i class="fa-solid fa-graduation-cap"></i> الاستعلام السريع عن درجات وحالة الطالب</h3>
                    <p>ابحث باسم الطالب للاستعلام الفوري عن بيان الدرجات والتقييمات ونسبة الحضور وحالة القيد</p>

                    <form id="studentInquiryForm" class="inquiry-form">
                        <input type="text" id="studentCodeInput" class="inquiry-input" placeholder="اكتب اسم الطالب هنا للاستعلام عن النتيجة..." required>
                        <button type="submit" class="btn-inquiry-submit">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            استعلام عن النتيجة
                        </button>
                    </form>

                    <div id="inquiryResult" class="inquiry-result-panel"></div>
                </div>
            </div>
        </div>
    </section>

    <section class="section-pad" style="background: #ffffff;">
        <div class="container">
            <div class="section-header">
                <span class="section-pill"><i class="fa-solid fa-circle-question"></i> إجابات وافية</span>
                <h3 class="section-title">الأسئلة الأكثر شيوعاً</h3>
                <p class="section-desc">أهم الاستفسارات التي تهم الطلاب وأولياء الأمور في ${school.name}</p>
            </div>

            <div class="faq-list">
                <div class="faq-item">
                    <button class="faq-question">
                        <span>ما هي مواعيد الحضور والانصراف وطابور الصباح؟</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        يبدأ طابور الصباح المدرسي تمام الساعة 7:45 صباحاً، وتبدأ الحصة الأولى في تمام الساعة 8:00 صباحاً. وينتهي اليوم الدراسي في تمام الساعة 1:45 ظهراً وفقاً للجدول المعتمد.
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <span>كيف يتم استلام التابلت المدرسي وتفعيله؟</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        يتم سداد تأمين التابلت بمكاتب البريد المصري بإيصال رسمي، ثم يتوجه الطالب ومعه ولي الأمر إلى قسم التطوير التكنولوجي بالمدرسة لاستلام الجهاز وتفعيله على شبكة الوزارة.
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <span>ما هي آلية احتساب درجات أعمال السنة والتقييمات الأسبوعية؟</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        تتوزع درجات أعمال السنة وفقاً للقرارات الوزارية: كشكول الحصة، الواجب المنزلي، التقييم الأسبوعي، السلوك والمواظبة، والاختبارات الشهرية التي تعقد على مستوى الإدارة التعليمية.
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <span>كيف يمكن لولي الأمر متابعة غياب ودرجات ابنه/ابنته؟</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        من خلال البوابة الإلكترونية للمدرسة (الاستعلام برقم الجلوس أو الكود)، أو الحضور المباشر للمدرسة خلال المواعيد المخصصة لمقابلة أولياء الأمور يومي الأحد والثلاثاء.
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="school-nav-bar" style="background: #F4F7F6; border-top: 1px solid var(--border-color); padding: 22px 0;">
        <div class="container" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <a href="${prevSchool.slug}.html" style="font-size: 14px; color: var(--primary); font-weight:700; text-decoration:none; display:inline-flex; align-items:center; gap:8px;">
                <i class="fa-solid fa-arrow-right"></i> المدرسة السابقة: ${prevSchool.name}
            </a>
            <a href="${nextSchool.slug}.html" style="font-size: 14px; color: var(--primary); font-weight:700; text-decoration:none; display:inline-flex; align-items:center; gap:8px;">
                المدرسة التالية: ${nextSchool.name} <i class="fa-solid fa-arrow-left"></i>
            </a>
        </div>
    </div>

    <footer class="school-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <h4>${school.name}</h4>
                    <p>
                        إحدى المدارس الثانوية المتميزة التابعة لإدارة السنبلاوين التعليمية بمحافظة الدقهلية. نعمل وفق أحدث استراتيجيات وزارة التربية والتعليم لبناء جيل متميز يواكب العصر.
                    </p>
                    <div style="margin-top: 16px;">
                        <a href="../index.html" class="btn-back-portal">
                            <i class="fa-solid fa-arrow-right"></i> العودة للبوابة الرئيسية للإدارة
                        </a>
                    </div>
                </div>

                <div class="footer-col">
                    <h5>روابط الوصول السريع</h5>
                    <ul class="footer-links">
                        <li><a href="#about"><i class="fa-solid fa-angle-left"></i> الرؤية والرسالة</a></li>
                        <li><a href="#facilities"><i class="fa-solid fa-angle-left"></i> المعامل والمرافق</a></li>
                        <li><a href="#services"><i class="fa-solid fa-angle-left"></i> التقييمات والأداءات</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h5>بوابات وخدمات شريكة</h5>
                    <ul class="footer-links">
                        <li><a href="../index.html#schools"><i class="fa-solid fa-building-columns"></i> دليل مدارس السنبلاوين</a></li>
                        <li><a href="https://moe.gov.eg" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> وزارة التربية والتعليم</a></li>
                        <li><a href="https://ekb.eg" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> بنك المعرفة المصري</a></li>
                        <li><a href="https://ellibrary.moe.gov.eg/Performance_Assessments/" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> منصة التقييمات الرقمية</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                جميع الحقوق محفوظة © 2026 • <strong>${school.name}</strong> • إدارة السنبلاوين التعليمية - مديرية التربية والتعليم بالدقهلية
            </div>
        </div>
    </footer>

    <script src="school-script.js"></script>
</body>
</html>`;
}

// Ensure schools directory exists
const schoolsDir = path.join(__dirname, 'schools');
if (!fs.existsSync(schoolsDir)) {
    fs.mkdirSync(schoolsDir, { recursive: true });
}

// Generate all 18 HTML files
schools.forEach((school, index) => {
    const filename = `${school.slug}.html`;
    const filePath = path.join(schoolsDir, filename);
    const content = generateHtml(school, index);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Generated: ${filename} for ${school.name}`);
});

console.log('Successfully generated all 18 school websites!');
