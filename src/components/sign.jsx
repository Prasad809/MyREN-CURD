import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8081/employees/',{'name':name,'email':email,'password':password})
        alert('SignIn SuccessFully.......')
        navigate('/')
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4"style={{'margin':'50px'}}>
                    <h1>SignIn Form</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Fullname</label>
                        <input type="text"
                        className="form-control"
                        onChange={(e)=>setName(e.target.value)}
                        required />
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                        className="form-control"
                        onChange={(e)=>setEmail(e.target.value)}
                        required />
                        <label htmlFor="password">Password</label>
                        <input type="text" 
                        className="form-control"
                        onChange={(e)=>setPassword(e.target.value)} 
                        required /><br />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-4"></div>
            </div>

        </div>
    )
}
export default SignIn;