
import About from "./components/About/About";
import AboutUs from "./components/About/AboutU";
import ChooseUsU from "./components/ChooseUs/ChooseUsU";
import ContactForm from "./components/Contact/ContactU";
import Faqsection from "./components/Faq/Faqsection";
import Featured from "./components/Featured/Feature";
import HorizontalGallery from "./components/GalleryHome/galleryu";
import HeroU from "./components/Hero/HeroU";
import Package from "./components/Package/package";
import ServiceCards from "./components/ServicesCard/ServicesCardU";
import TestimonialsU from "./components/Testimonial/TestimonialU";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroU />
      {/* <AboutUs/> */}
      <About />

      <Featured />
      <ServiceCards />

      <Faqsection />
      <HorizontalGallery />
      <TestimonialsU />
      <Package />
      <ContactForm />

    </div>
  );
}
