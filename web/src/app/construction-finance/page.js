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
                            backgroundImage: `url(${data && data.banner.url})`
                        }}><h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">Construction Finance</h1></div>
                    </div>
                <div className="row posotion-container" > 
    <div className="col-12 about-left-content bg" style={{ paddingTop: '5rem' }}>
        <div className='p-container'>
            <div className='title'>Developer Finance</div>
            <p>Real estate developers require constant financing for undertaking the construction and development of their projects. Timely and adequate access to capital is an important milestone in the project lifecycle, assisting the Real Estate developers to deliver their projects on time.</p>
            <p>We understand these needs and, therefore, provide construction finance or construction loans to real estate developers in select Indian cities. Our team of specialists understand and analyze your precise requirements and select the right loan product for your real estate development business. You can also customize your loan amount, tenure, moratorium, repayment frequency, and others as per the nature and status of your proposed project.</p>

            <div className='heading'>What is a Developer Finance and Construction Finance?</div>
            <p>A construction loan or construction finance is a special kind of loan sanctioned to real estate developers to develop or construct a new real estate project. We offer construction finance to individuals or firms engaged in the business of developing real estate projects. Also known as a building loan, our construction loans come with long repayment tenures and competitive interest rates.</p>
            <p>Developer finance can assist real estate developers in the following ways:</p>
            <ul>
                <li>Funding the construction of projects</li>
                <li>Acquiring plot and raw materials</li>
                <li>Paying contractors and labor</li>
                <li>Complete payment cycles</li>
                <li>Obtain permits and licenses</li>
                <li>Acquire development rights under Joint Venture / Joint Development arrangements</li>
                <li>Acquire projects from other developers/master developers</li>
            </ul>

            <div className='heading'>Features of Developer Finance</div>
            <p>As a real estate developer, you can apply for our Developer Finance / Construction Finance and fund all your financial requirements for developing a new real estate project. We offer construction finance for both residential and commercial projects. Below are a few prominent features of our construction loan:</p>
            <p><strong>Customizable Loan Offerings</strong><br />Our construction loans are highly customizable. You can select your loan amount, loan tenure, and repayment frequency as per the project’s requirement.</p>
            <p><strong>Loan Amount</strong><br />With our Construction Finance, you can get an adequate loan amount that can meet the funding requirements of various stages of your project construction/development.</p>
            <p><strong>Affordable Interest Rates</strong><br />Our construction loan interest rates are highly competitive. With affordable interest rates, we ensure that you don’t feel the burden of paying higher EMIs.</p>
            <p><strong>Efficient Processing</strong><br />We understand your business requirements and work along with you to structure a balanced funding proposition for your development/project need. It means that you won’t have to wait too much to start the construction of your project.</p>

            <div className='heading'>Our Advantages</div>
            <p>Below are the reasons to choose your developer finance/construction finance partner:</p>
            <ul>
                <li>Customizable solutions</li>
                <li>End-to-end financing</li>
                <li>Multiple repayment options</li>
                <li>Appropriate moratorium period</li>
                <li>Personalized approach</li>
            </ul>

            <div className='heading'>Developer Finance Eligibility</div>
            <p>We offer developer finance to real estate builders who can fulfill very simple eligibility criteria. The loan size, repayment schedule, loan tenure, asset cover, interest rate, and loan fees for our developer/construction loans are generally determined based on our evaluation of the real estate project and developer, as well as the existing market conditions. The facilities offered are priced on a Risk Based pricing model offering competitive terms.</p>
        </div>
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