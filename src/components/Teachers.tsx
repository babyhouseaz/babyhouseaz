import Reveal from "./Reveal";

export default function Teachers() {
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
          {[
            {
              role: "Müəllim", color: "#4B4EFC",
              icon: <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>,
            },
            {
              role: "Loqoped", color: "#ff4d85",
              icon: <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>,
            },
            {
              role: "Psixoloq", color: "#00cc66",
              icon: <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
            },
            {
              role: "Dayə", color: "#ffcc00",
              icon: <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>,
            },
          ].map((member, i) => (
            <Reveal key={i} delay={i * 100} animation="reveal-scale"
              className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-slate-100"
            >
              <div
                className="w-full h-40 flex flex-col items-center justify-center"
                style={{ backgroundColor: member.color + "15", borderBottom: `4px solid ${member.color}` }}
              >
                <div style={{ color: member.color }}>{member.icon}</div>
              </div>
              <div className="p-5 text-center">
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
