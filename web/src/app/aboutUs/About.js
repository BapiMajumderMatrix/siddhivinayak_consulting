'use client'
import React, { useEffect, useRef , useState } from 'react';
import './about.css';
import InnerNav from '../components/Nav/InnerNav';
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { PortableText } from "@portabletext/react";
import client from '../sanity/client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap';
import Image from 'next/image';
import owner1 from '../../../public/images/owner1.jpg'
import link from '../../../public/images/linkdn.svg'
import owner2 from '../../../public/images/owner2.svg'
import Footer from '../components/footer/Footer';
import Enquiry from '../components/Enquiry/Enquiry';
import reach from './reach.jpg'
import dc from './dc.jpg'
gsap.registerPlugin(ScrollTrigger);

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
    const [data, setData] = useState()
    useEffect(() => {
        const aboutData = async () => {
            try {
                const about = await client.fetch(`*[_type == "about"] {
                    seoTitle,
                    aboutHeading,
                    "aboutBanner": aboutBanner.asset->{
                        url
                    },
                    aboutDescription
                }`);
                setData(about[0]);
            } catch (error) {
                console.error('Error fetching data from Sanity:', error);
            }
        };
        aboutData();
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
                        <div className="about-img center"  style={{
            backgroundImage: `url(${data && data.aboutBanner.url})`,
          }}>  <h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">About Us</h1> </div>
                    </div>
                <div >
                <div className="row posotion-container" >
                    <div className="col-12 about-left-content bg" style={{paddingBottom:'0'}}>
                        <div className='title'>About Us</div>
                        <div className='heading top-heading' >Welcome to Dhumavati Consulting LLP!</div>
                        
                        <p>We’re thrilled to have you here! Our team is passionate about providing a wide array of financial and insurance services, all tailored to meet the unique needs of our clients. Our approach is simple: to empower individuals and businesses with expert guidance and innovative solutions that make a difference</p>
                        
                    </div>
                    
                    <div className="col-10 about-left-content bot-left p0 bg">
                        
                       <div>
  <div className="heading">Unlocking Investment Potential: Selling Unlisted Shares</div>
  <p>“Where exclusive opportunities meet informed decisions.”</p>
  <p>
    Dive into the world of exclusive investment opportunities with us! We specialize in the purchase and sale of unlisted shares, opening doors to unique possibilities that aren’t available on public exchanges. Whether you're a seasoned investor or just starting out, we’re here to guide you through every step of the process, helping you make informed decisions that align with your financial goals.
  </p>

  <div className="heading">Building Dreams: Construction Finance Services</div>
  <p>“Your vision, our financial foundation.”</p>
  <p>
    Building your dreams? Let us help you lay the financial foundation! Our experienced team is dedicated to providing comprehensive financing solutions tailored specifically for your construction projects. We know the ins and outs of the construction industry, and we’re committed to navigating the complexities to secure the funding you need. With us by your side, you can focus on what you do best—bringing your vision to life!
  </p>

  <div className="heading">Safeguarding Your Future: Business Insurance Services</div>
  <p>“Protection that empowers your business journey.”</p>
  <p>
    Your business deserves the best protection, and we’re here to deliver just that! Safeguarding your company from potential risks is our top priority. We offer a diverse range of insurance services, including:
  </p>
  <ul>
    <li><strong>Professional Indemnity Insurance:</strong> Protect yourself from claims of negligence or breach of duty.</li>
    <li><strong>Product Liability Insurance:</strong> Ensure your products are covered against potential claims.</li>
    <li><strong>Commercial General Liability Insurance:</strong> Shield your business from various liabilities.</li>
    <li><strong>Art Insurance:</strong> Protect your valuable art pieces with specialized coverage.</li>
  </ul>
  <p>
    We take the time to truly understand your unique insurance needs, crafting customized solutions that provide peace of mind and security for your assets. With us, you can focus on growing your business, knowing that you’re well-protected!
  </p>
<div className="center">
                <Image src={dc} width={700} height={500} className='auto-img'/>
                </div>
  <div className="heading">Our Commitment</div>
  <p>
    We are dedicated to delivering exceptional service and building lasting relationships with our clients. Transparency, integrity, and a client-first approach guide everything we do.
  </p>

  <div className="heading">Contact Us</div>
  <p>
    If you have any questions or want to learn more about our services, don’t hesitate to reach out. We’re here to help!
  </p>
</div>

                        <div className='p-container' >
                            <div className="blue-container row disappear" data-scroll data-scroll-className="appear" data-scroll-repeat="true" style={{ marginTop: '5rem' }}>
                                <div className='col-3 center res-100'> <Image src={owner1} height={170} width={170} className='ceo-img'  alt='image'/> </div>
                                <div className='col-8 blue-p' >
                                    <div className='company-person'> <h6 >Manas Survee </h6><Image src={link} height={30} width={30}  alt='image'/></div>
                                    
                                    <p className='position'>CEO of Dhumavati Consulting LLP</p>
                                    <p>He has over 16 years of experience in Real Estate and Finance. The years have added to the expertise he has in the field. In his time of work, he has handled various large projects benefitting groups of people at the same time. Through this platform, he aims to facilitate the exchange of opportunities between investors and buyers of hospitals. He is a delight to work with and happens to be great at managing people and closing deals!</p>
                                </div>
                            </div>
{/* 
                            <div className="blue-container row disappear" data-scroll data-scroll-className="appear" data-scroll-repeat="true" style={{marginTop:'2rem'}}>
                                <div className='col-3 center res-100'> <Image src={owner2} height={170} width={170} className='ceo-img' alt='image' /> </div>
                                <div className='col-8 blue-p'>
                                <div className='company-person'> <h6 >Sanjiv Swarup</h6><Image src={link} height={30} width={30}  alt='image'/></div>
                                    <p className='position'>Management Consultant </p>
                                    <p>The man with over 30 years of experience has been and is an important guiding factor for the company and its team. Educated in Law, Economics, Accounting, and Finance from reputed institutes, there is no gap that he can’t fill. His knowledge and wisdom are ever-evolving which enables the company to grow and achieve goals!</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                </div>
                <div className="center">
                <Image src={reach} width={1000} height={700} className='auto-img'/>
                </div>
                <Footer/>
            </section>
            <Enquiry/>
        </div>
    );
}

export default page;
