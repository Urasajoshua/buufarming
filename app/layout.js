"use client"
import { Inter   } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {

  useEffect(()=>{
  
    Aos.init(
      {
        duration:2000
      }
    )
  },[])
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
