'use client'

import { CardSpacer } from '../spacer/CardSpacer'
import { ShowcaseCard } from './ShowcaseCard'
import Image from 'next/image'
import { Fragment } from 'react'
import { useLanguage } from '@/app/contexts/LanguageContext'
import { SupportedLanguages } from '@/app/types/languageTypes'
import { translations } from '@/app/lib/translations'
import { ShowcaseText } from './ShowcaseText'
import { ShieldIcon } from '../icons/ShieldIcon'

export const DigiCartShowcase = () => {
    const { language, setLanguage } = useLanguage()

    const { showcase } = translations[language as SupportedLanguages]

    const cards = [
        {
            headline: showcase?.effortlessShopping,
            textEl: (
                <>
                    <ShowcaseText text={showcase?.steps?.[0]} />
                    <ShowcaseText text={showcase?.steps?.[1]} />
                    <ShowcaseText text={showcase?.steps?.[2]} />
                    <ShowcaseText text={showcase?.steps?.[3]} />
                </>
            ),
            media: (
                <Image
                    src={'/images/homeproduct/storwaydevice.jpg'}
                    alt="Cover Image for digiCart"
                    className="object-cover"
                    width={1300}
                    height={630}
                />
            ),
        },
        {
            reverse: true,
            headline: showcase?.introducingDigiCart,
            textEl: (
                <>
                    <ShowcaseText text={showcase?.digiCartDescription} />
                    <ShowcaseText text={showcase?.digiCartSmart} />
                </>
            ),
            media: (
                <Image
                    src={'/images/homeproduct/realtimeoffer.jpg'}
                    alt="Cover Image for digiCart ads"
                    className="object-cover"
                    width={1300}
                    height={630}
                />
            ),
        },
        {
            headline: showcase?.retailMediaHeading,
            textEl: (
                <>
                    <ShowcaseText
                        text={showcase?.retailMediaDescription?.[0]}
                    />
                    <ShowcaseText
                        text={showcase?.retailMediaDescription?.[1]}
                    />

                    <ShowcaseText
                        text={showcase?.retailMediaDescription?.[2]}
                    />
                </>
            ),
            media: (
                <Image
                    src={'/images/homeproduct/analytics.jpg'}
                    alt="Cover Image for digiCart"
                    className="object-cover"
                    width={1300}
                    height={630}
                />
            ),
        },
        // {
        //     reverse: true,
        //     headline: showcase?.securityHeading,
        //     textEl: (
        //         <>
        //             <ShowcaseText text={showcase?.securityFeatures?.[0]} />
        //             <ShowcaseText text={showcase?.securityFeatures?.[1]} />
        //             <ShowcaseText text={showcase?.securityFeatures?.[2]} />
        //         </>
        //     ),
        //     media: <ShieldIcon />,
        // },
    ]

    return (
        <section className="mx-auto bg-white px-6 py-32 md:px-24">
            <div>
                {/* <h2 className="text-primary text-2xl tracking-tighter sm:text-4xl md:text-7xl">
                    {showcase?.heading}
                </h2> */}
                <h2 className="text-5xl md:text-7xl font-playfair italic mb-12 text-center text-primary">Simple interface. Endless in-store possibilities.</h2>
                <div className='text-center text-black'>
                    From smart checkout and real-time product info to order management and list syncing—Storway transforms the retail floor into a connected, digital experience.
                </div>
            </div>
            <div id="learn-more-section" className="mb-6 flex items-center justify-center sm:mb-16">    
            </div>

            {cards.map((card, index) => (
                <Fragment key={index}>
                    <ShowcaseCard {...card} />
                    {index < cards.length - 1 && <CardSpacer />}
                </Fragment>
            ))}
        </section>
    )
}
