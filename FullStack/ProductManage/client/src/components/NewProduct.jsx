import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();


    const createProduct = async (e) => {
        e.preventDefault();
        const newProduct = {
            title,
            price,
            description
        }

        axios.post("http://localhost:8000/api/products/", newProduct)
            .then(res => {
                console.log("create console log" + res.data);
                navigate(`/products/${res.data._id}`)
            }).catch(err => {
                console.log(" I made it to catch")
                console.log(err);
            })
    }

    return (
        <div className="w-50 p-4 rounded mx-auto shadow mt-4">
            <h3 className="text-center">New Product</h3>

            <form
                onSubmit={e => { createProduct(e) }}
            >
                <div className="form-group">
                    <label className="h6">Title</label>
                    <input
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                        type="text" className="form-control"
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
                    ></textarea>
                </div>
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>





        </div>
    )
}

export default NewProduct