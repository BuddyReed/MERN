import { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllPet = (props) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                console.log(res.data);
                // This sorts the array in 
                res.data.pet.sort((a, b) => (
                    (a.type.toLowerCase() > b.type.toLowerCase()) ? 1 : -1
                ));
                setPets(res.data.pet);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    // const handleDelete = (idToDeleted) => {
    //     axios.delete(`http://localhost:8000/api/pets/${idToDeleted}`)
    //         .then(res => {
    //             const filteredPets = pets.filter((pet) => {
    //                 return pet._id !== idToDeleted
    //             })
    //             setPets(filteredPets);
    //         }).catch(err => {
    //             console.log(err);
    //         })
    // }


    return (
        <div>
            <div className="container">
                <Link className="btn btn-sm btn-outline-danger mx-1" to="/pet/new">Add an pet</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="mt-4" >
                        {pets.map((pet) => {
                            const { _id, name, type } = pet;
                            return (
                                <tr key={_id} className="shadow mb-4 rounded border p-4 mt-4">
                                    <th scope="row">{name}</th>
                                    <th scope="row">{type}</th>
                                    <td>
                                        <Link className="btn btn-sm btn-outline-danger mx-1" to={`/pet/${_id}`}> Details </Link>
                                        <Link className="btn btn-sm btn-outline-danger mx-1" to={`/pet/edit/${_id}`}> Edit </Link>
                                        {/* <button
                                            onClick={(e) => handleDelete(_id)}
                                            className="btn btn-sm btn-outline-danger mx-1">
                                            Delete
                                        </button> */}
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

export default AllPet