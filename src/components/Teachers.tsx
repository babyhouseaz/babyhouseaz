import Image from "next/image";
import Reveal from "./Reveal";

export default function Teachers() {
  const team = [
    {
      role: "Baş Müəllim",
      color: "#4B4EFC",
      image: "",
    },
    {
      role: "Loqoped",
      color: "#ff4d85",
      image: "/Loqoped.jpeg",
    },
    {
      role: "Uşaq Psixoloqu",
      color: "#00cc66",
      image: "/Psxiloq.jpeg",
    },
    {
      role: "Dayə",
      color: "#ffcc00",
      image: "",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-[#00cc66] font-bold uppercase tracking-wider text-sm mb-2">Komandamız</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
            Peşəkar Komanda
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <Reveal key={i} delay={i * 100} animation="reveal-scale"
              className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-slate-100 group"
            >
              <div className="relative w-full h-56 md:h-72 bg-slate-100 flex items-center justify-center">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.role}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <svg className="w-20 h-20 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                )}
                <div 
                  className="absolute bottom-0 left-0 w-full h-2"
                  style={{ backgroundColor: member.color }}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-extrabold text-slate-800">{member.role}</h3>
                <p className="text-slate-400 text-sm mt-1">Baby House Uşaq Bağçası</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
