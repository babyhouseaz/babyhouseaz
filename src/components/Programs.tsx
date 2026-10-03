import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Programs() {
  const clubs = [
    { title: "Şahmat", desc: "Məntiqi düşüncəni, strateji planlamanı və diqqəti inkişaf etdirən əyləncəli şahmat dərsləri.", image: "/Sahmat.jpeg", color: "#4B4EFC" },
    { title: "Məntiq", desc: "Zəkanın inkişafı və analitik düşüncə bacarıqlarını gücləndirən xüsusi məntiq oyunları.", image: "/About1.jpeg", color: "#ff4d85" },
    { title: "Musiqi", desc: "Uşaqların ritm və musiqi duyğusunu kəşf etdiyi maraqlı vokal və nəfəs məşğələləri.", image: "/Daye.jpeg", color: "#00cc66" },
    { title: "İncəsənət", desc: "Rəsm və yapma ilə uşaqların yaradıcılıq potensialını ortaya çıxaran dərnək.", image: "/Resim.jpeg", color: "#f59e0b" },
    { title: "Xarici Dil", desc: "Erkən yaşdan sərbəst danışıq və anlama vərdişləri aşılayan əyləncəli dil dərsləri.", image: "/English.jpeg", color: "#8b5cf6" },
    { title: "Rəqs", desc: "Fiziki inkişafı dəstəkləyən, ritmik və milli rəqslərin öyrədildiyi enerjili dərslər.", image: "/About2.jpeg", color: "#ec4899" },
  ];

  return (
    <section id="dernekler" className="py-20 px-4 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-[#ff4d85] font-bold uppercase tracking-wider text-sm mb-2">Maraq Və İstedad</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
            Dərnəklərimiz
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Uşaqların fərdi istedadlarını və motor bacarıqlarını inkişaf etdirən xüsusi dərnəklərimiz
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((c, i) => (
            <Reveal key={i} delay={i * 100} animation="reveal-scale" className="h-full">
              <div className="block h-full bg-white rounded-[30px] p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-b-4 flex flex-col" style={{ borderColor: c.color }}>
                <div className="relative w-full h-48 mb-5 rounded-2xl overflow-hidden bg-slate-100">
                  <Image src={c.image} alt={c.title} fill className="object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-800 mb-3">{c.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal animation="reveal-scale" className="mt-12 text-center">
          <Link href="/dernekler" className="inline-block bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-700 transition-colors shadow-lg hover:scale-105">
            Bütün Dərnəklərə Bax ↗
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
