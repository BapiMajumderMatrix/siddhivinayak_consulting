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
                            backgroundImage: `url("/images/professional-indemnity-insurance-finance-banner.jpg")`
                        }}><h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">Professional Indemnity Insurance</h1></div>
                    </div>
<div className="row posotion-container">
  <div className="col-12 about-left-content bg" style={{ paddingTop: '5rem' }}>
    <div className="title">Professional Indemnity Insurance</div>
    <p>
      Professional indemnity insurance is crafted to shield professionals and businesses against financial losses arising from allegations of negligence, errors or omissions in their services. It also covers legal costs and settlements if a client alleges that the professional's work caused harm to their finances or reputation.
    </p>

    <div className="heading">Why is Professional Indemnity Insurance an Important Purchase?</div>
    <ul>
      <li><strong>Protects your Financial Position if a Claim is Made:</strong> In the event of a claim or legal action against your business, professional indemnity insurance provides financial protection by covering legal expenses, settlement costs, or damages awarded.</li>
      <li><strong>Ensures Coverage for Businesses of All Sizes:</strong> Whether you run a small startup or a large corporation, professional indemnity insurance policy offers coverage tailored to your specific business needs, mitigating the risks associated with professional services.</li>
      <li><strong>Offers Peace of Mind Knowing your Organization is Protected:</strong> Having professional indemnity insurance in place offers peace of mind. It ensures that your organization is safeguarded against potential liabilities and unforeseen circumstances that could arise from professional mistakes or negligence.</li>
    </ul>
    <p>
      Regardless of your professional experience, the potential for mistakes always exists. In such cases, a professional indemnity insurance policy is essential. Hence, you may need this insurance if you are:
    </p>

    <ul>
      <li><strong>Handling Clients or Business Data:</strong> Businesses handling sensitive client or business data are susceptible to the risk of data breaches or loss. Professional indemnity insurance can alleviate the financial consequences associated with mishandling data.</li>
      <li><strong>Providing Advice or Guidance to Clients:</strong> Professionals providing advice or guidance face the risk of errors or omissions that may cause financial harm to clients. The professional indemnity insurance policy addresses claims arising from such situations.</li>
      <li><strong>Vulnerability to Claims Challenging Professional Work:</strong> Professionals face the risk of claims challenging the quality or effectiveness of their services. To mitigate this risk, professional indemnity insurance provides protection against financial losses resulting from legal actions initiated by dissatisfied clients.</li>
    </ul>

    <div className="heading">What does Professional Indemnity Insurance Cover?</div>
    <ul>
      <li>Costs and expenses including defence costs and legal costs</li>
      <li>Unintentional breach of contract</li>
      <li>Unintentional breach of confidentiality</li>
      <li>Defamation including libel and slander</li>
      <li>Fraud/Dishonesty of employees</li>
      <li>Infringement of intellectual property and copyright</li>
      <li>Loss of documents and data</li>
    </ul>

    <div className="heading">Professional Liability Insurance: Exclusions</div>
    <ul>
      <li><strong>War, Invasion, Acts of Foreign Enemies:</strong> Losses resulting from war, invasion, acts of foreign enemies, civil unrest, government actions, or related conditions.</li>
      <li><strong>Known or Reasonably Foreseeable Situations or Incidents:</strong> Situations that the insured knew about or could have reasonably foreseen at the start of the policy.</li>
      <li><strong>Previously Reported Situations or Incidents:</strong> Those already reported under any other insurance prior to the start of this policy.</li>
      <li><strong>Fines & Penalties:</strong> Does not cover fines, civil/criminal/contractual penalties, punitive or exemplary damages, or any uninsurable damages.</li>
      <li><strong>Losses from Specific Substances & Disease:</strong> Excludes losses from asbestos, talc, DES, dioxin, urea formaldehyde, AIDS, etc.</li>
      <li><strong>Losses due to Prohibited Acts or Omissions:</strong> Excludes losses from dishonest, fraudulent, criminal, or malicious acts; legal violations; or actions under the influence of substances.</li>
      <li><strong>Insolvency or Bankruptcy:</strong> Claims resulting from insolvency or bankruptcy of the insured are excluded.</li>
      <li><strong>General Liabilities:</strong> Regular accidents unrelated to professional services are not covered. General Liability Insurance is needed for such incidents.</li>
      <li><strong>Losses from Nuclear Risks:</strong> Excludes:
        <ul>
          <li>Ionizing radiation or radioactive contamination from nuclear fuel or waste.</li>
          <li>Hazardous properties of any nuclear assembly or component.</li>
          <li>Facilities or premises involved in nuclear energy or fuel handling.</li>
          <li>Any site covered by a local nuclear pool or association's insurance.</li>
        </ul>
      </li>
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