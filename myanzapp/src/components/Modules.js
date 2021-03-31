

import {useState} from 'react'
import AddRelease from './AddRelease';




const Modules = () =>{

    const [check,setCheck]=useState({showModuleCheck:false});

    const showModuleCheck = () =>{ 
        if(check.showModuleCheck){
            setCheck({showModuleCheck:false})
        }else{
            setCheck({showModuleCheck:true})
        }
    }

    const showModule = ()=>{
        if(check.showModuleCheck) {
        return (
            <div className='showModuleMainDiv'>
                <AddRelease/>
            </div>
        )
        }
    }
    
    return (
        <div>
        <div className='modulesMainDiv'>
            <div onClick={showModuleCheck}>+ Release</div>
            <div>Infosys Employees</div>
            <div>Squads</div>
        </div>
        {showModule()}
        </div>
    )
}

export default Modules;