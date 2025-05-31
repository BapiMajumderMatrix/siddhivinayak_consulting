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
                            backgroundImage: `url("/images/commercial-general-liability-insurance-banner.jpg")`,
                        }}><h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">Commercial General Liability Insurance</h1></div>
                    </div>
<div className="row posotion-container">
  <div className="col-12 about-left-content bg" style={{ paddingTop: '5rem' }}>
    <div className="title">Commercial General Liability Insurance</div>

    <div className="heading">Commercial General Liability Insurance Coverage</div>
    <p>
      Understand what Commercial General Liability Insurance covers and what it doesn't, so you can make informed decisions to protect your business effectively.
    </p>

    <div className="heading">What is Covered?</div>
    <ul>
      <li>Injury on insured premises: If a customer or business partner sustains an injury on the company's premises, the company is responsible for related costs. CGL policy offers financial coverage to address these costs.</li>
      <li>Injury by a product: The company is accountable if manufactured products lead to bodily harm to customers. This policy provides financial coverage in such cases.</li>
      <li>Property damage: If a company's product or service causes property damage to third parties, this insurance policy covers the related expenses.</li>
      <li>Advertising error: Miscommunication leading to customer losses, like inadequate warnings or copyright issues, is covered by commercial general liability insurance.</li>
      <li>Completed operation: Certain policies extend coverage even after project completion. For instance, if a completed construction project later causes problems and damages, the policy covers the associated costs.</li>
      <li>Injury by services: If a customer sustains bodily injury due to errors or omissions in services rendered by the company, commercial general liability insurance coverage offers financial coverage for related expenses.</li>
    </ul>
    <p>
      Note: Coverage provided under Commercial General Liability Insurance Policy varies from one insurer to another. Coverage provided by the insurance company depends on the terms and conditions.
    </p>

    <div className="heading">What is Not Covered?</div>
    <ul>
      <li>Product recall: Coverage is not extended to expenses related to product recalls, which might arise due to defects or safety concerns.</li>
      <li>Deliberate non-compliance: Losses resulting from deliberate, willful, or intentional violations of statutory regulations are not covered under this liability insurance.</li>
      <li>Cost of reconditioning/repair: This policy does not include costs for reconditioning or repairing products.</li>
      <li>Product guarantee claims: Claims stemming from product guarantees are excluded from coverage.</li>
      <li>Pure financial loss: Pure financial Losses, like loss in market share, are not covered under a commercial general liability insurance policy.</li>
      <li>Damage to their own product: The policy does not cover damage to the insured's products.</li>
    </ul>
    <p>
      Note: Exclusions within commercial general liability insurance policies can differ significantly between insurers. To tailor a plan that meets your business's specific needs, you can connect with our team of experts. We're here to help you craft a customised insurance solution that offers comprehensive coverage.
    </p>

    <div className="heading">Commercial General Liability Insurance: Add-ons</div>
    <p>Here are the add-ons that insurance companies provide with a commercial general liability insurance policy (CGL insurance):</p>
    <ul>
      <li>Act of God: This coverage protects against damages caused by natural disasters or other uncontrollable events like earthquakes or hurricanes.</li>
      <li>Food & Beverage Liability: This insurance shields businesses from liability claims arising from food-related illnesses or injuries caused by consuming their products, typically vital for restaurants, caterers, or food manufacturers.</li>
      <li>Sudden & Accidental Pollution: This add-on is designed to cover unforeseen pollution events caused by business operations.</li>
      <li>Lift Liability: Lift Liability insurance safeguards businesses operating elevators or lifts from liability claims related to accidents or injuries occurring on their premises due to lift usage.</li>
    </ul>
    <p>
      Note: Add-ons provided under commercial general liability insurance coverage vary from insurer to insurer. To learn about the add-ons in detail, you can connect with our team of experts. We're here to assist you in developing a tailored insurance solution that provides extensive coverage.
    </p>

    <div className="heading">What Details Are Required to Buy a CGL Insurance Policy?</div>
    <p>Here are a few things that an insurer would require before selling Commercial General Liability Insurance:</p>
    <ul>
      <li>Size of Business</li>
      <li>Yearly Revenue</li>
      <li>Claim History</li>
      <li>Business Operations</li>
      <li>Previous Insurance Details, if any</li>
    </ul>
    <p>
      Note: These requirements may vary from insurer to insurer while selling the CGL policy.
    </p>

    <div className="heading">Who Gets Covered Under Commercial General Liability Insurance?</div>
    <p>Commercial General Liability policy provides coverage for the following:</p>
    <ul>
      <li>Sole Proprietors: Individuals operating businesses on their own, with full responsibility for their business's operations and liabilities.</li>
      <li>Partnerships, Joint Ventures, or Unincorporated Entities: Groups of individuals or entities working together on ventures, sharing responsibilities and potential liabilities.</li>
      <li>Employees: Those working within the organisation are covered for their actions within the scope of their job duties.</li>
      <li>Subsidiaries and Recently Established Entities: Newly formed or acquired organisations that fall under the operational and coverage scope of the parent company.</li>
      <li>Other Organisations: Encompasses a range of entities, excluding partnerships, joint ventures, or unincorporated entities, and includes a diverse array of incorporated organisations.</li>
    </ul>

    <div className="heading">Examples of Commercial General Liability Insurance</div>
    <p>Here are some examples of scenarios covered under a Commercial General Liability Insurance coverage:</p>
    <ul>
      <li>A customer slips and falls on a wet floor in your store, resulting in medical expenses and potential legal claims.</li>
      <li>While performing maintenance, an employee accidentally damages a client's property, such as breaking a window or spilling paint on furniture.</li>
      <li>A competitor sues your business for alleged defamation in an advertisement.</li>
    </ul>

    <div className="heading">Why is Commercial General Liability Insurance Coverage Required?</div>

    <div className="heading">The Problem</div>
    <p>
      In today's competitive business environment, companies are constantly exposed to various risks that could lead to costly legal battles and financial liabilities. The likelihood of lawsuits is substantial, from customer incidents on business premises to accusations of property damage attributable to products or services. Without adequate protection, businesses face the prospect of substantial financial strain and reputational damage arising from legal disputes.
    </p>

    <div className="heading">The Solution</div>
    <p>
      To address these challenges and ensure the financial stability of businesses, CGL insurance is essential.
    </p>
    <p>
      This insurance serves as a vital safeguard by providing coverage for legal expenses, settlements, or judgments resulting from lawsuits filed by third parties. It protects businesses against the potential financial devastation caused by liability claims related to bodily injury, property damage, or other legal disputes. Therefore, by investing in CGL policy, businesses can mitigate their risks, protect their assets, and preserve their reputation in the face of adversity.
    </p>
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