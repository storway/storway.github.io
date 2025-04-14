import React from 'react'

interface HeroHeadingProps {
    heading: string
}

export const HeroHeading = ({ heading }: HeroHeadingProps) => {
    return (
        <h1 className="text-5xl font-semibold">
            <span className="text-primary">{heading?.split(' ')[0]}</span>{' '}
            {heading?.split(' ').slice(1).join(' ')}
        </h1>
    )
}
