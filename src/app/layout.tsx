import { CMS_NAME, HOME_OG_IMAGE_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import { Baloo_2 } from 'next/font/google'
import cn from 'classnames'
import './globals.css'
import { Navbar } from './_components/navbar/navbar'
import Footer from './_components/footer'

const inter = Baloo_2({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: `${CMS_NAME} Digital Retail`,
    description: `${CMS_NAME} Digital Retail Solutions - Prenez le chemin du magasin connecté
.`,
    openGraph: {
        images: [HOME_OG_IMAGE_URL],
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
                <link
                    rel="mask-icon"
                    href="/favicon/safari-pinned-tab.svg"
                    color="#000000"
                />
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
                    inter.className,
                    'dark:bg-slate-900 dark:text-slate-400'
                )}
            >
                <Navbar />
                <div className="min-h-screen">{children}</div>
                <Footer />
            </body>
        </html>
    )
}
