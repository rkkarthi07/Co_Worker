import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9839.3123220138!2d76.95921734999999!3d11.016844250000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1652535615693!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={mapUrl}></iframe>
          </div>
          <div className='right row p-8'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>ECE @ KCE Covai 641032</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>dummy@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+ 1235 2355 98</p>
              </div>
            </div>

            <form action=''>
              <div className='flex flex-col md:flex-row md:justify-between md:space-x-2 mb-4'>
                <input type='text' placeholder='Name' className='input' />
                <input type='email' placeholder='Email' className='input' />
              </div>
              <input type='text' placeholder='Subject' className='input' />
              <textarea cols='30' rows='10' className='input'>Create a message here...</textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
