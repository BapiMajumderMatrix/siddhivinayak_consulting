'use client'
import React, { useEffect, useRef, useState } from 'react';
import InnerNav from '../components/Nav/InnerNav';
import '../aboutUs/about.css';
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { GrLike } from "react-icons/gr";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import client from '../sanity/client';
import Footer from '../components/footer/Footer';
import Enquiry from '../components/Enquiry/Enquiry';
import { FcApproval } from "react-icons/fc";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbDeviceMobilePin } from "react-icons/tb";
import { MdEditDocument } from "react-icons/md";
import { IoTimer } from "react-icons/io5";
gsap.registerPlugin(ScrollTrigger);
import { TbBusinessplan } from "react-icons/tb";
import { MdLockPerson } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
function Debt() {
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
                            DEBT
                        </h1>
                    </div>
                </div>

                <div className="row posotion-container">
                    <div className="col-12 about-left-content bg" style={{ paddingTop: '5rem' }}>
                        <div className="title">Business Loan</div>
                        {/* <div className="heading top-heading">What is Professional Indemnity Insurance?</div> */}
                        <p>Get best deals on Business Loans starting at 17% p.a. Compare offerings from a wide range of Banks/NBFCs to avail a Business Loan most suited to your needs.
                        </p>

                        {/* <div className="heading">Advantages</div> */}

                        <div className="p-container">
                            {/* <div className="heading">Premium Investment Vehicle for Consistent Returns</div> */}
                            <div className="heading">Get The Business Loan Of Your Choice With Andromeda</div>

                            <div className="debt-top">
                                <div>
                                    <div className='l'>
                                        <div className='icon'><FcApproval /></div>
                                    </div>
                                    <div className='r'>
                                        <h5>Quick Approvals</h5>
                                        <p>Get complete access to our in-house CRM to avail quick Business Loan approvals for your customers.</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='l'>
                                        <div className='icon'><GrLike /></div>
                                    </div>
                                    <div className='r'>
                                        <h5>Widest Choice For Best Deals</h5>
                                        <p>With over 125 lending partners, get the widest choice of Business Loans for your customers.</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='l'>
                                        <div className='icon'><RiSecurePaymentLine /></div>
                                    </div>
                                    <div className='r'>
                                        <h5>Secured Systems</h5>
                                        <p>Ensure maximum protection for your data, as well as your customers’, from online theft.</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='l'>
                                        <div className='icon'><TbDeviceMobilePin /></div>
                                    </div>
                                    <div className='r'>
                                        <h5>Easy Mobile Tracking</h5>
                                        <p>Track your customer’s Business Loan status efficiently, using our digital platform and in-house CRM.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="yellow-box">
                                <div className="heading">Business Loan Features and Benefits</div>
                                <p>Starting at 17% p.a.</p>
                                <div className="debt-bot">

                                    <div>
                                        <h5>Minimum Documentation</h5>
                                        <div className="icon"><MdEditDocument /></div>
                                        <p>Get a Business Loan without collateral or security, and with minimum to no paperwork.

                                        </p>
                                    </div>
                                    <div>
                                        <h5>Fixed Rate Of Interest</h5>
                                        <div className="icon"><MdLockPerson /></div>
                                        <p>Pay interest on Business Loans only on the principal amount outstanding.</p>
                                    </div>
                                    <div>
                                        <h5>Quick Turnaround Time</h5>
                                        <div className="icon"><IoTimer /></div>
                                        <p>Get a Business Loan disbursed into your current account, in a few hours to a few days.</p>
                                    </div>
                                    <div>
                                        <h5>Flexible End Use</h5>
                                        <div className="icon"><TbBusinessplan /></div>
                                        <p>Avail a Business Loan to meet your day-to-day expenses such as utility bills, buying machinery, setting up equipment, upgrading inventory, employee salaries, expansion, etc.</p>
                                    </div>
                                    <div>
                                        <h5>Flexible Payment Tenure</h5>
                                        <div className="icon"><MdCurrencyExchange /></div>
                                        <p>Enjoy a flexible repayment tenure on your Business Loan of up to 5 years.</p>
                                    </div>

                                </div>
                            </div>

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
export default Debt;
// 