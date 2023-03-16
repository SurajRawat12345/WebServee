import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from './../Component/Navbar';
import Footer from './../Component/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
  const form = useRef();
  const customId = "custom-id-yes";
  const notify = () => toast.success("Form Submitted", {
      theme: "dark",
      toastId: customId,
      position: toast.POSITION.TOP_CENTER,
  });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hfc3b9v', 'template_8y3cljt', form.current, '_R_YzUgOz0sQCm0_w')
      .then((result) => {
          console.log(result.text);
          notify();
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          toast.error("Something Went Wrong");
      });
  };

  return (
    <div className="Contact">
      <NavBar/>
      <h1 className='text-center contact-heading'> Contact Form </h1>
      <div className='mt-3 contact-container'>
        <form ref={form} onSubmit={sendEmail} className='w-80 flex-box'>
          <div className='mb-2 flex-box2'>
            <label className='form-label'>Name : </label>
            <input type="text" name="user_name" className="form-control" placeholder="Enter your name" required />
          </div>
          <div className='mb-2 flex-box2'>
            <label className='form-label'>Email : </label>
            <input type="email" name="user_email" className='form-control' placeholder="Enter your Email Id" required/>
          </div>
          <div className='mb-2 flex-box2'>
            <label className='form-label'>Phone :</label>
            <input type="number" name="user_phone" min="1000000000" max="9999999999" className='form-control' placeholder="Enter your phone no." required/>
          </div>
          <div className='mb-2 text-center left-side msg' >
            <label className='form-label'> Tell us about your Project :</label>
            <textarea name="message" className='form-control' rows={3} placeholder='Write details about the project' required/>
          </div>
          <div className='mb-3 flex-box2 '>
            <input type="submit" value="Submit" className='btn btn-success p-2 submit-button'/>
          </div>
          <ToastContainer autoClose={5000}/>
        </form>
      </div>
      <Footer/>
    </div>
  );
};