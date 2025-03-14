// import RootLayout from './[locale]/layout';

import { redirect } from "next/navigation";
import { Metadata } from "next";
import { SITE_CONFIG, SUPPORTED_LOCALES } from "./config/config";


export function generateStaticParams() {
    return SUPPORTED_LOCALES.map((locale: any) => ({ locale }));
}

type Params = {
  params: {
    locale:string;
  };
};

export default function NotFound( {params} : Params) {
  
  return (
        <main> 
            <section className="section md:py-18 flex w-full items-center justify-center bg-gray-200 py-32" id="home" aria-label="hero">
                <div className="container mt-4">
                    <div className='content-center mb-4'>
                      <img className="m-auto" src="/assets/images/404.webp" width={400} title="error" alt="storway not found"/>
                    </div>
                    <h1 className='mt-4'>
                      404 - Page Not Found :(
                    </h1>
                    <p>The page you are looking for does not exist.</p>
                </div>
            </section>
        </main>
  );
}




export function generateMetadata({ params }: Params): Metadata {
  const title = SITE_CONFIG.defaultTitle;
  const description = SITE_CONFIG.defaultDescription;
  // const previousImages = (await parent).openGraph?.images || []
  const canonicalUrl = `https://${SITE_CONFIG.domain}/not-found/`;

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
      siteName: "Pixium Digital",
      images: [`https://${SITE_CONFIG.domain}/assets/images/digi-cart.webp`]
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      site: canonicalUrl,
      description: description,
      images: [`https://${SITE_CONFIG.domain}/assets/images/digi-cart.webp`]
    },
  };
}