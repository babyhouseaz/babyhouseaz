import Reveal from "./Reveal";
import Image from "next/image";

export default function ExtraServices() {
  const services = [
    {
      title: "Psixoloji və Loqoped Dəstəyi",
      desc: "Uşaqların bağçaya, cəmiyyətə və məktəbə psixoloji adaptasiyası tam diqqət mərkəzindədir. Həmçinin, peşəkar loqoped xidmətimiz vasitəsilə uşaqlarda yarana biləcək nitq qüsurları, tələffüz problemləri və kəkələmə kimi hallar erkən yaşda aşkarlanır və xüsusi terapiyalarla tam aradan qaldırılır.",
      color: "#4B4EFC",
      image: "/Psix.jpeg"
    },
    {
      title: "Elektron Sınaqlar və İmtahana Hazırlıq",
      desc: "Uşaqların biliklərini daim yoxlamaq və məktəbə hazırlamaq üçün xüsusi elektron imtahan mərkəzimiz fəaliyyət göstərir. Uşaqlar kiçik yaşlarından onlayn testlərlə işləyərək, həm rəqəmsal vərdişlərə yiyələnir, həm də gələcək məktəb qəbul imtahanlarına (1-ci sinif qəbulu) tam sərbəst şəkildə hazırlaşırlar.",
      color: "#ff4d85",
      image: ""
    },
    {
      title: "Qidalanma və Tibbi Nəzarət",
      desc: "Sağlam inkişaf üçün təbii və vitaminlə zəngin məhsullardan ibarət 5 dəfəlik qidalanma rasionu tətbiq edilir. Qida menyusu pediatrlar tərəfindən yaş qruplarına uyğun tərtib olunur. Hər gün bağçaya qəbul zamanı uşaqların ümumi fiziki vəziyyəti, hərarəti yoxlanılır və onlar gün ərzində tibbi personalın tam nəzarəti altında olurlar.",
      color: "#f59e0b",
      image: "/Qida.jpeg"
    },
    {
      title: "24/7 Təhlükəsizlik və Nəzarət",
      desc: "Övladlarınızın hər anının təhlükəsizliyinə zəmanət veririk. Bağçamız daxili otaqlarda və həyətyanı sahədə 24/7 rejimində çalışan HD kameralarla təchiz olunub. Ərazi xüsusi mühafizə xidməti tərəfindən qorunur, uşaqlar yalnız öz valideynlərinə (və ya əvvəlcədən təsdiqlənmiş şəxslərə) təhvil verilir. Valideynlər tam arxayın ola bilərlər.",
      color: "#00cc66",
      image: "/Security.jpeg"
    },
  ];

  return (
    <section id="xidmetler" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-[#00cc66] font-bold uppercase tracking-wider text-sm mb-2">Bağça Xidmətləri</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800">
            Tədrisi Dəstəkləyən Xidmətlərimiz
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 100} animation="reveal-scale" className="h-full">
              <div className="bg-slate-50 rounded-[40px] p-6 sm:p-8 border-t-4 shadow-md hover:shadow-2xl transition-all h-full flex flex-col group" style={{ borderColor: s.color }}>
                {s.image && (
                  <div className="relative w-full h-64 sm:h-80 mb-8 rounded-3xl overflow-hidden bg-slate-200">
                    <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                )}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4">{s.title}</h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed flex-grow">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
