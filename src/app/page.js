
import Hero from "./components/Hero"
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Whatsapp from "./components/FloatingWhatsappWrapper";

export default function Home() {
  return (
    <>
    <Whatsapp/>
    <Hero/>
    <Services/>
    <Contact/>

  
    </>
  );
}
