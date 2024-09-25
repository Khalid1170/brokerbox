import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Navbar from "@/Components/Navbar";
import Body from "@/Components/Body";
import Footer from "@/Components/Footer";


export default function Home() {
  return (
    <>
   <Navbar />
   <Body />
   <Footer />
   
    </>
  );
}
