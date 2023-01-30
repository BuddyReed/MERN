import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    // url route param matching `:id`.
    const { id } = useParams();

    const navigate = useNavigate();

    // Server reuest for data on form when loading the page
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                const {
                    title,
                    price,
                    description,
                } = res.data.product

                setTitle(title);
                setPrice(price);
                setDescription(description);
            }).catch(err => {
                console.log(err);
            })
    }, [id])

    // Update 
    const handleUpdate = (e) => {
        e.preventDefault();

        const editedProduct = {
            // long-form syntax - key:value
            title,
            // short-form syntax (only works if key matches what you want to send in)
            price,
            description,

        }

        // Server put request
        axios.put(`http://localhost:8000/api/products/${id}`, editedProduct)
            .then(res => {
                console.log(res);
                navigate(`/product/${id}`);
            }).catch(err => {
                console.log(err);
            })
    }


    return (

        <div className="w-50 p-4 rounded mx-auto shadow mt-4">
            <h3 className="text-center">New Product</h3>

            <form
                onSubmit={handleUpdate}
            >
                <div className="form-group">
                    <label className="h6">Title</label>
                    <input
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                        type="text" className="form-control"
                        value={title}
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Price:</label>
                    <input
                        onChange={(event) => {
                            setPrice(event.target.value);
                        }}
                        type="number" step=".01"
                        className="form-control"
                        value={price}
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Description</label>
                    <textarea
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}
                        type="text"
                        className="form-control"
                        value={description}
                    ></textarea>
                </div>
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>

        </div>

    )
}

export default EditProduct