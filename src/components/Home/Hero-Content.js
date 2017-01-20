import React from 'react';
import '../../styles/components/Home/HeroContent.css';

export default function HeroContent(props) {
  return (
    <div className="container">

      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6">
          <h1>Early News Alert</h1>
          <h3>On U.S. Public Equities</h3>
          <div className="separator"></div>
          <p>Get the most advanced breaking news technology for your investment strategies. Over <strong>300 million websites</strong> are monitored in real time for early news on U.S. public equities.</p>
          <div className="row col-xs-12">
              <button className='btn btn-lg col-xs-12 col-sm-6 col-md-6'><span className="icon-arrow-right3"></span>Try Web App</button>
            <button className='btn btn-lg col-xs-12 col-sm-6 col-md-6'>Request API</button>
          </div>
        </div>
      </div>
</div>
  )
}
