import React from 'react';
import { PropTypes } from 'react';

export default function GridBox(props) {
    return (
        <div className="gridBox">
            <div className="img__holder">
                <img alt="" src={props.image}/>
            </div>

            <p className="title"> {props.title} </p>
        </div>
    );
}

GridBox.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
