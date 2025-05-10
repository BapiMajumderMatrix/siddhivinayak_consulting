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

function Portfolio() {
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
          PORTFOLIO MANAGEMENT SERVICES (PMS)
        </h1>
      </div>
    </div>

    <div className="row posotion-container">
      <div className="col-12 about-left-content bg" style={{ paddingTop: '5rem' }}>
        <div className="title">DHUMVATI CONSULTING LLP</div>
        <div className="heading top-heading">PORTFOLIO MANAGEMENT SERVICES</div>
        <p>
          DHUMVATI CONSULTING LLP Portfolio Management Services offer you professional investment management aimed to work around your customized investment strategy. Whether you're planning for your retirement or looking to grow and secure your wealth, we allow you to keep your investments in line with your financial plan.
        </p>

        <div className="heading">Advantages</div>

        <div className="p-container">
          <div className="title">Premium Investment Vehicle for Consistent Returns</div>
          <p>
            Portfolio Management Service offers professional management of investments with an aim to deliver superior risk adjusted returns. It also saves clients from all monitoring hassles with regular reviews and risk management. All this makes it an ideal investment avenue for high net worth investors.
          </p>

          <div className="title">Professionally Managed Quality Portfolio</div>
          <p>
            The portfolio is managed by seasoned professionals who have considerable experience in equity markets. They manage the portfolio adhering to the strategy communicated to the clients.
          </p>
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
export default Portfolio;
// 