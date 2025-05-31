'use client';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/blogo.png';
import { usePathname , useRouter } from 'next/navigation'
import { Dropdown, DropdownButton } from 'react-bootstrap';

function InnerNav() {

  const pathname = usePathname()

  return (
    <div className='main-nav inner-navigation'>
      <Navbar collapseOnSelect expand="lg" className='bg-body-tertiary' >
        <Container className='innerNavC'>
          <Navbar.Brand href="/"> <Image src={logo} height={70} width={500} className='nav-logo' alt='image'/> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
            <Link className={`ilink d-flex align-items-center ${pathname === '/' ? 'iactiveNav' : ''}`}href="/">HOME</Link>
            <Link className={`ilink d-flex align-items-center ${pathname === '/aboutUs/' ? 'iactiveNav' : ''}`}href="/aboutUs">ABOUT</Link>
            {/* <Link className={`ilink d-flex align-items-center ${pathname === '/privateEqity/' ? 'iactiveNav' : ''}`}href="/privateEqity">PRIVATE EQUITY</Link> */}
            {/* <Link className={`ilink d-flex align-items-center ${pathname === '/demateAccount/' ? 'iactiveNav' : ''}`}href="/demateAccount">DEMAT ACCOUNT</Link> */}
            <Link className={`ilink d-flex align-items-center ${pathname === '/unlisted-stocks/' ? 'iactiveNav' : ''}`}href="/unlisted-stocks">UNLISTED STOCKS</Link>
            {/* <Link className={`ilink d-flex align-items-center ${pathname === 'construction-finance/' ? 'iactiveNav' : ''}`}href="/construction-finance">CONSTRUCTION FINANCE</Link> */}
            {/* <Link className={`ilink d-flex align-items-center ${pathname === '/dubaiProperty/' ? 'iactiveNav' : ''}`}href="/dubaiProperty">DUBAI PROPERTY</Link> */}
             <DropdownButton id="dropdown-basic-button" className='ilink' title=" INSURANCE" style={{color:"#000"}}>
                  <Dropdown.Item href="/professional-indemnity-insurance">PROFESSIONAL INDEMNITY INSURANCE
</Dropdown.Item>
                  <Dropdown.Item href="/commercial-general-liability-insurance">COMMERCIAL GENERAL LIABILITY INSURANCE </Dropdown.Item>
                  <Dropdown.Item href="/directors-and-officers-liability-insurance"> DIRECTORS AND OFFICERS LIABILITY INSURANCE </Dropdown.Item>
                  <Dropdown.Item href="/art-insurance"> ART INSURANCE </Dropdown.Item>
                  <Dropdown.Item href="/product-liability-insurance"> PRODUCT LIABILITY INSURANCE </Dropdown.Item>
                </DropdownButton>
            {/* <Link className={`ilink d-flex align-items-center ${pathname === '/billDiscounting/' ? 'iactiveNav' : ''}`}href="/billDiscounting">BILL DISCOUNTING</Link> */}
            <Link className={`ilink d-flex align-items-center ${pathname === '/construction-finance/' ? 'iactiveNav' : ''}`}href="/construction-finance/"> CONSTRUCTION FINANCE </Link>
            <Link className={`ilink d-flex align-items-center ${pathname === '/contact/' ? 'iactiveNav' : ''}`}href="/contact/">CONTACT US</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default InnerNav;
