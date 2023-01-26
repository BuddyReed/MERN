import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

const EditAuthor = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState(null);

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                const {
                    name
                } = res.data.author

                setName(name);
            }).catch(err => {
                console.log(err);
                navigate(`/err`);
            })
    }, [id, navigate])


    const handleUpdate = (e) => {
        e.preventDefault();

        const editedAuthor = {
            name
        }

        axios.put(`http://localhost:8000/api/authors/${id}`, editedAuthor)
            .then(res => {
                console.log(res);
                navigate(`/author`);
            }).catch(err => {
                console.log(err);
                // this code is a must in order to set your errors.
                setErrors(err.response?.data?.errors)
            })
    }


    return (
        <div className="w-50 p-4 rounded mx-auto shadow mt-4">
            <h1>Edit This Author</h1>
            <div>
                <Link className="btn btn-sm btn-outline-danger mx-1" to="/author">Home</Link>
            </div>

            <h3 className="text-center">New Author</h3>

            <form
                onSubmit={e => { handleUpdate(e) }}
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
                        value={name}
                    />
                </div>
                <Link className="btn btn-sm btn-outline-danger mx-1 mt-3" to="/author">Cancel</Link>
                <button className="btn btn-sm btn-outline-success mt-3">Submit</button>
            </form>

        </div>
    )
}

export default EditAuthor