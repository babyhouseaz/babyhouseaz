export default function Stats() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-500 mb-2">
               {/* Icon placeholder */}
               <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
            </div>
            <h4 className="text-xl font-bold text-slate-800">24 Hours Library</h4>
            <p className="text-slate-600 text-sm">We open the library for 24 hours with easy access for Padora school members or students.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-500 mb-2">
               <div className="w-6 h-6 bg-green-500 rounded-sm"></div>
            </div>
            <h4 className="text-xl font-bold text-slate-800">Safe Playground</h4>
            <p className="text-slate-600 text-sm">Learning and playing equipment the menu available in our canteen has an international quality standard.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-500 mb-2">
               <div className="w-6 h-6 bg-pink-500 rounded-sm"></div>
            </div>
            <h4 className="text-xl font-bold text-slate-800">Clean & Hygienic Canteen</h4>
            <p className="text-slate-600 text-sm">The menu available in our canteen has an international quality standard nutrition expert.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-500 mb-2">
               <div className="w-6 h-6 bg-yellow-500 rounded-sm"></div>
            </div>
            <h4 className="text-xl font-bold text-slate-800">Social & Fun</h4>
            <p className="text-slate-600 text-sm">We always provide space for children who want to interact with their friends.</p>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-[#ffcc00] rounded-[40px] p-12 flex flex-wrap justify-between items-center text-center gap-8 shadow-xl">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2">3</h2>
            <p className="text-slate-800 font-bold text-lg">Alumni</p>
          </div>
          <div className="flex-1 border-l-2 border-yellow-300">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2">37</h2>
            <p className="text-slate-800 font-bold text-lg">Current Students</p>
          </div>
          <div className="flex-1 border-l-2 border-yellow-300">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2">10</h2>
            <p className="text-slate-800 font-bold text-lg">Contributing Teachers</p>
          </div>
          <div className="flex-1 border-l-2 border-yellow-300">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2">9</h2>
            <p className="text-slate-800 font-bold text-lg">Community Impacted</p>
          </div>
        </div>

      </div>
    </section>
  );
}
