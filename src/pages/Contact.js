import React from 'react';
import ContactusForm from '../components/Contactus-Form';
import '../styles/Pages/Contact.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
                <section className="hero">
                    <div className="hero__content">
                        <div className="container">
                            <p>
                                <span>we're here for you</span>
                            </p>
                            <p className='larger__text'>
                                <span>Contact us anytime</span>
                            </p>
                        </div>
                        <div className="container">
                            <p>
                                <span>110 Wall Street, New York, NY 10005</span>
                            </p>
                            <p>
                                <span>info@accern.com</span>
                            </p>
                        </div>
                    </div>
                </section>


        <section className="contact__us">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className='form'>
                    <ContactusForm />
                </div>
              </div>
            </div>
          </div>
        </section>
            </div>
    )
  }
}
