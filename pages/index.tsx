import CTA from "@/components/CTA";
import localFont from "next/font/local";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import AboutUs from "@/components/About-us";
import OurServices from "@/components/OurServices";
import WhatWeDo from "@/components/WhatWeDo";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import SignUpForm from "@/components/SignUpForm";


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <WhatWeDo />
      <CTA />
      <SignUpForm />
      <Footer />
    </main>
  );
}
