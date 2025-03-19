import React from 'react'

interface ShowcaseTextProps {
    text: string
}

export const ShowcaseText = ({ text }: ShowcaseTextProps) => {
    return <p className="text-lg leading-relaxed">{text}</p>
}
