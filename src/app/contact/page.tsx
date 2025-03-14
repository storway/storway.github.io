import { Metadata } from 'next';
import ContactForm from '../_components/contactForm/ContactForm'
import { SITE_CONFIG, SUPPORTED_LOCALES } from '../config/config';

export function generateStaticParams() {
    return SUPPORTED_LOCALES.map((locale: any) => ({ locale }));
}



export default async function Page() {
    return (
        <main>
            <ContactForm />
        </main>
    )
}



export function generateMetadata(): Metadata {
    const title = 'Contact Us | ' + SITE_CONFIG.name;
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