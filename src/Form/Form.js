import React, { useState, useEffect } from 'react';
import style from './Form.module.scss';

// Implement a form with input fields for first name, last name, and email address. Validate the form to ensure that all fields are filled out and that the email address is a valid format.

// add submit button and use redux to store the form data in a array/list

// display submitted forms data in a table retrieving data from the redux store

const Form = () => {
    const [data, setData] = useState([{
        firstName : '',
        secondName: '',
        email: ''
    }]);

    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('event--->', event);
        setData({
            firstName: event.target.firstName,
            lastName: event.target.lastName,
            email: event.target.email
        })
       
    }

    const validEmail = (email) => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regex.test(email)) {
            return true
        } else {
            console.log('email--->', email);
            alert('Please Enter the Valid Email');
            return false;
        }
    }

    // useEffect(() => {
    //   handleSubmit();
    // }, [])
    
    return (
        <div className={style.container}>
            <h3>Detail Form</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:<input type="text" name="fname" value={data.firstName} required/>
                </label>
                <label>
                    Last Name:<input type="text" name="lname" value={data.lastName} required/>
                </label>
                <label>
                    Email:<input type="email" name="email" value={data.email} required/>
                </label>

                <input type="submit" value="Submit" />
            </form>

        </div>
    )
}

export default Form;
