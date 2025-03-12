import Link from 'next/link'
import React from 'react'

export const ContactButton = () => {
    return (
        <Link href="/contact" passHref>
            <button className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-transparent bg-primary px-6 py-2">
                <p className="text-nowrap text-xl text-white">Contact us</p>
            </button>
        </Link>
    )
}
