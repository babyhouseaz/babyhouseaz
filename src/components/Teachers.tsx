export default function Teachers() {
  const teachers = [
    { name: "Mary Angela", role: "English Teacher", color: "#4B4EFC" },
    { name: "John Doe", role: "Science Teacher", color: "#ff4d85" },
    { name: "Sarah Williams", role: "Art Teacher", color: "#00cc66" },
    { name: "Michael Brown", role: "Math Teacher", color: "#ffcc00" },
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#4B4EFC] font-bold uppercase tracking-wider text-sm mb-2">Our Teachers</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
            Competent & Professional <br className="hidden md:block" /> Teachers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
              {/* Image Placeholder */}
              <div
                className="w-full h-64 flex flex-col items-center justify-center text-white text-sm font-semibold gap-1"
                style={{ backgroundColor: teacher.color }}
              >
                <div className="w-24 h-24 rounded-full bg-white/30 flex items-center justify-center mb-2">
                  <span className="text-white text-3xl font-extrabold">{teacher.name[0]}</span>
                </div>
                <span className="text-xs text-white/70">Photo Placeholder</span>
              </div>
              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-extrabold text-slate-800">{teacher.name}</h3>
                <p className="text-slate-500 mt-1">{teacher.role}</p>
                {/* Social icons placeholder */}
                <div className="flex justify-center gap-3 mt-4">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white cursor-pointer transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56v14.91A4.54 4.54 0 0 1 19.46 24H4.54A4.54 4.54 0 0 1 0 19.47V4.54A4.54 4.54 0 0 1 4.54 0h14.92A4.54 4.54 0 0 1 24 4.56zM8 19V9H5v10zm-1.5-11.5A1.5 1.5 0 1 0 5 6a1.5 1.5 0 0 0 1.5 1.5zM19 19v-5.5c0-3.19-3.47-2.96-4 0V19h-3V9h3v1.77C16.07 8.43 19 8.28 19 13v6z"/></svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-pink-500 hover:text-white cursor-pointer transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
