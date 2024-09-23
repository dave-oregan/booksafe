const letter_list = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'SS', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Ё', 'Є', 'Ж', 'З', 'И', 'Й', 'І', 'Ї', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я',
    'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'ך', 'כ', 'ל', 'ם', 'מ', 'ן', 'נ', 'ס', 'ע', 'ף', 'פ', 'ץ', 'צ', 'ק', 'ר', 'ש', 'ת',
    'ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي',
    'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए', 'ऐ', 'ओ', 'औ', 'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह', 'ळ', 'क्ष', 'ज्ञ',
    'অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'ঋ', 'এ', 'ঐ', 'ও', 'ঔ', 'ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ', 'ছ', 'জ', 'ঝ', 'ঞ', 'ট', 'ঠ', 'ড', 'ঢ', 'ণ', 'ত', 'থ', 'দ', 'ধ', 'ন', 'প', 'ফ', 'ব', 'ভ', 'ম', 'য', 'র', 'ল', 'শ', 'ষ', 'স', 'হ',
    '-'
]

const language_list = [
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
            "הספר שלך", "נשמר לתיקיית הייצוא!",
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
            "تواصل مع المطور على <a class=abtlink onclick='website(`https://daveoregan.com/contact`)'>daveoregan.com/contact</a>",
            "موقع المطور: <a class=abtlink onclick='website(`https://daveoregan.com`)'>daveoregan.com</a>",
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
            "আপনার বই", "এক্সপোর্ট ফোল্ডারে সংরক্ষণ করা হয়েছে!",
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
            "<a class=abtlink onclick='website(`https://daveoregan.com/contact`)'>daveoregan.com/contact</a>-এ ডেভেলপারের সাথে যোগাযোগ করুন",
            "বিকাশকারী ওয়েবসাইট: <a class=abtlink onclick='website(`https://daveoregan.com`)'>daveoregan.com</a>",
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
            "Your book", "has been saved to the exports folder!",
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
            "Reach out to the developer at <a class=abtlink onclick='website(`https://daveoregan.com/contact`)'>daveoregan.com/contact</a>",
            "Developer Website: <a class=abtlink onclick='website(`https://daveoregan.com`)'>daveoregan.com</a>",
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
            "Votre livre", "a été enregistré dans le dossier des exports!",
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
            "Contactez le développeur à l'adresse <a class=abtlink onclick='website(`https://daveoregan.com/contact`)'>daveoregan.com/contact</a>",
            "Site Web du Développeur: <a class=abtlink onclick='website(`https://daveoregan.com`)'>daveoregan.com</a>",
            "Droits D'auteur © 2024 David Abhishek O'Regan - Tous Droits Réservés."
        ]
    },
    {
        name: "German",
        title: "BookSafe: Passwortbuch",
        number: 4,
        transform_limit: {
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
            "Ihr Buch", "wurde in den Exportordner gespeichert!",
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
            "Kontaktieren Sie den Entwickler unter <a class=abtlink onclick='website(`https://daveoregan.com/contact`)'>daveoregan.com/contact</a>",
            "Entwickler-Website: <a class=abtlink onclick='website(`https://daveoregan.com`)'>daveoregan.com</a>",
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
            "הספר שלך", "נשמר בתיקיית הייצוא!",
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
            "צור קשר עם המפתח בכתובת <a class=abtlink onclick='website(`https://daveoregan.com/contact`)'>daveoregan.com/contact</a>",
            "אתר מפתחים: <a class=abtlink onclick='website(`https://daveoregan.com`)'>daveoregan.com</a>",
            "זכויות יוצרים © 2024 דיוויד אבישק או'רגן - כל הזכויות שמורות."
        ]
    },
    {
        name: "Hindi",
        title: "बुकसेफ: पासवर्ड किताब",
        number: 6,
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
            "आपकी किताब", "को निर्यात फोल्डर में सहेज लिया गया है!",
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
            "<a class=abtlink onclick='website(`https://daveoregan.com/contact`)'>daveoregan.com/contact</a> पर डेवलपर से संपर्क करें",
            "डेवलपर का वेबसाइट: <a class=abtlink onclick='website(`https://daveoregan.com`)'>daveoregan.com</a>",
            "कॉपीराइट © 2024 डेविड अभिषेक ओ'रेगन - सभी अधिकार सुरक्षित हैं।"
        ]
    },
    {
        name: "Italian",
        title: "BookSafe: Libro delle Password",
        number: 7,
        transform_limit: {
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
            "Il tuo libro", "è stato salvato nella cartella di esportazione!",
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
            "Contatta lo sviluppatore all'indirizzo <a class=abtlink onclick='website(`https://daveoregan.com/contact`)'>daveoregan.com/contact</a>",
            "Sito web dello sviluppatore: <a class=abtlink onclick='website(`https://daveoregan.com`)'>daveoregan.com</a>",
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
            "Seu livro", "foi salvo na pasta de exportação!",
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
            "Entre em contato com o desenvolvedor em <a class=abtlink onclick='website(`https://daveoregan.com/contact`)'>daveoregan.com/contact</a>",
            "Website do Desenvolvedor: <a class=abtlink onclick='website(`https://daveoregan.com`)'>daveoregan.com</a>",
            "Direitos Autorais © 2024 David Abhishek O'Regan - Todos os Direitos Reservados."
        ]
    },
    {
        name: "Russian",
        title: "БукСейф: Парольная Книга",
        number: 9,
        transform_limit: {
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
            new: "НОВЫЙ", set: "НАСТРОЙКИ", abt: "O", smt: "ОТПРАВИТЬ", rst: "СБРОСИТЬ", ccl: "OTMEHA",
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
            "Ваша книга", "была сохранена в папке экспорта!",
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
            "Свяжитесь с разработчиком по адресу <a class=abtlink onclick='website(`https://daveoregan.com/contact`)'>daveoregan.com/contact</a>",
            "Веб-сайт разработчика: <a class=abtlink onclick='website(`https://daveoregan.com`)'>daveoregan.com</a>",
            "Авторское Право © 2024 Дэвид Абхишек О'Риган - Все Права Защищены."
        ]
    },
    {
        name: "Spanish",
        title: "BookSafe: Libro Contraseña",
        number: 10,
        transform_limit: {
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
            "¡Tu libro", "se ha guardado en la carpeta de exportaciones!",
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
            "Comuníquese con el desarrollador en <a class=abtlink onclick='website(`https://daveoregan.com/contact`)'>daveoregan.com/contact</a>",
            "Sitio Web del Desarrollador: <a class=abtlink onclick='website(`https://daveoregan.com`)'>daveoregan.com</a>",
            "Derecho de Autor © 2024 David Abhishek O'Regan - Todos los Derechos Reservados."
        ]
    },
    {
        name: "Ukrainian",
        title: "БукСейф: Парольна Книга",
        number: 11,
        transform_limit: {
            courier: 759,
            garamond: 739,
            georgia: 818,
            helvetica: 768,
            tahoma: 773,
            roman: 742,
            trebuchet: 733
        },
        setting: [
            "Назва Книги", "Мови", "Шрифти", "Палітри"
        ],
        section: {
            nac: "Новий Акаунт", set: "Налаштування", abt: "Про Програму", edt: "Редагувати Акаунт", dlt: "Видалити Акаунт",
            cnb: "Створити Нову Книгу", isb: "Імпортувати Збережену Книгу", inb: "Імпортувати Нову Книгу", exb: "Експортувати Книгу"
        },
        buttons: {
            new: "НОВЕ", set: "НАЛАШТУВАННЯ", abt: "ПРО", smt: "ВІДПРАВИТИ", rst: "РЕСЕТ", ccl: "СКАСУВАТИ",
            opn: "ВІДКРИТИ", fdr: "ПАПКА", imp: "ІМПОРТ", exp: "ЕКСПОРТ", cls: "ЗАКРИТИ", cfm: "ПІДТВЕРДИТИ",
            rtn: "ПОВЕРНУТИ", iao: "ІМПОРТ І ВІДКРИТИ", dlt: "ВИДАЛИТИ", sav: "ЗБЕРЕГТИ"
        },
        headers: {
            web: "Веб-сайт", usn: "Ім'я Користувача", pwd: "Пароль", pin: "ПІН", eml: "Ел пошта", phn: "Мобільник", det: "Деталі"
        },
        colours: {
            blue: "Синій", grey: "Сірий", purple: "Фіолетовий", red: "Червоний"
        },
        description: [
            "При створенні нової книги ви втратите всі паролі, які не були експортовані.",
            "Ви бажаєте негайно відкрити нову книгу? Якщо так, будь-які паролі в поточній книзі, які ще не були експортовані, будуть втрачені. Вибір імпорту без відкриття розмістить zip-файл у папці експорту цього додатка для зручного доступу пізніше.",
            "Пам'ятайте: відкриття іншої збереженої книги без експорту цієї призведе до втрати незбережених паролів. З міркувань безпеки, будь ласка, експортуйте їх перед виконанням цієї дії!",
            "Будь ласка, підтвердьте, введучи 'ВИДАЛИТИ' нижче:",
            "Ваша книга", "була збережена у папці експорту!",
            "Виникла помилка під час експорту вашої книги:",
            "Виникла помилка під час імпорту вашої книги:"
        ],
        about: [
            "БукСейф - це додаток, призначений для того, щоб допомагати вам вести облік всіх ваших акаунтів найзручнішим і максимально невторгливим способом.",
            "Чи має БукСейф які-небудь мої дані?",
            "Ні, БукСейф не зберігає жодних ваших даних на серверах. Ваші дані зберігаються лише на вашому пристрої.",
            "Як я можу знайти свої експортовані паролі?",
            "Перейдіть до налаштувань, а потім натисніть кнопку 'ПАПКА'. Це відкриє папку експорту в вашому провіднику.",
            "Чи підтримується BookSafe на всіх пристроях?",
            "На жаль, через проблеми сумісності, наразі BookSafe не доступний для телефонів чи планшетів. Я (розробник) в даний момент працюю над портом для мобільних пристроїв.",
            "Більше питань?",
            "Зверніться до розробника за адресою <a class=abtlink onclick='website(`https://daveoregan.com/contact`)'>daveoregan.com/contact</a>",
            "Веб-сайт Розробника: <a class=abtlink onclick='website(`https://daveoregan.com`)'>daveoregan.com</a>",
            "Авторське право © 2024 Девід Абгішек О'Ріган - Всі права захищені."
        ]
    },
]