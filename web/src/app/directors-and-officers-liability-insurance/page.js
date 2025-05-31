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
                            backgroundImage: `url("/images/directors-and-officers-liability-insurance-banner.jpg")`
                        }}><h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">Commercial General Liability Insurance</h1></div>
                    </div>
<div className="row posotion-container">
  <div className="col-12 about-left-content bg" style={{ paddingTop: '5rem' }}>
    <div className="title">Directors and officers Liability Insurance</div>

    <p>Directors, officers, and senior executives against allegations made by shareholders, employees, regulators, or third parties. It also covers settlements, judgments, and monetary damages resulting from such claims.</p>

    <div className="heading">What Does Directors and Officers Policy Cover?</div>

    <p>There are two primary clauses under the D&O Insurance policy, with the option of selecting a third clause, following which the insured gets coverage:</p>

    <div className="heading">Side A: Protection for Directors and Officers</div>

    <p>This insurance protects individual directors and officers if they're personally sued. It applies when the company can't provide legal protection or doesn't have the permit to do so. There's no cost-sharing, and it covers their assets.</p>

    <p><strong>Example of Side A Claim:</strong>  Imagine Surekha, the CEO of a tech company, accused of improper financial decisions harming stakeholders. The stakeholders personally sued Surekha for her actions.</p>

    <p>However, the company's financial situation is shaky, and it can't afford to cover Surekha's legal expenses. In this situation, Side A insurance steps in to protect Surekha. It covers her legal costs entirely, ensuring her personal assets are safe.</p>

    <div className="heading">Side B: Company Reimbursement</div>

    <p>If the company pays legal expenses for its directors and officers who are personally sued, this policy reimburses those costs. It also reimburses if the company pays on behalf of an officer or director to a third party.</p>

    <p><strong>Example of Side B Claim:</strong>  Manas, a Chief Financial Officer (CFO), faces a lawsuit against him on the allegation of financial misconduct. To protect Manas’s reputation and interests, the company pays his substantial legal fees during the lawsuit.</p>

    <p>Fortunately, the company chose the Side B clause while purchasing Directors and Officers Insurance. This policy reimburses the company for its legal expenses while defending Manas. It also helped the company recover the costs it paid on Manas’s behalf, reducing the financial burden on the organization.</p>

    <div className="heading">Side C: Entity Securities Coverage</div>

    <p>Protects the company when a claim is made directly against it for securities litigation claims. Insured individuals can claim against the company itself for wrongful acts in connection with the trading of its securities.</p>

    <p><strong>Example:</strong> A leading tech company specialising in software development faced securities litigation over allegations of misrepresentation and fraud in its securities trading. As legal costs rose, the company used Side C coverage from its directors and officers policy to file a claim. The policy covered defense costs, settlements, and judgments, easing the financial burden and maintaining stakeholder confidence.</p>

    <div className="heading">What are the Add-Ons Under the Directors and Officers Insurance Policy?</div>

    <p>Here are a few common coverages provided under the D&O policy:</p>

    <ul>
      <li>Emergency Costs: It covers immediate expenses incurred during unexpected crises, such as legal fees and crisis management costs.</li>
      <li>Crisis Response: This add-on includes support for managing and responding to crises effectively, safeguarding the company's reputation.</li>
      <li>Mitigation and Avoidance Services: It offers services to help prevent issues and mitigate potential risks.</li>
      <li>Assets and Liberty Costs: This add-on covers expenses related to protecting personal assets and liberty when directors or officers are sued personally.</li>
      <li>Kidnap Response: This add-on assists in responding to kidnapping incidents involving directors or officers.</li>
      <li>New Subsidiaries: When the company establishes a new branch, Directors and Officers Insurance (D&O Policy) extends coverage to these entities.</li>
      <li>Employment Practice Liability: This extension covers claims related to employment practices, such as wrongful termination, discrimination, and harassment.</li>
    </ul>

    <div className="heading">What Does a Directors & Officers Policy Not Cover?</div>

    <p>Here are a few common exclusions under D&O Liability Insurance Coverage (D&O policy):</p>

    <ul>
      <li>Dishonest Acts: The policy typically does not cover intentionally dishonest or fraudulent actions by directors or officers.</li>
      <li>Fines and Penalties: The policy generally excludes fines and penalties imposed by regulatory bodies or authorities.</li>
      <li>Insured v Insured: Directors and Officers Insurance often excludes claims brought by one insured party against another within the same organisation.</li>
      <li>Bodily Injury/Property Damage: It usually excludes bodily injury, property damage, and pollution-related claims.</li>
      <li>Prior and Pending Litigations: Director and Officers liability insurance does not cover claims and lawsuits filed before the policy's retroactive date.</li>
      <li>Proprietary Information, Trade Secrets, and Intellectual Property: The policy excludes claims related to the misuse or theft of proprietary information, trade secrets, or intellectual property.</li>
    </ul>

    <p>Note: Exclusions under the D and O insurance vary from insurer to insurer.  Pl call us for details.</p>

    <div className="heading">Why is Directors and Officers Insurance Required?</div>

    <p><strong>The Problem</strong><br />
    Leading a company involves making critical decisions that carry significant risks. Directors and officers face constant pressure to steer the organisation toward success while navigating complex legal and regulatory landscapes. However, with this responsibility comes the potential for personal liability.</p>

    <p>In today's litigious environment, directors and officers are increasingly vulnerable to lawsuits. These lawsuits often allege wrongful acts such as judgment errors, breach of trust, and negligence.</p>

    <p><strong>The Solution</strong><br />
    To protect the interests of directors, officers, and the company itself, adopting robust risk management strategies is essential. One crucial aspect of this strategy is the adoption of Directors and Officers Insurance. This specialised policy provides financial protection against legal costs, settlements, and judgments from lawsuits against directors and officers.</p>

    <p>By investing in Directors and Officers Insurance, companies demonstrate their commitment to protecting their leadership team and ensuring the continuity of operations.</p>

    <div className="heading">What are the Common Causes for Lawsuits Against Directors and Officers?</div>

    <p>The directors and officers of a company can be sued for:</p>
    <ul>
      <li>Breach of Duty</li>
      <li>﻿﻿Fraud</li>
      <li>﻿﻿Misleading Statement.</li>
      <li>﻿﻿Employment Practices Issues</li>
      <li>﻿﻿Improper workplace conduct such as sexual harassment, failure to promote, etc</li>
      <li>﻿﻿Regulatory Violations</li>
      <li>﻿﻿Corporate Governance Issues</li>
      <li>﻿﻿Conflict of Interest.</li>
      <li>﻿﻿Negligence</li>
      <li>﻿﻿Libel or Slander.</li>
    </ul>

    <div className="heading">Who can Get Covered under D&O Liability Insurance?</div>

    <p>Here is a list of people who can get covered under the Director & Officers liability policy or D&O Insurance:</p>
    <ul>
      <li>Company Secretaries: The director and officer insurance includes professionals responsible for handling a company's legal and administrative matters, such as compliance with regulations and record-keeping.</li>
      <li>﻿﻿Legal Heirs: The policy extends coverage to the legal heirs of directors and officers. It protects them in case of legal claims or disputes.</li>
      <li>﻿﻿Directors: Directors who serve on a company's board are a key focus of Directors and Officers Insurance, as they often face personal liability for their decisions and actions.</li>
      <li>Employed Lawyers: Directors Liability Insurance extends coverage to in-house lawyers, safeguarding them as they provide legal counsel to the organisation.</li>
      <li>﻿﻿Estate Representatives: Representatives handling the affairs of deceased directors or officers can benefit from D&O Insurance coverage while managing any legal issues.</li>
      <li>﻿﻿Officers: Officers in managerial or supervisory positions within the company can be protected by Directors and Officers Insurance, safeguarding their assets.</li>
      <li>﻿﻿Spouses: In some cases, the spouses of directors and officers may also receive coverage, especially when they are involved in the company's affairs or hold positions.</li>
    </ul>

    <p>Note: People eligible to get covered under the D&O Insurance policy vary from insurer to insurer.</p>
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