'use client'

import Image from 'next/image'
import { ContactButton } from './buttons/ContactButton'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../lib/translations'
import { SupportedLanguages } from '../types/languageTypes'
import { HeroHeading } from './hero/HeroHeading'
import { HeroText } from './hero/HeroText'

export function HeroPost() {
    const { language } = useLanguage()

    const { hero, button } = translations[language as SupportedLanguages]

    return (
        <section className="">
            <div className="md:py-22 relative grid h-screen items-center gap-14 px-6 py-32 md:grid-cols-2 md:px-24 lg:gap-6 lg:py-28">
                <div className="flex flex-col items-start justify-start space-y-4">
                    <div className="mb-4 space-y-2">
                        <HeroHeading heading={hero?.heading} />
                        <HeroText text={hero?.text1} />
                        <HeroText text={hero?.text2} />
                        <HeroText text={hero?.text3} />
                    </div>
                    <div className="mt-12 flex gap-4 min-[400px]:flex-row">
                        <ContactButton />
                        <a
                            href="#learn-more-section"
                            className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-black px-6 py-2"
                        >
                            <p className="text-nowrap text-xl">
                                {button?.learnMore}
                            </p>
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="relative overflow-hidden">
                        <Image
                            priority
                            src={'/images/digi-cart-handle.webp'}
                            alt={`Cover Image for digiCart`}
                            className="object-cover"
                            width={1300}
                            height={630}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
