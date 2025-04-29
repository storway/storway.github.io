import { HeroPost } from '@/app/_components/hero-post'
import Promises from './_components/promises/Promises'
import { DigiCartShowcase } from './_components/digiCartShowcase/DigiCartShowcase'
import { About } from './_components/about/About'
import { Metadata } from 'next'
import { SITE_CONFIG, SUPPORTED_LOCALES } from './config/config'
import Script from 'next/script'

export function generateStaticParams() {
    return SUPPORTED_LOCALES.map((locale: any) => ({ locale }))
}

export default function Index() {
    const canonicalUrl = `https://${SITE_CONFIG.domain}/`
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        description: SITE_CONFIG.defaultDescription,
        name: SITE_CONFIG.defaultTitle,
        url: canonicalUrl,
        mainEntity: {
            '@type': 'Organization',
            name: SITE_CONFIG.name,
        },
    }

    return (
        <main>
            <Script
                id="about-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                strategy="beforeInteractive" // Can control when the script loads
            />
            <HeroPost />
            <DigiCartShowcase />
            <Promises />
            <About />
        </main>
    )
}

export function generateMetadata(): Metadata {
    const title = SITE_CONFIG.defaultTitle
    const description = SITE_CONFIG.defaultDescription
    // const previousImages = (await parent).openGraph?.images || []
    const canonicalUrl = `https://${SITE_CONFIG.domain}/`

    return {
        title,
        description: description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: title,
            type: 'website',
            description: description,
            url: canonicalUrl,
            siteName: SITE_CONFIG.name,
            images: [
                `https://${SITE_CONFIG.domain}/assets/images/digi-cart.webp`,
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            site: canonicalUrl,
            description: description,
            images: [
                `https://${SITE_CONFIG.domain}/assets/images/digi-cart.webp`,
            ],
        },
    }
}
