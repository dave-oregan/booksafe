const new_sit = document.getElementById('new_sit')
const new_usn = document.getElementById('new_usn')
const new_pwd = document.getElementById('new_pwd')
const new_pin = document.getElementById('new_pin')
const new_eml = document.getElementById('new_eml')
const new_num = document.getElementById('new_num')
const new_oth = document.getElementById('new_oth')
const new_acc = document.getElementById('new_acc')
const res_new_acc = document.getElementById('res_new_acc')

const cng_usn = document.getElementById('cng_usn')
const cng_pwd = document.getElementById('cng_pwd')
const cng_pin = document.getElementById('cng_pin')
const cng_eml = document.getElementById('cng_eml')
const cng_num = document.getElementById('cng_num')
const cng_oth = document.getElementById('cng_oth')
const cng_acc = document.getElementById('cng_acc')
const cngaccount = document.getElementById('cngaccount')
const cng_container = document.getElementById('cng_container')

const del_sit = document.getElementById('del_sit')
const del_usn = document.getElementById('del_usn')
const del_pwd = document.getElementById('del_pwd')
const del_pin = document.getElementById('del_pin')
const del_eml = document.getElementById('del_eml')
const del_num = document.getElementById('del_num')
const del_oth = document.getElementById('del_oth')
const del_acc = document.getElementById('del_acc')
const delaccount = document.getElementById('delaccount')
const del_container = document.getElementById('del_container')

const cfm_del = document.getElementById('cfm_del')
const cmfdelaccount = document.getElementById('cmfdelaccount')
const cfmdel_container = document.getElementById('cfmdel_container')
const cfmdel_acc = document.getElementById('cfmdel_acc')

const s_bar = document.getElementById('s_bar')

const new_btn = document.getElementById('newbutton')
const set_btn = document.getElementById('settingbutton')
const abt_btn = document.getElementById('aboutbutton')

var toggleBool = false

const divikey = '+{ngqy--HZN--ngqy}+'
const nullkey = '+{akjg--HZN--akjg}+'
const xIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>'
const uIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" fill="currentColor" class="bi bi-caret-up-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z"/></svg>'
const dIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 16 16"><path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/></svg>'
const eIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.18em" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>'
const plusIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.18em" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/></svg>'
const settingIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.18em" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/></svg>'
const infoIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.18em" fill="currentColor" class="bi bi-info-lg" viewBox="0 0 16 16"><path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0"/></svg>'

