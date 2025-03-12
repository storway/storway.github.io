import Image from 'next/image'
import { StorwayLogo } from './icons/StorwayLogo'
import { CardSpacer } from './spacer/CardSpacer'

interface HeroPostProps {
    scrollToContact: () => void
}

export function HeroPost({ scrollToContact }: HeroPostProps) {
    return (
        <section className="">
            <div className="md:py-22 relative grid h-screen items-center gap-14 px-6 py-32 md:grid-cols-2 md:px-24 lg:gap-6 lg:py-28">
                <div className="flex flex-col items-start justify-start space-y-4">
                    <div className="space-y-2">
                        {/* <div className="flex  justify-start items-center gap-2">
              <div className="h-12 sm:h-20">
                <StorwayLogo />
              </div>
              <h1 className="text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl">
                Storway
              </h1>
            </div> */}
                        <h1 className="text-5xl font-semibold">
                            Turn your clients into VIPs with our DigiCart
                        </h1>
                        <p className="text-muted-foreground max-w-[600px] md:text-xl">
                            No more waiting. Instant info. Exclusive deals.
                        </p>
                        <p className="text-muted-foreground max-w-[600px] md:text-xl">
                            A VIP experience every time you shop.
                        </p>
                    </div>
                    <div className="mt-12 flex gap-4 min-[400px]:flex-row">
                        <div
                            className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-transparent bg-primary px-6 py-2"
                            onClick={scrollToContact}
                        >
                            <p className="text-nowrap text-xl text-white">
                                Contact us
                            </p>
                        </div>
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
            <div className="mx-auto mt-10 bg-gray-200 px-6 py-32 md:px-24">
                <div
                    id="learn-more-section"
                    className="mb-6 flex items-center justify-center sm:mb-16"
                >
                    <h2 className="text-2xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
                        Your Shopping, Reinvented.
                    </h2>
                </div>
                {/* VIPs */}
                <div className="mb-4 md:mb-6 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
                    <div>
                        <h3 className="mb-4 text-3xl leading-tight lg:text-4xl">
                            VIP Shopping, Simplified
                        </h3>
                        <p className="mb-4 text-lg leading-relaxed">
                            Give your customers the experience they deserve with
                            our smart tablet system. Just grab a cart, attach
                            the tablet, scan items, pay, and go. Enjoy priority
                            service, personalized offers, and a seamless
                            journey—shopping has never been this effortless!
                            {/* Give your customers the shopping experience they deserve. With our
              smart tablet system, every shopper enjoys priority service,
              personalized offers, and total control over their journey.
              Shopping has never felt this exclusive! */}
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
                </div>
                <CardSpacer />
                <div className="mb-4 md:mb-6 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
                    <div className="flex items-center justify-center">
                        <div className="relative overflow-hidden">
                            <Image
                                src={'/images/digi-cart-click.webp'}
                                alt={`Cover Image for digiCart ads`}
                                className="object-cover"
                                width={1300}
                                height={630}
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className="my-4 text-3xl leading-tight lg:text-4xl">
                            {/* Designed for Any Cart, Ready for Every Shopper. */}
                            The DigiCart: Smart, Seamless, and Flexible
                        </h3>
                        <p className="mb-4 text-lg leading-relaxed">
                            Our tablet adapts to any cart, ensuring a perfect
                            fit every time. Whether in a supermarket, wholesale
                            store, or convenience shop, the VIP experience stays
                            effortless for every shopper.
                            {/* Our tablet seamlessly adapts to any trolley handle, ensuring a
              perfect fit no matter the cart type. Whether in a supermarket,
              wholesale store, or convenience shop, the VIP experience stays
              smooth and effortless for every customer. */}
                        </p>
                    </div>
                </div>
                <CardSpacer />
                <div className="mb-4 md:mb-6 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
                    <div>
                        <h3 className="my-4 text-3xl leading-tight lg:text-4xl">
                            The Retail Media Display: Smart Ads, Instant Impact
                            {/* No more waiting. Instant info. Exclusive deals. */}
                        </h3>
                        <p className="mb-4 text-lg leading-relaxed">
                            Engage shoppers with targeted ads while they scan
                            and shop. Our trolley-mounted tablet delivers
                            real-time deals, product info, and seamless
                            checkout—turning every cart into a dynamic retail
                            media platform.
                            {/* Say goodbye to long checkout lines! Our trolley-mounted tablets
              let customers scan and pay on the go, access real-time product
              details, and unlock special offers—right when they need them.
              Fast, smart, seamless. */}
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
            </div>
        </section>
    )
}
