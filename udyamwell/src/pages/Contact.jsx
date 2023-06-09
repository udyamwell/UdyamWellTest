import React from "react";
import TopSection from "../components/TopSection";
import './contact.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
const Contact = () => {
    return (
        <>
          <TopSection MainHeadinig="Contact Us" subText="" text="Contact Us" />

          <div className="contact">
            <div className="contactForm">
            <div className="form">
            <h1>Get in Touch</h1>
            <form action="">
            <input
                  type="text"
                  className="halfInput"
                  placeholder="Enter your Name"
                  onFocus="this.placeholder = ''"
                  onBlur="this.placeholder = 'Enter your name'"
                />
                 <input
                  type="email"
                  className="halfInput"
                  placeholder="Enter your Email Address"
                  onFocus="this.placeholder = ''"
                  onBlur="this.placeholder = 'Enter email address'"
                />
                 <input
            style={{width:"86%"}}
                  type="text"
                  placeholder="Enter Subject"
                  onFocus="this.placeholder = ''"
                  onBlur="this.placeholder = 'Enter email address'"
                />
                <textarea
                style={{width:"86%"}}
                placeholder="Enter Subject"
                onFocus="this.placeholder = ''"
                onBlur="this.placeholder = 'Enter email address'"
                rows={'10'}
                />
            </form>
            </div>
            {/*  */}
            <div class="information">
          <div class="contact-info">
            <span class="contact-info__icon"><HomeOutlinedIcon/></span>
            <div class="media-body">
              <h3>Catalyst Building, IIT Mandi.</h3>
              <p>Himachal Pradesh, 175005</p>
            </div>
          </div>
          <div class="contact-info">
            <span class="contact-info__icon"><PhoneIphoneOutlinedIcon/></span>
            <div class="media-body">
              <h3>+91 867 9625 300</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div class="contact-info">
            <span class="contact-info__icon"><MailOutlinedIcon/></span>
            <div class="media-body">
              <h3>admin@udyamwell.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
          </div>
          </div>

          </div>
        </>
    )
}

export default Contact;