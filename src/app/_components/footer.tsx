import { StorwayLogo } from "./icons/StorwayLogo";

interface FooterProps {
  scrollToTop: () => void;
  scrollToContact: () => void;
}

const Footer = ({ scrollToTop, scrollToContact }: FooterProps) => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: Logo & Description */}
        <div>
          <div className="flex justify-start items-center gap-1">
            <StorwayLogo width={40} height={35} />
            <h2 className="text-xl font-bold">Storway</h2>
          </div>
          <p className="text-gray-600 mt-2">Turn your clients into VIPs.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2">
            <li onClick={scrollToTop}>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
            </li>
            {/* <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
            </li> */}
            <li onClick={scrollToContact}>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        {/* <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex mt-2 space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-2xl">
              <FaInstagram />
            </a>
          </div>
        </div> */}
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-400 mt-6 pt-4 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Storway. All rights reserved.</p>
        <p>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// import { StorwayLogo } from "./icons/StorwayLogo";

// interface FooterProps {
//   scrollToTop: () => void;
//   scrollToContact: () => void;
// }

// export function Footer({ scrollToTop, scrollToContact }: FooterProps) {
//   return (
//     <footer className=" w-full flex flex-col justify-between items-center relative bg-gray-200 dark:bg-slate-800 mt-32 pb-4 border-t-2 border-gray-100 shadow-lg">
//       <div className="pt-6 pb-2 flex flex-col gap-4 items-center">
//         <div className="flex gap-2 items-center">
//           <StorwayLogo height={50} width={70} />
//           <h3 className="text-4xl lg:text-[2.5rem] font-semibold tracking-tighter leading-tight text-center lg:text-left  lg:pr-4 lg:w-1/2">
//             Storway
//           </h3>
//         </div>

//         <div className="flex justify-center items-center gap-2">
//           <p
//             className="text-l text-nowrap underline cursor-pointer"
//             onClick={scrollToTop}
//           >
//             Back to top
//           </p>
//           <p
//             className="text-l text-nowrap underline cursor-pointer"
//             onClick={scrollToContact}
//           >
//             Contact us
//           </p>
//         </div>
//       </div>
//       <div className="text-xs ">© 2025 Storway.com</div>
//     </footer>
//   );
// }

// export default Footer;
