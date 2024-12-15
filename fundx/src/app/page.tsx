import Email from "./appComponents/Email";
import Features from "./appComponents/Features";
import Footer from "./appComponents/Footer";
import Header from "./appComponents/Header";
import Hero from "./appComponents/Hero";
import { Testimonials } from "./appComponents/Testimonials";

export default function Home() {

  const headerElements: string[] = ["Features", "Testimonials"];

  return (
    <div className="min-h-screen w-full bg-black " >
      <Header headerElements={headerElements} />
      <Hero />
      <Features />
      <Testimonials />
      <Email />
      <Footer />
    </div>
  );
}
