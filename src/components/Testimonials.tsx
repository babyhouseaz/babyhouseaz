export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-[#ff4d85] rounded-[60px] mx-4 md:mx-8 my-10 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-white font-bold uppercase tracking-wider text-sm mb-2">Testimonial</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            What "Parents" Say <br className="hidden md:block" /> About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <h4 className="text-xl font-bold text-slate-800 mb-2">Kurniawan</h4>
            <div className="w-16 h-16 bg-slate-200 rounded-full mb-4 flex items-center justify-center text-xs text-slate-400 overflow-hidden">Img</div>
            <p className="text-slate-600 text-sm italic">
              "My child's motor intelligence has increased because my child is extra curricular at Padora school."
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <h4 className="text-xl font-bold text-slate-800 mb-2">Rosalina</h4>
            <div className="w-16 h-16 bg-slate-200 rounded-full mb-4 flex items-center justify-center text-xs text-slate-400 overflow-hidden">Img</div>
            <p className="text-slate-600 text-sm italic">
              "I am very happy that my child can clean his own bedroom now, is more independent and responsible."
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <h4 className="text-xl font-bold text-slate-800 mb-2">Maradhita</h4>
            <div className="w-16 h-16 bg-slate-200 rounded-full mb-4 flex items-center justify-center text-xs text-slate-400 overflow-hidden">Img</div>
            <p className="text-slate-600 text-sm italic">
              "Since my son went to school in Padora, my son was able to discover his hidden talents."
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <h4 className="text-xl font-bold text-slate-800 mb-2">Iskandar</h4>
            <div className="w-16 h-16 bg-slate-200 rounded-full mb-4 flex items-center justify-center text-xs text-slate-400 overflow-hidden">Img</div>
            <p className="text-slate-600 text-sm italic">
              "My child's motor intelligence has increased because my child is extra curricular at Padora school."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
