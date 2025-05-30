import React from 'react'

interface HeroHeadingProps {
    heading: string
    className?: string
}

export const HeroHeading = ({ heading, className }: HeroHeadingProps) => {
    return (
        <h1 className={`text-5xl md:text-7xl text-center text-white animate-fadeIn ${className}`}>
            {heading}
        </h1>
    )
}
