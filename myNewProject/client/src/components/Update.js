import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import PersonForm from './PersonForm';
import DeleteButton from './DeleteButton';

const Update = (props) => {
    const { id } = props;
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    const updatePerson = personParam => {
        // e.preventDefault();
        axios.put('http://localhost:8000/api/people/' + id, 
            personParam)
            .then(res => {
                console.log(res);
                // navigate("/home");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update a Person</h1>
            {loaded && (
                <>
                    <PersonForm
                        onSubmitProp={updatePerson}
                        initialFirstName={person.firstName}
                        initialLastName={person.lastName}
                    />
                    <DeleteButton personId={person._id} />
                </>
            )}
        </div>
    )
}

export default Update;