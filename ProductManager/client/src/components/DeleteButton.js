import axios from 'axios';

const DeleteButton = (props) => {
    const { productId, successCallback } = props;
    const deletePerson = e => {
        axios.delete(`http://localhost:8000/api/products/` + productId)
        .then(res => {
            successCallback();
        })
    }

    return (
        <button onClick={deletePerson}>
            Delete
        </button>
    )
}

export default DeleteButton;