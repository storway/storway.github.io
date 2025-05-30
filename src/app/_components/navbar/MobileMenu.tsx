import React, { SetStateAction, Dispatch } from 'react'
import { LanguageChangeButton } from './LanguageChangeButton'
import Link from 'next/link'
import { Globe } from 'lucide-react'
import { SupportedLanguages } from '@/app/types/languageTypes'
import { supportedLanguages, useLanguage } from '@/app/contexts/LanguageContext'
import { translations } from '@/app/lib/translations'

interface MobileMenuProps {
    showLanguageChange: boolean
    handleLanguageChange: (string: SupportedLanguages) => void
    setShowLanguageChange: Dispatch<SetStateAction<boolean>>
    setIsOpen: Dispatch<SetStateAction<boolean>>
    handleClickAbout: (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => void
}

export const MobileMenu = ({
    showLanguageChange,
    handleLanguageChange,
    setShowLanguageChange,
    setIsOpen,
    handleClickAbout,
}: MobileMenuProps) => {
    const { language } = useLanguage()
    const { button, navigation } = translations[language as SupportedLanguages]

    const links = [
        { href: '/', text: 'Home', handler: () => setIsOpen(false) },
        {
            href: '#about',
            text: navigation?.aboutUs,
            handler: handleClickAbout,
        },
        {
            href: '/contact',
            text: button?.contactUs,
            handler: () => setIsOpen(false),
        },
    ]

    const languageLabels: Record<SupportedLanguages, string> = {
        en: 'English',
        fr: 'Français',
        // de: 'Deutsch',
        // Add new languages here
    }

    return (
        <div className="absolute right-0 top-20 z-20 flex w-full flex-col items-center justify-center space-y-4 border-t border-white bg-white px-2 py-4 shadow-lg md:hidden">
            {showLanguageChange ? (
                <div className="flex flex-col gap-4">
                    {supportedLanguages?.map((lang) => (
                        <LanguageChangeButton
                            key={lang}
                            handleLanguageChange={() =>
                                handleLanguageChange(lang as SupportedLanguages)
                            }
                            text={
                                languageLabels[lang as SupportedLanguages] ||
                                lang
                            }
                            language={lang as SupportedLanguages}
                            isMobile
                        />
                    ))}
                </div>
            ) : (
                <>
                    {links?.map(({ href, text, handler }) => (
                        <Link
                            key={href}
                            href={href}
                            className="rounded-sm px-2 py-2 hover:bg-gray-300 hover:text-black"
                            onClick={handler}
                        >
                            {text}
                        </Link>
                    ))}
                    <button
                        className="flex min-w-max items-center gap-2 border-t-2 border-gray-300 px-2 py-2 pt-4 hover:bg-gray-100"
                        onClick={() => setShowLanguageChange(true)}
                    >
                        <Globe />
                        <p>{language}</p>
                    </button>
                </>
            )}
        </div>
    )
}
