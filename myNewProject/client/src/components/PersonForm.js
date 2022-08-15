import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PersonForm = () => {
    cosnt [firstName, setFirsrName] = useState("");
    const [lastName, setLastName] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label> <br/>
                <input type="text" onChange = {(e) => setFirsrName(e.target.value)}/>
            </p>

            <p>
                <label>Last Name</label> <br/>
                <input type="text" onChange = {(e) => setLastName(e.target.value)}/>
            </p>

            <button type="submit">Submit</button>
        </form>
    )
}

export default PersonForm;