'use client'

import { useLanguage } from '@/app/contexts/LanguageContext'
import { translations } from '@/app/lib/translations'
import { SupportedLanguages } from '@/app/types/languageTypes'
import { forwardRef, ForwardedRef } from 'react'

export function PreFooter() {
    const { language } = useLanguage()

    const { aboutUs } = translations[language as SupportedLanguages]

    return (
        <section className="" style={{
            backgroundImage: "url('/images/bg2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            minHeight: "70vh"
        }}>
            <div className="md:py-22 relative grid h-screen items-center gap-14 px-6 py-32 md:px-24 lg:gap-6 lg:py-28">
                <div className="flex flex-col space-y-4">
                    <div className="text-5xl md:text-7xl mb-4 space-y-2 text-center text-white font-playfair italic">
                        Ready to simplify your customers' shopping experience? 
                    </div>
                </div>
            </div>
        </section>
    )
}
