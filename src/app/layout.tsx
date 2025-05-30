import { CMS_NAME, HOME_OG_IMAGE_URL } from '@/lib/constants'
import type { Metadata } from 'next'
// import { Roboto } from 'next/font/google'
// import { Playfair_Display } from 'next/font/google'
import cn from 'classnames'
import './globals.css'
import { Navbar } from './_components/navbar/navbar'
import Footer from './_components/footer'
import { LanguageProvider } from './contexts/LanguageContext'
import { ComingSoonPage } from './_components/comingSoon/ComingSoonPage'
// import localFont from 'next/font/local'

// const inter = Roboto
// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   display: 'swap',
//   style: 'italic'
// })


// const helvetica = localFont({
//   src: [
//     {
//       path: '/fonts/Helvetica.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '/fonts/Helvetica-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     }
//   ],
//   variable: '--font-helvetica',
// })


export const metadata: Metadata = {
    title: `${CMS_NAME}`,
    description: `${CMS_NAME} Digital Retail Solutions - Offer your clients the VIP shopping experience.`,
    openGraph: {
        title: 'Storway',
        description: 'Offer your clients the VIP shopping experience.',
        images: [
            {
                url: HOME_OG_IMAGE_URL,
                width: 1200,
                height: 630,
            },
        ],
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html className="scroll-smooth" lang="en">
            <head>
                <meta property="og:title" content="Storway Digital Retail" />
                <meta
                    property="og:description"
                    content="Offer your clients the VIP shopping experience."
                />
                <meta property="og:image" content={HOME_OG_IMAGE_URL} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:type" content="website" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />

                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta
                    name="msapplication-config"
                    content="/favicon/browserconfig.xml"
                />
                <meta name="theme-color" content="#000" />
                <link
                    rel="alternate"
                    type="application/rss+xml"
                    href="/feed.xml"
                />
            </head>
            <body
                className={cn(
                    // inter.className,
                    // playfair.className,
                    'font-helvetica dark:bg-slate-900 dark:text-slate-400'
                )}
            >
                {/* <ComingSoonPage /> */}
                <LanguageProvider>
                    <Navbar />
                    <div className="min-h-screen">{children}</div>
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    )
}
