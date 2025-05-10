import React from 'react'
import Professional from './Professional'
export async function generateMetadata() {
  return {
    title: 'Professional Indemnity Insurance',
    description: 'Dhumavati Consulting LLP offers Professional Indemnity Insurance to safeguard professionals from financial loss due to legal claims arising from their services.',

    alternates: {
      canonical: 'https://example.com/professional-indemnity-insurance',
      languages: {
        'en-US': 'https://example.com/en-US',
        'de-DE': 'https://example.com/de-DE',
      },
    },

    openGraph: {
      title: 'Professional Indemnity Insurance - Dhumavati Consulting LLP',
      description: 'Protect your professional reputation and financial well-being with Professional Indemnity Insurance from Dhumavati Consulting LLP.',
      url: 'https://example.com/professional-indemnity-insurance',
      siteName: 'Dhumavati Consulting LLP',
      images: [
        {
          url: 'https://example.com/images/professional-indemnity-insurance-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Professional Indemnity Insurance',
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
      title: 'Professional Indemnity Insurance - Dhumavati Consulting LLP',
      description: 'Secure your professional career with the right protection. Get Professional Indemnity Insurance from Dhumavati Consulting LLP.',
      siteId: '1467726470533754880',
      creator: '@dhumavati_llp',
      creatorId: '1467726470533754880',
      images: ['https://example.com/images/professional-indemnity-insurance-twitter.jpg'],
    },
  };
}

const page = () => {
  return (
    <div>
      <Professional/>
    </div>
  )
}

export default page
