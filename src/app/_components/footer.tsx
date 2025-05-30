'use client'

import Link from 'next/link'
import { StorwayLogo } from './icons/StorwayLogo'
import { useRouter, usePathname } from 'next/navigation'
import { translations } from '../lib/translations'
import { SupportedLanguages } from '../types/languageTypes'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
    const router = useRouter()
    const pathname = usePathname()
    const { language } = useLanguage()
    const { navigation, button, footer } =
        translations[language as SupportedLanguages]

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
        <footer className="bg-primary pt-16 py-8 text-white">
            <div className='container mx-auto'>
                <div className="pt-12 ps-6 pe-6"><hr></hr></div>
                <div className="pb-12 pt-12 grid grid-cols-1 gap-12 px-6 md:grid-cols-3">
                    {/* Column 1: Logo & Description */}
                    <div>
                        <div className="flex items-center justify-start gap-1">
                            <StorwayLogo width={160} />
                        </div>
                        <p className="mt-2 text-white text-justify">
                            {footer?.businessDescription}
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            {footer?.quickLinks}
                        </h3>
                        <ul className="mt-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-white hover:undehover:underline"
                                >
                                    {navigation?.home}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-white hover:undehover:underline"
                                >
                                    {button?.contactUs}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#about"
                                    className="text-white hover:undehover:underline"
                                    onClick={handleClickAbout}
                                >
                                    {navigation?.aboutUs}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            {footer?.info}
                        </h3>
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
                <div className="mt-6 pt-4 text-center text-sm text-white">
                    <p>
                        &copy; {new Date().getFullYear()} Storway.{' '}
                        {footer?.copyright}
                    </p>
                    <p>
                        <a href="#" className="hover:underline">
                            {footer?.privacyPolicy}
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
