import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-slate-50 min-h-screen flex flex-col">
      <Navbar />

      <section className="relative w-full pt-40 pb-20 px-4 md:px-8 overflow-hidden bg-slate-900 flex-grow" style={{ backgroundColor: service.color }}>
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto w-full relative z-10 text-center text-white">
          <Reveal animation="reveal-scale">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-8 backdrop-blur text-white">
              <div className="w-10 h-10">
                {service.icon}
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={100} animation="reveal">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              {service.title}
            </h1>
          </Reveal>

          <Reveal delay={200} animation="reveal">
            <p className="text-xl md:text-2xl font-semibold text-white/90 mb-10 max-w-2xl mx-auto">
              {service.desc}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-4 flex-grow bg-white">
        <div className="max-w-3xl mx-auto">
          <Reveal delay={100}>
            <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 shadow-xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: service.color }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </span>
                Xidmət Haqqında Ətraflı Məlumat
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                {service.longDesc}
              </p>
              
              <div className="flex justify-center">
                <Link
                  href="/elaqe"
                  className="inline-block text-white px-8 py-4 rounded-full font-extrabold text-base transition-all hover:scale-105 shadow-lg"
                  style={{ backgroundColor: service.color }}
                >
                  Qeydiyyatdan Keç / Əlaqə
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
