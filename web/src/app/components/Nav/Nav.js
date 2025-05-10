'use client';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/wlogo.svg';
import { usePathname , useRouter } from 'next/navigation'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function MainNav() {

  const pathname = usePathname()


  return (
    <div className='main-nav'>
      <Navbar collapseOnSelect expand="lg" className='bg-body-tertiary' >
        <Container >
          <Navbar.Brand href="/"> <Image src={logo} height={70} width={200} className='nav-logo' alt='image'/> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
            <Link className={`link d-flex align-items-center ${pathname === '/' ? 'activeNav' : ''}`}href="/">HOME</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/aboutUs' ? 'activeNav' : ''}`}href="/aboutUs">ABOUT</Link>
            {/* <Link className={`link d-flex align-items-center ${pathname === '/privateEqity' ? 'activeNav' : ''}`}href="/privateEqity">PRIVATE EQUITY</Link> */}
            {/* <Link className={`link d-flex align-items-center ${pathname === '/demateAccount' ? 'activeNav' : ''}`}href="/demateAccount">DEMAT ACCOUNT</Link> */}
            {/* <Link className={`link d-flex align-items-center ${pathname === '/dubaiProperty' ? 'activeNav' : ''}`}href="/dubaiProperty">DUBAI PROPERTY</Link> */}
            <Link className={`link d-flex align-items-center ${pathname === 'portfolioManagement/' ? 'iactiveNav' : ''}`}href="/portfolioManagement">PORTFOLIO MANAGEMENT</Link>
                        <Link className={`link d-flex align-items-center ${pathname === '/debt/' ? 'iactiveNav' : ''}`}href="/debt">DEBT</Link>
            {/* <Link className={`link d-flex align-items-center ${pathname === '/dubaiProperty' ? 'activeNav' : ''}`}href="/dubaiProperty">DUBAI PROPERTY</Link> */}
             <DropdownButton id="dropdown-basic-button" className='link' title=" INSURANCE" >
                              <Dropdown.Item href="/insurance">Corporate Cyber Insurance</Dropdown.Item>
                              <Dropdown.Item href="/professionalInsurance">Professional Indemnity Insurance
            </Dropdown.Item>
                              <Dropdown.Item href="/commercial">Commercial General Liability Insurance</Dropdown.Item>
                            </DropdownButton>
            {/* <Link className={`link d-flex align-items-center ${pathname === '/billDiscounting' ? 'activeNav' : ''}`}href="/billDiscounting">BILL DISCOUNTING</Link> */}
            <Link className={`link d-flex align-items-center ${pathname === '/contact' ? 'activeNav' : ''}`}href="/contact" style={{color:'#fff'}}>CONTACT US</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNav;
