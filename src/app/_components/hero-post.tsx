import Image from 'next/image'
import { CardSpacer } from './spacer/CardSpacer'
import { ShieldIcon } from './icons/ShieldIcon'
import Link from 'next/link'
import { ContactButton } from './buttons/ContactButton'

export function HeroPost() {
    return (
        <section className="">
            <div className="md:py-22 relative grid h-screen items-center gap-14 px-6 py-32 md:grid-cols-2 md:px-24 lg:gap-6 lg:py-28">
                <div className="flex flex-col items-start justify-start space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-5xl font-semibold">
                            In store VIP shopping experience
                        </h1>
                        <p className="text-muted-foreground max-w-[600px] md:text-xl">
                            Cut the queue. Personalised information and advice.
                            Exclusive offers.
                        </p>
                    </div>
                    <div className="mt-12 flex gap-4 min-[400px]:flex-row">
                        <ContactButton />
                        <a
                            href="#learn-more-section"
                            className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-black px-6 py-2"
                        >
                            <p className="text-nowrap text-xl">Learn more</p>
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="relative overflow-hidden">
                        <Image
                            priority
                            src={'/images/digi-cart-handle.webp'}
                            alt={`Cover Image for digiCart`}
                            className="object-cover"
                            width={1300}
                            height={630}
                        />
                    </div>
                </div>
            </div>

            {/* Section Showcase */}
            <div className="mx-auto mt-10 bg-gray-50 px-6 py-32 md:px-24">
                <div
                    id="learn-more-section"
                    className="mb-6 flex items-center justify-center sm:mb-16"
                >
                    <h2 className="text-2xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
                        A smart trolley ...
                    </h2>
                </div>
                {/* VIPs */}
                <div className="mb-4 md:mb-6 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
                    <div>
                        <h3 className="mb-4 text-3xl leading-tight lg:text-4xl">
                            ... for effortless shopping
                        </h3>
                        <p className="text-lg leading-relaxed">Clip on,</p>
                        <p className="text-lg leading-relaxed">scan items,</p>
                        <p className="text-lg leading-relaxed">
                            keep them in your cart,
                        </p>
                        <p className="text-lg leading-relaxed">and pay.</p>
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
                </div>
                <CardSpacer />
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
                        <p className="text-lg leading-relaxed">
                            Light, durable, flexible, and easy to clip-on.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Smart, powerful and flexible.
                        </p>
                    </div>
                </div>
                <CardSpacer />
                <div className="mb-4 md:mb-6 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
                    <div className="mb-4">
                        <h3 className="my-4 text-3xl leading-tight lg:text-4xl">
                            Retail Media Display: Smart Ads, Instant Impact
                        </h3>
                        <p className="text-lg leading-relaxed">
                            Engage shoppers with targeted ads while they shop.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Deliver real-time deals and product info.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Turn every cart into a dynamic retail media
                            platform.
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
                        <p className="text-lg leading-relaxed">
                            Fraud protection.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Cyber secure by design.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Upholding the highest standards of data privacy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
