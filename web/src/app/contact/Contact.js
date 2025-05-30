'use client'
import React, { useEffect, useRef, useState } from 'react';
import '../aboutUs/about.css'
import './contact.css'
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap';
import Image from 'next/image';
import InnerNav from '../components/Nav/InnerNav';
import place from '../../../public/images/place.svg'
import mail from '../../../public/images/mail.svg'
import client from '../sanity/client';
gsap.registerPlugin(ScrollTrigger);
import Footer from '../components/footer/Footer';
import Enquiry from '../components/Enquiry/Enquiry';
function page() {

    const containerRef = useRef(null);
    const sectionRef = useRef(null);


    useEffect(() => {
        let scroll;
        import("locomotive-scroll").then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                el: containerRef.current,
                smooth: true,
                direction: 'vertical',
            });
        });
        return () => {
            if (scroll) scroll.destroy();
        }
    });

    const handleEmail = () => {
        window.location.href = 'mailto:sales@dconsult.in'; 
      };
    useEffect(() => {
        const pin = gsap.to(sectionRef.current, {
            y: 0,
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
            },
        });
        return () => {
            pin.kill();
        };
    }, []);
    const [data, setData] = useState()
    useEffect(() => {
        const newData = async () => {
            try {
                const fetchData = await client.fetch(`*[_type == "contact"] {
                    email,
                    "banner": banner.asset->{
                        url
                    },
                    address
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
        <div ref={containerRef} style={{position:'relative'}}>
            {windowWidth > 500 ? (<InnerNav/>) : (<ClosiongNav/>)}
            <section className="gallery" data-scroll-section >
            <div className="col-12 about-img-c ">
                    <div className="about-img center"  style={{
                            backgroundImage: `url(${data && data.banner.url})`,
                            backgroundPosition:'right'
                        }}><h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">Contact Us</h1></div>
                </div>
            <div className="row posotion-container">
                <div className="col-9 about-left-content bg res-100" style={{ paddingTop: '5rem' }}>
                    <div className='title'>Contact Us</div>

                    <div className='p-container top-heading'>
                        <p>If you are looking to expand your business and financial consultation then you knocked on the right door! Get in touch with us and we will suggest you the best solution for your company.</p>
                        <p className='contact-data' style={{marginTop:'2rem'}}><Image src={place} />{data && data.address}</p>
                        <p className='contact-data' style={{marginBottom:'1.5rem',cursor:'pointer'}} onClick={handleEmail}><Image src={mail}  alt='image'/>{data && data.email}</p>
                    </div>
                </div>
                <div className="col-7 about-left-content res-none">
                </div>
                <Footer/>
            </div>
            </section>
            <Enquiry/>
        </div>
    );
}

export default page;