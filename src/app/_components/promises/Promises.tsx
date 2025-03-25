'use client'

import { BarChart2 } from 'lucide-react'
import { BurglarIcon } from '../icons/BurglarIcon'
import { RibbonIcon } from '../icons/RibbonIcon'
import { KartIcon } from '../icons/KartIcon'
import { useLanguage } from '@/app/contexts/LanguageContext'
import { SupportedLanguages } from '@/app/types/languageTypes'
import { translations } from '@/app/lib/translations'

export default function Promises() {
    const { language } = useLanguage()

    const { benefits } = translations[language as SupportedLanguages]

    const promises = [
        {
            icon: <RibbonIcon />,
            text: benefits?.improveClientExperience,
        },
        {
            icon: <BurglarIcon />,
            text: benefits?.reduceFraud,
        },
        {
            icon: <KartIcon />,
            text: benefits?.increaseBasketSize,
        },
        {
            icon: (
                <BarChart2
                    className="text-purple-500"
                    height={100}
                    width={100}
                />
            ),
            text: benefits?.retailMediaRevenue,
        },
    ]

    return (
        <div className="my-32 flex flex-col items-center justify-center">
            <h2 className="text-center text-2xl font-semibold sm:text-4xl md:text-5xl">
                {benefits?.heading}
            </h2>
            <div className="my-8 flex flex-col items-center justify-center gap-4 p-4 sm:flex-wrap md:flex-row">
                {promises.map((promise, index) => (
                    <div
                        key={index}
                        className="flex h-64 w-64 flex-col items-center justify-center gap-4 rounded-lg border border-primary bg-white p-4 shadow-md"
                    >
                        <div className="flex items-center">{promise.icon}</div>
                        <span className="text-center text-2xl font-semibold">
                            {promise.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
