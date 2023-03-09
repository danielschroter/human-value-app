"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { useState } from "react";
import Hero from "./components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [bio, setBio] = useState("");
  return (
    <main>
      <Hero />
    </main>
  );
}
