import Reveal from "./Reveal";

export default function ExtraServices() {
  const services = [
    { title: "Psixoloji dəstək", desc: "Uşaqların bağçaya və məktəbə adaptasiyası, imtahan həyəcanının idarə olunması, inkişaf dinamikasının izlənməsi.", color: "#4B4EFC", icon: "🧠" },
    { title: "Elektron sınaqlar", desc: "Məktəbə qəbul üçün müntəzəm onlayn testləşdirmə və imtahana hazırlıq mərkəzi.", color: "#ff4d85", icon: "💻" },
    { title: "Loqoped xidməti", desc: "Nitq qüsurlarının erkən aşkarlanması və aradan qaldırılması.", color: "#00cc66", icon: "🗣️" },
    { title: "Qidalanma və Tibbi nəzarət", desc: "Sağlam rasion və gündəlik fiziki yoxlanış.", color: "#f59e0b", icon: "🍎" },
    { title: "Təhlükəsizlik", desc: "24/7 kamera nəzarəti və mühafizə xidməti.", color: "#8b5cf6", icon: "🛡️" },
  ];

  return (
    <section id="xidmetler" className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-[#00cc66] font-bold uppercase tracking-wider text-sm mb-2">Əlavə Xidmətlər</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800">
            Tədrisi Dəstəkləyən Xidmətlərimiz
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 100} animation="reveal-scale" className="h-full">
              <div className="bg-slate-50 rounded-3xl p-8 border-t-4 shadow-sm hover:shadow-xl transition-shadow h-full flex flex-col" style={{ borderColor: s.color }}>
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-extrabold text-slate-800 mb-3">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
