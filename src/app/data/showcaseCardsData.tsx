import { ShowcaseText } from '../_components/digiCartShowcase/ShowcaseText'
import { ShieldIcon } from '../_components/icons/ShieldIcon'
import Image from 'next/image'

export const cards = [
    {
        headline: '... for effortless shopping',
        textEl: (
            <>
                <ShowcaseText text="Clip on," />
                <ShowcaseText text="scan items," />
                <ShowcaseText text="keep them in your cart," />
                <ShowcaseText text="and pay." />
            </>
        ),
        media: (
            <Image
                src={'/images/digi-cart.webp'}
                alt="Cover Image for digiCart"
                className="object-cover"
                width={1300}
                height={630}
            />
        ),
    },
    {
        reverse: true,
        headline: 'Introducing the DigiCart',
        textEl: (
            <>
                <ShowcaseText text="Light, durable, and easy to clip on." />
                <ShowcaseText text="Smart, powerful, and flexible." />
            </>
        ),
        media: (
            <Image
                src={'/images/digi-cart-side.webp'}
                alt="Cover Image for digiCart ads"
                className="object-cover"
                width={1300}
                height={630}
            />
        ),
    },
    {
        headline: 'Retail Media Display: Smart Ads, Instant Impact',
        textEl: (
            <>
                <ShowcaseText text="Engage shoppers with targeted ads while they shop." />
                <ShowcaseText text="Deliver real-time deals and product info." />

                <ShowcaseText text="Turn every cart into a dynamic retail media platform." />
            </>
        ),
        media: (
            <Image
                src={'/images/digi-cart-ads.webp'}
                alt="Cover Image for digiCart"
                className="object-cover"
                width={1300}
                height={630}
            />
        ),
    },
    {
        reverse: true,
        headline: 'Protecting Your Business, Customers & Data with Confidence.',
        textEl: (
            <>
                <ShowcaseText text="Fraud protection." />
                <ShowcaseText text="Cyber secure by design." />
                <ShowcaseText text="Upholding the highest standards of data privacy." />
            </>
        ),
        media: <ShieldIcon />,
    },
]
