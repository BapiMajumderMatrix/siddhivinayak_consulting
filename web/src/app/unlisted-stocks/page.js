'use client'
import React, { useEffect, useRef, useState } from 'react';
import { data as unlistedStocks } from './data'; // renamed to avoid conflict
import InnerNav from '../components/Nav/InnerNav';
import '../aboutUs/about.css';
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import client from '../sanity/client';
import Footer from '../components/footer/Footer';
import Enquiry from '../components/Enquiry/Enquiry';
import { Table, Pagination, Form, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import stocks from './stocks.jpg'
gsap.registerPlugin(ScrollTrigger);

function Page() {
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

    const [data, setData] = useState();
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

    // Pagination logic for unlistedStocks
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const totalPages = Math.ceil(unlistedStocks.length / pageSize);
    const paginatedData = unlistedStocks.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <div ref={containerRef} className='page-content'>
            {windowWidth > 500 ? <InnerNav /> : <ClosiongNav />}
            <section className="gallery" data-scroll-section >
                <div className="col-12 about-img-c ">
                    <div className="about-img center" style={{
                        backgroundImage: `url(${data && data.banner.url})`
                    }}>
                        <h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">Unlisted Stocks</h1>
                    </div>
                </div>

                <div className="row posotion-container">
                    <div className="col-12 about-left-content bg" style={{ paddingTop: '5rem' }}>
                        <div className="title">Unlisted Shares</div>
                        <p>Unlisted shares are the shares of the company that are not listed on stock exchanges.</p>
                        <p>The unlisted shares include the following:</p>
                        <ul>
                            <li>Pre-IPO Shares - Shares provided by companies seeking an IPO.</li>
                            <li>Shares issued in private placements.</li>
                            <li>ESOP Shares - Shares issued under employee stock options.</li>
                            <li>Shares held by group shareholders of private companies.</li>
                        </ul>

                        <div className="heading">Unlisted Shares Advantages</div>
                        <ul>
                            <li>Opportunity to invest in the company at an early stage.</li>
                            <li>No feeling of insecurity for allotment once the company announces an IPO.</li>
                            <li>Possibility of better returns.</li>
                            <li>Helps diversify the investment.</li>
                            <li>Unlisted shares are traded in dematerialised form and are held in demat account.</li>
                        </ul>

                        <div className="heading">Unlisted Shares Disadvantages</div>
                        <ul>
                            <li>Risky transaction as it is not backed by the stock exchanges.</li>
                            <li>Longer transaction time.</li>
                            <li>Lack of liquidity.</li>
                            <li>Higher investment amount as the minimum lot size required to purchase is higher.</li>
                            <li>Only a few dealers are available for transactions.</li>
                        </ul>

                        <p>The investment in unlisted shares is beneficial when done for a long-term period.</p>
                        <div className="center">
                            <Image src={stocks} width={750} height={1000} className='auto-img'/>
                        </div>
                        {/* Table */}
                        <div className="heading mt-5 mb-3">Current Unlisted Shares</div>

                        <div className="table-responsive">
                            <Form.Group as={Row} className="mb-3" controlId="pageSize">
                                <Form.Label column sm="2">Page Size:</Form.Label>
                                <Col sm="2">
                                    <Form.Select value={pageSize} onChange={(e) => {
                                        setPageSize(parseInt(e.target.value));
                                        setCurrentPage(1);
                                    }}>
                                        {[10, 15, 20].map(size => (
                                            <option key={size} value={size}>{size}</option>
                                        ))}
                                    </Form.Select>
                                </Col>
                            </Form.Group>

                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Mcap(in cr.)</th>
                                        <th>P/E</th>
                                        <th>P/B</th>
                                        <th>ROCE</th>
                                        <th>ROE</th>
                                        <th>Rev. Growth</th>
                                        <th>PAT</th>
                                        <th>PBT/CFO</th>
                                        <th>DS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedData.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.Price}</td>
                                            <td>{item["Mcap(in cr.)"]}</td>
                                            <td>{item["P/E"]}</td>
                                            <td>{item["P/B"]}</td>
                                            <td>{item.roce}</td>
                                            <td>{item.roe}</td>
                                            <td>{item.rev_charge}</td>
                                            <td>{item.pat}</td>
                                            <td>{item.pbt_cfo}</td>
                                            <td>{item.ds}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>

                            <div className="d-flex justify-content-between align-items-center mt-3">
  <Pagination>
    <Pagination.Prev
      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
    />
    <Pagination.Item active>{`Page ${currentPage} of ${totalPages}`}</Pagination.Item>
    <Pagination.Next
      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
    />
  </Pagination>
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

export default Page;
