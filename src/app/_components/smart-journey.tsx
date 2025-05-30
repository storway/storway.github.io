'use client'
import Image from 'next/image'
import { Fragment } from 'react'
import { useLanguage } from '@/app/contexts/LanguageContext'
import { SupportedLanguages } from '@/app/types/languageTypes'
import { translations } from '@/app/lib/translations'

export const SmartJourney = () => {
    const { language, setLanguage } = useLanguage()

    const { showcase } = translations[language as SupportedLanguages]

    return (
        <section className="mx-auto bg-white px-6 py-32 md:px-24">
            <div>
                {/* <h2 className="text-primary text-2xl tracking-tighter sm:text-4xl md:text-7xl">
                    {showcase?.heading}
                </h2> */}
                <h2 className="text-5xl md:text-7xl font-playfair italic mb-12 text-center text-primary">
                    Smart cart. Smarter journey.
                </h2>
                <div className='text-center text-black'>
                    Designed to transform how customers move, shop, and check out.
                </div>

                <div className='pt-12'>
                    <Image 
                                src="/images/smartjourney.jpg" 
                                alt="Storway Logo" 
                                width={1200} 
                                height={600}
                                className="w-full h-auto"
                            />
                </div>
            </div>

            <div className="pt-24 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col items-center text-center">
                    <hr className='bg-secondary h-[2px] w-[100%]'></hr>
                    <div className="mt-12 text-4xl md:text-7xl text-secondary mb-2">+12%</div>
                    <p className="pt-12 text-md text-black">
                       Hausse du panier moyen
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <hr className='bg-secondary h-[2px] w-[100%]'></hr>
                    <div className="mt-12  text-4xl md:text-7xl text-secondary mb-2">+60%</div>
                    <p className="pt-12 text-md text-black">
                        Temps gagné en caisse
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <hr className='bg-secondary h-[2px] w-[100%]'></hr>
                    <div className="mt-12  text-4xl md:text-7xl text-secondary mb-2">+94%</div>
                    <p className="pt-12 text-md text-black">
                        Taux de satisfaction client
                    </p>
                </div>
            </div>



            <div id="learn-more-section" className="mb-6 flex items-center justify-center sm:mb-16">    
            </div>

            
        </section>
    )
}
