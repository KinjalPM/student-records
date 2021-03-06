
import React, { useEffect, useState } from 'react';
import './App.css'
// import data from './Student_Data.json' ;
import Card from './Component/Card/Card';
import { v4 as uuidv4 } from 'uuid';
import Form from './Component/Form/Form';
import { useHistory } from "react-router-dom";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import { Button } from 'reactstrap';
import Modal from './Component/Modal/Modal'
import CardDetails from './Component/CardDetails/CardDetails'
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import axiosInstance from'./Axios'
//   import history from './Component/History/history';
import RecordDetails from './Component/RecordDetails/RecordDetails';

// let  uuidData = data.map(i=>{
// return {
//     ...i, 
//     Id: uuidv4()
// }

// })

function App() {
const [fav, setFav] =useState([])
const [data, setData]=useState([])
const [deletedRecords, setDeletedRecords]=useState([])
const [careerUrl,setCareerUrl] =useState("")
const [employer,setEmployer] =useState("")
const [graduationDate,setGraduationDate] =useState("")
const [jobStartYear,setJobStartYear] =useState("")
const [jobTitle,setJobTitle] =useState("")
const [specialization,setSpecialization] =useState("")
const [universityName,setUniversityName] =useState("")
const [isSubmitDisabled,setIsSubmitDisabled] =useState(false)
const [isModalOpen,setModelOpen] = useState(false);
const [viewCurrentRecord,setViewCurrentRecord]=useState({})
const [searchText,setSearchText]=useState("")
const [searchInvoked,setSearchInvoked]=useState(false)
const [filteredData,setFilteredData]=useState([])
const [graduationYearFilter,setGraduationYearFilter]=useState({})
const [searchDa,setSearchDA] = useState("")
const [page,setPage] = useState([])
const [currentPage,setCurrentPage]=useState(1)
const [itemPerPage,setItemPerPage] = useState(25)
const [flag, setFlag] = useState(false)

 const history= useHistory()

// console.log(page,'page')
// console.log(page.length,'page.length')
// console.log(currentPage,'currentPage')
// console.log(page.length ==   currentPage-1)

// axios.defaults.baseURL = 'https://reaction-kinjal-mehta.herokuapp.com/'


useEffect(()=>{
    setFlag(true);
   axiosInstance.get('/allrecords')
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


useEffect(()=>{
    let  totalItems = data && data.length;
    let totalPg = Math.ceil(totalItems/itemPerPage);
    // console.log("totalPage: "+totalPg);
    let empArr = Array(totalPg).fill(0)
    // console.log(empArr);
    let pages = empArr.map((i,idx)=>{
        return ((idx+1).toString())
    })
    // console.log(pages+"page")
    setPage(pages);
},[data,itemPerPage])

function handlePagniation(){
//     // e.stopPropagation();
// console.log("handlePagniation")
// console.log("Current page value" + currentPage)
// console.log("pgNo"+pageNumber)
let copyData = [...data]
let returnData = copyData.slice((currentPage-1)*itemPerPage,currentPage*itemPerPage);
//  console.log(returnData + "returnData");
return returnData;
}

function getFavs(e) {
let empData= data.filter(i=>fav.includes(i.Id))
let returnEmployerName = empData.map(i=>i.Employer)
e.stopPropagation();
return returnEmployerName.join(",")
}

function handleFormSubmit () {
    // console.log('handleFormSubmit invoked')
    setIsSubmitDisabled(true)
    setTimeout(()=>{
        setIsSubmitDisabled(false)
    },3000)

    let objReady = {
        Career_Url:careerUrl,
        Employer:employer,
        Graduation_Year:graduationDate,
        Job_Start_Date:jobStartYear,
        Job_Title:jobTitle,
        Specialization:specialization,
        University_Name:universityName,
        Id:uuidv4()
    }
let copyData = [objReady,...data]

setData(copyData)
    
}
// function createNewRecord() {

// }

function deleteRecord (e,Id) {

let deletedRecord= data.filter((i)=>{
    e.stopPropagation();
 return i.Id ===Id 
})
// console.log(deletedRecord,'deletedRecord');

let  copyDelRecords=[...deletedRecords]
copyDelRecords.push(deletedRecord[0])
setDeletedRecords(copyDelRecords)

/////////Logic for updating screen
let remainingRecord= data.filter((i)=>{
    return i.Id !==Id 
   })   
setData(remainingRecord)
// console.log(remainingRecord,'remainingRecord');
}

// useEffect(()=>{
// setData(uuidData)
// },[])

function handleRetrieveAllRecords() {
let mergedRecords = [...deletedRecords,...data]
// console.log(mergedRecords,'mergedRecords');
setData(mergedRecords)
setDeletedRecords([])
}

function handleCardContainerOnClick(Id){
    // // console.log('handleCardContainer',Id);  
    // let entry =data.filter(i=>i.Id === Id)
    // // console.log(entry,'filteredEntry');
    // setViewCurrentRecord(entry[0])
    //  setModelOpen(true);
    console.log(Id)
    history.push(`/recordsdetails/${Id}`)
}

function handleGraduationDateOnChange(year){

    let copyObj= {...graduationYearFilter}
    copyObj[year]=!copyObj[year]
//  console.log(copyObj,'copyObj');
 setGraduationYearFilter(copyObj)

}
useEffect(()=>{
    let getyears=filteredData.map(i=>i.Graduation_Year)
    let unique = [...new Set(getyears)];
 
    let obj={}
unique.forEach(l=>{
      obj[l]=true
 })
  setGraduationYearFilter(obj)
    
},[searchInvoked])

function getGraduationYear(){

    return  Object.entries(graduationYearFilter).map(j=>{
        return  <span style={{display:'inlineFlex'}}>
       <label>{j[0]}</label>
       <Checkbox
          checked={j[1]}
          onChange={()=>handleGraduationDateOnChange(j[0])}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        </span>
     })
      
  }

// ********* CHANGE *************
// const univName =filterLogic().map((i,idx)=>{
    const univName =handlePagniation().map((i,idx,arr)=>{
        const {Employer, Career_Url, Job_Title,Id,Graduation_Year} = i 
        
        return (
            <div className='cardDiv' onClick={()=>handleCardContainerOnClick(Id)}>
            <Card 
            careerUrl={Career_Url}
            Employer={Employer}
            Job_Title={Job_Title}
            Graduation_Year={Graduation_Year}
            key={Id} 
            setFav={setFav}
            fav={fav}
            Id={Id}
            deleteRecord={deleteRecord}
            />
            </div>
            )
            
        })    


        function handleClear(){
            setSearchText("")
            setSearchInvoked(false)
            }

            function handleSearch () {
                if(searchText.length ===0){
                    setSearchInvoked(false)
                }
                else {
                    setSearchInvoked(true)
                }
            
                let copyData =[...data]
                    copyData = copyData.filter(i=>{
                    return i.Employer.toLowerCase().includes(searchText.toLowerCase())
                   }) 
                //    console.log(copyData,'copyData');
                if(setSearchInvoked){
                   setFilteredData(copyData)
                }
                
            }

            function handleKeyPress (e) {
                if(e.which == 13 || e.keyCode == 13){
                //   console.log("enter press here!");
                  handleSearch()
                }
              }
            

function filterLogic () {
if(searchInvoked){
    // return filteredData
   const filterByYear= filteredData.filter((i)=>{
 const gradYear = i.Graduation_Year 
return graduationYearFilter[gradYear]
   })
   return filterByYear
}
    return data
}

if(flag){
    return <LinearProgress variant="determinate"/>
}

return (  
 
<div>

   <div>
   {/* <Button color="danger">Danger!</Button> */}
     <br></br>
        <button style={{margin:'10px',padding:'10px'}} onClick={()=>setFav([])}>Clear All Favorites</button>
        <br></br>
        {/* <button onClick={()=>history.push("/")}>Go Home </button> */}

        <button style={{margin:'10px',padding:'10px'}} onClick={()=>handleRetrieveAllRecords()}>Retrieve All Records</button>
        <br></br>
        {/* <button onClick={()=>history.push(`/test?isSubmitDisabled=${isSubmitDisabled}`)}>Test</button> */}
            </div> 
        <div style={{margin:'10px',padding:'10px'}}>{`Total record :::${filterLogic().length}`}</div>
        <div style={{margin:'10px',padding:'10px'}}>{`Total deleted record :::${deletedRecords.length}`}</div>
        {/* <Modal
        buttonLabel= 'New Data to Add'
        title = 'Form'
        buttonColor = 'success'
        cta_primary = 'submit'
        cta_sec = 'cancel'
        handleFormSubmit={handleFormSubmit}
        isModalOpen = {isModalOpen}
        setModelOpen = {setModelOpen}
        >
        <Form 
        careerUrl={careerUrl}
        employer={employer}
        graduationDate={graduationDate}
        jobStartYear={jobStartYear}
        jobTitle={jobTitle}
        specialization={specialization}
        universityName={universityName}
        setCareerUrl={setCareerUrl}
        setEmployer={setEmployer}
        setGraduationDate={setGraduationDate}
        setJobStartYear={setJobStartYear}
        setJobTitle={setJobTitle}
        setSpecialization={setSpecialization}
        setUniversityName={setUniversityName}
        // handleFormSubmit={handleFormSubmit}
        isSubmitDisabled={isSubmitDisabled}
        />
        </Modal> */}

        <Modal
        title = 'display data'
        buttonLabel="Open"
        handleFormSubmit = {handleFormSubmit}
        isModalOpen = {isModalOpen}
        setModelOpen = {setModelOpen}
        >
       <CardDetails
        Employer = {viewCurrentRecord.Employer}
        careerUrl = {viewCurrentRecord.Career_Url}
        Job_Title={viewCurrentRecord.Job_Title}
        Job_Start_Date={viewCurrentRecord.Job_Start_Date}
        Specialization={viewCurrentRecord.Specialization}
        University_Name={viewCurrentRecord.University_Name}
        Id = {viewCurrentRecord.Id}
       />
        </Modal>
<br></br>

<div>
<input placeholder='Search with Company name'  value={searchText} onKeyPress={(e)=>handleKeyPress(e)} onChange={(e)=>setSearchText(e.target.value)}/>
<span style={{marginLeft:'20px'}}><Button disabled={searchInvoked} onClick={()=>handleSearch()} color="primary">Search</Button></span>
{searchInvoked && <span style={{marginLeft:'20px'}}>
     <Button onClick={()=>handleClear()} color="primary">Clear</Button>
     {getGraduationYear()}

</span>

}
</div>

        <div> 
        <h2 style={{margin:'10px',padding:'10px'}}>Favorite Company:</h2>
        {(e)=>getFavs()}
        </div>
        <br></br>
        
        
        <h2 style={{margin:'10px',padding:'10px'}}>Here is list of companies</h2>
        <br></br>
        <br></br>

        {/* Pagination */}
        <div>
        <Button style={{marginLeft:'20px'}} onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage == page[0]} color="primary">Pervious</Button>
        {page && page.map(i=>{
           return <Button onClick={()=>{setCurrentPage(i)}}>{i}</Button>
        })}
        <Button disabled={page.length == currentPage} onClick={()=>setCurrentPage(parseInt(currentPage)+1)} color="primary">Next</Button>
        <br></br>
        <br></br>
        
        {/* <label style={{marginLeft:'20px'}}>Number of records per page  </label>
        <input onBlur={(e)=>setItemPerPage(e.target.value)} type='number' /> */}
        </div>

        <div>
        {univName}
        </div>  
        </div>



        ) ;      

        }

        export default App