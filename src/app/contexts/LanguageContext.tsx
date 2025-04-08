'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface LanguageContextType {
    language: string
    setLanguage: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
)

// Supported languages
export const supportedLanguages = ['en', 'fr', 'de']

export const LanguageProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [language, setLanguage] = useState<string>('en')

    useEffect(() => {
        // Extract language from navigator
        const browserLocale = navigator.language.slice(0, 2)

        // Set language if it's supported, otherwise default to 'en'
        if (supportedLanguages.includes(browserLocale)) {
            setLanguage(browserLocale)
        } else {
            setLanguage('en')
        }
    }, [])

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
