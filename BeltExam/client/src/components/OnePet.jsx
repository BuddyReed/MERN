import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export const OnePet = (props) => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        console.log('New day')
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                console.log(res.data);
                setPet(res.data.pet);
            }).catch(err => {
                console.log(err)
            })
    }, [id])

    if (pet === null) {
        return null;
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                navigate('/');
            }).catch(err => {
                console.log(err);
            })
    }


    // We can only safely use the data to render and destructure now since
    // we checked it's not null.
    const { name, type, description, skill1, skill2, skill3 } = pet;

    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
            <h3>Details about  {name}</h3>
            <p> Pet type: {type}</p>
            <p>Description: {description}</p>
            <p>Skills: {skill1} , {skill2} , {skill3}</p>
            <Link className="btn btn-sm btn-outline-danger mx-1" to={`/pet/edit/${id}`}>Edit</Link>
            <button
                onClick={handleDelete}
                className="btn btn-sm btn-outline-danger mx-1"
            >
                Delete
            </button>
            <Link className="btn btn-sm btn-outline-danger mx-1" to="/pet">Back to Home</Link>
        </div>
    );
};

export default OnePet;