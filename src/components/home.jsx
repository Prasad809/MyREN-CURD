import axios from "axios"
import { useEffect, useState } from "react"

function Home(){
    const [emps,setEmps]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/employees')
        .then(res =>setEmps(res.data))
        .catch(err =>console.log(err))
    })
    const handleDelete=(id)=>{
        axios.delete('http://localhost:8081/employees/'+id)
        window.location.reload()
    }
    return(
        <div>
            <table className="table table-dark table-striped-columns">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {emps.map((emp)=>
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>
                        <button onClick={()=>handleDelete(emp.id)} className="btn btn-danger">delete</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
export default Home