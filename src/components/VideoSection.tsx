export default function VideoSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#4B4EFC] font-bold uppercase tracking-wider text-sm mb-2">Life at Padora</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
            See Our School in Action
          </h2>
        </div>

        {/* Video */}
        <div className="relative w-full rounded-[40px] overflow-hidden shadow-2xl bg-black aspect-video">
          <video
            src="/Video.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
