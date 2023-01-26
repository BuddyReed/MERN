import { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllAuthor = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data);
                setAuthors(res.data.author);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    const handleDelete = (idToDeleted) => {
        axios.delete(`http://localhost:8000/api/authors/${idToDeleted}`)
            .then(res => {
                const filteredAuthors = authors.filter((author) => {
                    return author._id !== idToDeleted
                })
                setAuthors(filteredAuthors);
            }).catch(err => {
                console.log(err);
            })
    }


    return (
        <div>
            <div className="container">
                <Link className="btn btn-sm btn-outline-danger mx-1" to="/author/new">Add an author</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Author</th>
                            <th scope="col">Action Avaiable</th>
                        </tr>
                    </thead>
                    <tbody className="mt-4" >
                        {authors.map((author) => {
                            const { _id, name } = author;
                            return (
                                <tr key={_id} className="shadow mb-4 rounded border p-4 mt-4">
                                    <th scope="row">{name}</th>
                                    <td>
                                        <Link className="btn btn-sm btn-outline-danger mx-1" to={`/author/edit/${_id}`}> Edit </Link>
                                        <button
                                            onClick={(e) => handleDelete(_id)}
                                            className="btn btn-sm btn-outline-danger mx-1">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default AllAuthor