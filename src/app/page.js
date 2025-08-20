import Hero from "./components/Hero"
import Contact from "./components/Contact";
import Services from "./components/Services";
import Whatsapp from "./components/FloatingWhatsappWrapper";
import Blog from "./components/Blog";
import Product from "./components/Product";

export default function Home() {
  return (
    <>
    <Whatsapp/>
    <Hero/>
    <Product/>
    <Services/>
    <Contact/>
    <Blog/>

  
    </>
  );
}
