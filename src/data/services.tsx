import React from "react";

export interface Service {
  slug: string;
  title: string;
  desc: string;
  longDesc: string;
  color: string;
  icon: React.ReactNode;
  image: string;
}

export const servicesData: Service[] = [
  {
    slug: "saglam-qidalanma",
    title: "Sağlam Qidalanma",
    desc: "Gündə 5 dəfə təzə və sağlam məhsullardan ibarət qidalanma proqramı.",
    longDesc: "Bağçamızda uşaqların fiziki inkişafı üçün sağlam və balanslı qidalanmaya xüsusi önəm verilir. Qida rasionumuz peşəkar diyetoloqlar tərəfindən tərtib olunur və gündə 5 dəfə (səhər yeməyi, 2-ci səhər yeməyi, nahar, günorta ərzağı, şam yeməyi) olaraq uşaqlara təqdim edilir. Bütün qidalar təzə, ekoloji təmiz və orqanik məhsullardan hazırlanır. Uşaqların günlük ehtiyacı olan vitamin və mineralları alması üçün meyvə-tərəvəz və zülal ehtiyatlarına diqqət yetirilir.",
    color: "#00cc66",
    image: "https://i.ibb.co/dJpJqYTD/food.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13l-1-4m5 4v6m4-6v6" />
      </svg>
    ),
  },
  {
    slug: "xarici-dil-dersleri",
    title: "Xarici Dil Dərsləri",
    desc: "Erkən yaşlardan etibarən xarici dil biliklərinin əsaslarının qoyulması.",
    longDesc: "Erkən yaşlarda uşaqların dil öyrənmə qabiliyyəti ən yüksək səviyyədə olur. Buna görə də bağçamızda xarici dil dərsləri xüsusi interaktiv metodlarla, oyunlar, mahnılar və rəngarəng əyani vəsaitlər vasitəsilə tədris olunur. Dərslərimiz həm rus, həm də ingilis dilləri üzrə həyata keçirilir ki, uşaqlar kiçik yaşlarından qlobal dünyaya adaptasiya ola bilsinlər. Müəllimlərimiz uşaqlara dili əzbərlətməkdən daha çox, onu yaşayaraq öyrənməyi təşviq edirlər.",
    color: "#4B4EFC",
    image: "https://i.ibb.co/xSVmWzwr/lang.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
  {
    slug: "sahmat-ve-mentiq",
    title: "Şahmat və Məntiq",
    desc: "Strateji şahmat dərsləri və məntiq oyunları ilə analitik düşüncənin inkişafı.",
    longDesc: "Şahmat və məntiq dərslərimiz uşaqların erkən yaşdan analitik və tənqidi düşünmə qabiliyyətlərini inkişaf etdirmək üçün dizayn edilmişdir. Dərslər əyləncəli məntiq oyunları, tapmacalar və təməl şahmat strategiyaları ətrafında qurulur. Uşaqlar səbəb-nəticə əlaqəsi qurmağı, alternativ həll yolları tapmağı və diqqətlərini bir nöqtəyə cəmləməyi öyrənirlər. Bu cür fəaliyyətlər gələcəkdə həm riyazi təfəkkürün inkişafına, həm də liderlik xüsusiyyətlərinin formalaşmasına güclü zəmin yaradır.",
    color: "#ffcc00",
    image: "https://i.ibb.co/tP3XT4Rx/chess.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="2" width="8" height="8" rx="1" /><rect x="14" y="2" width="8" height="8" rx="1" /><rect x="2" y="14" width="8" height="8" rx="1" /><rect x="14" y="14" width="8" height="8" rx="1" />
      </svg>
    ),
  },
  {
    slug: "incesenet-ve-yaradiciliq",
    title: "İncəsənət və Yaradıcılıq",
    desc: "Rəqs, musiqi dərsləri və yaradıcı rəsm dərnəyi ilə daxili dünyalarını ifadə.",
    longDesc: "Yaradıcılıq, uşağın öz daxili dünyasını kəşf etməsi və ifadə etməsi üçün ən gözəl vasitədir. Bağçamızda fəaliyyət göstərən incəsənət və rəsm dərnəkləri, eləcə də musiqi və rəqs dərsləri uşaqların estetik zövqünü, motorika bacarıqlarını və özgüvənlərini artırır. Uşaqlar rənglərlə oynamağı, müxtəlif alətlərlə işləməyi, komanda halında ritmlə hərəkət etməyi öyrənir və hər biri öz unikal istedadını ortaya çıxarır.",
    color: "#ff4d85",
    image: "https://i.ibb.co/VYRDGr8G/art.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    slug: "psixoloji-destek",
    title: "Psixoloji Dəstək",
    desc: "Peşəkar loqoped, defektoloq və psixoloq xidməti. Xüsusi ehtiyaclı uşaqlar üçün fərdi korreksiya.",
    longDesc: "Uşaqların sadəcə fiziki və əqli deyil, həm də emosional və psixoloji sağlamlığı bizim üçün çox önəmlidir. Bağçamızda daim peşəkar uşaq psixoloqu, loqoped və defektoloq fəaliyyət göstərir. İstər danışıq ləngiməsi, istər davranış fərqlilikləri, istərsə də adaptasiya prosesində çətinlik çəkən uşaqlar üçün fərdi korreksiya proqramları tətbiq olunur. Valideynlərlə davamlı olaraq hesabatlar paylaşılır və məsləhətləşmələr aparılır.",
    color: "#4B4EFC",
    image: "https://i.ibb.co/QFB6Rs1G/psy.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    slug: "daye-xidmeti",
    title: "Dayə Xidməti",
    desc: "İş saatlarından kənar, həftəsonları saatlıq və günlük peşəkar dayə xidməti.",
    longDesc: "Müasir dünyada işləyən valideynlərin zaman məhdudiyyətini nəzərə alaraq xüsusi dayə xidmətimizi təklif edirik. Standard bağça saatlarından (08:00 - 19:00) kənar, həmçinin həftəsonları və ya hər hansı təcili işiniz çıxdıqda saatlıq/günlük dayə xidmətindən yararlana bilərsiniz. Uşaqlarınız eyni güvənli, kameralı mühitdə, tanıdıqları və öyrəşdikləri peşəkar pedaqoqların və dayələrin nəzarəti altında vaxtlarını səmərəli keçirəcəklər.",
    color: "#00cc66",
    image: "https://i.ibb.co/1fw9Ch3J/nanny.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    slug: "bagca-servisi",
    title: "Bağça Servisi",
    desc: "Uşaqların bağçaya təhlükəsiz gediş-gəlişini təmin edən xüsusi nəqliyyat xidməti.",
    longDesc: "Uşaqların yolda keçirdikləri vaxtın həm təhlükəsiz, həm də komfortlu olması bizim üçün prioritetdir. Bağçamız valideynlərin yükünü yüngülləşdirmək məqsədilə xüsusi nəqliyyat (servis) xidməti təklif edir. Servis xidmətimiz xüsusi oturacaqlarla təchiz edilmiş, texniki cəhətdən tam saz olan nəqliyyat vasitələri və təcrübəli, məsuliyyətli sürücülər tərəfindən idarə olunur. Övladınız qapınızdan təhvil alınır və yenidən qapınıza sağ-salamat təhvil verilir.",
    color: "#ffcc00",
    image: "https://i.ibb.co/PGgQgsTD/bus.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    slug: "24-7-kamera",
    title: "24/7 Kamera Müşahidəsi",
    desc: "Bağçamız gecə-gündüz kamera müşahidəsi altındadır. Siz rahatlıqla öz işlərinizlə məşğul olun.",
    longDesc: "Valideynlərin övladlarını bizə əmanət edərkən mütləq rahatlıq hiss etmələri üçün bağçamız daxildə və xaricdə yüksək keyfiyyətli kamera sistemləri ilə təchiz olunub. Bütün otaqlar, oyun zalları, yeməkxana və həyətyanı sahə 24/7 rejimində qeydə alınır. Valideynlər xüsusi qapalı tətbiq vasitəsilə gün ərzində öz övladlarını canlı olaraq izləyə bilirlər. Bu, şeffaflığı və qarşılıqlı etimadı təmin edən əsas meyarlarımızdan biridir.",
    color: "#ff4d85",
    image: "https://i.ibb.co/HD8bvHR1/cam.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.882V15.118a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
  },
];
