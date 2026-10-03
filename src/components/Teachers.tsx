export default function Teachers() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00cc66] font-bold uppercase tracking-wider text-sm mb-2">Komandamız</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
            Peşəkar və <span className="text-[#4B4EFC]">Sevgi Dolu Komanda</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-base">
            Uşaqlarımıza ən yaxşı qayğını göstərmək üçün sertifikatlı mütəxəssislərdən ibarət komandamız.
          </p>
        </div>

        {/* Team roles placeholder grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { role: "Müəllim", icon: "👩‍🏫", color: "#4B4EFC" },
            { role: "Loqoped", icon: "🗣️", color: "#ff4d85" },
            { role: "Psixoloq", icon: "🧠", color: "#00cc66" },
            { role: "Dayə", icon: "👶", color: "#ffcc00" },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-slate-100"
            >
              {/* Photo placeholder */}
              <div
                className="w-full h-56 flex flex-col items-center justify-center gap-2"
                style={{ backgroundColor: member.color + "15", borderBottom: `4px solid ${member.color}` }}
              >
                <span className="text-6xl">{member.icon}</span>
                <span className="text-xs text-slate-400 font-medium">Foto əlavə ediləcək</span>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-extrabold text-slate-800">{member.role}</h3>
                <p className="text-slate-400 text-sm mt-1">BabyHouse Uşaq Bağçası</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
