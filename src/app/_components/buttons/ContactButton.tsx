import { useLanguage } from '@/app/contexts/LanguageContext'
import { translations } from '@/app/lib/translations'
import { SupportedLanguages } from '@/app/types/languageTypes'
import Link from 'next/link'
import React from 'react'

interface ContactButtonProps {
    hidden?: boolean
}

export const ContactButton = ({ hidden }: ContactButtonProps) => {
    const { language } = useLanguage()

    const { button } = translations[language as SupportedLanguages]
    return (
        <Link
            href="/contact"
            passHref
            className={`${hidden ? 'hidden md:flex' : ''}`}
        >
            <button className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-transparent bg-primary px-6 py-2">
                <p className="text-nowrap text-xl text-white">
                    {button?.contactUs}
                </p>
            </button>
        </Link>
    )
}
