export default function About() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image Placeholder */}
        <div className="relative w-full h-[500px] flex justify-center items-center">
          <div className="absolute w-[80%] h-[90%] bg-[#4B4EFC] shape-blob opacity-20"></div>
          <div className="absolute w-[75%] h-[85%] bg-slate-200 shape-blob-2 flex flex-col justify-center items-center text-slate-400 overflow-hidden shadow-xl">
             <span className="text-sm font-semibold">Image Placeholder (About Us)</span>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-[#ff4d85] font-bold uppercase tracking-wider text-sm mb-4">About Us</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
            Towards a Smart & <br/> Passionate Generation
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed text-lg">
            Padora provides a safe and nurturing environment where children can learn and grow while having fun and making new friends. It is an important stepping stone in a child's education and development, laying the foundation for future success.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              </div>
              <span className="text-slate-700 font-semibold">Promoting positive child development</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              </div>
              <span className="text-slate-700 font-semibold">Always updating the learning curriculum system</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              </div>
              <span className="text-slate-700 font-semibold">Accredited "A" since 2015</span>
            </li>
          </ul>

          <button className="bg-[#00cc66] hover:bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg">
            Read The Story
          </button>
        </div>

      </div>
    </section>
  );
}
