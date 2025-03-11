import { CMS_NAME } from "@/lib/constants";
import Image from "next/image";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex items-start">
        <Image
          alt="storway logo"
          src={"/images/storway-logo.png"}
          width={300}
          height={125}
        />
        <h1 className="text-5xl md:text-8xl  tracking-tighter leading-tight md:pr-8">
          STORWAY
        </h1>
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Transform Every Shopper into a VIP.
        {/* <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and {CMS_NAME}. */}
      </h4>
    </section>
  );
}
