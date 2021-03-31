import { useEffect, useState } from "react";
import DatePicker from 'react-datepicker'
import API from "../API";





const Showdetails = (getReleaseDetails) =>{

    console.log(getReleaseDetails)
  
        API.post('/release/add',getReleaseDetails)
        .then(res =>{
            console.log(res) 
            window.location.reload();              
        })
    
}

const AddRelease = () => {

  
    const [getReleaseDetails,setReleaseDetails] = useState({});
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className='AddReleaseMainDiv'> 
        <h2 className='title'>Add a Release</h2>
            <div>
                <label htmlFor='name'>Name of the Release : </label>
                 <input id='name' onChange={e=>setReleaseDetails(prevObj=>({...prevObj,[e.target.id]:e.target.value}))}></input>
           </div>
           <div>
                <label htmlFor='description'>Description : </label>
                 <input id='description' onChange={e=>setReleaseDetails(prevObj=>({...prevObj,[e.target.id]:e.target.value}))}></input>
           </div>
           <div>
                <label htmlFor='date'>When is it planned to Go-Live : </label>
                <input id='date' onChange={e=>setReleaseDetails(prevObj=>({...prevObj,[e.target.id]:e.target.value}))}></input>
                
           </div>
           <div>
                <label htmlFor='manager'>Who is managing the Release : </label>
                 <input id='manager' onChange={e=>setReleaseDetails(prevObj=>({...prevObj,[e.target.id]:e.target.value}))}></input>
           </div>
           <div className='AddReleasebutton' onClick={()=> Showdetails(getReleaseDetails)}>Add</div>

        </div>
    )
}

export default AddRelease;