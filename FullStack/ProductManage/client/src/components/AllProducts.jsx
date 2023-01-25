import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllProducts = (props) => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data);
                setProducts(res.data.product);
            }).catch(err => {
                console.log(err);
            })
    }, [])


    const handleDelete = (idToDeleted) => {
        axios.delete(`http://localhost:8000/api/products/${idToDeleted}`)
            .then(res => {
                const filteredProducts = products.filter((product) => {
                    return product._id !== idToDeleted
                })
                setProducts(filteredProducts);
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2 className="mt-4">All Products:</h2>

            {products.map((product) => {
                //decrusting the product info
                const { _id, title } = product;
                return (
                    <div key={_id} className="shadow mb-4 rounded border p-4">
                        <Link to={`/product/${_id}`}> {title}</Link>
                        <button
                            onClick={(e) => handleDelete(_id)}
                            className="btn btn-sm btn-outline-danger mx-1">
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    )
}

export default AllProducts