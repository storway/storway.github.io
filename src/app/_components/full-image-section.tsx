'use client'

import { useLanguage } from '@/app/contexts/LanguageContext'
import { translations } from '@/app/lib/translations'
import { SupportedLanguages } from '@/app/types/languageTypes'
import { forwardRef, ForwardedRef } from 'react'

export function FullImageSection() {
    const { language } = useLanguage()

    const { aboutUs } = translations[language as SupportedLanguages]

    return (
        <section className="" style={{
                    backgroundImage: "url('/images/bg3.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className="md:py-22 relative grid h-screen items-center gap-14 px-6 py-32 md:px-24 lg:gap-6 lg:py-28">
                        <div className="flex flex-col space-y-4">
                            <div className="mb-4 space-y-2">
                                
                            </div>
                            <p className="mt-12 text-center w-100">
                                
                            </p>
                        </div>
                    </div>
                </section>
    )
}
