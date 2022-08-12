import React, { useState } from "react";
import axios from "axios";

const CreateProduct = (props) => {
    const { productList, setProductList } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/product", {
                title,
                price,
                description,
            })
            .then((res) => {
                setProductList([...productList, res.data]);
                setTitle("");
                setPrice("");
                setDescription("");
                console.log(res);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <header className="header">Product Manager</header>

            <form className='Form' onSubmit={submitHandler}>
                <div className="form-fields">
                    <label>Title: </label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        name="title"
                        type="text"
                    />
                </div>

                <div className="form-fields">
                    <label>Price: </label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                    />
                </div>

                <div className="form-fields">
                    <label>Description: </label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                    />
                </div>

                <button type='submit'>Create:</button>
            </form>
        </div>
    );
};

export default CreateProduct;