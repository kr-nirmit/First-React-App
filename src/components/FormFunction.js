import React, { useState } from 'react'
import './formStyle.css'

function FormFunction() {

    const [fname, setFname] = useState(' ');
    const [lname, setLname] = useState(' ');
    const [address, setAddress] = useState(' ');

    const changeFirstName = (event) => {
        setFname(event.target.value)
    }
    const changeLastName = (event) => {
        setLname(event.target.value)
    }
    const changeAddress = (event) => {
        setAddress(event.target.value)
    }
    const onSubmit = (event) => {
        alert(`Your Name is${fname}${lname}.`)
        event.preventDefault()
    }

    return (
        <div>
            <form className='form'>
                <div className='container'>
                    <label>First Name : </label>
                    <input type='text' value={fname} onChange={changeFirstName}></input>
                </div >
                <div className='container'>
                    <label>Last Name : </label>
                    <input type='text' value={lname} onChange={changeLastName}></input>
                </div>
                <div className='container'>
                    <label>Address : </label>
                    <textarea type='textarea' value={address} onChange={changeAddress}></textarea>
                </div>
                <div className='container'>
                    <button onClick={onSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormFunction
