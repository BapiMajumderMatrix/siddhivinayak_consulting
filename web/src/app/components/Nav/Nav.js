'use client';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/wlogo.png';
import { usePathname , useRouter } from 'next/navigation'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function MainNav() {

  const pathname = usePathname()


  return (
    <div className='main-nav'>
      <Navbar collapseOnSelect expand="lg" className='bg-body-tertiary' >
        <Container >
          <Navbar.Brand href="/"> <Image src={logo} height={70} width={500} className='nav-logo' alt='image'/> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
            <Link className={`link d-flex align-items-center ${pathname === '/' ? 'activeNav' : ''}`}href="/">HOME</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/aboutUs' ? 'activeNav' : ''}`}href="/aboutUs">ABOUT</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/unlisted-stocks/' ? 'iactiveNav' : ''}`}href="/unlisted-stocks">UNLISTED STOCKS</Link>
             <DropdownButton id="dropdown-basic-button" className='link' title=" INSURANCE" >
                                    <Dropdown.Item href="/professional-indemnity-insurance">PROFESSIONAL INDEMNITY INSURANCE
</Dropdown.Item>
                  <Dropdown.Item href="/commercial-general-liability-insurance">COMMERCIAL GENERAL LIABILITY INSURANCE </Dropdown.Item>
                  <Dropdown.Item href="/directors-and-officers-liability-insurance"> DIRECTORS AND OFFICERS LIABILITY INSURANCE </Dropdown.Item>
                  <Dropdown.Item href="/art-insurance"> ART INSURANCE </Dropdown.Item>
                  <Dropdown.Item href="/product-liability-insurance"> PRODUCT LIABILITY INSURANCE </Dropdown.Item>
                            </DropdownButton>
                  <Link className={`link d-flex align-items-center ${pathname === '/construction-finance/' ? 'iactiveNav' : ''}`}href="/construction-finance/"> CONSTRUCTION FINANCE </Link>
            <Link className={`link d-flex align-items-center ${pathname === '/contact/' ? 'activeNav' : ''}`}href="/contact" style={{color:'#fff'}}>CONTACT US</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNav;