const languages = [
    {
        name: "Arabic",
        title: "بوك سيف: كتاب كلمة السر",
        number: 0,
        transform_limit: {
            courier: 893,
            garamond: 785,
            georgia: 877,
            helvetica: 861,
            tahoma: 843,
            roman: 791,
            trebuchet: 787
        },
        setting: [
            "اسم الكتاب", "اللغات", "الخطوط", "لوحات الألوان"
        ],
        section: {
            nac: "حساب جديد", set: "الإعدادات", abt: "حول", edt: "تحرير الحساب", dlt: "حذف الحساب",
            cnb: "إنشاء كتاب جديد", isb: "استيراد كتاب محفوظ", inb: "استيراد كتاب جديد", exb: "تصدير الكتاب"
        },
        buttons: {
            new: "جديد", set: "الإعدادات", abt: "حول", smt: "تقديم", rst: "إعادة تعيين", ccl: "إلغاء",
            opn: "افتح", fdr: "مجلد", imp: "استيراد", exp: "تصدير", cls: "إغلاق", cfm: "تأكيد",
            rtn: "عودة", iao: "استيراد وفتح", dlt: "حذف", sav: "حفظ"
        },
        headers: {
            web: "موقع ويب", usn: "اسم المستخدم", pwd: "كلمة المرور", pin: "رقم الهوية", eml: "الإيميل", phn: "هاتف", det: "تفاصيل"
        },
        colours: {
            blue: "أزرق", grey: "رمادي", purple: "أرجواني", red: "أحمر"
        },
        description: [
            "عند إنشاء كتاب جديد، ستفقد أي كلمات مرور لم يتم تصديرها.",
            "هل ترغب في فتح الكتاب الجديد فورًا؟ إذا كان الأمر كذلك، ستفقد أي كلمات مرور في الكتاب الحالي غير المصدرة حتى الآن. اختيار الاستيراد دون الفتح سيضع ملف الضغط في مجلد التصدير لهذا التطبيق لسهولة الوصول في وقت لاحق.",
            "تذكير: فتح كتاب محفوظ آخر دون تصدير هذا الكتاب سيؤدي إلى فقدان كلمات المرور التي لم يتم حفظها. لضمان أمانك، يرجى تصدير البيانات قبل القيام بذلك!",
            "تذكير: يفترض منك تأكيد ذلك عن طريق كتابة 'حذف' أدناه:",
            "הספר שלך","נשמר לתיקיית הייצוא!",
            "حدث خطأ أثناء تصدير الكتاب الخاص بك:",
            "حدث خطأ أثناء استيراد كتابك:"
        ],
        about: [
            "كـ بوك سيف هو تطبيق يهدف إلى مساعدتك في تتبع جميع حساباتك بأكثر الطرق راحةً وعدم تداخلًا.",
            "هل بوك سيف يحتوي على أي من بياناتي؟",
            "لا، بوك سيف لا يخزن أي من بياناتك على الخوادم. بياناتك تُحفظ فقط على جهازك.",
            "كيف يمكنني العثور على كلمات المرور التي تم تصديرها؟",
            "انتقل إلى الإعدادات، ثم انقر على زر 'مجلد'. سيكشف هذا عن مجلد التصدير في مستكشف الملفات الخاص بك.",
            "هل يتم دعم بوك سيف على جميع الأجهزة؟",
            "للأسف، بسبب مشكلات التوافق، بوك سيف غير متاح حاليًا على الهواتف الذكية أو الأجهزة اللوحية. أنا (المطور) حاليًا أعمل على نسخة للأجهزة المحمولة.",
            "أسئلة إضافية؟",
            "البريد الإلكتروني للمطور على <a class=abtlink href=mailto:horizonzzQuery@gmail.com>horizonzzQuery@gmail.com </a>",
            "موقع المطور: <a class=abtlink id=linktoweb>horizonzz.com</a>",
            "حقوق الطبع والنشر © 2024 ديفيد أبهيشيك أوريجان - جميع الحقوق محفوظة."
        ]
    },
    {
        name: "Bangla",
        title: "বুকসেইফ: পাসওয়ার্ড বই",
        number: 1,
        transform_limit: {
            courier: 672,
            garamond: 640,
            georgia: 643,
            helvetica: 643,
            tahoma: 645,
            roman: 642,
            trebuchet: 646
        },
        setting: [
            "বইয়ের নাম", "ভাষা", "ফন্ট", "প্যালেট"
        ],
        section: {
            nac: "নতুন হিসাব", set: "সেটিংস", abt: "সম্পর্কে", edt: "হিসাব সম্পাদনা করুন", dlt: "হিসাব মুছে ফেলুন",
            cnb: "নতুন বই তৈরি করুন", isb: "সংরক্ষিত বই আমদানি করুন", inb: "নতুন বই আমদানি করুন", exb: "বই রপ্তানি করুন"
        },
        buttons: {
            new: "নতুন", set: "সেটিংস", abt: "সম্পর্কে", smt: "জমা দিন", rst: "রিসেট", ccl: "বাতিল",
            opn: "খোলা", fdr: "ফোল্ডার", imp: "আমদানি", exp: "রপ্তানি", cls: "বন্ধ", cfm: "নিশ্চিত করুন",
            rtn: "রিটার্ন", iao: "আমদানি এবং খোলা", dlt: "মুছুন", sav: "সংরক্ষণ করুন"
        },
        headers: {
            web: "ওয়েবসাইট", usn: "ব্যবহারকারীর নাম", pwd: "পাসওয়ার্ড", pin: "পিআইএন", eml: "ইমেইল", phn: "ফোন", det: "বিস্তারিত"
        },
        colours: {
            blue: "নীল", grey: "ধূসর", purple: "বেগুনি", red: "লাল"
        },
        description: [
            "নতুন একটি বই তৈরির সময়, আপনি যে কোনও পাসওয়ার্ড হারিয়ে যাবেন যেগুলি এখনো রপ্তানি করা হয়নি।",
            "আপনি কি তাড়াতাড়ি নতুন বইটি খোলতে চান? তাদের মধ্যে কোনও পাসওয়ার্ড যা এখনো রপ্তানি করা হয়নি তা হারিয়ে যাবে। খোলা না করে আমদানি করলে, তা পরে সহজে পাওয়ার জন্য এই অ্যাপ্লিকেশনের রপ্তানি ফোল্ডারে zip ফাইলটি রাখা হবে।",
            "মনে রাখবেন: এই বইটি রপ্তানি করার আগে অন্য কোনও সংরক্ষিত বই খোললে আপনি সংরক্ষিত না হওয়া পাসওয়ার্ড হারাবেন। আপনার নিজের নিরাপত্তা জন্য, এটা করার আগে দয়া করে রপ্তানি করুন!",
            "নীচে 'মুছুন' টাইপ করে নিশ্চিত করুন:",
            "আপনার বই","এক্সপোর্ট ফোল্ডারে সংরক্ষণ করা হয়েছে!",
            "আপনার বই রপ্তানি করার সময় নিম্নলিখিত ত্রুটি ঘটেছে:",
            "আপনার বই আমদানি করার সময় নিম্নলিখিত ত্রুটি ঘটেছে:"
        ],
        about: [
            "বুকসেইফ একটি অ্যাপ্লিকেশন যা সম্ভাব্যতঃ সবচেয়ে সুবিধাজনক, অভ্রান্তকর উপায়ে আপনার সব অ্যাকাউন্ট টি ট্র্যাক রাখতে সাহায্য করতে উদ্দেশ্য করে।",
            "বুকসেইফ কি আমার কোনও ডেটা রাখে?",
            "না, বুকসেইফ সার্ভারে আপনার কোনও ডেটা সংরক্ষণ করে না। আপনার তথ্য কেবল আপনার ডিভাইসে সংরক্ষণ করা হয়।",
            "আপনি কীভাবে আপনার রপ্তানি করা পাসওয়ার্ডগুলি খুঁজতে পারবেন?",
            "সেটিংসে যান, তারপর 'ফোল্ডার' বোতামে ক্লিক করুন। এটি আপনার এক্সপোর্ট ফোল্ডারটি আপনার এক্সপ্লোরারে উজ্জ্বল করবে।",
            "কি বুকসেইফ সমস্ত ডিভাইসে সমর্থিত?",
            "দুঃখিত, সাথে সাথে সাজগোজগের সমস্যার জন্য, বুকসেইফ বর্তমানে ফোন বা ট্যাবলেটের জন্য পাওয়া যাচ্ছে না। আমি (ডেভেলপার) বর্তমানে মোবাইল ডিভাইসের জন্য একটি পোর্টে কাজ করছি।",
            "আরো কোনো প্রশ্ন আছে?",
            "ডেভেলপারের কাছে ইমেইল করুন: <a class=abtlink href=mailto:horizonzzQuery@gmail.com>horizonzzQuery@gmail.com </a>",
            "বিকাশকারী ওয়েবসাইট: <a class=abtlink id=linktoweb>horizonzz.com</a>",
            "কপিরাইট © 2024 ডেভিড অভিষেক ও'রেগন - সমস্ত অধিকার সংরক্ষিত."
        ]
    },
    {
        name: "English",
        title: "BookSafe: Password Book",
        number: 2,
        transform_limit: {
            courier: 730,
            garamond: 654,
            georgia: 736,
            helvetica: 714,
            tahoma: 709,
            roman: 661,
            trebuchet: 662
        },
        setting: [
            "Book Name", "Languages", "Fonts", "Palettes"
        ],
        section: {
            nac: "New Account", set: "Settings", abt: "About", edt: "Edit Account", dlt: "Delete Account",
            cnb: "Create New Book", isb: "Import Saved Book", inb: "Import New Book", exb: "Export Book"
        },
        buttons: {
            new: "NEW", set: "SETTINGS", abt: "ABOUT", smt: "SUBMIT", rst: "RESET", ccl: "CANCEL",
            opn: "OPEN", fdr: "FOLDER", imp: "IMPORT", exp: "EXPORT", cls: "CLOSE", cfm: "CONFIRM",
            rtn: "RETURN", iao: "IMPORT AND OPEN", dlt: "DELETE", sav: "SAVE"
        },
        headers: {
            web: "Website", usn: "Username", pwd: "Password", pin: "PIN", eml: "Email", phn: "Phone", det: "Details"
        },
        colours: {
            blue: "Blue", grey: "Grey", purple: "Purple", red: "Red"
        },
        description: [
            "Upon creating a new book, you will lose any passwords that are not exported.",
            "Would you like to immediately open the new book? If so, any passwords in the current book not yet exported will be lost. Choosing to import without opening will place the zip file into the export folder of this application for ease of access later.",
            "Remember: Opening another saved book without exporting this one will cause you to lose unsaved passwords. For your own security, please export before doing this!",
            "Please confirm by typing 'DELETE' below:",
            "Your book","has been saved to the exports folder!",
            "The following error occurred while exporting your book:",
            "The following error occurred while importing your book:"
        ],
        about: [
            "BookSafe is an app that aims to help you keep track of all your accounts in the most convenient, non-invasive way possible.",
            "Does BookSafe have any of my data?",
            "No, BookSafe stores none of your data on servers. Your data is only saved on your device.",
            "How can I find my exported passwords?",
            "Go to settings, then click on the 'FOLDER' button. This will reveal the export folder in your explorer.",
            "Is BookSafe supported on all devices?",
            "Unfortunately, due to compatibility issues, BookSafe is not currently available for phones or tablets. I (the developer) am currently working on a port for mobile devices.",
            "More questions?",
            "Email the developer at <a class=abtlink href=mailto:horizonzzQuery@gmail.com>horizonzzQuery@gmail.com </a>",
            "Developer Website: <a class=abtlink id=linktoweb>horizonzz.com</a>",
            "Copyright © 2024 David Abhishek O'Regan - All Rights Reserved."
        ]
    },
    {
        name: "French",
        title: "BookSafe: Vos Mots de Passe",
        number: 3,
        transform_limit: {
            courier: 893,
            garamond: 785,
            georgia: 877,
            helvetica: 861,
            tahoma: 843,
            roman: 791,
            trebuchet: 787
        },
        setting: [
            "Nom du Livre", "Langues", "Polices", "Palettes de Couleurs"
        ],
        section: {
            nac: "Nouveau Compte", set: "Paramètres", abt: "À Propos", edt: "Modifier le Compte", dlt: "Supprimer le Compte",
            cnb: "Créer un Nouveau Livre", isb: "Importer le Livre Sauvegardé", inb: "Importer un Nouveau Livre", exb: "Exporter le Livre"
        },
        buttons: {
            new: "NOUVEAU", set: "PARAMÈTRES", abt: "À PROPOS", smt: "SOUMETTRE", rst: "RÉINITIALISER", ccl: "ANNULER",
            opn: "OUVRIR", fdr: "DOSSIER", imp: "IMPORTER", exp: "EXPORTER", cls: "FERMER", cfm: "CONFIRMER",
            rtn: "RETOUR", iao: "IMPORTER ET OUVRIR", dlt: "SUPPRIMER", sav: "ENREGISTRER"
        },
        headers: {
            web: "Site Web", usn: "Nom d'utilisateur", pwd: "Mot de Passe", pin: "PIN", eml: "Email", phn: "Portable", det: "Détails"
        },
        colours: {
            blue: "Bleu", grey: "Gris", purple: "Violet", red: "Rouge"
        },
        description: [
            "Lors de la création d'un nouveau livre, vous perdrez tous les mots de passe qui n'ont pas été exportés.",
            "Souhaitez-vous ouvrir immédiatement le nouveau livre ? Si oui, tous les mots de passe dans le livre actuel qui n'ont pas encore été exportés seront perdus. Choisir d'importer sans ouvrir placera le fichier zip dans le dossier d'exportation de cette application pour un accès facile ultérieur.",
            "Rappelez-vous : ouvrir un autre livre enregistré sans exporter celui-ci entraînera la perte des mots de passe non enregistrés. Pour votre sécurité, veuillez exporter avant de procéder!",
            "Veuillez confirmer en tapant 'SUPPRIMER' ci-dessous:",
            "Votre livre","a été enregistré dans le dossier des exports!",
            "L'erreur suivante s'est produite lors de l'exportation de votre livre:",
            "L'erreur suivante s'est produite lors de l'importation de votre livre:"
        ],
        about: [
            "BookSafe est une application qui vise à vous aider à suivre tous vos comptes de la manière la plus pratique et non invasive possible.",
            "Est-ce que BookSafe possède certaines de mes données?",
            "Non, BookSafe ne stocke aucune de vos données sur des serveurs. Vos données sont uniquement enregistrées sur votre appareil.",
            "Comment puis-je trouver mes mots de passe exportés?",
            "Allez dans les paramètres, puis cliquez sur le bouton 'DOSSIER'. Cela révélera le dossier d'exportation dans votre explorateur.",
            "BookSafe est-il pris en charge sur tous les appareils?",
            "Malheureusement, en raison de problèmes de compatibilité, BookSafe n'est actuellement pas disponible pour les téléphones ou les tablettes. Je (le développeur) travaille actuellement sur un portage pour les appareils mobiles.",
            "D'autres questions",
            "Envoyez un email au développeur à <a class=abtlink href=mailto:horizonzzQuery@gmail.com>horizonzzQuery@gmail.com </a>",
            "Site Web du Développeur: <a class=abtlink id=linktoweb>horizonzz.com</a>",
            "Droits D'auteur © 2024 David Abhishek O'Regan - Tous Droits Réservés."
        ]
    },
    {
        name: "German",
        title: "BookSafe: Passwortbuch",
        number: 4,
        transform_limit:  {
            courier: 749,
            garamond: 678,
            georgia: 759,
            helvetica: 732,
            tahoma: 723,
            roman: 681,
            trebuchet: 679
        },
        setting: [
            "Buchname", "Sprachen", "Schriftarten", "Farbpaletten"
        ],
        section: {
            nac: "Neues Konto", set: "Einstellungen", abt: "Über", edt: "Konto Bearbeiten", dlt: "Konto löschen",
            cnb: "Neues Buch Erstellen", isb: "Gespeichertes Buch Importieren", inb: "Neues Buch Importieren", exb: "Buch Exportieren"
        },
        buttons: {
            new: "NEU", set: "EINSTELLUNGEN", abt: "ÜBER", smt: "EINREICHEN", rst: "ZURÜCKSETZEN", ccl: "ABBRECHEN",
            opn: "ÖFFNEN", fdr: "ORDNER", imp: "IMPORTIEREN", exp: "EXPORTIEREN", cls: "SCHLIEßEN", cfm: "BESTÄTIGEN",
            rtn: "ZURÜCK", iao: "IMPORTIEREN UND ÖFFNEN", dlt: "LÖSCHEN", sav: "SPEICHERN"
        },
        headers: {
            web: "Website", usn: "Benutzername", pwd: "Passwort", pin: "PIN", eml: "Email", phn: "Handy", det: "Details"
        },
        colours: {
            blue: "Blau", grey: "Grau", purple: "Violett", red: "Rot"
        },
        description: [
            "Bei der Erstellung eines neuen Buchs gehen nicht exportierte Passwörter verloren.",
            "Möchten Sie das neue Buch sofort öffnen? Wenn ja, gehen alle Passwörter im aktuellen Buch, die noch nicht exportiert wurden, verloren. Die Option, ohne Öffnen zu importieren, platziert die Zip-Datei im Exportordner dieser Anwendung für späteren Zugriff.",
            "Merken Sie sich: Das Öffnen eines anderen gespeicherten Buches ohne Exportieren dieses wird dazu führen, dass Sie nicht gespeicherte Passwörter verlieren. Zu Ihrer eigenen Sicherheit exportieren Sie bitte, bevor Sie dies tun!",
            "Bestätigen Sie durch Eingabe von 'LÖSCHEN' unten:",
            "Ihr Buch","wurde in den Exportordner gespeichert!",
            "Der folgende Fehler ist beim Exportieren Ihres Buches aufgetreten:",
            "Der folgende Fehler ist beim Importieren Ihres Buches aufgetreten:"
        ],
        about: [
            "BookSafe ist eine App, die darauf abzielt, Ihnen auf die bequemste und nicht-invasive Weise dabei zu helfen, den Überblick über all Ihre Konten zu behalten.",
            "Hat BookSafe einige meiner Daten",
            "Nein, BookSafe speichert keine Ihrer Daten auf Servern. Ihre Daten werden nur auf Ihrem Gerät gespeichert.",
            "Wie kann ich meine exportierten Passwörter finden?",
            "Gehen Sie zu den Einstellungen und klicken Sie dann auf die Schaltfläche 'ORDNER'. Dadurch wird der Exportordner in Ihrem Datei-Explorer angezeigt.",
            "Ist BookSafe auf allen Geräten unterstützt?",
            "Leider ist BookSafe aufgrund von Kompatibilitätsproblemen derzeit nicht für Telefone oder Tablets verfügbar. Ich (der Entwickler) arbeite derzeit an einer Portierung für mobile Geräte.",
            "Mehr Fragen?",
            "Der Entwickler per Email erreichen unter <a class=abtlink href=mailto:horizonzzQuery@gmail.com>horizonzzQuery@gmail.com </a>",
            "Entwickler-Website: <a class=abtlink id=linktoweb>horizonzz.com</a>",
            "Urheberrecht © 2024 David Abhishek O'Regan - Alle Rechte Vorbehalten."
        ]
    },
    {
        name: "Hebrew",
        title: "בוקסייף: ספר סיסמאות",
        number: 5,
        transform_limit: {
            courier: 893,
            garamond: 785,
            georgia: 877,
            helvetica: 861,
            tahoma: 843,
            roman: 791,
            trebuchet: 787
        },
        setting: [
            "שם הספר", "שפות", "גופנים", "פלטות צבעים"
        ],
        section: {
            nac: "חשבון חדש", set: "הגדרות", abt: "אודות", edt: "עריכת חשבון", dlt: "מחיקת חשבון",
            cnb: "יצירת ספר חדש", isb: "ייבוא ספר שמור", inb: "ייבוא ספר חדש", exb: "ייצוא ספר"
        },
        buttons: {
            new: "חדש", set: "הגדרות", abt: "אודות", smt: "הגש", rst: "איפוס", ccl: "ביטול",
            opn: "פתח", fdr: "תיקייה", imp: "ייבא", exp: "ייצא", cls: "סגור", cfm: "אשר",
            rtn: "חזרה", iao: "ייבא ופתח", dlt: "מחק", sav: "שמור"
        },
        headers: {
            web: "אתר אינטרנט", usn: "שם משתמש", pwd: "סיסמה", pin: "קוד", eml: "דואל", phn: "טלפון", det: "פרטים"
        },
        colours: {
            blue: "כחול", grey: "אפור", purple: "סגול", red: "אדום"
        },
        description: [
            "בעת יצירת ספר חדש, ייאבדו כל הסיסמאות שלא יוצאו לייצוא.",
            "האם תרצה לפתוח את הספר החדש מייד? אם כן, כל הסיסמאות שלא נוצאו לייצוא מהספר הנוכחי ייאבדו. בחירה לייבא בלעדייך לפתיחה תכניס את קובץ ה-ZIP לתיקיית הייצוא של יישום זה לצורך גישה נוחה מאוחר יותר.",
            "זכור: פתיחת ספר שמור נוסף בלעדייך לייצוא של ספר זה תגרום לאובדן סיסמאות שלא נשמרו. למענה על בטחונך, אנא יצא לפני ביצוע פעולה זו!",
            "אנא אשר על ידי כתיבת 'מחק' למטה:",
            "הספר שלך","נשמר בתיקיית הייצוא!",
            "התרחשה שגיאה במהלך הייצור של הספר שלך:",
            "התרחשה שגיאה במהלך היבוא של הספר שלך:"
        ],
        about: [
            "בוקסייף הוא אפליקציה שמטרתה לעזור לך לעקוב אחרי כל החשבונות שלך בדרך הכי נוחה ולא פוגעת שתהיה.",
            "האם בוקסייף מכילה מידע עליי؟",
            "לא, בוקסייף אינה שומרת נתונים על השרתים. המידע שלך נשמר רק על המכשיר שלך.",
            "איך אני יכול למצוא את הסיסמאות שיצאו מהמערכת؟",
            "עבור להגדרות, לאחר מכן לחץ על כפתור 'תיקייה'. זה יחשוף את תיקיית היצוא בדפדפן הקבצים שלך.",
            "האם בוקסייף נתמך בכל המכשירים؟",
            "לצערי, בשל בעיות תאימות, בוקסייף אינה זמינה כרגע עבור טלפונים ניידים או טאבלטים. אני (המפתח) עובד כרגע על העברת האפליקציה למכשירים ניידים.",
            "שאלות נוספות؟",
            'שלח דוא"ל למפתח בכתובת <a class=abtlink href=mailto:horizonzzQuery@gmail.com>horizonzzQuery@gmail.com </a>',
            "אתר מפתחים: <a class=abtlink id=linktoweb>horizonzz.com</a>",
            "זכויות יוצרים © 2024 דיוויד אבישק או'רגן - כל הזכויות שמורות."
        ]
    },
    {
        name: "Hindi",
        title: "बुकसेफ: पासवर्ड किताब",
        number: 6,
        transform_limit:  {
            courier: 672,
            garamond: 640,
            georgia: 643,
            helvetica: 643,
            tahoma: 645,
            roman: 642,
            trebuchet: 646
        },
        setting: [
            "किताब का नाम", "भाषाएँ", "लिपि", "रंग पट्टियाँ"
        ],
        section: {
            nac: "नया खाता", set: "सेटिंग्स", abt: "बारे में", edt: "खाता संपादित करें", dlt: "खाता हटाएं",
            cnb: "नई किताब बनाएं", isb: "सहेजी गई किताब आयात करें", inb: "नई किताब आयात करें", exb: "किताब निर्यात करें"
        },
        buttons: {
            new: "नया", set: "सेटिंग्स", abt: "बारे में", smt: "सबमिट", rst: "रीसेट", ccl: "रद्द",
            opn: "खोलें", fdr: "फोल्डर", imp: "आयात", exp: "निर्यात", cls: "बंद", cfm: "पुष्टि करें",
            rtn: "वापस", iao: "आयात और खोलें", dlt: "हटाएं", sav: "सहेजें"
        },
        headers: {
            web: "वेबसाइट", usn: "उपयोगकर्ता नाम", pwd: "पासवर्ड", pin: "पिन", eml: "ईमेल", phn: "फ़ोन", det: "विवरण"
        },
        colours: {
            blue: "नीला", grey: "स्लेटी", purple: "बैंगनी", red: "लाल"
        },
        description: [
            "नई किताब बनाने पर, आपको जो कोई पासवर्ड नहीं निर्यात किया गया है, वह सभी हो जाएंगे।",
            "क्या आप तुरंत नई किताब खोलना चाहेंगे? ऐसा करने पर, जो कोई पासवर्ड वर्तमान किताब में निर्यात नहीं किया गया है, वह सभी हो जाएंगे। बिना खोले आयात करने का चयन करने पर यह एप्लिकेशन के निर्यात फ़ोल्डर में जल्दी पहुँचने के लिए ZIP फ़ाइल रखा जाएगा।",
            "ध्यान रखें: इसे निर्यात किए बिना इसे एक और सहेजी गई किताब खोलने से आप असहेजे पासवर्ड को खो सकते हैं। अपनी सुरक्षा के लिए, कृपया इससे पहले निर्यात करें!",
            "कृपया 'हटाएं' नीचे टाइप करके पुष्टि करें:",
            "आपकी किताब","को निर्यात फोल्डर में सहेज लिया गया है!",
            "किताब निर्यात करते समय निम्नलिखित त्रुटि हुई:",
            "किताब आयात करते समय निम्नलिखित त्रुटि हुई:"
        ],
        about: [
            "बुकसेफ एक एप्लिकेशन है जो आपको आपके सभी खातों का सर्वाधिक सुविधाजनक, अन्तर्घातरहित तरीके से ट्रैक करने में मदद करने का उद्देश्य रखता है।",
            "बुकसेफ आपके डेटा को किसी भी प्रकार से संग्रहित नहीं करता है?",
            "नहीं, बुकसेफ आपके डेटा को सर्वर पर संग्रहित नहीं करता है। आपका डेटा केवल आपकी डिवाइस पर ही सहेजा जाता है।",
            "आपके निर्यात किए गए पासवर्ड कैसे खोजें?",
            "सेटिंग्स में जाएं, फिर 'फोल्डर' बटन पर क्लिक करें। यह आपके एक्सप्लोरर में निर्यात फोल्डर को खोलेगा।",
            "क्या बुकसेफ सभी डिवाइसों पर समर्थित है?",
            "दुर्भाग्यवश, संगतता समस्याओं के कारण, वर्तमान में बुकसेफ फ़ोन या टैबलेट्स के लिए उपलब्ध नहीं है। मैं (डेवलपर) वर्तमान में मोबाइल डिवाइस के लिए एक पोर्ट पर काम कर रहा हूँ।",
            "कोई और सवाल?",
            "डेवलपर से संपर्क करने के लिए <a class=abtlink href=mailto:horizonzzQuery@gmail.com>horizonzzQuery@gmail.com </a> पर ईमेल करें।",
            "डेवलपर का वेबसाइट: <a class=abtlink id=linktoweb>horizonzz.com</a>",
            "कॉपीराइट © 2024 डेविड अभिषेक ओ'रेगन - सभी अधिकार सुरक्षित हैं।"
        ]
    },
    {
        name: "Italian",
        title: "BookSafe: Libro delle Password",
        number: 7,
        transform_limit:  {
            courier: 989,
            garamond: 856,
            georgia: 958,
            helvetica: 912,
            tahoma: 913,
            roman: 860,
            trebuchet: 854
        },
        setting: [
            "Nome del Libro", "Le Lingue", "Caratteri", "Tavolozza"
        ],
        section: {
            nac: "Nuovo Account", set: "Impostazioni", abt: "Informazioni", edt: "Modifica Account", dlt: "Elimina Account",
            cnb: "Crea Nuovo Libro", isb: "Importa Libro Salvato", inb: "Importa Nuovo Libro", exb: "Esporta Libro"
        },
        buttons: {
            new: "NUOVO", set: "IMPOSTAZIONI", abt: "INFORMAZIONI", smt: "INVIA", rst: "RESETTA", ccl: "ANNULLA",
            opn: "APRI", fdr: "CARTELLA", imp: "IMPORTA", exp: "ESPORTA", cls: "CHIUDI", cfm: "CONFERMA",
            rtn: "RITORNA", iao: "IMPORTA E APRI", dlt: "ELIMINA", sav: "SALVA"
        },
        headers: {
            web: "Sito Web", usn: "Nome Utente", pwd: "Password", pin: "PIN", eml: "Email", phn: "Cellulare", det: "Dettagli"
        },
        colours: {
            blue: "Blu", grey: "Grigio", purple: "Viola", red: "Rosso"
        },
        description: [
            "Alla creazione di un nuovo libro, perderai tutte le password non esportate.",
            "Vuoi aprire immediatamente il nuovo libro? In tal caso, tutte le password nel libro attuale non ancora esportate saranno perse. Scegliendo di importare senza aprire, il file zip sarà collocato nella cartella di esportazione di questa applicazione per un accesso più facile in seguito.",
            "Ricorda: Aprire un altro libro salvato senza esportare questo comporterà la perdita delle password non salvate. Per la tua sicurezza, ti preghiamo di esportare prima di procedere!",
            "Si prega di confermare digitando 'ELIMINA' qui sotto:",
            "Il tuo libro","è stato salvato nella cartella di esportazione!",
            "Si è verificato il seguente errore durante l'esportazione del tuo libro:",
            "Si è verificato il seguente errore durante l'importazione del tuo libro:"
        ],
        about: [
            "BookSafe è un'app che mira ad aiutarti a tenere traccia di tutti i tuoi account nel modo più conveniente e non invasivo possibile.",
            "BookSafe ha qualche dato mio?",
            "No, BookSafe non memorizza alcun dato sui server. I tuoi dati sono salvati solo sul tuo dispositivo.",
            "Come posso trovare le mie password esportate?",
            "Vai nelle impostazioni, poi clicca sul pulsante 'CARTELLA'. Questo mostrerà la cartella di esportazione nel tuo esplora risorse.",
            "BookSafe è supportato su tutti i dispositivi?",
            "Purtroppo, a causa di problemi di compatibilità, al momento BookSafe non è disponibile per telefoni o tablet. (Lo sviluppatore) sta attualmente lavorando a una versione per dispositivi mobili.",
            "Altre domande?",
            "Invia un'email allo sviluppatore all'indirizzo <a class=abtlink href=mailto:horizonzzQuery@gmail.com>horizonzzQuery@gmail.com </a>",
            "Sito web dello sviluppatore: <a class=abtlink id=linktoweb>horizonzz.com</a>",
            "Diritti d'autore © 2024 David Abhishek O'Regan - Tutti i diritti riservati."
        ]
    },
    {
        name: "Portuguese",
        title: "BookSafe: Senha Livro",
        number: 8,
        transform_limit: {
            courier: 749,
            garamond: 673,
            georgia: 746,
            helvetica: 730,
            tahoma: 713,
            roman: 683,
            trebuchet: 674
        },
        setting: [
            "Nome do Livro", "Línguas", "Fontes", "Paletas"
        ],
        section: {
            nac: "Nova Conta", set: "Configurações", abt: "Sobre", edt: "Editar Conta", dlt: "Excluir Conta",
            cnb: "Criar Novo Livro", isb: "Importar Livro Salvo", inb: "Importar Novo Livro", exb: "Exportar Livro"
        },
        buttons: {
            new: "NOVO", set: "CONFIGURAÇÕES", abt: "SOBRE", smt: "ENVIAR", rst: "REDEFINIR", ccl: "CANCELAR",
            opn: "ABRIR", fdr: "PASTA", imp: "IMPORTAR", exp: "EXPORTAR", cls: "FECHAR", cfm: "CONFIRMAR",
            rtn: "RETORNAR", iao: "IMPORTAR E ABRIR", dlt: "EXCLUIR", sav: "SALVAR"
        },
        headers: {
            web: "Site da Internet", usn: "Nome de Usuário", pwd: "Senha", pin: "PIN", eml: "Email", phn: "Telé", det: "Detalhes"
        },
        colours: {
            blue: "Azul", grey: "Cinza", purple: "Roxo", red: "Vermelho"
        },
        description: [
            "Ao criar um novo livro, você perderá quaisquer senhas que não forem exportadas.",
            "Você gostaria de abrir imediatamente o novo livro? Se sim, quaisquer senhas no livro atual que ainda não foram exportadas serão perdidas. Escolher importar sem abrir colocará o arquivo zip na pasta de exportação deste aplicativo para facilitar o acesso posteriormente.",
            "Lembre-se: Abrir outro livro salvo sem exportar este fará com que você perca as senhas não salvas. Por sua própria segurança, por favor, exporte antes de fazer isso!",
            "Por favor, confirme digitando 'EXCLUIR' abaixo:",
            "Seu livro","foi salvo na pasta de exportação!",
            "O seguinte erro ocorreu ao exportar seu livro:",
            "O seguinte erro ocorreu ao importar seu livro:"
        ],
        about: [
            "O BookSafe é um aplicativo que visa ajudar você a acompanhar todas as suas contas da maneira mais conveniente e não invasiva possível.",
            "O BookSafe possui algum dos meus dados?",
            "Não, o BookSafe não armazena nenhum de seus dados em servidores. Seus dados são salvos apenas no seu dispositivo.",
            "Como posso encontrar as senhas que exportei?",
            "Vá para configurações e clique no botão 'PASTA'. Isso revelará a pasta de exportação no seu explorador.",
            "O BookSafe é compatível com todos os dispositivos?",
            "Infelizmente, devido a problemas de compatibilidade, o BookSafe não está atualmente disponível para telefones ou tablets. Eu (o desenvolvedor) estou trabalhando atualmente em uma versão para dispositivos móveis.",
            "Mais alguma pergunta?",
            "Envie um email para o desenvolvedor em <a class=abtlink href=mailto:horizonzzQuery@gmail.com>horizonzzQuery@gmail.com </a>",
            "Website do Desenvolvedor: <a class=abtlink id=linktoweb>horizonzz.com</a>",
            "Direitos Autorais © 2024 David Abhishek O'Regan - Todos os Direitos Reservados."
        ]
    },
    {
        name: "Russian",
        title: "БукСейф: Парольная Книга",
        number: 9,
        transform_limit:  {
            courier: 826,
            garamond: 803,
            georgia: 888,
            helvetica: 834,
            tahoma: 836,
            roman: 801,
            trebuchet: 796
        },
        setting: [
            "Название Книги", "Языки", "Шрифты", "Палитры"
        ],
        section: {
            nac: "Новый Аккаунт", set: "Настройки", abt: "O Cтpaницe", edt: "Редактировать Aккаунт", dlt: "Удалить Aккаунт",
            cnb: "Создать Новую Книгу", isb: "Импортировать Сохраненную Книгу", inb: "Импортировать Новую Книгу", exb: "Экспортировать Книгу"
        },
        buttons: {
            new: "НОВЫЙ", set: "НАСТРОЙКИ", abt: "O СТРАНИЦЕ", smt: "ОТПРАВИТЬ", rst: "СБРОСИТЬ", ccl: "OTMEHA",
            opn: "ОТКРЫТЬ", fdr: "ПАПКА", imp: "ИМПОРТ", exp: "ЭКСПОРТ", cls: "ЗАКРЫТЬ", cfm: "ПОДТВЕРДИТЬ",
            rtn: "BEPHУTЬ", iao: "ИМПОРТИРОВАТЬ И ОТКРЫТЬ", dlt: "УДАЛИТЬ", sav: "СОХРАНИТЬ"
        },
        headers: {
            web: "Веб-сайт", usn: "Имя Пользователя", pwd: "Пароль", pin: "ПИН-код", eml: "Эмейл", phn: "Мобильник", det: "Детали"
        },
        colours: {
            blue: "Голубой", grey: "Серый", purple: "Фиолетовый", red: "Красный"
        },
        description: [
            "При создании новой книги вы потеряете все пароли, которые не были экспортированы.",
            "Хотели бы вы сразу открыть новую книгу? Если да, все пароли в текущей книге, которые еще не были экспортированы, будут потеряны. Выбор импорта без открытия поместит файл zip в папку экспорта этого приложения для удобства доступа позже.",
            "Помните: открытие другой сохраненной книги без экспорта текущей приведет к потере несохраненных паролей. В целях вашей безопасности, пожалуйста, сначала выполните экспорт!",
            "Пожалуйста, подтвердите, введя 'УДАЛИТЬ' ниже:",
            "Ваша книга","была сохранена в папке экспорта!",
            "Произошла следующая ошибка при экспорте вашей книги:",
            "Произошла следующая ошибка при импорте вашей книги:"
        ],
        about: [
            "БукСейф это приложение, которое призвано помочь вам отслеживать все ваши аккаунты наиболее удобным и ненавязчивым способом.",
            "Есть ли y БукСейф какие-либо мои данные?",
            "Нет, БукСейф не хранит никаких ваших данных на серверах. Ваши данные сохраняются только на вашем устройстве.",
            "Как я могу найти экспортированные пароли?",
            "Перейдите в настройки, затем нажмите кнопку 'ПАПКА'. Это откроет папку экспорта в вашем проводнике.",
            "БукСейф поддерживается на всех устройствах?",
            "К сожалению, из-за проблем совместимости, BookSafe в настоящее время не доступен для телефонов или планшетов. Я (разработчик) в настоящее время работаю над портом для мобильных устройств.",
            "Больше вопросов?",
            "Отправьте электронное письмо разработчику по адресу <a class=abtlink href=mailto:horizonzzQuery@gmail.com>horizonzzQuery@gmail.com </a>",
            "Веб-сайт разработчика: <a class=abtlink id=linktoweb>horizonzz.com</a>",
            "Авторское Право © 2024 Дэвид Абхишек О'Риган - Все Права Защищены."
        ]
    },
    {
        name: "Spanish",
        title: "BookSafe: Libro Contraseña",
        number: 10,
        transform_limit:  {
            courier: 797,
            garamond: 687,
            georgia: 779,
            helvetica: 752,
            tahoma: 744,
            roman: 701,
            trebuchet: 702
        },
        setting: [
            "Nombre del Libro", "Idiomas", "Fuentes", "Paletas"
        ],
        section: {
            nac: "Nueva Cuenta", set: "Ajustes", abt: "Sobre", edt: "Editar Cuenta", dlt: "Borrar Cuenta",
            cnb: "Crear Nuevo Libro", isb: "Importar Libro Guardado", inb: "Importar Nuevo Libro", exb: "Exportar Libro"
        },
        buttons: {
            new: "NUEVO", set: "AJUSTES", abt: "SOBRE", smt: "ENTREGAR", rst: "REAJUSTAR", ccl: "CANCELAR",
            opn: "ABRIR", fdr: "CARPETA", imp: "IMPORTAR", exp: "EXPORTAR", cls: "CERRAR", cfm: "CONFIRMAR",
            rtn: "DEVOLVER", iao: "IMPORTAR Y ABRIR", dlt: "BORRAR", sav: "AHORRAR"
        },
        headers: {
            web: "Sitio Web", usn: "Nombre de Usario", pwd: "Contraseña", pin: "PIN", eml: "Correo", phn: "Celular", det: "Detalles"
        },
        colours: {
            blue: "Azul", grey: "Gris", purple: "Morado", red: "Rojo"
        },
        description: [
            "Al crear un nuevo libro, perderás todas las contraseñas que no hayas exportado.",
            "¿Te gustaría abrir el nuevo libro de inmediato? Si lo haces, todas las contraseñas en el libro actual que aún no hayas exportado se perderán. Elegir importar sin abrir colocará el archivo zip en la carpeta de exportación de esta aplicación para facilitar el acceso más tarde.",
            "Recuerda: Abrir otro libro guardado sin exportar este causará la pérdida de contraseñas no guardadas. ¡Por tu propia seguridad, por favor exporta antes de hacerlo!",
            "Por favor, confirma escribiendo 'BORRAR' a continuación:",
            "¡Tu libro","se ha guardado en la carpeta de exportaciones!",
            "Ocurrió el siguiente error al exportar tu libro:",
            "Ocurrió el siguiente error al importar tu libro:"
        ],
        about: [
            "BookSafe es una app que tiene como objetivo ayudarte a realizar un seguimiento de todas tus cuentas de la forma más cómoda y no invasiva posible.",
            "¿BookSafe tiene alguno de mis datos?",
            "No, BookSafe no almacena ninguno de tus datos en servidores. Tus datos solo se guardan en tu dispositivo.",
            "¿Cómo puedo encontrar mis contraseñas exportadas?",
            "Ve a configuración y luego haz clic en el botón 'CARPETA'. Esto revelará la carpeta de exportación en tu explorador.",
            "¿BookSafe es compatible con todos los dispositivos?",
            "Desafortunadamente, debido a problemas de compatibilidad, BookSafe no está disponible actualmente para teléfonos o tabletas. Yo (el desarrollador) estoy trabajando actualmente en una versión para dispositivos móviles.",
            "¿Más preguntas?",
            "Envía un correo electrónico al desarrollador a <a class=abtlink href=mailto:horizonzzQuery@gmail.com>horizonzzQuery@gmail.com </a>",
            "Sitio Web del Desarrollador: <a class=abtlink id=linktoweb>horizonzz.com</a>",
            "Derecho de Autor © 2024 David Abhishek O'Regan - Todos los Derechos Reservados."
        ]
    }
]

