import React from 'react'
import "../style/register.scss"
import FormGroup from "../components/FormGroup"
import { Link } from "react-router"

const Register = () => {
  return (
    <main className='register-page'>  
      <div className="form-container">  
        <h1>Register</h1>
        <form>
          <FormGroup label="Username" placeholder="Enter  username" />
          <FormGroup label="Email" placeholder="Enter  Email" />
          <FormGroup label="Password" placeholder="Enter  password" />  

          <button className="button" type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>  
    </main>

  )
}

export default Register
