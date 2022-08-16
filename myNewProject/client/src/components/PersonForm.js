import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const PersonForm = (props) => {
    const { initialFirstName, initialLastName, onSubmitProp } = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ firstName, lastName });
        // axios.post('http://localhost:8000/api/people', {
        //     firstName,
        //     lastName
        // })
    //         .then(res => {
    //             console.log(res);
    //             console.log(res.data);
    //             setPeople([...people, res.data]);
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <form onSubmit={submitHandler}>
            <p>
                <label>First Name</label> <br/>
                <input type="text" onChange = {(e) => setFirstName(e.target.value)}/>
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