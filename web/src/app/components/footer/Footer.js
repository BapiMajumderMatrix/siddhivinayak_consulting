import  { useState } from 'react'
import './Footer.css'
import line from '../../../../public/images/line.svg'
import office from '../../../../public/images/Industry.svg'
import bmail from '../../../../public/images/gmail.svg'
import mobile from '../../../../public/images/phone.svg'
import profile from '../../../../public/images/profile.svg'
import { useForm, ValidationError } from '@formspree/react';
import { usePathname, useRouter } from 'next/navigation'
import ye from '../../../../public/images/ye.svg'
import yp from '../../../../public/images/yp.svg'
import  Image  from 'next/image'
import logo from '../../../../public/images/wlogo.png'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Footer() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_4iu6men','template_z8xekc3',form.current,'-AXWnVzyZgAaC8aEm')
        .then((result) => {
            router.push('/thankYou')
        }, (error) => {
            console.log(error.text);
        });
    };
    const [messageType, setMessageType] = useState('general');
    const pathname = usePathname()
    const router=useRouter()
    const handleMessageTypeChange = (event) => {
        setMessageType(event.target.value);
    };
    const handleCall = () => {
        window.location.href = 'tel:+918655811111'; 
      };
      const handleEmail = () => {
        window.location.href = 'mailto:d@dconsult.in'; 
      };
    return (
        <>
        <div className="question center">
            <h3 className="heading res-h">Have more questions? For all queries please call us on</h3>
            <div className="c-at"><div onClick={handleCall} style={{cursor:'pointer'}}><Image src={yp} alt='img'height={22} width={22} /> <p>+91 - 8655811111</p> </div>
            <div c style={{cursor:'pointer'}} onClick={handleEmail}><Image src={ye} alt='img' height={22} width={22}/> <p>d@dconsult.in</p> </div></div>
            <p className='bp'>Time : 10:00 AM to 7:00 PM</p>
            <p className='bp'>Terms and conditions apply .
Insurance is a subject matter of solicitation.
</p>
        </div>
            <div className={`call-back ${(pathname === '/privateEqity/' || pathname === '/contact/' || pathname === '/demateAccount/' || pathname === '/dubaiProperty/' || pathname === '/billDiscounting/' || pathname === '/aboutUs/') ? 'm-b-4' : ''}`} >
                <div className='call-back-in'>
                    <div className="call-top">
                        <h3 className='heading'>REQUEST CALL BACK</h3>
                        <Image src={line} alt='line' />
                        <p>Would you like to speak to one of our financial advisers over the phone? Just submit your details and we'll be in touch shortly. You can also email us if you would prefer.</p>
                    </div>
                    <div className="form-bot">
                        <form ref={form} onSubmit={sendEmail} className='row input-section'>
                            <div className="input-fcontainer col-6">
                                <Image src={profile} alt='image' className='wIcon' />
                                <input type="text" placeholder='Name' name='from_name' autoComplete='off' required />
                            </div>
                            <div className="input-fcontainer col-6">
                                <Image src={bmail} alt='image' className='wIcon' />
                                <input type="email" placeholder='Email' name='email' autoComplete='off' required />
                            </div>
                            <div className="input-fcontainer col-6" >
                                <Image src={mobile} alt='image' className='wIcon' />
                                <input type="number" placeholder='Phone No' name='phone' autoComplete='off' required />
                            </div>
                            <div className="input-fcontainer col-6" >
                                <Image src={office} alt='image' className='wIcon' height={25} />
                                <select
                                    id="messageType"
                                    name="querry"
                                    value={messageType}
                                    onChange={handleMessageTypeChange}
                                >
                                    <option value="general">General Inquiry</option>
                                    <option value="PrivateEquity">Private Equity</option>
                                    <option value="DematAccount">Demat Account</option>
                                    <option value="LuxuryProperty">Luxury Property</option>
                                    <option value="BusinessInsurence">Business Insurence</option>
                                </select>
                            </div>
                            <textarea id="message" rows="6" name="message" placeholder='Message' required />
                            
                            <input type="submit" value="Send"  className='submit-btn pro-submit-btn' style={{ marginTop: '3rem' }} />
                        </form>
                    </div>
                </div>
                <div className='footer-Links'>
                    <div >
                        <div className='footer-container'>
                            <div className="row footer-row" >
                                <div className='col-4'>
                                    <Image src={logo} width={300} height={300} alt='logo' className='f-logo'/>
                                </div>
                                <div className='col-4'>
                                    <p onClick={()=>{router.push('/terms&condition')}} >Terms & Conditions.</p>
                                    <p onClick={()=>{router.push('/privacyPolicy')}} >Privacy Policy</p>
                                </div>
                                <div className="col-4 develop-by" >
                                    <p onClick={()=>{router.push('/disclaimers')}} >Disclaimers</p>
                                    <p onClick={()=>{router.push('/cookiesPolicy')}} >Cookies Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='footer'>
                    <div >
                        <div className='footer-container'>
                            <div className="row footer-row" >
                                <div className='col-6'>
                                    <p>@ Coyright 2023. All rights reserved.</p>
                                </div>
                                <div className="col-6 develop-by" >
                                    <p>Website Design & Developed By <a target='_blank' href="https://pixeldesignindia.com/">Pixel Design India</a> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='footer-main'>
                    <div >
                        <div className='footer-c'>

                                <div className='c-left'>
                                    <p>@ Coyright 2024. All rights reserved.</p>
                                </div>
                                <div className="c-right develop-by" >
                                    <p>Website Design & Developed By <a target='_blank' href="https://pixeldesignindia.com/">Pixel Design India</a> </p>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
