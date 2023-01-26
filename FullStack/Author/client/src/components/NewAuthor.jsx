import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const NewAuthor = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState(null);


    const navigate = useNavigate();


    const createAuthor = async (e) => {
        e.preventDefault();
        const newAuthor = {
            name
        }
        axios.post("http://localhost:8000/api/authors/", newAuthor)
            .then(res => {
                console.log("create console log" + res.data);
                navigate(`/author`)
            }).catch(err => {
                console.log(" I made it to catch")
                console.log(err.response);
                setErrors(err.response?.data?.errors)
            })
    }

    return (
        <div className="w-50 p-4 rounded mx-auto shadow mt-4">
            <div>
                <Link className="btn btn-sm btn-outline-danger mx-1" to="/author">Home</Link>
            </div>

            <h3 className="text-center">New Author</h3>

            <form
                onSubmit={e => { createAuthor(e) }}
            >
                <div className="form-group">
                    <label className="h6">Name:</label>
                    {
                        errors?.name && (
                            <p style={{ color: 'red' }}>{errors.name?.message}</p>
                        )
                    }
                    <input
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        type="text" className="form-control"
                    />
                </div>
                <Link className="btn btn-sm btn-outline-danger mx-1 mt-3" to="/author">Cancel</Link>
                <button className="btn btn-sm btn-outline-success mt-3">Submit</button>
            </form>

        </div>
    )
}

export default NewAuthor