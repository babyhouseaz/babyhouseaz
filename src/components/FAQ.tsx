"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Bağçanın iş saatları nə zaman başlayır və bitir?",
    a: "Bağçamız hər gün saat 08:00-da açılır və 19:00-da bağlanır. Tam gün xidmət təklif edirik.",
  },
  {
    q: "Bağçada qidalanma necə təşkil olunur?",
    a: "Gündə 5 dəfə (səhər yeməyi, 2-ci səhər yeməyi, nahar, günorta ərzağı, şam yeməyi) təzə və sağlam məhsullardan ibarət qidalanma proqramı tətbiq edilir.",
  },
  {
    q: "Uşaqların təhlükəsizliyi necə təmin edilir?",
    a: "Bağçamız 24/7 kamera müşahidəsi altındadır. Bütün uşaqlar peşəkar mütəxəssislərin daimi nəzarəti altındadır.",
  },
  {
    q: "Xüsusi qayğıya ehtiyacı olan uşaqlar üçün xidmət varmı?",
    a: "Bəli. Bağçamızda peşəkar loqoped, defektoloq və psixoloq xidməti mövcuddur. Xüsusi ehtiyacı olan uşaqlar üçün fərdi inkişaf və korreksiya proqramı tətbiq edilir.",
  },
  {
    q: "2026–2027 tədris ili üçün qeydiyyat açıqdırmı?",
    a: "Xeyr. 2026–2027-ci tədris ili üçün dövlət dəstəyi ilə qəbul yerlərimiz dolmuşdur. Gələcək qeydiyyat dövrləri haqqında məlumat almaq üçün bizimlə əlaqə saxlayın.",
  },
  {
    q: "Servis xidməti mövcuddurmu?",
    a: "Bəli. Uşaqların bağçaya təhlükəsiz gediş-gəlişini təmin edən xüsusi nəqliyyat xidmətimiz mövcuddur.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#4B4EFC] font-bold uppercase tracking-wider text-sm mb-2">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
            Tez-Tez Verilən <span className="text-[#ff4d85]">Suallar</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-bold text-slate-800 hover:text-[#4B4EFC] transition-colors"
              >
                <span className="pr-4">{item.q}</span>
                <span
                  className={`text-2xl font-light shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-45 text-[#4B4EFC]" : "text-slate-400"
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-slate-600 leading-relaxed text-sm border-t border-slate-50 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
