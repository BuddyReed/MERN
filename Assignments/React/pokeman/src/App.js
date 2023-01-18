import './App.css';
import { useState, useEffect } from 'react'
import Pokemanlist from './Pokemanlist'
import axios from 'axios'

function App() {
  // Create the variable empty list of pokeman once SET it will collect the data from the API and 
  // get added to the array. 
  const [pokeman, setPokeman] = useState([])


  // useEffect can be used for multiple reasons...The empty array you can pass through variables
  // so that when the (data) inside the varilable changes the function will run....
  // useEffect runs once you load the applications. and can be used to update variables with url
  // useEffect takes 2 argument, the first is what you want useEffect to do the second is an array
  // which if empty will stop the page from re-rendering constantly. 
  // useEffect(() => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0").then(res => {
  //     setPokeman(res.data.results.map(p => p.name))
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }, [])
  // The array is a list of variable the useEffect is track, whenever one of the variable changes
  // we run our useEffect function again.

  const displayPoke = (e) => {
    e.preventDefault();
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0").then(res => {
      setPokeman(res.data.results)
    }).catch(err => {
      console.log(err);
    })
  }


  return (
    <div className="App">
      <Pokemanlist pokeman={pokeman} displayPoke={displayPoke} />
    </div>
  );
}

export default App;




