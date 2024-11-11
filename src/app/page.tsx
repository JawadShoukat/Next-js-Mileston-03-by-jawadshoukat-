import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MobNavbar from "./components/MobNavbar";
import NewProducts from "./components/NewProducts";
import Testimonail from "./components/Testimonail";
import './components/Footer.css'
import Contact from "./components/Contact";



export default function Home() {
  return (
    <main>
      <Hero />
      <NewProducts />
       <Testimonail />
       <MobNavbar />
       <Contact />
       <Footer />
      
      
    </main>
  )
}


