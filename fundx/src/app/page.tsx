import Image from "next/image";
import Header from "./appComponents/Header";
import Hero from "./appComponents/Hero";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black " >
      <Header />
      <Hero />
    </div>
  );
}
