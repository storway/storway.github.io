import { Metadata } from 'next';
// import ContactForm from '../_components/contactForm/ContactForm'
import { SITE_CONFIG, SUPPORTED_LOCALES } from '../config/config';
import { About } from './About';
import { PreFooter } from '../_components/prefooter';
import { FullImageSection } from '../_components/full-image-section';
import { KeyBenefit } from '../_components/keybenefit';

export function generateStaticParams() {
    return SUPPORTED_LOCALES.map((locale: any) => ({ locale }));
}



export default async function Page() {
    return (
        <main>
            {/* <ContactForm /> */}
            <About />
            <FullImageSection />
            <section className='pb-32 pt-24'>
              <div className="mx-auto max-w-6xl px-6 py-16 text-center">
                <h2 className="text-5xl md:text-7xl font-playfair italic mb-12 text-center text-secondary">
                    Where Technology Meets the Aisle
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg">
                    Storway transforms traditional carts into connected, data-driven touchpoints. With intuitive interfaces for shoppers and a robust platform for retailers, we enable:
                    <ul>
                        <li>Real-time promotions and cross-sells</li>
                        <li>On-cart branded content</li>
                        <li>Streamlined checkout experiences</li>
                        <li>Actionable analytics and fleet management</li>
                    </ul>
                    The result?
                    Increased basket sizes, faster checkout times, and higher customer satisfaction.
                </p>

            </div>
            </section>
            <KeyBenefit />
            <PreFooter />
        </main>
    )
}



export function generateMetadata(): Metadata {
    const title = 'About Us | ' + SITE_CONFIG.name;
    const description = SITE_CONFIG.defaultDescription;
    // const previousImages = (await parent).openGraph?.images || []
    const canonicalUrl = `https://${SITE_CONFIG.domain}/`;

    return {
      title,
      description: description,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: title,
        type:"website",
        description: description,
        url: canonicalUrl,
        siteName: SITE_CONFIG.name,
        images: [`https://${SITE_CONFIG.domain}/assets/images/digi-cart.webp`]
      },
      twitter: {
        card: "summary_large_image",
        title: title,
        site: canonicalUrl,
        description: description,
        images: [`https://${SITE_CONFIG.domain}/assets/images/digi-cart.webp`],
      },
    };
}