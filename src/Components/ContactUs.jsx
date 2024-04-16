import React from 'react'
import './ContactUs.css'
import './CountrySelector.css';
import CountrySelector from './CountrySelector'


const ContactUs = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Media enquiries:</h3>
        <a className='mail' href= "mailto: press@tuum.com"> press@tuum.com </a>
        <h3>Career questions:</h3>
        <a className='mail' href= "mailto: careers@tuum.com"> careers@tuum.com </a>
      </div>
      <div className="contact-col">
      <form>
      <div className="form-row">
        <h1>Contact us</h1>
        <img src="src/assets/close-symbol.png" alt="close" />
      </div>
      <div className="form-row">
            <input type="text" name="name" placeholder='First name' required />
            <input type="text" name="name" placeholder='Last name' required />
        </div>
        <div className="form-row">
            <input type="email" name="email" placeholder='Email' required />
            <input type="text" name="job" placeholder='Job Title' /> 
        </div>
        <div className="form-row">
            <CountrySelector/>
        <input type="text" name="company" placeholder='Company name' required />
        </div>
        <div className="form-row">
        <textarea name="message" rows='6' placeholder='What would you like to talk about?' required></textarea>
        </div>
        <div className="form-row">
        <label><input type="checkbox" name="privacy" required/> By submitting this form I accept <a href='https://tuum.com/privacy-policy/' target='_blank'>privacy policy</a> and <a href="https://tuum.com/cookie-policy/" target='_blank'>cookie policy</a>. *</label>
        </div>
        <div className="form-row">
        <label><input type="checkbox" name="newsletter"/> I would like to receive your newsletter</label>
        </div>
        <div className="form-row">
        <button type='submit' className='Submit-button'>Submit</button>
        </div>

      </form>
      </div>

    
      
    </div>
  )
}

export default ContactUs