var __language = document.getElementById('languages').value

async function changeLanguage(language) {
    __language = language
    
    savesettings(document.getElementById('fonts').value, document.getElementById('palettes').value, document.getElementById('zip_name_box').value, __language)

    const l_num = getLangNumber(__language)

    // Titles
    document.getElementById('title').innerText = languages[l_num].title
    document.getElementById('title_nac').innerHTML = languages[l_num].section.nac
    document.getElementById('title_set').innerHTML = languages[l_num].section.set
    document.getElementById('title_abt').innerHTML = languages[l_num].section.abt
    document.getElementById('title_edt').innerHTML = languages[l_num].section.edt
    document.getElementById('title_dlt').innerHTML = languages[l_num].section.dlt
    document.getElementById('title_dl2').innerHTML = languages[l_num].section.dlt
    document.getElementById('title_cnb').innerHTML = languages[l_num].section.cnb
    document.getElementById('title_isb').innerHTML = languages[l_num].section.isb
    document.getElementById('title_inb').innerHTML = languages[l_num].section.inb
    document.getElementById('title_ib2').innerHTML = languages[l_num].section.inb
    document.getElementById('title_exb').innerHTML = languages[l_num].section.exb

    // Discriptions
    document.getElementById('dsc_cnb').innerText = languages[l_num].description[0]
    document.getElementById('dsc_ib2').innerText = languages[l_num].description[1]
    document.getElementById('dsc_isb').innerText = languages[l_num].description[2]
    document.getElementById('dsc_dl2').innerText = languages[l_num].description[3]

    // Buttons
    checkForSizeChange()
    document.getElementById('set_new').innerText = languages[l_num].buttons.new
    document.getElementById('set_ope').innerText = languages[l_num].buttons.opn
    document.getElementById('set_fol').innerText = languages[l_num].buttons.fdr
    document.getElementById('set_imp').innerText = languages[l_num].buttons.imp
    document.getElementById('set_exp').innerText = languages[l_num].buttons.exp
    document.getElementById('btn_cl1').innerText = languages[l_num].buttons.cls
    document.getElementById('btn_cl2').innerText = languages[l_num].buttons.cls
    document.getElementById('btn_fl1').innerText = languages[l_num].buttons.fdr
    document.getElementById('btn_fl2').innerText = languages[l_num].buttons.fdr
    document.getElementById('btn_ope').innerText = languages[l_num].buttons.opn
    document.getElementById('btn_imp').innerText = languages[l_num].buttons.imp
    document.getElementById('btn_iao').innerText = languages[l_num].buttons.iao
    document.getElementById('new_acc').innerText = languages[l_num].buttons.smt
    document.getElementById('res_new_acc').innerText = languages[l_num].buttons.rst
    document.getElementById('btn_rst').innerText = languages[l_num].buttons.rst
    document.getElementById('btn_cfm').innerText = languages[l_num].buttons.cfm
    document.getElementById('cfmdel_acc').innerText = languages[l_num].buttons.cfm
    document.getElementById('del_acc').innerText = languages[l_num].buttons.dlt
    document.getElementById('cng_acc').innerText = languages[l_num].buttons.sav
    for (let i=1; i<6; i++) {
        document.getElementById(`btn_cc${i}`).innerText = languages[l_num].buttons.ccl
    }
    for (let i=1; i<5; i++) {
        document.getElementById(`btn_rt${i}`).innerText = languages[l_num].buttons.rtn
    }
    for (let i=1; i<4; i++) {
        if (i != 2) { document.getElementById(`web_${i}`).innerText = languages[l_num].headers.web }
        document.getElementById(`usn_${i}`).innerText = languages[l_num].headers.usn
        document.getElementById(`pwd_${i}`).innerText = languages[l_num].headers.pwd
        document.getElementById(`pin_${i}`).innerText = languages[l_num].headers.pin
        document.getElementById(`eml_${i}`).innerText = languages[l_num].headers.eml
        document.getElementById(`phn_${i}`).innerText = languages[l_num].headers.phn
        document.getElementById(`det_${i}`).innerText = languages[l_num].headers.det
    }

    // Colors
    document.getElementById('blu').innerText = languages[l_num].colours.blue
    document.getElementById('gre').innerText = languages[l_num].colours.grey
    document.getElementById('pur').innerText = languages[l_num].colours.purple
    document.getElementById('red').innerText = languages[l_num].colours.red

    // Setting Headers
    document.getElementById('set_bkn').innerText = languages[l_num].setting[0]
    document.getElementById('set_lng').innerText = languages[l_num].setting[1]
    document.getElementById('set_fnt').innerText = languages[l_num].setting[2]
    document.getElementById('set_plt').innerText = languages[l_num].setting[3]
    
    // About Page (except title)
    for (let i=0; i<11; i++) {
        document.getElementById(`ap${i+1}`).innerHTML = languages[l_num].about[i]
    }

    // Regenerates Account List in New Language
    var clearAccounts = Array.from(document.getElementsByClassName('account'))
    clearAccounts.forEach((account) => {
        account.parentNode.removeChild(account)
    })
    await loadfiles()
    changePalette(document.getElementById('palettes').value)

    if (__language == languages[0].name || __language == languages[5].name) {
        document.body.classList.add('rtl')
        document.getElementById('aboutbutton').classList.add('rtl_button')
        document.getElementById('settingbutton').classList.add('rtl_button')
        document.getElementById('newbutton').classList.add('rtl_button')
        Array.from(document.getElementsByClassName('buttondiv')).forEach((item) => {
            item.classList.add('rtl_account')
        })
    }
    else {
        document.body.classList.remove('rtl')
        document.getElementById('aboutbutton').classList.remove('rtl_button')
        document.getElementById('settingbutton').classList.remove('rtl_button')
        document.getElementById('newbutton').classList.remove('rtl_button')
        Array.from(document.getElementsByClassName('buttondiv')).forEach((item) => {
            item.classList.remove('rtl_account')
        })
    }
}

function getLangNumber(lang_value) {
    const language = languages.find(language => lang_value === language.name)

    return language.number
}

window.addEventListener('resize', () => {
    checkForSizeChange()
})

function checkForSizeChange() {
    const screenWidth = window.innerWidth

    const selector = document.getElementById('fonts')

    const font_value = selector.options[selector.selectedIndex].id

    if (screenWidth < languages[getLangNumber(__language)].transform_limit[font_value]) {
        new_btn.innerHTML = `<span class=iconheightlimit>${plusIcon}</span>`
        set_btn.innerHTML = `<span class=iconheightlimit>${settingIcon}</span>`
        abt_btn.innerHTML = `<span class=iconheightlimit>${infoIcon}</span>`
    }
    else {
        new_btn.innerHTML = `${languages[getLangNumber(__language)].buttons.new}`
        set_btn.innerHTML = `${languages[getLangNumber(__language)].buttons.set}`
        abt_btn.innerHTML = `${languages[getLangNumber(__language)].buttons.abt}`
    }
}

new_acc.addEventListener('click', async () => {
    const sit = new_sit.value
    if (sit == '') { return }
    var usn = nullkeyReplacement(new_usn.value, false)
    var pwd = nullkeyReplacement(new_pwd.value, false)
    var pin = nullkeyReplacement(new_pin.value, false)
    var eml = nullkeyReplacement(new_eml.value, false)
    var num = nullkeyReplacement(new_num.value, false)
    var oth = nullkeyReplacement(new_oth.value, false)

    const content = `${sit}${divikey}${usn}${divikey}${pwd}${divikey}${pin}${divikey}${eml}${divikey}${num}${divikey}${oth}`

    const save = await api.savePass(sit, content, divikey)

    location.reload()
})

