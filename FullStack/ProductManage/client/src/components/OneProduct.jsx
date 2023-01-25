import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export const OneDestination = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        console.log('New day')
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data.product);
            }).catch(err => {
                console.log(err)
            })
    }, [id])

    if (product === null) {
        return null;
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                navigate('/');
            }).catch(err => {
                console.log(err);
            })
    }


    // We can only safely use the data to render and destructure now since
    // we checked it's not null.
    const { title, price, description } = product;

    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
            <h4>{title}</h4>
            <p>${price}</p>
            <p>Description: {description}</p>
            <Link to={`/product/${id}/edit`}>Edit</Link>
            <button
                onClick={handleDelete}
                className="btn btn-sm btn-outline-danger mx-1"
            >
                Delete
            </button>
        </div>
    );
};

export default OneDestination;