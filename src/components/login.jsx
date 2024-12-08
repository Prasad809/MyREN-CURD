import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LogIn(){
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8081/login/',{'email':email,'password':password})
        .then(res =>{
            if(res.data.LogIn){
                navigate('/home')
            }else{
                alert('No recard! Please SignIn first')
            }
        })
        .catch(err =>console.log(err))
    }
    return(
        <div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4" style={{'margin':'50px'}}>
                    <h1>Login Form</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                        className="form-control"
                        onChange={(e)=>setEmail(e.target.value)}
                        required/>
                        <label htmlFor="password">Password</label>
                        <input type="text"
                        className="form-control"
                        onChange={(e)=>setPassword(e.target.value)} 
                        required/><br/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <span><Link to={'/signin'}className="btn btn-secondary">SignIn</Link></span>
                    </form>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}
export default LogIn;