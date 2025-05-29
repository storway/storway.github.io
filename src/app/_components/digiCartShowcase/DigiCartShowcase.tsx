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
                    src={'/images/digi-cart.webp'}
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
                    src={'/images/digi-cart-side.webp'}
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
                    src={'/images/digi-cart-ads.webp'}
                    alt="Cover Image for digiCart"
                    className="object-cover"
                    width={1300}
                    height={630}
                />
            ),
        },
        {
            reverse: true,
            headline: showcase?.securityHeading,
            textEl: (
                <>
                    <ShowcaseText text={showcase?.securityFeatures?.[0]} />
                    <ShowcaseText text={showcase?.securityFeatures?.[1]} />
                    <ShowcaseText text={showcase?.securityFeatures?.[2]} />
                </>
            ),
            media: <ShieldIcon />,
        },
    ]

    return (
        <div className="mx-auto bg-gray-200 px-6 py-32 md:px-24">
            <div
                id="learn-more-section"
                className="mb-6 flex items-center justify-center sm:mb-16"
            >
                <h2 className="text-primary text-2xl tracking-tighter sm:text-4xl md:text-7xl">
                    {showcase?.heading}
                </h2>
            </div>

            {cards.map((card, index) => (
                <Fragment key={index}>
                    <ShowcaseCard {...card} />
                    {index < cards.length - 1 && <CardSpacer />}
                </Fragment>
            ))}
        </div>
    )
}
