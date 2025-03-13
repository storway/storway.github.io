'use client'

import { HeroPost } from '@/app/_components/hero-post'
import Promises from './_components/promises/Promises'
import { DigiCartShowcase } from './_components/digiCartShowcase/DigiCartShowcase'

export default function Index() {
    return (
        <main>
            <HeroPost />
            <DigiCartShowcase />
            <Promises />
        </main>
    )
}
