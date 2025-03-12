"use client";

import { HeroPost } from "@/app/_components/hero-post";
import { ContactForm } from "./_components/contactForm/ContactForm";
import { useRef } from "react";
import { Navbar } from "./_components/navbar/navbar";
import Footer from "./_components/footer";

export default function Index() {
  const topRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <div ref={topRef} />
      <Navbar scrollToContact={scrollToContact} scrollToTop={scrollToTop} />
      <HeroPost scrollToContact={scrollToContact} />
      {/* <div className="flex justify-center items-center bg-primary h-[1px] w-1/2 my-16 mx-auto" /> */}
      <ContactForm ref={contactFormRef} />
      <Footer scrollToTop={scrollToTop} scrollToContact={scrollToContact} />
    </main>
  );
}
