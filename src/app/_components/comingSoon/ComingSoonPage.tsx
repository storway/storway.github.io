import React from 'react'
import { StorwayLogo } from '../icons/StorwayLogo'

export const ComingSoonPage = () => {
    return (
        <>
            <div className="flex h-screen w-full flex-col items-center justify-center bg-white">
                <div className="flex items-end justify-center">
                    <StorwayLogo className="w-32 sm:w-60" />
                    <h1 className="text-6xl sm:text-8xl">Storway</h1>
                </div>
                <p className="text-2xl sm:text-4xl">Coming soon.</p>
            </div>
        </>
    )
}
