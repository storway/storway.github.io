import Link from 'next/link'
import React from 'react'

interface ContactButtonProps {
    hidden?: boolean
}

export const ContactButton = ({ hidden }: ContactButtonProps) => {
    return (
        <Link
            href="/contact"
            passHref
            className={`${hidden ? 'hidden md:flex' : ''}`}
        >
            <button className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-transparent bg-primary px-6 py-2">
                <p className="text-nowrap text-xl text-white">Contact us</p>
            </button>
        </Link>
    )
}
