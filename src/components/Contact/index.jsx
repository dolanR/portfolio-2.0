import './index.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import MapChart from '../MapChart/index.jsx';   

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0q8bl8s', 'template_5pw02el', form.current, '62KBAKfc0ivR1Mx0G')
      .then((result) => {
          alert(`Message sent successfully, I'll get back to you ASAP!`);
      }, (error) => {
          alert('Message failed to send.');
      });
  };
    return (
        <div className='container contact-page'>
            <div className='contact-left'>
                <div className='contact-text'>
                    <h1>Contact me!</h1>
                    <p>I'm open to any type of work opportunities. Also, if
                        you have any requests or questions, or even just want to chat
                        about something, feel free! 
                    </p>
                </div>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail} id='contact-form-id'>
                        <ul>
                            <li className='half'>
                                <input type='text' name='user_name' placeholder='Name' onFocus={window.scrollTo(0, 0)} required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='user_email' placeholder='Email' onFocus={window.scrollTo(0, 0)} required/>
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' onFocus={window.scrollTo(0, 0)}/>
                            </li>
                            <li>
                                <textarea name='message' placeholder='Message' onFocus={window.scrollTo(0, 0)} required></textarea>
                            </li>
                            <li>
                                <input type='submit' value='Send'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='contact-right'>
                <MapChart />
            </div>
            <div className='social-links'>
                <a href='https://www.linkedin.com/in/dolan-reynolds-641b0b196/' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
                <a href='https://github.com/dolanR' target='_blank'>
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a href='https://www.instagram.com/dolanreynolds_/' target='_blank'>
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href='https://www.facebook.com/dolan.reynolds/' target='_blank'>
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
                <a href='https://www.youtube.com/channel/UC-mWMV39Z0CIqJtO6bVG_zQ' target='_blank'>
                    <FontAwesomeIcon icon={faYoutube}/>
                </a>
            </div>
            <div className='navbar-background'></div>
        </div>
    )
}

export default Contact;