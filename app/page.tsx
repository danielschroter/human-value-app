import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import styles from "./page.module.css";
import Hero from "./components/Hero";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={`${poppins.className}`}>
      <Hero />
    </main>
  );
}
