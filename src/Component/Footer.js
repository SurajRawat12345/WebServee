import React from 'react';
import {Link} from 'react-router-dom';
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="Footer text-center bg-black">
        <div className='footer-flex text-center'>
            <div className='social-links'>
                <div className='social-links-part-one pb-3 '>
                    <img className="logo-foot-size-image" src="best-logo.png" alt="logo"></img>
                    <div className="logo-foot-name"> WebServee </div>
                </div>
                <div className='social-links-part-two'>
                    <div className='icon-foot-back'>
                        <Link to="/contact" className='icon-foot-link'> <AiOutlineMail/> </Link>
                    </div>
                    <div className='icon-foot-back'>
                        <Link to="https://instagram.com/webservee?igshid=YmMyMTA2M2Y=" className='icon-foot-link'> <BsInstagram/> </Link>
                    </div>    
                </div>
            </div>
            <div className='company-details'>
                <div className='company-title foot-head-link mb-2'> Company </div>
                <Link to="/about" className='foot-link'> About Us </Link>
                <Link to="/contact" className='foot-link'> Contact Us </Link>
            </div>
            <div className='project-details'>
                <Link to='/projects' className='foot-head-link mb-2'> All Projects </Link>
                <Link 
                    to='https://www.instagram.com/reel/CpM-vTztM5Q/?igshid=YmMyMTA2M2Y=' 
                    className='foot-link'> 
                    Gaming Landing Page 
                </Link>
                <Link 
                    to='https://www.instagram.com/reel/Cpcuubip8Sy/?igshid=YmMyMTA2M2Y=' 
                    className='foot-link'> 
                    Gym Website 
                </Link>
                <Link 
                    to='https://www.instagram.com/reel/CpCYb9QM1fa/?igshid=YmMyMTA2M2Y=' 
                    className='foot-link'> 
                    Tic Tac Toe 
                </Link>
                <Link 
                    to='https://www.instagram.com/reel/CpE9SjMMank/?igshid=YmMyMTA2M2Y=' 
                    className='foot-link'> 
                    Product Page
                </Link>
            </div>
        </div>
        <div className='copyright pb-3'>
            <div className='center-content'>
                <img className="copy-foot-image" src="best-logo.png" alt="logo"></img>
            </div>
            <div className='rightsAll'> All Rights Reserved &copy; 2023 WebServee </div>
        </div>
    </div>
  )
}

export default Footer