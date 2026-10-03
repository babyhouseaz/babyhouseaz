import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import About from "@/components/About";
import VideoSection from "@/components/VideoSection";
import Stats from "@/components/Stats";
import Teachers from "@/components/Teachers";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Programs />
      <About />
      <Stats />
      <Teachers />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
