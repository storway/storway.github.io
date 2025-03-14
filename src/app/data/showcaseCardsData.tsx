import { ShieldIcon } from '../_components/icons/ShieldIcon'
import Image from 'next/image'

export const cards = [
    {
        headline: '... for effortless shopping',
        textEl: (
            <>
                <p className="text-lg leading-relaxed">Clip on,</p>
                <p className="text-lg leading-relaxed">scan items,</p>
                <p className="text-lg leading-relaxed">
                    keep them in your cart,
                </p>
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
                <p className="text-lg leading-relaxed">
                    Light, durable, flexible, and easy to clip-on.
                </p>
                <p className="text-lg leading-relaxed">
                    Smart, powerful, and flexible.
                </p>
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
                <p className="text-lg leading-relaxed">
                    Engage shoppers with targeted ads while they shop.
                </p>
                <p className="text-lg leading-relaxed">
                    Deliver real-time deals and product info.
                </p>
                <p className="text-lg leading-relaxed">
                    Turn every cart into a dynamic retail media platform.
                </p>
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
                <p className="text-lg leading-relaxed">Fraud protection.</p>
                <p className="text-lg leading-relaxed">
                    Cyber secure by design.
                </p>
                <p className="text-lg leading-relaxed">
                    Upholding the highest standards of data privacy.
                </p>
            </>
        ),
        media: <ShieldIcon />,
    },
]
