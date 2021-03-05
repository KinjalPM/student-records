import React from 'react';
import './Url.scss';
import PropTypes from 'prop-types'; // ES6


function Url({careerUrl,children:mychild,mystyle}) {

// console.log(children,'children');
 return (
    <div className={mystyle}>
        <a href={careerUrl}>{`${mychild} `}</a>
    </div>)
}


export default Url

Url.propTypes = {
    careerUrl:PropTypes.string.isRequired,
    mychild:PropTypes.node,
    mystyle:PropTypes.string,
    
}

Url.defaultProps = {
    careerUrl: 'https://cnn.com'
  };