import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditAuthor = (props) => {
    const {id} = useParams();
    const [authorName, setAuthorName] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState("");
    const [authorNotFoundError, setAuthorNotFoundError] = useState("");
    console.log(id);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/author/${id}`)
            .then((response) => {
                console.log(response.data);
                setAuthorName(response.data.name);
            })
            .catch((err) => {
                console.log(err.response);
                setAuthorNotFoundError('Author was not found with id');
            });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/author/${id}`, { name: authorName })
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
        <>
            <Link to="/">Home</Link>
            <h2 className="purple">Edit your favorite author:</h2>
        <form className="container" onSubmit={submitHandler}>
            {authorNotFoundError ? (
                <h1>
                    {authorNotFoundError} <Link to = "/new">Click to add an author</Link> 
                </h1>
            ) : null}
            <div className="group">
                <label htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={authorName}
                    onChange = {(e) => setAuthorName(e.target.value)}
                />
                {errors.name ? <p>errors.name.message</p> : null}
            </div>

            <button type="submit" className="btn" link to ='/'>
                Enter
            </button>

            <Link to = "/" className='btn'>Cancel</Link>
        </form>
        </>
    );
};

export default EditAuthor;