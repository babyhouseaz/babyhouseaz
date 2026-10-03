import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function DerneklerPage() {
  const allClubs = [
    { title: "Şahmat", desc: "Məntiqi düşüncəni, strateji planlamanı və diqqəti inkişaf etdirən əyləncəli şahmat dərsləri.", image: "/Sahmat.jpeg", color: "#4B4EFC" },
    { title: "Məntiq", desc: "Zəkanın inkişafı və analitik düşüncə bacarıqlarını gücləndirən xüsusi məntiq oyunları.", image: "/About1.jpeg", color: "#ff4d85" },
    { title: "Musiqi", desc: "Uşaqların ritm və musiqi duyğusunu kəşf etdiyi maraqlı vokal və nəfəs məşğələləri.", image: "/Daye.jpeg", color: "#00cc66" },
    { title: "İncəsənət (Rəsm və Yapma)", desc: "Rəsm və yapma ilə uşaqların yaradıcılıq potensialını ortaya çıxaran dərnək.", image: "/Resim.jpeg", color: "#f59e0b" },
    { title: "Xarici dil dərsləri", desc: "Erkən yaşdan sərbəst danışıq və anlama vərdişləri aşılayan əyləncəli dil dərsləri.", image: "/English.jpeg", color: "#8b5cf6" },
    { title: "Rəqs", desc: "Fiziki inkişafı dəstəkləyən, ritmik və milli rəqslərin öyrədildiyi enerjili dərslər.", image: "/About2.jpeg", color: "#ec4899" },
    { title: "Bədii gimnastika", desc: "Uşaqların fiziki sağlamlığı və çevikliyi üçün gimnastika məşqləri.", image: "/Photo5.jpeg", color: "#06b6d4" },
  ];

  return (
    <main className="bg-slate-50 min-h-screen flex flex-col">
      <Navbar />

      <section className="relative w-full pt-40 pb-20 px-4 md:px-8 bg-[#4B4EFC] overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <Reveal animation="reveal">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Bütün Dərnəklərimiz
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Övladlarınızın xüsusi istedadlarını kəşf etməsi və inkişaf etdirməsi üçün zəngin dərnək proqramlarımız.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allClubs.map((c, i) => (
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
