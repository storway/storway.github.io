import { useLanguage } from '@/app/contexts/LanguageContext'
import { SupportedLanguages } from '@/app/types/languageTypes'
import { Check } from 'lucide-react'
import React from 'react'

interface LanguageChangeButtonProps {
    handleLanguageChange: () => void
    text: string
    language: SupportedLanguages
    isMobile?: boolean
}

export const LanguageChangeButton = ({
    handleLanguageChange,
    text,
    language,
    isMobile,
}: LanguageChangeButtonProps) => {
    const { language: setLanguage } = useLanguage()

    return (
        <button
            onClick={handleLanguageChange}
            className={`flex w-full items-center justify-between px-4 py-2 text-left hover:bg-gray-100 ${isMobile ? 'gap-8' : ''}`}
        >
            {text}
            {setLanguage === language && <Check className="text-primary" />}
        </button>
    )
}
