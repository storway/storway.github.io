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
        <section className="" style={{
            backgroundImage: "url('/images/bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>
            <div className="md:py-22 relative grid h-screen items-center gap-14 px-6 py-32 md:px-24 lg:gap-6 lg:py-28">
                <div className="flex flex-col space-y-4">
                    <div className="mb-4 space-y-2">
                        <HeroHeading className="text-5xl" heading={hero?.heading} />
                        {/* <HeroText className="text-white" text={hero?.text1} />
                        <HeroText className="text-white text-center" text={hero?.text2} />
                        <HeroText className="text-white" text={hero?.text3} /> */}
                    </div>
                    <p className="mt-12 text-center w-100">
                        <ContactButton />
                        {/* <a
                            href="#learn-more-section"
                            className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-black px-6 py-2"
                        >
                            <p className="text-nowrap text-xl">
                                {button?.learnMore}
                            </p>
                        </a> */}
                    </p>
                </div>
                {/* <div className="flex items-center justify-center">
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
                </div> */}
            </div>
        </section>
    )
}
