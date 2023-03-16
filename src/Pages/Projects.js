import React from 'react';
import NavBar from './../Component/Navbar';
import {Link} from 'react-router-dom';
import Footer from '../Component/Footer';

const Projects = () => {
  return (
    <div className='Projects'>
        <NavBar />
        <div className='content-container'>
            <div className='flex-class'>
                <div className='flex-items'>
                    <div className="card text-center " >
                        <img src="/Images/project1.png" className=" full-image card-img-top" alt="Project-img" />
                        <div className="card-body card-backg">
                            <h5 className="card-title cursive-title"> Gaming Landing Page </h5>
                            <Link 
                                to="https://www.instagram.com/reel/CpM-vTztM5Q/?igshid=YmMyMTA2M2Y=" 
                                className="btn btn-success"> 
                                    Check Now
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex-items'>
                    <div className="card">
                        <img src="/Images/project10.png" className=" full-image card-img-top" alt="Project-img" />
                        <div className="card-body text-center">
                            <h5 className="card-title cursive-title"> Gym Website </h5>
                            <Link 
                                to="https://www.instagram.com/reel/Cpcuubip8Sy/?igshid=YmMyMTA2M2Y=" 
                                className="btn btn-success"> 
                                    Check Now
                            </Link>
                        </div>
                    </div>
                </div>  
                <div className='flex-items'>
                    <div className="card text-center">
                        <img src="/Images/project4.png" className=" full-image card-img-top" alt="Project-img" />
                        <div className="card-body ">
                            <h5 className="card-title cursive-title"> Featured Product Page </h5>
                            <Link 
                                to="https://www.instagram.com/reel/CpE9SjMMank/?igshid=YmMyMTA2M2Y=" 
                                className="btn btn-success"> 
                                    Check Now
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex-items'>
                    <div className="card">
                        <img src="/Images/project11.png" className=" full-image card-img-top" alt="Project-img" />
                        <div className="card-body text-center">
                            <h5 className="card-title cursive-title"> Food ordering Website </h5>
                            <Link 
                                to="https://www.instagram.com/reel/CpZ7G-1AobZ/?igshid=YmMyMTA2M2Y=" 
                                className="btn btn-success"> 
                                    Check Now
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex-items'>
                    <div className="card">
                        <img src="/Images/project9.png" className=" full-image card-img-top" alt="Project-img" />
                        <div className="card-body text-center">
                            <h5 className="card-title cursive-title"> Tic Tac Toe Game </h5>
                            <Link 
                                to="https://www.instagram.com/reel/CpCYb9QM1fa/?igshid=YmMyMTA2M2Y=" 
                                className="btn btn-success"> 
                                    Check Now
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex-items'>
                    <div className="card">
                        <img src="/Images/project3.png" className=" full-image card-img-top" alt="Project-img" />
                        <div className="card-body text-center">
                            <h5 className="card-title cursive-title"> Music App Landing Page </h5>
                            <Link 
                                to="https://www.instagram.com/reel/CpSGsABpR82/?igshid=YmMyMTA2M2Y=" 
                                className="btn btn-success"> 
                                    Check Now
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex-items'>
                    <div className="card">
                        <img src="/Images/project8.png" className=" full-image card-img-top" alt="Project-img" />
                        <div className="card-body text-center">
                            <h5 className="card-title cursive-title"> Animated Pages </h5>
                            <Link 
                                to="https://www.instagram.com/reel/CpQXsgWvVJY/?igshid=YmMyMTA2M2Y=" 
                                className="btn btn-success"> 
                                    Check Now
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex-items'>
                    <div className="card">
                        <img src="/Images/project7.png" className=" full-image card-img-top" alt="Project-img" />
                        <div className="card-body text-center">
                            <h5 className="card-title cursive-title"> Housing Landing Page </h5>
                            <Link 
                                to="https://www.instagram.com/reel/CppDSHSvVit/?igshid=YmMyMTA2M2Y=" 
                                className="btn btn-success"> 
                                    Check Now
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex-items'>
                    <div className="card">
                        <img src="/Images/project5.png" className=" full-image card-img-top" alt="Project-img" />
                        <div className="card-body text-center">
                            <h5 className="card-title cursive-title"> Featured Product Page </h5>
                            <Link 
                                to="https://www.instagram.com/reel/CpFDV-4L5Nr/?igshid=YmMyMTA2M2Y=" 
                                className="btn btn-success"> 
                                    Check Now
                            </Link>
                        </div>
                    </div>
                </div>    
            </div>    
        </div>
        <Footer/>
    </div>
  )
}

export default Projects