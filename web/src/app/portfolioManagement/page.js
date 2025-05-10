import React from 'react'
import Portfolio from './Portfolio'
export async function generateMetadata() {
  return {
    title: 'Portfolio Management Services',
    description: 'Dhumavati Consulting LLP offers professional Portfolio Management Services to help individuals and institutions optimize their investments and achieve financial growth.',

    alternates: {
      canonical: 'https://example.com/portfolio-management',
      languages: {
        'en-US': 'https://example.com/en-US',
        'de-DE': 'https://example.com/de-DE',
      },
    },

    openGraph: {
      title: 'Portfolio Management Services - Dhumavati Consulting LLP',
      description: 'Maximize your investment potential with expert Portfolio Management Services tailored to your financial goals and risk tolerance.',
      url: 'https://example.com/portfolio-management',
      siteName: 'Dhumavati Consulting LLP',
      images: [
        {
          url: 'https://example.com/images/portfolio-management-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Portfolio Management Services',
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
      title: 'Portfolio Management Services - Dhumavati Consulting LLP',
      description: 'Enhance your investment strategy with professional Portfolio Management Services from Dhumavati Consulting LLP.',
      siteId: '1467726470533754880',
      creator: '@dhumavati_llp',
      creatorId: '1467726470533754880',
      images: ['https://example.com/images/portfolio-management-twitter.jpg'],
    },
  };
}


const page = () => {
  return (
    <div>
      <Portfolio/>
    </div>
  )
}

export default page
