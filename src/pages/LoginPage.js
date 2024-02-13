import React from 'react'
import "../styles/modules/pages/loginPage.scss"

const LoginPage = () => {
  const form = [
    { type: "text", label: "First_Name" },
    { type: "text", label: "Last_Name" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
  ]
  return (
    <div className='login_page'>
      <h1>LogIn to Little Lemon</h1>
      <div className='login_form_wrapper'>
        {
          form.map((input) => {
            return (<InputField type={input.type} label={input.label} key={input} />)
          })
        }
        <div className='login_button_wrapper'>
          <button className='login_button'>Log In</button>
          <button className='signup_button'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

const InputField = ({ type, label }) => {
  return (
    <div className='inputField'>
      <label htmlFor={label}>{label}</label>
      <input id={label} value={label} type={type} />
    </div>
  )
}

export default LoginPage