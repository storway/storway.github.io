'use client'

import { useLanguage } from '@/app/contexts/LanguageContext'
import { translations } from '@/app/lib/translations'
import { SupportedLanguages } from '@/app/types/languageTypes'
import { forwardRef, ForwardedRef } from 'react'

export function HowItWorks() {
    const { language } = useLanguage()

    const { howitworks } = translations[language as SupportedLanguages]

    return (
        <section className="bg-secondary text-white py-32">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-5xl md:text-7xl font-playfair italic mb-12 text-center">{howitworks?.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="flex flex-col items-center text-center">
                        <img src="/images/howitwokrs/step1.jpg" alt="Pick up a screen" className="rounded-xl mb-4 shadow-lg" />
                        <div className="text-2xl font-playfair italic mb-2">1. {howitworks?.step1}</div>
                        <p className="text-sm text-white/80">{howitworks?.step1text}</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src="/images/howitwokrs/step2.jpg" alt="Attach it to your cart" className="rounded-xl mb-4 shadow-lg" />
                        <div className="text-2xl font-playfair italic mb-2">2. {howitworks?.step2}</div>
                        <p className="text-sm text-white/80">
                            {howitworks?.step2text}
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src="/images/howitwokrs/step3.jpg" alt="Scan as you shop" className="rounded-xl mb-4 shadow-lg" />
                        <div className="text-2xl font-playfair italic mb-2">3. {howitworks?.step3}</div>
                        <p className="text-sm text-white/80">
                            {howitworks?.step3text}
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src="/images/howitwokrs/step4.jpg" alt="Check out instantly" className="rounded-xl mb-4 shadow-lg" />
                        <div className="text-2xl font-playfair italic mb-2">4. {howitworks?.step4}</div>
                        <p className="text-sm text-white/80">
                            {howitworks?.step4text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
