import Navbar from "@/components/Navbar";
import EducationDetails from "@/components/EducationDetails";
import ExtraServices from "@/components/ExtraServices";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import About from "@/components/About";
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
      <Stats />
      <EducationDetails />
      <Programs />
      <ExtraServices />
      <About />
      <Teachers />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
