import React, {useState,useEffect,useParams}from 'react'
import axios from'/Users/kinjalmehta/Desktop/writeSoftwareHere/student-records/src/Axios.js'
function EditRec(props){
    const id= props.match.params.id;
    // console.log(props.match.params.id);
    // console.log("-----------id--------"+id)
    const [data , setData] = useState();
    const [flag, setFlag] = useState(false)
    

    useEffect(()=>{
        // setFlag(true);
       axios.get(`/v1/record/edittherecord?id=${id}`)
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
    },[data])

    // console.log(data)
    return(
        <div>
            <h1> Record: </h1>
            <h6>Company Name</h6>
            {/* <p>{data[0].company.companyName}</p> */}
            <h6>University_Name</h6>
           
        </div>
    )
}

export default EditRec