res_new_acc.addEventListener('click', () => {
    new_sit.value = ''
    new_usn.value = ''
    new_pwd.value = ''
    new_pin.value = ''
    new_eml.value = ''
    new_num.value = ''
    new_oth.value = ''
})

cng_acc.addEventListener('click', async () => {
    var path = cng_container.getAttribute('name')
    var contentArray = []
    contentArray.push(cngaccount.getAttribute('name'))
    contentArray.push(nullkeyReplacement(cng_usn.value, false))
    contentArray.push(nullkeyReplacement(cng_pwd.value, false))
    contentArray.push(nullkeyReplacement(cng_pin.value, false))
    contentArray.push(nullkeyReplacement(cng_eml.value, false))
    contentArray.push(nullkeyReplacement(cng_num.value, false))
    contentArray.push(nullkeyReplacement(cng_oth.value, false))
    contentArray.push(cng_usn.getAttribute('name'))

    const contentCNG = contentArray.join(divikey)

    const save = await api.saveOver(path, contentCNG)

    location.reload()
})

del_acc.addEventListener('click', () => {
    reveal('cfmdel_container')

    hide('del_container')
})

cfmdel_acc.addEventListener('click', async () => {
    if (cfm_del.value == languages[getLangNumber(__language)].buttons.dlt) {
        var path = del_container.getAttribute('name')
        const deleteFile = await api.deleteFile(path)
        location.reload()
    } else {
        hide('cfmdel_container')
        cfm_del.value = ''
    }
})

