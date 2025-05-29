import { useLanguage } from '@/app/contexts/LanguageContext'
import { SupportedLanguages } from '@/app/types/languageTypes'
import { Globe } from 'lucide-react'
import React, { useState } from 'react'
import { LanguageChangeButton } from './LanguageChangeButton'

export const LanguageChange = () => {
    const { language, setLanguage } = useLanguage()
    const [showLanguageChange, setShowLanguageChange] = useState(false)

    const handleOpenLanguage = () => {
        setShowLanguageChange(!showLanguageChange)
    }
    const handleLanguageChange = (lang: SupportedLanguages) => {
        setLanguage(lang)
        setShowLanguageChange(false)
    }

    return (
        <div className="relative hidden text-left md:inline-block">
            <button
                className="flex w-20 items-center gap-1 rounded-lg border-2 border-white px-2 py-2 text-white"
                onClick={handleOpenLanguage}
            >
                <Globe className="h-8 w-6" />
                <p className="w-8 text-xl">{language}</p>
            </button>
            {showLanguageChange && (
                <>
                    <div className="absolute right-0 mt-2 w-48 rounded-lg border bg-white shadow-lg">
                        <div className="py-1">
                            <LanguageChangeButton
                                handleLanguageChange={() =>
                                    handleLanguageChange('en')
                                }
                                text="English"
                                language="en"
                            />
                            <LanguageChangeButton
                                handleLanguageChange={() =>
                                    handleLanguageChange('fr')
                                }
                                text="Français"
                                language="fr"
                            />
                            {/* <LanguageChangeButton
                                handleLanguageChange={() =>
                                    handleLanguageChange('de')
                                }
                                text="Deutsch"
                                language="de"
                            /> */}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
