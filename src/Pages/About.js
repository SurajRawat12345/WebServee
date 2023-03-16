import React from 'react'
import NavBar from './../Component/Navbar';
import Footer from '../Component/Footer';

const About = () => {
    return (
        <div className='About-container bg-dark'>
            < NavBar />
            <h1 className='text-center m-3 about-heading'> ABOUT US</h1>
            <div className='about-intro text-center'>
                <div className='ceos-container mb-5'>
                    <div className="card pt-3 bg-black">
                        <div className='image-back'>
                            <img src="/images/SurajCeo.png" className="card-img-top size-image" alt="Ceo-gallery"/>
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title bold-class"> Suraj Rawat </h5>
                            <p className="card-text bold-class">Chief Technology Officer(CTO)</p>
                        </div>
                    </div>
                    <div className="card  pt-3 bg-black">
                        <div className='image-back text-center'>    
                            <img src="/images/RaghavCeo.jpeg" className="card-img-top size-image" alt="Ceo-gallery"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title bold-class"> Raghav Soni </h5>
                            <p className="card-text bold-class">Chief Operating officer(COO)</p>
                        </div>
                    </div>
                    <div className="card  pt-3 bg-black">
                        <div className='image-back text-center'>    
                            <img src="/images/ShivamVCeo.png" className="card-img-top size-image" alt="Ceo-gallery"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title bold-class"> Shivam Verma </h5>
                            <p className="card-text bold-class">Chief Executive Officer(CEO)</p>
                        </div>
                    </div>
                    <div className="card  pt-3 bg-black">
                        <div className='image-back text-center'>    
                            <img src="/images/ShivamPCeo.jpeg" className="card-img-top size-image" alt="Ceo-gallery"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title bold-class"> Shivam Panwar </h5>
                            <p className="card-text bold-class">Chief Executive Officer(CEO)</p>
                        </div>
                    </div>
                    <div className="card  pt-3 bg-black">
                        <div className='image-back text-center'>    
                            <img src="/images/KshitizCeo.jpeg" className="card-img-top size-image" alt="Ceo-gallery"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title bold-class">Kshitiz Tiwari</h5>
                            <p className="card-text bold-class">Chief Executive Officer(CEO)</p>
                        </div>
                    </div>
                </div>    
            </div>
            <Footer/>
        </div>
    )
}

export default About;