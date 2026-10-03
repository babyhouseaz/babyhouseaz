import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  return (
    <main className="bg-slate-50 min-h-screen flex flex-col">
      <Navbar />

      <section className="relative w-full pt-40 pb-20 px-4 md:px-8 bg-[#4B4EFC] overflow-hidden flex-grow">
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal animation="reveal" className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Bizimlə Əlaqə
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Hər hansı bir sualınız varsa və ya qeydiyyatla bağlı məlumat almaq istəyirsinizsə, bizimlə aşağıdakı vasitələrlə əlaqə saxlaya bilərsiniz.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <Reveal delay={100} animation="reveal-left">
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl h-full">
                <h3 className="text-3xl font-extrabold text-slate-800 mb-8">Əlaqə Məlumatları</h3>
                
                <ul className="space-y-8">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center shrink-0 text-[#ff4d85]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold mb-1">Telefon</p>
                      <a href="tel:+994553776710" className="text-xl font-bold text-slate-800 hover:text-[#4B4EFC] transition-colors">+994 (55) 377 67 10</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-[#00cc66]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold mb-1">Ünvan</p>
                      <p className="text-lg font-bold text-slate-800">Cəfər Xəndan küçəsi 20 (və ya 24/2D), Bakı, Azərbaycan</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shrink-0 text-[#f59e0b]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold mb-1">İş Saatları</p>
                      <p className="text-lg font-bold text-slate-800">Hər gün: 08:00 - 19:00</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Map Placeholder */}
            <Reveal delay={200} animation="reveal-right">
              <div className="bg-slate-800 rounded-[40px] shadow-2xl h-[400px] md:h-full flex flex-col items-center justify-center border-4 border-dashed border-slate-600 group hover:border-[#ff4d85] transition-colors p-8 text-center cursor-pointer">
                <svg className="w-20 h-20 text-slate-600 mb-4 group-hover:text-[#ff4d85] transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-slate-400 group-hover:text-white transition-colors">Xəritə əlavə olunacaq</h3>
                <p className="text-slate-500 mt-2">Bura Google Maps və ya başqa bir xəritə pəncərəsi daxil edə bilərsiniz.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
