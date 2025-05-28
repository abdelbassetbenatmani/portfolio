import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}
