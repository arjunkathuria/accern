import React from 'react';
import '../styles/components/Contactus-Form.css'
export default function ContactusForm(props) {
  return(
    <div className="container">
    
    <form action="" method="post">
      <div className="row">
        <input type="text" placeholder="Name" className="col-xs-11 col-sm-3 col-md-3" />
        <input type="email" placeholder="Email" className="col-xs-11 col-sm-3 col-md-3" />
        <input type="text" placeholder="Subject" className="col-xs-11 col-sm-3 col-md-3"/>
      <input type="text" placeholder="Message" className="col-xs-11 col-sm-11 col-md-11" />
      <div className="col-md-12">
        <button type="submit" className="btn btn-lg col-md-offset-5 col-xs-offset-5">Send</button>
      </div>
      </div>
    </form>
    </div>
    )
}
