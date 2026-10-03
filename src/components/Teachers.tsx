import Image from "next/image";
import Reveal from "./Reveal";

export default function Teachers() {
  const team = [
    {
      role: "Baş Müəllim",
      color: "#4B4EFC",
      image: "/Bash.jpeg",
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
      image: "/DayeX.jpeg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-[#00cc66] font-bold uppercase tracking-wider text-sm mb-2">Komandamız</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
            Peşəkar və <span className="text-[#4B4EFC]">Sevgi Dolu Komanda</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-base">
            Uşaqlarımıza ən yaxşı qayğını göstərmək üçün sertifikatlı mütəxəssislərdən ibarət komandamız.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <Reveal key={i} delay={i * 100} animation="reveal-scale"
              className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-slate-100 group"
            >
              <div className="relative w-full h-56 md:h-72">
                <Image
                  src={member.image}
                  alt={member.role}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div 
                  className="absolute bottom-0 left-0 w-full h-2"
                  style={{ backgroundColor: member.color }}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-extrabold text-slate-800">{member.role}</h3>
                <p className="text-slate-400 text-sm mt-1">BabyHouse Uşaq Bağçası</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
