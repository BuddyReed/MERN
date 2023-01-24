import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const OneDestination = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            }).catch(err => {
                console.log(err)
            })
    }, [id])

    // We can only safely use the data to render and destructure now since
    // we checked it's not null.
    const { title, price, description } = product;

    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
            <h4>{title}</h4>
            <p>${price}</p>
            <p>Description: {description}</p>
        </div>
    );
};

export default OneDestination;