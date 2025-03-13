import Image from 'next/image'
import { CardSpacer } from '../spacer/CardSpacer'
import { ShieldIcon } from '../icons/ShieldIcon'
import { ShowcaseCard } from './ShowcaseCard'

// const cards = [
//     {
//         headline: `VIP shopping in retail stores`,
//         text: `Effortless shopping: skip the queue, simply scan your
//                         items as you go, keep them in your cart, and enjoy
//                         hassle-free payment.`,
//         media:  <Image
//         src={'/images/digi-cart.webp'}
//         alt={`Cover Image for digiCart`}
//         className="object-cover"
//         width={1300}
//         height={630}
//     />,
//     },
//     {
//         headline: ''
//         text: 'Improve Client Experience',
//         media: <RibbonIcon />,
//     },
//     {
//         headline: ''
//         text: 'Improve Client Experience',
//         media: <RibbonIcon />,
//     },
//     {
//         headline: ''
//         text: 'Improve Client Experience',
//         media: <RibbonIcon />,
//     },

// ]

export const DigiCartShowcase = () => {
    return (
        <div className="mx-auto mt-10 bg-gray-200 px-6 py-32 md:px-24">
            <div
                id="learn-more-section"
                className="mb-6 flex items-center justify-center sm:mb-16"
            >
                <h2 className="text-2xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
                    Shopping, reinvented
                </h2>
            </div>
            {/* VIPs */}
            <ShowcaseCard
                headline="VIP shopping in retail stores"
                text="Effortless shopping: skip the queue, simply scan your
                        items as you go, keep them in your cart, and enjoy
                        hassle-free payment."
                media={
                    <Image
                        src={'/images/digi-cart.webp'}
                        alt={`Cover Image for digiCart`}
                        className="object-cover"
                        width={1300}
                        height={630}
                    />
                }
            />
            {/* <div className="mb-4 md:mb-6 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
                <div>
                    <h3 className="mb-4 text-3xl leading-tight lg:text-4xl">
                        VIP shopping in retail stores
                    </h3>
                    <p className="mb-4 text-lg leading-relaxed">
                        Effortless shopping: skip the queue, simply scan your
                        items as you go, keep them in your cart, and enjoy
                        hassle-free payment.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="relative overflow-hidden">
                        <Image
                            src={'/images/digi-cart.webp'}
                            alt={`Cover Image for digiCart`}
                            className="object-cover"
                            width={1300}
                            height={630}
                        />
                    </div>
                </div>
            </div> */}
            <CardSpacer />
            <ShowcaseCard
                reverse
                headline={`Introducing the DigiCart`}
                text={`The DigiCart: light, durable, flexible, and effortless
                        clip-on. Smart, powerful and flexible.`}
                media={
                    <Image
                        src={'/images/digi-cart-side.webp'}
                        alt={`Cover Image for digiCart ads`}
                        className="object-cover"
                        width={1300}
                        height={630}
                    />
                }
            />
            <div className="mb-4 md:mb-6 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
                <div className="flex items-center justify-center">
                    <div className="relative overflow-hidden">
                        <Image
                            src={'/images/digi-cart-side.webp'}
                            alt={`Cover Image for digiCart ads`}
                            className="object-cover"
                            width={1300}
                            height={630}
                        />
                    </div>
                </div>
                <div>
                    <h3 className="my-4 text-3xl leading-tight lg:text-4xl">
                        Introducing the DigiCart
                    </h3>
                    <p className="mb-4 text-lg leading-relaxed">
                        The DigiCart: light, durable, flexible, and effortless
                        clip-on. Smart, powerful and flexible.
                    </p>
                </div>
            </div>
            <CardSpacer />
            <div className="mb-4 md:mb-6 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
                <div>
                    <h3 className="my-4 text-3xl leading-tight lg:text-4xl">
                        The Retail Media Display: Smart Ads, Instant Impact
                    </h3>
                    <p className="mb-4 text-lg leading-relaxed">
                        Engage shoppers with targeted ads while they shop.
                        Deliver real-time deals and product info. Turn every
                        cart into a dynamic retail media platform.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="relative overflow-hidden">
                        <Image
                            src={'/images/digi-cart-ads.webp'}
                            alt={`Cover Image for digiCart`}
                            className="object-cover"
                            width={1300}
                            height={630}
                        />
                    </div>
                </div>
            </div>
            <CardSpacer />
            <div className="mb-4 md:mb-6 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
                <div className="flex items-center justify-center">
                    <div className="relative overflow-hidden">
                        <ShieldIcon />
                    </div>
                </div>
                <div>
                    <h3 className="my-4 text-3xl leading-tight lg:text-4xl">
                        Protecting Your Business, Customers & Data with
                        Confidence.
                    </h3>
                    <p className="mb-4 text-lg leading-relaxed">
                        Fraud protection. Cyber secure by design. Upholding the
                        highest standards of data privacy.
                    </p>
                </div>
            </div>
        </div>
    )
}
