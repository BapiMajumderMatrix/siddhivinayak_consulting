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

function Insurance() {
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
          CORPORATE CYBER INSURANCE
        </h1>
      </div>
    </div>

    <div className="row posotion-container">
      <div className="col-12 about-left-content bg" style={{ paddingTop: '5rem' }}>
        <div className="title">Corporate Cyber Insurance</div>
        {/* <div className="heading top-heading"></div> */}

        <p>
          Corporate cyber insurance policy covers your losses and business liability arising out of a cyber security breach. The policy offers complete insurance protection to your business against cyber or digital risks that can result in a financial loss to the insured and reputational loss to a third party because of a breach in the insured’s systems.
        </p>

        <div className="heading">Who needs Corporate Cyber Insurance?</div>
        <p>
          Today every organization is highly prone to cyber-attack/incidents such as- data alteration/deletion, cyber extortion for ransom from database encryption, network lockdown, system failure, system encryption, service unavailable, unauthorised access, fraudulent fund transfer and many more. Therefore, it is extremely necessary that the corporate sector should adopt this practice for insuring their cyber security regardless of the size of an organization. Besides, a cyber attack can result in data exploitation involving highly sensitive customer information, employees data, business or contract details, financial information, shareholders information and other important data. The insurance also pays for the costs incurred in restoration of such data or a legal liability arising out of a third party personal information being misused or leaked.
        </p>

        <div className="heading">Why you should Buy Corporate Cyber Insurance?</div>
        <p>
          Corporate Cyber insurance policy is comprehensive and flexible enough to fulfil your needs. We understand the importance of swift response and efficient service in handling claims, which makes it more practical to get Corporate Cyber insurance policy directly from us.

        </p>

        <div className="heading">Why do you need Corporate Cyber Insurance?</div>
        <p>
          It is extremely necessary that the corporates should adopt this policy in order to secure all their financial data, employees & customers’ data, programs, computer and network of an organization from the unauthorized access and exploitation.

        </p>
<p>Also, in case of a cyber attack there are high costs required to be incurred for forensics, investigation, ransom-ware, and losses related to business interruption of the insured post an attack. Implementation of corporate cyber security will not only minimize the risks of data breach but will also improve a firm’s mean-time to respond to an attack.</p>
        <div className="heading">What is covered by Corporate Cyber Insurance</div>
        <p>Below are the detailed inclusions and exclusions of our Corporate Cyber Insurance:</p>

        {/* <div className="heading">Inclusions</div> */}
        <ul>
          <li><strong>Inclusions</strong></li>
          <li><strong>Exclusions</strong></li>
        
        </ul>

        <div className="heading">Individual Security & Privacy Liability :</div>
        <p>The Insurer will pay the Loss arising out of a Security Breach and/or Privacy Breach by the Insured.</p>
        <div className="heading">Multimedia Liability:</div>
        <p>The Insurer will pay the Loss arising out of Multimedia Activities of the Insured.</p>
        <div className="heading">Corporate Security Liability: </div>
        <p>The Insurer will pay the Loss arising out of a Security Breach by the Insured that results in Unauthorized Disclosure of Corporate Information.
Incidental claim costs like ransom-ware, forensics and other such costs get covered in the policy.
</p>
<p>Corporate Cyber Insurance is a specialized insurance policy designed to protect businesses from losses and liabilities related to cyber security breaches. Here’s a summary of its features and importance.</p>

        <div className="heading">Overview of Corporate Cyber Insurance:
</div>
        <p>Coverage: Protects against financial losses stemming from data breaches, cyber-attacks, ransomware, unauthorized access, and various cyber security incidents.
Reputational Protection: Helps mitigate the reputational damage that can arise from breaches affecting sensitive data, such as customer and employee information.
</p>
        <div className="heading">Who Needs It?</div>
        <p>All Organizations: With the increasing frequency and sophistication of cyber-attacks, every organization—regardless of size—should consider this coverage. Industries dealing with sensitive data, including healthcare, finance, and retail, are particularly vulnerable.
</p>

        <div className="heading">Why It's Essential</div>
        <p>Financial Security: Covers costs associated with forensics, investigations, ransom payments, and losses from business interruptions caused by cyber incidents.
Regulatory Compliance: Helps companies meet legal obligations related to data protection and privacy laws.
</p>

        <div className="heading">Coverage Inclusions</div>
        <p>
         Security & Privacy Liability: Covers losses resulting from security breaches or privacy violations.
Multimedia Liability: Protects against liabilities arising from the business's multimedia activities.
Corporate Security Liability: Covers losses from breaches that lead to unauthorized disclosure of corporate information.

        </p>
        <div className="heading">Incidental Costs:</div>
        <p>
          Costs related to ransomware, forensic investigations, and other associated expenses are often included in the policy.

        </p>
        <div className="heading">Exclusions</div>
        <p>
         Specific exclusions can vary by provider but may include incidents due to intentional acts, known vulnerabilities not addressed, or certain types of cyber incidents that fall outside the policy parameters.
        </p>
      </div>
    </div>

    <Footer />
  </section>

  <Enquiry />
</div>


    );
}

// Export the component
export default Insurance;
// 