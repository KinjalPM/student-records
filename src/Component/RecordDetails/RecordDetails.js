import React from 'react'
import  {useParams} from 'react-dom'

function RecordDetails(){

    console.log("In record details")
    const parms = useParams()
    console.log(parms,'parms')

    return (
        <div>recorddetails</div>
    )
}

export default RecordDetails;