import React from 'react'

interface HeroHeadingProps {
    heading: string
    className?: string
}

export const HeroHeading = ({ heading, className }: HeroHeadingProps) => {
    return (
        <h1 className={`text-7xl text-center text-white font-semibold ${className}`}>
            {heading}
        </h1>
    )
}
