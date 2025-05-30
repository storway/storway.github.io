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
            className={`text-white text-center btn btn-primary hover:bg-secondary ${hidden ? 'hidden md:flex' : ''}`}
        >
            {button?.contactUs}
        </Link>
    )
}
