import './components.css'
import * as moment from 'moment';
import DatePicker from 'react-datepicker'
import API from '../API';
import { useEffect, useState } from 'react';




const ShowList1 = () => {

    const [releaseDetails,setReleaseDetails]=useState([]);
    
    useEffect(()=>{
        API.get('/release/list')
        .then(res => {
            console.log(res)
            setReleaseDetails(res.data)
        })
    },[]) // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour


    return releaseDetails.map(release => {
    var releaseDate1 = moment(release.date).format('ddd DD-MMM-YYYY HH:mm:ss');
     return(   <tr>
            <td>{release.name}</td>
            <td>{release.description}</td>
            <td>{releaseDate1}</td>
            <td>{release.manager}</td>
            <td>{release.status}</td>
        </tr>
     )
    })
}

const ReleaseList = () => {

    return (
        <div>

            <div>
                <h2 className='title'>Release Details</h2>
                <table className='releaseListClass'>
                    <tbody>
                        <tr>
                            <th>Release Name</th>
                            <th>description</th>
                            <th>Go-Live date</th>
                            <th>Lead</th>
                            <th>Status</th>
                        </tr>
                         
                            {ShowList1()}
                    </tbody>
                </table>
            </div>


        
        </div>
    )
}

export default ReleaseList;