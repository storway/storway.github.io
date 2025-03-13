'use client'

import { HeroPost } from '@/app/_components/hero-post'
import Promises from './_components/promises/Promises'
import { About } from './_components/about/About'

export default function Index() {
    return (
        <main>
            <HeroPost />
            <Promises />
            <About />
        </main>
    )
}
