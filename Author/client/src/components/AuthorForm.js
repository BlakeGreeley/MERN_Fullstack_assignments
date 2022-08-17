import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AuthorForm = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/author", { name })
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='column'>
                    <Link to = "/">Home</Link>
                    <h2 className="purple">Add your favorite author:</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor ="name">Name:</label>
                        <input 
                            type="text"
                            className='form-input'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        {errors.name ? <p>{errors.name.message}</p> : null}
                        
                        <button className='btn' type="submit" link to = '/'>
                            Enter
                        </button>

                        <Link to = "/" className='btn'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AuthorForm;