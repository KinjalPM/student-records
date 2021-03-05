import React  from 'react';
import './card.scss';
import Url from '../Url/Url';
import PropTypes from 'prop-types'; // ES6


function Card({Employer, careerUrl, Job_Title, setFav, fav,Id,deleteRecord}) {

//passing arguments normally
function handleFavoriteClick(e,Id) {
  e.stopPropagation();
    const copyfav= [...fav]
    if(copyfav.includes(Id)){
      return alert('Already on the list ')
    }
    copyfav.push(Id)
     setFav(copyfav)
}

function handleUnFavoriteClick(e,Id) {
  e.stopPropagation();
    const copyfav= [...fav]
    if(!copyfav.includes(Id)){
      return alert('You have not favorite it yet  ')
    }
    
  const getIndex = copyfav.indexOf(Id)
  copyfav.splice(getIndex,1)
  console.log(copyfav,'copyfav');
   setFav(copyfav)
}

function isFavorite () {
  return fav.includes(Id)

}



 return (
    <div className={isFavorite() ?'card-container-fav' :'card-container'}>
    
     <Url
    //  careerUrl={careerUrl}
     mystyle="new-style"
     >
    Click Here 
     </Url>    

      {/* <span> apply for job</span> */}
      apply for job
    <div> {Employer}</div>   
    <div>{Job_Title}</div>
    <button onClick={(e)=>handleFavoriteClick(e,Id)}>Favorite</button>
    <button onClick={(e)=>handleUnFavoriteClick(e,Id)}>Unfavorite</button>
    <button onClick={(e)=>deleteRecord(e,Id)}>Delete Record</button>
    
    
    </div>)
}

export default Card
 
Card.propTypes = {
Employer:PropTypes.string.isRequired,
careerUrl:PropTypes.string,
Job_Title:PropTypes.string,

}