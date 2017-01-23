import React from 'react';
import { PropTypes } from 'react';
import Accordiancomp from './Accordian';
import '../../styles/components/Home/Tradeable-Alerts.css'
import '../../styles/components/Home/Largest-News.css'

export default function ColumnContent(props) {
  return (
    <div className="column__content col-xs-12 col-sm-6 col-md-6">
      <span><h2>{props.heading}</h2></span>
      <span>
        <p>{props.content}</p>
      </span>
    <div className="accordian">
      <div className="col-xs-12 col-sm-12 col-md-12">
      <Accordiancomp panels={props.panels}/>
      </div>
    </div>
    </div>
    )
}

ColumnContent.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}
