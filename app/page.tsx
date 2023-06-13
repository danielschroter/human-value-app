import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={`${poppins.className} overflow-hidden bg-gray-900`}>
      <div className="relative mx-auto min-h-screen w-full max-w-6xl">
        <div className="absolute top-0 w-64 h-64 bg-indigo-400 rounded-full -left-4 filter blur-3xl opacity-20 sm:opacity-30 animate-blob"></div>
        <div className="absolute top-0 rounded-full w-72 h-72 bg-pink-300 -right-4 filter blur-3xl opacity-20 sm:opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute rounded-full w-72 h-72 bg-emerald-300 -bottom-8 left-20 filter blur-3xl opacity-20 sm:opacity-30 animate-blob animation-delay-4000"></div>
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
