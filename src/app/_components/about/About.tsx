'use client'

import { useLanguage } from '@/app/contexts/LanguageContext'
import { translations } from '@/app/lib/translations'
import { SupportedLanguages } from '@/app/types/languageTypes'
import { forwardRef, ForwardedRef } from 'react'

export const About = forwardRef<HTMLDivElement>(
    (props, ref: ForwardedRef<HTMLDivElement>) => {
        const { language } = useLanguage()

        const { aboutUs } = translations[language as SupportedLanguages]

        return (
            <section
                id="about"
                ref={ref}
                className="flex items-center justify-center bg-gray-50 px-6 py-32 md:px-12 lg:px-24"
            >
                <div className="mx-auto max-w-6xl px-6 py-16 text-center">
                    <h2 className="text-5xl md:text-7xl font-playfair italic mb-12 text-center text-primary">
                        {aboutUs?.heading}
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg">
                        {aboutUs?.text1}
                    </p>
                    <p className="mx-auto mt-4 max-w-3xl text-lg">
                        {aboutUs?.text2}
                    </p>
                </div>
            </section>
        )
    }
)
