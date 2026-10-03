import Reveal from "./Reveal";

export default function VideoSection() {
  return (
    <section id="video" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-12">
          <p className="text-[#ff4d85] font-bold uppercase tracking-wider text-sm mb-2">BabyHouse-da Həyat</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
            Bağçamızı Canlı <span className="text-[#4B4EFC]">Kəşf Edin</span>
          </h2>
          <p className="text-slate-500 mt-4 text-base max-w-xl mx-auto">
            Uşaqlarımızın gündəlik həyatından bir baxış — sevinc, öyrənmə və dostluq.
          </p>
        </Reveal>

        {/* Image Placeholder */}
        <Reveal animation="reveal-scale" className="relative w-full rounded-[40px] overflow-hidden shadow-2xl bg-slate-100 border-4 border-dashed border-slate-300 aspect-video flex flex-col items-center justify-center text-slate-400 group cursor-pointer transition-colors hover:bg-slate-50 hover:border-[#ff4d85]">
          <svg className="w-20 h-20 mb-4 text-slate-300 group-hover:text-[#ff4d85] transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <span className="font-bold text-lg group-hover:text-[#ff4d85] transition-colors">Bura şəkil əlavə olunacaq</span>
        </Reveal>
      </div>
    </section>
  );
}
