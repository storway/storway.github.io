import React, { JSX } from 'react'
import Image from 'next/image'

interface ShowcaseCardProps {
    headline: string
    textEl: JSX.Element
    media: JSX.Element
    reverse?: boolean
}

export const ShowcaseCard = ({
    headline,
    textEl,
    media,
    reverse,
}: ShowcaseCardProps) => {
    return (
        <div
            className={`mb-4 md:mb-6 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8`}
        >
            <div className={reverse ? 'md:order-2' : 'md:order-1'}>
                <h3 className="mb-4 text-3xl leading-tight lg:text-4xl">
                    {headline}
                </h3>
                {textEl}
            </div>
            <div
                className={`flex items-center justify-center ${reverse ? 'md:order-1' : 'md:order-2'}`}
            >
                <div className="relative my-4 overflow-hidden">{media}</div>
            </div>
        </div>
    )
}
