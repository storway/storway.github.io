import React from 'react'

interface HeroTextProps {
    text: string
}

export const HeroText = ({ text }: HeroTextProps) => {
    return (
        <p className="text-muted-foreground max-w-[600px] md:text-xl">
            <span className="font-bold">{text?.split(' ')[0]}</span>{' '}
            {text?.split(' ').slice(1).join(' ')}
        </p>
    )
}
