'use client'

import Image from 'next/image'
import { Fragment } from 'react'
import { useLanguage } from '@/app/contexts/LanguageContext'
import { SupportedLanguages } from '@/app/types/languageTypes'
import { translations } from '@/app/lib/translations'

export const KeyBenefit = () => {
    const { language, setLanguage } = useLanguage()

    const { keybenefit } = translations[language as SupportedLanguages]

    return (
        <section className="mx-auto bg-white px-6 py-32 md:px-24 bg-gray-100">
            <div>
                {/* <h2 className="text-primary text-2xl tracking-tighter sm:text-4xl md:text-7xl">
                    {showcase?.heading}
                </h2> */}
                <h2 className="text-5xl md:text-7xl font-playfair italic mb-12 text-center text-secondary">{keybenefit?.title}</h2>
                <div className='text-center text-black text-lg'>
                    {keybenefit?.description}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 pt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="flex flex-col items-center text-center rounded-xl bg-white shadow-lg p-8">
                        <img src="/images/benefit/fraud.png" alt="Pick up a screen" className="mb-4 h-[60%]" />
                        <div className="pt-4 text-3xl font-playfair mb-2">{keybenefit?.item1}</div>
                    </div>

                    <div className="flex flex-col items-center text-center rounded-xl bg-white shadow-lg p-8">
                        <img src="/images/benefit/basketsize.png" alt="Pick up a screen" className="mb-4 h-[60%]" />
                        <div className="pt-4 text-3xl font-playfair mb-2">{keybenefit?.item2}</div>
                    </div>

                    <div className="flex flex-col items-center text-center rounded-xl bg-white shadow-lg p-8">
                        <img src="/images/benefit/mediasale.png" alt="Pick up a screen" className="mb-4 h-[60%]" />
                        <div className="pt-4 text-3xl font-playfair mb-2">{keybenefit?.item3}</div>
                    </div>
                </div>
            </div>
            
            

        </section>
    )
}
