'use client'

import { useState } from 'react'
import Link from 'next/link'
import { StorwayLogo } from '../icons/StorwayLogo'
import { CloseIcon } from '../icons/CloseIcon'
import { MenuIcon } from '../icons/MenuIcon'
import { ContactButton } from '../buttons/ContactButton'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleClickHome = (e: { preventDefault: () => void }) => {
        setIsOpen(false)
    }

    const handleClickContact = () => {
        setIsOpen(false)
    }

    const handleClickAbout = () => {
        setIsOpen(false)
    }
    return (
        <nav className="fixed z-10 flex h-20 w-full items-center justify-center bg-white px-6 text-gray-800 shadow-md">
            <div className="flex w-full items-center justify-between">
                <Link
                    className="flex items-center justify-center gap-2"
                    href="/"
                >
                    <StorwayLogo width={70} />
                    <h1 className="text-4xl font-semibold">Storway</h1>
                </Link>

                <div className="hidden space-x-6 text-2xl md:flex">
                    <Link
                        href="/"
                        className="cursor-pointer hover:text-gray-400 hover:underline"
                    >
                        Home
                    </Link>
                    {/* <Link
                        href="/contact"
                        className="cursor-pointer hover:text-gray-400 hover:underline"
                    >
                        Contact
                    </Link> */}
                    <Link
                        href="/about"
                        className="cursor-pointer hover:text-gray-400 hover:underline"
                    >
                        About us
                    </Link>
                </div>
                <ContactButton />

                <button className="md:hidden" onClick={handleClick}>
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 top-20 z-20 flex w-full flex-col items-center justify-center space-y-4 border-t border-gray-500 bg-gray-100 px-2 py-4 shadow-lg md:hidden">
                    <Link
                        href="/"
                        className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                        onClick={handleClickHome}
                    >
                        Home
                    </Link>

                    <Link
                        href="/contact"
                        className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                        onClick={handleClickContact}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/about"
                        className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                        onClick={handleClickAbout}
                    >
                        About us
                    </Link>
                </div>
            )}
        </nav>
    )
}
