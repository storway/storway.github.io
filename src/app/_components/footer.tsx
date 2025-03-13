'use client'

import Link from 'next/link'
import { StorwayLogo } from './icons/StorwayLogo'
import { useRouter, usePathname } from 'next/navigation'

const Footer = () => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClickAbout = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault()

        if (pathname === '/') {
            const aboutSection = document.getElementById('about')
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            // Navigate to home, then scroll after page loads
            router.push('/#about')
        }
    }
    return (
        <footer className="bg-white py-8 text-gray-800">
            <div className="container mx-auto grid grid-cols-1 gap-6 px-6 md:grid-cols-3">
                {/* Column 1: Logo & Description */}
                <div>
                    <div className="flex items-center justify-start gap-1">
                        <StorwayLogo width={40} height={35} />
                        <h2 className="text-xl font-bold">Storway</h2>
                    </div>
                    <p className="mt-2 text-gray-600">
                        Offer your clients the VIP shopping experience
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="mt-2">
                        <li>
                            <Link
                                href="/"
                                className="text-gray-600 hover:text-gray-900"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="text-gray-600 hover:text-gray-900"
                            >
                                Contact us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#about"
                                className="text-gray-600 hover:text-gray-900"
                                onClick={handleClickAbout}
                            >
                                About us
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* !!!!! Keep for future implementation !!!! */}
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
            <div className="mt-6 pt-4 text-center text-sm text-gray-600">
                <p>
                    &copy; {new Date().getFullYear()} Storway. All rights
                    reserved.
                </p>
                <p>
                    <a href="#" className="hover:underline">
                        Privacy Policy
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
