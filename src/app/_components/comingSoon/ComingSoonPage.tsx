import React from 'react'
import { StorwayLogo } from '../icons/StorwayLogo'

export const ComingSoonPage = () => {
    return (
        <>
            <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-white">
                {/* <div className="absolute bottom-[-4600px] left-1/2 h-[2700px] w-[2700px] -translate-x-1/2 -translate-y-3/4 transform rounded-full bg-gray-200" /> */}
                <div className="z-10 flex flex-col items-center justify-center">
                    <StorwayLogo className="w-32 sm:w-60" />
                    <p className="text-2xl sm:text-4xl">Coming soon.</p>
                </div>
            </div>
        </>
    )
}
