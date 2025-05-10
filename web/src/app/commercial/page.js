import React from 'react'
import Commercial from './Commercial';
export async function generateMetadata() {
  return {
    title: 'Commercial General Liability Insurance ',
    description: 'Protect your business from a variety of risks with Commercial General Liability Insurance. Coverage includes bodily injury, property damage, and product liability.',
    
    alternates: {
      canonical: 'https://example.com/commercial-general-liability-insurance',
      languages: {
        'en-US': 'https://example.com/en-US/commercial-general-liability-insurance',
        'de-DE': 'https://example.com/de-DE/commercial-general-liability-insurance',
      },
    },
    
    openGraph: {
      title: 'Commercial General Liability Insurance ',
      description: 'Get comprehensive protection for your business with CGL insurance. Covers bodily injury, property damage, product liability, and more.',
      url: 'https://example.com/commercial-general-liability-insurance',
      siteName: 'Dhumavati Consulting LLP',
      images: [
        {
          url: 'https://example.com/images/cgl-insurance-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Commercial General Liability Insurance',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },

    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    twitter: {
      card: 'summary_large_image',
      title: 'Commercial General Liability Insurance',
      description: 'Protect your business from various risks with Commercial General Liability Insurance. Learn more about coverage options.',
      siteId: '1467726470533754880',
      creator: '@dhumavati_llp',
      creatorId: '1467726470533754880',
      images: ['https://example.com/images/cgl-insurance-twitter.jpg'],
    },
  };
}

const page = () => {
  return (
    <div>
      <Commercial/>
    </div>
  )
}

export default page
