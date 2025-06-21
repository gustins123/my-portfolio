import Hero from "./components/Hero";
import PortfolioGallery from "./components/PortfolioGallery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <PortfolioGallery />
      <ContactForm />
      <Footer />
    </main>
  );
}