s_bar.addEventListener('input', () => {
    const search = s_bar.value.toLowerCase()
    const accounts = Array.from(document.getElementsByClassName('account'))

    if (search == '') {
        accounts.forEach((account) => {
            account.classList.remove('hidden')
        })
    }
    else {
        accounts.forEach((account) => {
            if (!account.textContent.toLowerCase().includes(search) && !account.id.toLowerCase().includes(search)) {
                account.classList.add('hidden')
            }
            else {
                account.classList.remove('hidden')
            }
        })
    }
})

function addAccount(site, username, password, pin, email, phone, other, file) {
    let diff = 0
    let oldsite = site
    while ($(`[name="${site}"]`).length != 0) {
        diff++
        site = `${oldsite} (${diff})`
    }

    const large = document.createElement('div')
        large.className = 'account'
        large.id = `${file}`
        large.setAttribute('name', `${site}`)
    const site_title = document.createElement('a')
        site_title.className = 'site'
        site_title.id = 'webname'
        site_title.innerHTML = `${site}<div class=buttondiv><span class=accButtons onclick='expand(this.parentNode.parentNode.parentNode, this)'>${dIcon}</span><span class=accButtons onclick='deleteFile("${file}")'>${xIcon}</span><span class=accButtons onclick='editFile("${file}")'>${eIcon}</span><div>`
    large.appendChild(site_title)
    const container = document.createElement('div')
        container.className = 'inneraccountcontainer'
    large.appendChild(container)
    const usnrow = document.createElement('div')
        usnrow.className = 'accountrow'
        usnrow.id = 'usnrow'
        usnrow.innerHTML = `<span class=text id=username>${nullkeyReplacement(username, true)}</span><a class=textL>${languages[getLangNumber(__language)].headers.usn}:</a>`
    container.appendChild(usnrow)
    const pwdrow = document.createElement('div')
        pwdrow.className = 'accountrow'
        pwdrow.id = 'pwdrow'
        pwdrow.innerHTML = `<span class=text id=password>${nullkeyReplacement(password, true)}</span><a class=textL>${languages[getLangNumber(__language)].headers.pwd}:</a>`
    container.appendChild(pwdrow)
    const pinrow = document.createElement('div')
        pinrow.className = 'accountrow'
        pinrow.id = 'pinrow'
        pinrow.innerHTML = `<span class=text id=pin>${nullkeyReplacement(pin, true)}</span><a class=textL>${languages[getLangNumber(__language)].headers.pin}:</a>`
    container.appendChild(pinrow)
    const emlrow = document.createElement('div')
        emlrow.className = 'accountrow'
        emlrow.id = 'emlrow'
        emlrow.innerHTML = `<span class=text id=email>${nullkeyReplacement(email, true)}</span><a class=textL>${languages[getLangNumber(__language)].headers.eml}:</a>`
    container.appendChild(emlrow)
    const numrow = document.createElement('div')
        numrow.className = 'accountrow'
        numrow.id = 'numrow'
        numrow.innerHTML = `<span class=text id=phone>${nullkeyReplacement(phone, true)}</span><a class=textL>${languages[getLangNumber(__language)].headers.phn}:</a>`
    container.appendChild(numrow)
    const othrow = document.createElement('div')
        othrow.className = 'accountrow'
        othrow.id = 'othrow'
        othrow.innerHTML = `<span class=text id=other>${nullkeyReplacement(other, true)}</span><a class=textL>${languages[getLangNumber(__language)].headers.det}:</a>`
    container.appendChild(othrow)

    var labeldiscriminator
    try { 
        labeldiscriminator = site.charAt(0).toUpperCase()
        if (labeldiscriminator != "Ё" && labeldiscriminator != "Ñ") {
            labeldiscriminator = labeldiscriminator.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        }
    }
    catch { labeldiscriminator = '-' }
    if (/[^a-zA-ZЁА-Яёа-яँ-ःअ-ऋए-ऐओ-औक-যড-হ়-্।-९א-תا-يء-يئ-ي‎-‎׳-״-]/.test(labeldiscriminator) && (labeldiscriminator != "Ё" && labeldiscriminator != "Ñ")) { labeldiscriminator = '-' }
    document.getElementById(`acc${labeldiscriminator}`).appendChild(large)
    configure()
}

