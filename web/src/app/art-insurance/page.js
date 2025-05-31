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

function page() {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);

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
        <div ref={containerRef} className='page-content'>
            {windowWidth > 500 ? (<InnerNav/>) : (<ClosiongNav/>)}
            <section className="gallery" data-scroll-section >
            <div className="col-12 about-img-c ">
                        <div className="about-img center" style={{
                            backgroundImage: `url("/images/art-insurance-banner.jpg")`
                        }}><h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">Art Insurance</h1></div>
                    </div>
<div className="row posotion-container">
  <div className="col-12 about-left-content bg" style={{ paddingTop: '5rem' }}>
    <div className="title">Art Insurance</div>
<p>Protect your most valuable art Get affordable Art Insurance cover today</p>
    <p>Your art is one of the most valuable assets you own. Paintings, sculptures, drawings or printmaking - every piece of art is precious. Protect your art pieces against risks and damage with Future Generali. And, never stress about your works of art again!</p>

    <div className="heading">What Items Does the Policy Cover?</div>

    <div className="subheading">Drawings and Paintings</div>
    <p>We know the effort that goes into creating a drawing or a painting. That’s why we’re here to protect it. Our insurance covers:</p>
    <ul>
      <li>Drawings made using charcoal, crayon, chalk, pastel, pencil, pen, or ink</li>
      <li>Paintings made using acrylics, gouache, ink, watercolor, or oils</li>
    </ul>

    <div className="subheading">Printmaking</div>
    <p>Art insurance protects printmaking items made from:</p>
    <ul>
      <li>Woodcuts or stencils</li>
      <li>Engraving</li>
      <li>Etching</li>
      <li>Screen-printing</li>
      <li>Lithography</li>
    </ul>

    <div className="subheading">Sculptures</div>
    <p>Our policy also covers your beloved sculptures from any damage or losses. The coverage includes:</p>
    <ul>
      <li>Bronze Sculptures</li>
      <li>Marble Sculptures</li>
      <li>Wooden Sculptures</li>
      <li>Clay Sculptures</li>
    </ul>

    <div className="heading">What is not covered?</div>
    <div className="subheading">EXCLUSIONS</div>
    <ul>
      <li>Loss or damage caused by wear and tear</li>
      <li>Damage caused purposely by the insured person out of malicious intent</li>
      <li>Consequential loss</li>
      <li>War or nuclear perils</li>
      <li>Any pre-existing damage</li>
    </ul>
  </div>
</div>

                <Footer />
            </section>
            <Enquiry/>
        </div>
    );
}

// Export the component
export default page;
// 