import { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';
import {Link} from "react-router-dom";

const DisplayAllAuthors = () => {
    const [allAuthors, setAllAuthors] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/author")
        .then((response) => {
            console.log(response.data);
            setAllAuthors(response.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, []);
    
    const handleDeleteAuthor = (idFromBelow) => {
        axios
            .delete(`http://localhost:8000/api/author/${idFromBelow}`)
            .then((response) => {
                console.log("you deleted the author");
                console.log(response);
                const filteredAuthors = allAuthors.filter((author) => {
                    return author._id !== idFromBelow;
                });
                setAllAuthors(filteredAuthors);
            })
            .catch((err) => {
                console.log("error while deleting the author", err.response);
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="column">
                    <Link to ='/new'>Add an Author</Link>
                    <h2>We have quotes by:</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Author</th>
                                <th scope='col'>Author</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td>
                                    <Link to = {'/edit/${author._id}'}>
                                        <button className="btn">Edit</button>
                                    </Link>

                                    <button
                                        onClick = {() => handleDeleteAuthor(author._id)}
                                        className="btn"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DisplayAllAuthors;