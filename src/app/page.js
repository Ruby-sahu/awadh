// import Image from "next/image";
import Header from "@/app/components/Header";
import Banner from "./components/Banner";
import Services from "./components/services/Services";
import Menu from "./components/menu/Menu";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  
  return (
   <>
   <Header />
   <Banner />
   <Services />
   <Menu />
   <ContactUs />
   <Gallery />
   <Footer />
   </>
  );
}
