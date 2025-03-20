'use client'

import { useState } from 'react'
import Link from 'next/link'
import { StorwayLogo } from '../icons/StorwayLogo'
import { CloseIcon } from '../icons/CloseIcon'
import { MenuIcon } from '../icons/MenuIcon'
import { ContactButton } from '../buttons/ContactButton'
import { useRouter, usePathname } from 'next/navigation'
import { useLanguage } from '@/app/contexts/LanguageContext'
import { SupportedLanguages } from '@/app/types/languageTypes'
import { LanguageChange } from './LanguageChange'
import { MobileMenu } from './MobileMenu'
import { translations } from '@/app/lib/translations'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [showLanguageChange, setShowLanguageChange] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    const { language, setLanguage } = useLanguage()

    const { navigation } = translations[language as SupportedLanguages]

    const handleClick = () => {
        setIsOpen(!isOpen)
        setShowLanguageChange(false)
    }

    const handleLanguageChange = (lang: SupportedLanguages) => {
        setLanguage(lang)
        setShowLanguageChange(false)
    }

    const handleClickAbout = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault()
        setIsOpen(false)

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
        <nav className="fixed z-10 flex h-20 w-full items-center justify-center bg-white px-6 text-gray-800 shadow-md">
            <div className="flex w-full items-center justify-between">
                <Link
                    className="flex items-center justify-center gap-2"
                    href="/"
                >
                    <StorwayLogo width={70} />
                    <h1 className="text-4xl font-semibold">Storway</h1>
                </Link>

                <div className="hidden space-x-6 text-xl md:flex">
                    <Link
                        href="/"
                        className="cursor-pointer hover:text-gray-400 hover:underline"
                    >
                        {navigation?.home}
                    </Link>
                    <Link
                        href="#about"
                        className="cursor-pointer hover:text-gray-400 hover:underline"
                        onClick={handleClickAbout}
                    >
                        {navigation?.aboutUs}
                    </Link>
                </div>
                <div className="flex gap-4">
                    <ContactButton hidden />
                    <LanguageChange />
                </div>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={handleClick}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>

            {isOpen && (
                <MobileMenu
                    showLanguageChange={showLanguageChange}
                    setShowLanguageChange={setShowLanguageChange}
                    handleLanguageChange={handleLanguageChange}
                    setIsOpen={setIsOpen}
                    handleClickAbout={handleClickAbout}
                />
            )}
        </nav>
    )
}
