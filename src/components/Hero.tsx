export default function Hero() {
  return (
    <section className="relative w-full bg-[#4B4EFC] pt-32 pb-20 px-4 md:px-8 overflow-hidden min-h-[800px] flex items-center">
      {/* Background shapes (optional, mimicking Framer) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
         <div className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Welcome to <br /> Padora School
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
            We place a strong emphasis on games that seamlessly blend entertainment and education, ensuring a delightful and enriching experience for your child.
          </p>
          <button className="bg-green-400 hover:bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg">
            Learn More
          </button>
        </div>

        {/* Image Placeholder */}
        <div className="relative w-full h-[500px] flex justify-center items-center">
          {/* Organic Shape Background */}
          <div className="absolute w-[90%] h-[90%] bg-[#ffcc00] shape-blob animate-[spin_20s_linear_infinite] opacity-90"></div>
          {/* Inner Image Placeholder */}
          <div className="absolute w-[85%] h-[85%] bg-slate-200 shape-blob-2 flex flex-col justify-center items-center text-slate-400 overflow-hidden shadow-2xl">
             <span className="text-sm font-semibold">Image Placeholder (Hero)</span>
             <span className="text-xs mt-2 text-center px-4">Size: ~600x600px <br/> Transparent PNG or shaped image</span>
          </div>
        </div>

      </div>
      
      {/* Bottom curved separator (simplified) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#f8fafc"></path>
        </svg>
      </div>
    </section>
  );
}
