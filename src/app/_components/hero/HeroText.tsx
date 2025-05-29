import React from 'react'

interface HeroTextProps {
    text: string,
    className?: string
}

export const HeroText = ({ text, className }: HeroTextProps) => {
    return (
        <p className={`text-muted-foreground max-w-[600px] md:text-xl ${className || ''}`}>
            <span className="font-bold">{text?.split(' ')[0]}</span>{' '}
            {text?.split(' ').slice(1).join(' ')}
        </p>
    )
}
