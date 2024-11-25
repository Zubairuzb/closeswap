import Image from "next/image";
import Head from 'next/head';
import styles from "./page.module.css";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Description from '../components/Description';
import FeatureSection from '../components/FeatureSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Close swap', // page title
};

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.page}>

          <Navbar />
          <Hero />
          <Description />
          <FeatureSection />
          <CallToAction />
          <Footer />
        </div>
      </main>
    </>
  );
}
