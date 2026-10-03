export default function Programs() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-bold uppercase tracking-wider text-sm mb-2">Our Classroom</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
            We are Ready to Provide <br className="hidden md:block" /> Good Education
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-4 shadow-xl border-b-8 border-[#ff4d85] hover:-translate-y-2 transition-transform duration-300">
            <div className="w-full h-64 bg-slate-200 rounded-2xl mb-6 flex justify-center items-center text-slate-400">
              <span className="text-sm font-semibold">Image Placeholder (Daycare)</span>
            </div>
            <div className="text-center px-4 pb-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 bg-[#ff4d85] text-white py-2 rounded-xl inline-block w-full">Daycare</h3>
              <button className="text-slate-600 font-bold hover:text-[#ff4d85] transition-colors">Read More</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-4 shadow-xl border-b-8 border-[#00cc66] hover:-translate-y-2 transition-transform duration-300">
            <div className="w-full h-64 bg-slate-200 rounded-2xl mb-6 flex justify-center items-center text-slate-400">
              <span className="text-sm font-semibold">Image Placeholder (Playgroup)</span>
            </div>
            <div className="text-center px-4 pb-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 bg-[#00cc66] text-white py-2 rounded-xl inline-block w-full">Playgroup</h3>
              <button className="text-slate-600 font-bold hover:text-[#00cc66] transition-colors">Read More</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-4 shadow-xl border-b-8 border-[#ffcc00] hover:-translate-y-2 transition-transform duration-300">
            <div className="w-full h-64 bg-slate-200 rounded-2xl mb-6 flex justify-center items-center text-slate-400">
              <span className="text-sm font-semibold">Image Placeholder (Kindergarten)</span>
            </div>
            <div className="text-center px-4 pb-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 bg-[#ffcc00] text-white py-2 rounded-xl inline-block w-full">Kindergarten</h3>
              <button className="text-slate-600 font-bold hover:text-[#ffcc00] transition-colors">Read More</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
