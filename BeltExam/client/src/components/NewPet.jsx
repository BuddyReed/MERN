import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const NewPet = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const [errors, setErrors] = useState(null);;


    const navigate = useNavigate();


    const createPet = async (e) => {
        e.preventDefault();
        const newPet = {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        }
        axios.post("http://localhost:8000/api/pets/", newPet)
            .then(res => {
                console.log("create console log" + res.data);
                navigate(`/pet`)
            }).catch(err => {
                console.log(" I made it to catch")
                console.log(err.response);
                setErrors(err.response?.data?.errors)
            })
    }

    return (
        <div className="w-50 p-4 rounded mx-auto shadow mt-4">
            <div>
                <Link className="btn btn-sm btn-outline-danger mx-1" to="/pet">Back to Home</Link>
            </div>

            <h3 className="text-center">Know a pet needing a home?</h3>

            <form
                onSubmit={e => { createPet(e) }}
            >
                <div className="form-group">
                    <label className="h6">Pet Name:</label>
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

                    <label className="h6">Pet Type:</label>
                    {
                        errors?.type && (
                            <p style={{ color: 'red' }}>{errors.type?.message}</p>
                        )
                    }
                    <input
                        onChange={(event) => {
                            setType(event.target.value);
                        }}
                        type="text" className="form-control"
                    />

                    <label className="h6">Pet Description:</label>
                    {
                        errors?.description && (
                            <p style={{ color: 'red' }}>{errors.description?.message}</p>
                        )
                    }
                    <input
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}
                        type="text" className="form-control"
                    />

                    <label className="h6">Skill 1:</label>
                    <input
                        onChange={(event) => {
                            setSkill1(event.target.value);
                        }}
                        type="text" className="form-control"
                    />

                    <label className="h6">Skill 2:</label>
                    <input
                        onChange={(event) => {
                            setSkill2(event.target.value);
                        }}
                        type="text" className="form-control"
                    />

                    <label className="h6">Skill 3:</label>
                    <input
                        onChange={(event) => {
                            setSkill3(event.target.value);
                        }}
                        type="text" className="form-control"
                    />

                </div>
                <Link className="btn btn-sm btn-outline-danger mx-1 mt-3" to="/pet">Cancel</Link>
                <button className="btn btn-sm btn-outline-success mt-3">Submit</button>
            </form>

        </div>
    )
}

export default NewPet