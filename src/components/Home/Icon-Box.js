import React from 'react';
import {PropTypes} from 'react';
import '../../styles/components/Home/Icon-Box.css'

export default function IconBox(props) {
  return (
    <div className="col-xs-12 col-sm-6 col-md-3">
    <div className="iconbox">
      <div className="icon__holder">
        <div className={props.fontClass}></div>
      </div>
      <h6 className="iconbox__title">{props.title}</h6>
      <p> {props.description} </p>
    </div>
    </div>
    );
}

IconBox.propTypes = {
  fontClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