async function editFile(fileName) {
    const fileArraySingle = await api.loadFileSingle(fileName)
    const toFile = fileArraySingle[0]
    const dataArray = fileArraySingle[1].split(divikey)
    openEditMenu(toFile, dataArray)
}

function openEditMenu(path, data) {
    cng_usn.defaultValue = nullkeyReplacement(data[1], true)
    cng_usn.setAttribute('name', data[7])
    cng_pwd.defaultValue = nullkeyReplacement(data[2], true)
    cng_pin.defaultValue = nullkeyReplacement(data[3], true)
    cng_eml.defaultValue = nullkeyReplacement(data[4], true)
    cng_num.defaultValue = nullkeyReplacement(data[5], true)
    cng_oth.defaultValue = nullkeyReplacement(data[6], true)
    cngaccount.setAttribute('name', data[0])
    cng_container.setAttribute('name', path)

    reveal('cng_container')
}

async function deleteFile(fileName) {
    const fileArraySingle = await api.loadFileSingle(fileName)
    const toFile = fileArraySingle[0]
    const dataArray = fileArraySingle[1].split(divikey)
    openDeleteMenu(toFile, dataArray)
}

function openDeleteMenu(path, data) {
    del_sit.defaultValue = nullkeyReplacement(data[0], true)
    del_usn.defaultValue = nullkeyReplacement(data[1], true)
    del_pwd.defaultValue = nullkeyReplacement(data[2], true)
    del_pin.defaultValue = nullkeyReplacement(data[3], true)
    del_eml.defaultValue = nullkeyReplacement(data[4], true)
    del_num.defaultValue = nullkeyReplacement(data[5], true)
    del_oth.defaultValue = nullkeyReplacement(data[6], true)
    delaccount.setAttribute('name', data[0])
    del_container.setAttribute('name', path)

    reveal('del_container')
}

