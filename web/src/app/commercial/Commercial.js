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

function Commercial() {
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
          COMMERCIAL GENERAL LIABILITY INSURANCE
        </h1>
      </div>
    </div>

    <div className="row posotion-container">
      <div className="col-12 about-left-content bg" style={{ paddingTop: '5rem' }}>
        {/* <div className="title">DHUMVATI CONSULTING LLP</div> */}
        <div className="title">COMMERCIAL GENERAL LIABILITY INSURANCE</div>
        <p>
          Commercial General Liability Insurance (CGL) is an essential coverage for businesses, offering protection against a variety of risks. Here are key points regarding its benefits and coverage:
        </p>

        <div className="p-container">
          <div className="heading">Key Coverages:
</div>
          <ol>
            <li>Bodily Injury: Covers medical expenses and legal costs if someone is injured on your business premises or due to your operations.
</li>
<li>Property Damage: Protects against claims for damage caused by your business activities to someone else's property.</li>
<li>Personal Injury: Covers claims arising from non-physical harm, such as defamation or copyright infringement.</li>
<li>Product Liability: Provides coverage if a product sold by the business causes harm or property damage to a consumer.
</li>
          </ol>

          <div className="heading">Benefits</div>
          <ul>
            <li>Financial Protection: CGL can help pay for legal defense costs and settlements or judgments arising from claims, protecting your business from financial strain.
</li>
<li>Reputation Shield: Having CGL coverage may enhance your credibility and reassure customers and partners about the stability and responsibility of your business.
</li>
<li>Contractual Requirement: Many clients or vendors require CGL insurance to work with you, making it a necessary aspect of many business dealings.
</li>
          </ul>

          <div className="heading">Considerations:</div>
          <ul>
            <li>Review the specific terms and limits of the policy to ensure adequate coverage for your unique business needs.
</li>
<li>Consider additional endorsements or policies for specialized risks, such as errors and omissions or professional liability, that may not be covered under a standard CGL policy.
</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </section>
  <Enquiry />
</div>

  )
}

export default Commercial
