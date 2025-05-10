import React from 'react'
import Insurance from './Insurence';
export async function generateMetadata() {
  return {
    title: 'Insurance Services',
    description: 'Explore a wide range of insurance services offered by Dhumavati Consulting LLP to secure your business and personal needs.',

    alternates: {
      canonical: 'https://example.com/insurance',
      languages: {
        'en-US': 'https://example.com/en-US',
        'de-DE': 'https://example.com/de-DE',
      },
    },

    openGraph: {
      title: 'Insurance Services ',
      description: 'Discover various insurance services including professional indemnity, cyber insurance, and more, to protect your business.',
      url: 'https://example.com/insurance',
      siteName: 'Dhumavati Consulting LLP',
      images: [
        {
          url: 'https://example.com/images/insurance-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Insurance Services',
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
      title: 'Insurance Services - Dhumavati Consulting LLP',
      description: 'Protect your business and assets with the right insurance policies, offered by Dhumavati Consulting LLP.',
      siteId: '1467726470533754880',
      creator: '@dhumavati_llp',
      creatorId: '1467726470533754880',
      images: ['https://example.com/images/insurance-twitter.jpg'],
    },
  };
}

const page = () => {
  return (
    <div>
      <Insurance/>
    </div>
  )
}

export default page
