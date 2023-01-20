import React from 'react'
import { useState } from "react";
import axios from 'axios';

const Wrapper = (props) => {
    // The below variables are used to gather the data being passed through 
    // state via the forms inputs. When collect this allow us to change the variables info
    // within the API url in our handleSubmit function. 
    const [category, setCategory] = useState('')
    const [id, setId] = useState('')
    // In order to grab the data from the API we create the variable 
    const [information, setInformation] = useState([])



    // This Function is called by the FORM when submitted. Upon submission the event pass through will 
    // change the catrgory and id. This happens because you setCatgory based of the selection and 
    // you setId based of the input.... Also, the setInformation will gather all the info from the API 
    // that is passed through. Now look at displayInformation for the new work flow. 
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://swapi.dev/api/${category}/${id}/ `)
            .then(res => {
                console.log(res);
                setInformation(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    // Now we want to display the information we received from the API through the setInformation. In order
    // to do so we built of a function that will show info based on the selection. EXAMPLE: if People is 
    // selected in the input selction your will the info from people if not selected the info form planets. 
    // Also, you noticed in the IF statement you compared the category which hold the selection from the input 
    // select (this was recieved through STATE).
    const displayInformation = (props) => {
        if (category === "people") {
            return (
                <div>
                    <h1> {information.name} </h1>
                    <p> Height: {information.height} cm</p>
                    <p> Mass: {information.mass} kg</p>
                    <p> Hair Color: {information.hair_color}</p>
                    <p> Skin Color: {information.skin_color}</p>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1> {information.name} </h1>
                    <p> Climate: {information.climate} </p>
                    <p> Terrain: {information.terrain} </p>
                    <p> Surface Water: {information.surface_water} </p>
                    <p> Population: {information.population} </p>
                </div>
            )
        }
    }


    return (
        <div>
            {/* This form will be submitted and run the function handleSubmit. Upon running the handleSubmit 
                you will collect the (all) data of the SELECT input, which will setCategory in STATE. Also the ID collected
                will be SetId as will. Now look at the handleSubmit function for the next work flow... */}
            <form onSubmit={handleSubmit}>
                <label>Search for:</label>
                <select onChange={e => setCategory(e.target.value)} className="ms-2" >
                    <option value={'people'} >People</option>
                    <option value={'planets'} >Planets</option>
                </select>
                <label className='ms-2 me-2'>ID: </label>
                <input type="number" onChange={e => setId(e.target.value)} value={id} />
                <button className='btn btn-dark ms-3' >Search</button>
            </form>
            <div>
                {displayInformation()}
            </div>
        </div>
    )
}

export default Wrapper