

const EmployeeList = () => {

    const empListJson = [
        {
            "empNo": 1234,
            "lanId": "abcd",
            "firstName": "Virat",
            "lastName": "Kohli",
            "squad": "India",
            "role": "Captain",
            "manager": "Ravi Shastri"
        },
        {
            "empNo": 12345,
            "lanId": "abcd",
            "firstName": "Virat",
            "lastName": "Kohli",
            "squad": "India",
            "role": "Captain",
            "manager": "Ravi Shastri"
        }
    ]

    const showEmployee = () => {
        return empListJson.map(e => {
            return (
                
                    <tr>
                   <td>{e.lanId}</td>
                   <td>{e.firstName}</td>
                   <td>{e.squad}</td>
                   <td>{e.role}</td>
                   </tr>
                

            )
        })
    }
    

    return (
        <div style={{textAlign:"center"}}> 
           <table>
               <tr>
                   <td>Lan id</td>
                   <td>Name</td>
                   <td>Squad</td>
                   <td>Role</td>
               </tr>
               
               {showEmployee()}
              
           </table>
        </div>
    )
}

export default EmployeeList;