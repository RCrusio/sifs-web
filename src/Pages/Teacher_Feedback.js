import React from 'react'
import Student_Sidebar from '../Components/Student_Sidebar'
import './css/form.css'
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';

function Teacher_Feedback() {
  return (
    <>
    <Student_Sidebar />
    <div className='container'>
    <div class="contact-section">
      <div class="contact-form">
        <h2>Send Feedback Here</h2>
        <form class="contact">
          <textarea name="message" rows="5" placeholder="Your Message" required/>
          <input type="submit" name="submit" class="send-btn" value="Send"/>
        </form>
      </div>
      <div class="contact-info">
        <div><MdIcons.MdLocationOn className='icons-info'/>Address, City, Country</div>
        <div><MdIcons.MdMail className='icons-info'/>contact@email.com</div>
        <div><FaIcons.FaPhoneAlt className='icons-info'/>+00 0000 000 000</div>
        <div><FaIcons.FaClock className='icons-info'/>Mon - Fri 8:00 AM to 5:00 PM</div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Teacher_Feedback