function nullkeyReplacement(string, bool) {
    if (string == nullkey && bool) { string = '' }
    if (string == '' && !bool) { string = nullkey }
    return string
}

function reveal(id) {
    const hidden = document.getElementById(id)
    hidden.classList.remove('hidden')
}

function hide(id) {
    const shown = document.getElementById(id)
    shown.classList.add('hidden')
}

function toggleSearch(containerID) {
    const toToggle = document.getElementById(containerID)
    if (toToggle.classList.contains('hidden')) {
        toToggle.classList.remove('hidden')
    }
    else {
        toToggle.classList.add('hidden')

        s_bar.value = ''

        const accounts = Array.from(document.getElementsByClassName('account'))

        accounts.forEach((account) => {
            account.classList.remove('hidden')
        })
    }
}

function expand(parent, element) {
    $(`#${parent.id}`).children('.inneraccountcontainer').slideToggle('medium')
    $(`#${parent.id}`).toggleClass('expanded')
    toggleBool = !toggleBool
    if (toggleBool) { element.innerHTML = `${uIcon}` }
    else { element.innerHTML = `${dIcon}` }
}

function changeFont(font) {
    savesettings(font, document.getElementById('palettes').value, document.getElementById('zip_name_box').value, document.getElementById('languages').value)
    $("body").css("font-family", font)
    checkForSizeChange()
}

function changePalette(colour) {
    savesettings(document.getElementById('fonts').value, colour, document.getElementById('zip_name_box').value, document.getElementById('languages').value)
    if (colour == 'red')
    {
        $('body').css('color', `white`)
        $('body').css('background-color', `lightcoral`)
        $('.containers').css('background-color', `indianred`)
        $('.typerpop').css('background-color', `indianred`)
        $('.account').css('background-color', `#A04040`)
        $('.button').css('background-color', `#A04040`)
    }
    else if (colour == 'purple')
    {
        $('body').css('color', `white`)
        $('body').css('background-color', `#D8A1E7`)
        $('.containers').css('background-color', `#C46EDA`)
        $('.typerpop').css('background-color', `#C46EDA`)
        $('.account').css('background-color', `mediumorchid`)
        $('.button').css('background-color', `mediumorchid`)
    }
    else if (colour == 'blue')
    {
        $('body').css('color', `white`)
        $('body').css('background-color', `lightsky${colour}`)
        $('.containers').css('background-color', `#708EE8`)
        $('.typerpop').css('background-color', `#708EE8`)
        $('.account').css('background-color', `royal${colour}`)
        $('.button').css('background-color', `royal${colour}`)
    }
    else if (colour == 'grey')
    {
        $('body').css('color', `black`)
        $('body').css('background-color', `white`)
        $('.containers').css('background-color', `light${colour}`)
        $('.typerpop').css('background-color', `light${colour}`)
        $('.account').css('background-color', `dark${colour}`)
        $('.button').css('background-color', `dark${colour}`)
    }
}

function resetWindow() {
    setOptions('Trebuchet MS, sans-serif', 'grey')
    changeFont('Trebuchet MS, sans-serif')
    changePalette('grey')
}

function setOptions(font, colour) {
    document.getElementById('fonts').selectedIndex = [...document.getElementById('fonts').options].findIndex(option => option.value === font)
    document.getElementById('palettes').selectedIndex = [...document.getElementById('palettes').options].findIndex(option => option.value === colour)
}

function windowScroll(discriminator) {
    document.getElementById(`acc${discriminator}`).scrollIntoView({ behavior: "smooth" })
}

function configure() {
    const headers = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'SS', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'Ё', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я',
        'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'ך', 'כ', 'ל', 'ם', 'מ', 'ן', 'נ', 'ס', 'ע', 'ף', 'פ', 'ץ', 'צ', 'ק', 'ר', 'ש', 'ת',
        'ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي',
        'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए', 'ऐ', 'ओ', 'औ', 'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह', 'ळ', 'क्ष', 'ज्ञ',
        'অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'ঋ', 'এ', 'ঐ', 'ও', 'ঔ', 'ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ', 'ছ', 'জ', 'ঝ', 'ঞ', 'ট', 'ঠ', 'ড', 'ঢ', 'ণ', 'ত', 'থ', 'দ', 'ধ', 'ন', 'প', 'ফ', 'ব', 'ভ', 'ম', 'য', 'র', 'ল', 'শ', 'ষ', 'স', 'হ',
        '-'
    ]
    headers.forEach((x) => {
        const header = document.getElementById(`acc${x}`)
        if (header.childElementCount == 0 || header.childElementCount == 1) {
            hide(`acc${x}`)
            hide(`scr${x}`)
        }
        else {
            reveal(`acc${x}`)
            reveal(`scr${x}`)
        }
    })
}

async function loadfiles() {
    const fileArray = await api.loadFile()
    fileArray.forEach((account) => {
        const accountArray = account.split(divikey)
        addAccount(accountArray[0], accountArray[1], accountArray[2], accountArray[3], accountArray[4], accountArray[5], accountArray[6], accountArray[7])
    })
}

async function savesettings(font, colour, filename, language) {
    const content = `${font}${divikey}${colour}${divikey}${filename}${divikey}${language}`

    const save = await api.saveSettings(content, divikey)
}

async function loadsettings() {
    const file = await api.loadSettings()

    const settingArray = file[1].split(divikey)

    document.getElementById('languages').value = settingArray[3]
    document.getElementById('palettes').value = settingArray[1]
    document.getElementById('fonts').value = settingArray[0]

    setZipName(settingArray[2])
    changeFont(settingArray[0])
    changePalette(settingArray[1])
    changeLanguage(settingArray[3])

    setOptions(settingArray[0], settingArray[1])
}

async function exportZip() {
    filename = document.getElementById('zip_name_box').value

    savesettings(document.getElementById('fonts').value, document.getElementById('palettes').value, filename, document.getElementById('languages').value)

    const expZip = await api.packZip(filename)


    var save_status = `${languages[getLangNumber(__language)].description[4]}, ${filename}, ${languages[getLangNumber(__language)].description[5]}`

    
    if (filename == '') {
        save_status = `${languages[getLangNumber(__language)].description[4]} ${languages[getLangNumber(__language)].description[5]}`
    }

    if (!expZip[1]) {
        save_status = `${languages[getLangNumber(__language)].description[6]} ${expZip[0]}`
    }

    document.getElementById('save_status_desc').innerHTML = save_status
    
    reveal('save_container')
}

async function openExportFolder() {
    const explorer = await api.openExplorer(`exports`)
}

async function importZip(open_bool) {
    const result = await api.showDialog('')

    if (result && result.length > 0) {
        const filePath = result[0]

        const copy = await api.copyZip(filePath)

        if (open_bool) {
            const clear = await api.clearFiles()
            const zipToGet = (await api.unpackZip(filePath)).slice(2)
            
            zipToGet.forEach(async (file) => {
                const split_file_contents = file.content.split(divikey)
                const addToApp = await api.savePass(split_file_contents[0], file.content, divikey)
            })

            location.reload()
        }
        else {
            hide('import_container')
            
            var import_status = `${languages[getLangNumber(__language)].description[4]} ${languages[getLangNumber(__language)].description[5]}`

            if (!copy[0]) {
                import_status = `${languages[getLangNumber(__language)].description[7]} ${copy[1]}`
            }

            document.getElementById('import_status_desc').innerHTML = import_status
    
            reveal('import_background_container')
        }
    }
}

async function importSavedZip() {
    const result = await api.showDialog('exports')

    if (result && result.length > 0) {
        const filePath = result[0]

        const clear = await api.clearFiles()
        const zipToGet = (await api.unpackZip(filePath)).slice(2)
        
        zipToGet.forEach(async (file) => {
            const split_file_contents = file.content.split(divikey)
            const addToApp = await api.savePass(split_file_contents[0], file.content, divikey)
        })

        location.reload()
    }
}

async function newBook() {
    setZipName('')

    savesettings(document.getElementById('fonts').value, document.getElementById('palettes').value, '', document.getElementById('languages').value)

    const clear = await api.clearFiles()
    
    location.reload()
}

function setZipName(newName) {
    document.getElementById('zip_name_box').value = newName
}

window.onload = async () => {
    configure()
    await loadsettings()
    await loadfiles()
    await loadsettings()
    checkForSizeChange()
}