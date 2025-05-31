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
                            backgroundImage: `url("/images/product-liability-banner.jpg")`
                        }}><h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">Product Liability Insurance</h1></div>
                    </div>
<div className="row posotion-container">
  <div className="col-12 about-left-content bg" style={{ paddingTop: '5rem' }}>
    <div className="title">Product Liability Insurance</div>
    <p>Protects against claims of injury or damage from your products.</p>

    <div className="heading">What is Product Liability Insurance?</div>
    <p>
      Product liability insurance is designed to protect businesses from financial losses due to claims or lawsuits that arise from issues with their products. If a product causes harm, injury, or damage to a person or property, this insurance helps cover the associated legal fees, medical bills, and compensation.
    </p>

    <div className="heading">Why Do You Need Product Liability Insurance in India?</div>

    <div className="subheading">Problem</div>
    <p>
      In India, businesses that manufacture, distribute, or sell products are at risk of facing legal claims if their products cause injury or damage. As consumer awareness grows, any flaw in a product's design, manufacturing, or labelling can lead to expensive legal battles. This is especially critical in industries such as electronics, food and beverages, pharmaceuticals, and consumer goods, where the stakes are high. Without proper protection, these legal claims can lead to significant financial strain, potentially threatening the survival of the business.
    </p>

    <div className="subheading">Solution</div>
    <p>
      Product liability insurance provides crucial protection for businesses against such risks. It covers the costs associated with legal defense, settlements, and compensation in cases where products are found to be defective. By securing this liability insurance, businesses can safeguard their financial health and continue operations without the threat of unexpected legal expenses. Additionally, having product liability insurance can enhance customer confidence, as it demonstrates a commitment to addressing any issues that may arise with their products.
    </p>

    <ul>
      <li>Protects from injury claims<br />Shields against claims alleging bodily harm caused by your products.</li>
      <li>Defends against lawsuits<br />Covers legal expenses if sued over product defects or failures.</li>
      <li>Safeguards your reputation<br />Ensures prompt resolution of issues, preserving trust and brand image.</li>
      <li>Secures your finances<br />Covers settlements and judgments, preventing financial strain or bankruptcy.</li>
      <li>Mitigates Recall Expenses<br />Covers the costs associated with product recalls, including notification, shipping, and disposal.</li>
    </ul>

    <div className="heading">What does Product Liability Insurance cover and exclude?</div>

    <div className="subheading">Coverages</div>

    <p><strong>Product injury</strong><br />
      This Product Liability Insurance coverage extends to attorney fees, settlements, and court judgments, addressing issues such as design flaws, manufacturing defects, inadequate warnings, and injuries caused by product use.
    </p>

    <p><strong>Product-related property damage</strong><br />
      Product Liability Insurance shields your business if a product you sell or manufacture causes damage to a customer's property, whether from defects or errors in the instruction manual.
    </p>

    <p><strong>Product-related illness</strong><br />
      Product Liability Insurance provides coverage for illnesses resulting from products sold or manufactured by your business, such as expired food or allergenic beauty products.
    </p>

    <p><strong>Products causing wrongful death</strong><br />
      Product Liability Insurance addresses lawsuits, burial expenses, and other costs associated with customer death resulting from your product.
    </p>

    <p><strong>Legal representation costs</strong><br />
      This includes covering costs for providing documentation or information to investigators regarding product-related issues.
    </p>

    <p><strong>Public relations costs</strong><br />
      It reimburses expenses incurred in managing and mitigating negative company reputation stemming from product-related allegations.
    </p>

    <p><strong>Court attendance costs</strong><br />
      Product Liability Insurance provides coverage for reasonable costs and expenses associated with attending court proceedings, hearings, trials, and depositions related to defending product-related claims.
    </p>

    <p><strong>Crisis communication costs</strong><br />
      Product Liability Insurance covers costs for hiring public relations or crisis management firms to advise on public communication strategies related to product claims, lawsuits, or allegations.
    </p>

    <div className="subheading">Exclusions</div>

    <ul>
      <li><strong>Product guarantee</strong><br />
        Product Insurance coverage does not apply if the policyholder explicitly warrants or guarantees product performance or quality to customers. Claims resulting from product failures due to unmet standards are not covered.
      </li>
      <li><strong>Repairing/Refurbishing costs</strong><br />
        If the insured's product harms someone or damages property due to a defect, the policy may cover compensation costs. However, Product Insurance generally excludes repair or refurbishment expenses for the defective product itself.
      </li>
      <li><strong>Financial losses from loss of market share/goodwill</strong><br />
        This exclusion applies to losses resulting from decreased market share or goodwill due to product harm, as they are considered indirect damages not covered by the policy.
      </li>
      <li><strong>Willful manufacturing/distributing of defective/dangerous products</strong><br />
        Product Liability Insurance policy does not cover losses resulting from willful or intentional misconduct by the insured, including claims for bodily injury, property damage, or harm caused by defective products.
      </li>
      <li><strong>Injuries sustained while manufacturing the product</strong><br />
        Product Liability Insurance policy excludes coverage for injuries sustained by insured employees during product manufacturing, as these are typically covered under workers' compensation insurance policies.
      </li>
      <li><strong>Technology product claims</strong><br />
        Product Liability Insurance policy excludes losses related to technology products, including intellectual property claims or performance failures, due to their complexity and reliance on advanced technologies.
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