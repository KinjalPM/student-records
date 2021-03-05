import React  from 'react';
import Url from '../Url/Url';
import PropTypes from 'prop-types';

function CardDetails({Employer, careerUrl, Job_Title,Job_Start_Date,Specialization,University_Name,Id}){

    return(
        <div>
    
        <Url mystyle="new-style" careerUrl = {careerUrl}>Click here</Url>    
       <div> {Employer}</div>   
       <div>{Job_Title}</div>
       <div>{Job_Start_Date}</div>
        <div>{Specialization}</div>
        <div>{University_Name}</div>
       </div>   
    )
}

export default CardDetails;

CardDetails.propTypes = {
    Employer:PropTypes.string.isRequired,
    careerUrl:PropTypes.string,
    Job_Title:PropTypes.string,
    
    }