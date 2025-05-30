'use client'

import { useLanguage } from '@/app/contexts/LanguageContext'
import { translations } from '@/app/lib/translations'
import { SupportedLanguages } from '@/app/types/languageTypes'
import { FullImageSection } from '../_components/full-image-section'

export function About() {
    const { language } = useLanguage()
    const { aboutUs } = translations[language as SupportedLanguages]

    return (
        <section
            id="about"
            className="items-center justify-center bg-gray-50 px-6 py-32 md:px-12 lg:px-24"
        >
            <div className="mx-auto max-w-6xl px-6 py-16 text-center">
                <h2 className="text-5xl md:text-7xl font-playfair italic mb-12 text-center text-secondary">
                    {aboutUs?.heading}
                </h2>
                <p className="mx-auto max-w-3xl text-lg">
                    {aboutUs?.text1}
                </p>
                <p className="mx-auto mt-4 max-w-3xl text-lg">
                    {aboutUs?.text2}
                </p>

                <p className="mx-auto mt-4 max-w-3xl text-lg">
                    At Storway, we believe shopping should be smarter—for both shoppers and retailers. That’s why we’ve reimagined the everyday shopping cart as a dynamic, intelligent platform that delivers real-time content, personalized offers, and seamless checkout experiences, all at the point of decision.
                    Our mission is simple:
                    To create smarter journeys that enhance the in-store experience and unlock powerful retail insights.
                </p>

                
            </div>
        </section>
    )
}
