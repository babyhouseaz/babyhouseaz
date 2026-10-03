export default function VideoSection() {
  return (
    <section id="video" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#ff4d85] font-bold uppercase tracking-wider text-sm mb-2">BabyHouse-da Həyat</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
            Bağçamızı Canlı <span className="text-[#4B4EFC]">Kəşf Edin</span>
          </h2>
          <p className="text-slate-500 mt-4 text-base max-w-xl mx-auto">
            Uşaqlarımızın gündəlik həyatından bir baxış — sevinc, öyrənmə və dostluq.
          </p>
        </div>

        {/* Video */}
        <div className="relative w-full rounded-[40px] overflow-hidden shadow-2xl bg-slate-900 aspect-video">
          <video
            src="/Video.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
