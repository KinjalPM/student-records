import React, { Fragment, useEffect, useState } from 'react';
import { Link, Redirect, useHistory,useParams } from "react-router-dom";
import axiosInstance from '../../Axios'
import Spinner from '@material-ui/core/LinearProgress';
import CardDetails from '../CardDetails/CardDetails';

function RecordDetails(){

    const [flag, setFlag] = useState(false)
const [data, setData]=useState([])
console.log(data);


const params = useParams()
console.log(params,'params')


useEffect(()=>{
    setFlag(true);
   axiosInstance.get(`/recordsdetails/${params.Id}`)
    .then(
        res=>{
            console.log(res)
            setData(res.data)
            setFlag(false);
        })
    .catch((e)=>{
        setFlag(false)
        console.log(e)
    })
},[])

    if(flag){
        return <Spinner />
     }
    
     return (
        <div>
 <CardDetails 
    Employer={data[0].Employer} 
    careerUrl={data[0].Career_Url}
    Job_Title={data[0].Job_Title}
    Job_Start_Date={data[0].Job_Start_Date}
    Specialization={data[0].Specialization}
    University_Name={data[0].University_Name}  
 />
        </div>
    )
}
export default RecordDetails;