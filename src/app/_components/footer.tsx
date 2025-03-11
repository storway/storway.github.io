import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import { StorwayLogo } from "./icons/StorwayLogo";

export function Footer() {
  return (
    <footer className="w-full flex flex-col justify-between items-center relative bg-gradient-to-t from-primary to-white border-t border-neutral-200 dark:bg-slate-800 mt-32 pb-6">
      <div className="py-12 flex flex-col sm:flex-row gap-10 items-center">
        <div className="flex gap-2 items-center">
          <StorwayLogo />
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left  lg:pr-4 lg:w-1/2">
            Storway
          </h3>
        </div>
        <div className="cursor-pointer bg-black px-6 py-2 rounded-lg">
          <p className="text-xl text-white ">Contact us</p>
        </div>
      </div>
      <div className="text-xs">© 2025 Storway.com</div>
    </footer>
  );
}

export default Footer;
