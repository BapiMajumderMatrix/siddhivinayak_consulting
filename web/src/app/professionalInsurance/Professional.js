'use client'
import React, { useEffect, useRef, useState } from 'react';
import InnerNav from '../components/Nav/InnerNav';
import '../aboutUs/about.css';
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import client from '../sanity/client';
import Footer from '../components/footer/Footer';
import Enquiry from '../components/Enquiry/Enquiry';
gsap.registerPlugin(ScrollTrigger);

function Professional() {
    const containerRef = useRef(null);

    useEffect(() => {
        let scroll;

        import('locomotive-scroll').then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                el: containerRef.current,
                smooth: true,
                direction: 'vertical',
            });

            return () => {
                if (scroll) {
                    scroll.destroy();
                }
            };
        });
    }, []);

    const [data, setData] = useState()
    useEffect(() => {
        const newData = async () => {
            try {
                const fetchData = await client.fetch(`*[_type == "insurence"] {
                  heading,
                  "banner": banner.asset->{
                      url
                  },
                  description
              }`);
                setData(fetchData[0]);
            } catch (error) {
                console.error('Error fetching data from Sanity:', error);
            }
        };
        newData();
    }, []);

    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
  
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
  
        window.addEventListener("resize", handleResize);
  
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
    }, []);
    return (
<div ref={containerRef} className="page-content">
  {windowWidth > 500 ? <InnerNav /> : <ClosiongNav />}
  
  <section className="gallery" data-scroll-section>
    <div className="col-12 about-img-c">
      <div
        className="about-img center"
        style={{
          backgroundImage: `url(${data && data.banner.url})`,
        }}
      >
        <h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">
          PROFESSIONAL INDEMNITY INSURANCE
        </h1>
      </div>
    </div>

    <div className="row posotion-container">
      <div className="col-12 about-left-content bg" style={{ paddingTop: '5rem' }}>
        <div className="title">Professional Indemnity Insurance</div>
        {/* <div className="heading top-heading">What is Professional Indemnity Insurance?</div> */}
        <p>
Professional Indemnity Insurance (PII) is vital for professionals such as doctors, architects, designers, and chartered accountants, as it protects them from financial loss due to legal claims arising from their professional services. Here are the key benefits highlighted in your text:

        </p>

        {/* <div className="heading">Advantages</div> */}

        <div className="p-container">
          {/* <div className="heading">Premium Investment Vehicle for Consistent Returns</div> */}
           <div className="heading">Benefits of Professional Indemnity Insurance</div>
    <ol>
      <li><strong>Financial Coverage:</strong> Provides protection against claims due to errors, omissions, or negligence in professional services, covering legal fees and other costs.</li>
      <li><strong>Legal Liability Protection:</strong> Covers liabilities from claims of injury to third parties or property damage caused by professional actions.</li>
      <li><strong>Coverage of Legal Expenses:</strong> Includes expenses for legal proceedings, including lawyer’s fees and court costs.</li>
      <li><strong>Focus on Professional Work:</strong> Allows professionals to concentrate on their work without the burden of legal worries.</li>
    </ol>

      <div className="heading">Considerations</div>
    <ul>
      <li>It is important to note that coverage is typically limited to activities conducted within a specific territory—in your case, India. Therefore, professionals should be aware of the geographical limitations of their policy.
</li>
    </ul>
    <p>For professionals considering this insurance, it would be beneficial to review different providers and policies, assessing coverage limits, exclusions, and premiums to ensure they choose the right protection for their specific needs.</p>
        </div>
      </div>
    </div>

    <Footer />
  </section>

  <Enquiry />
</div>

    );
}

// Export the component
export default Professional;
// 