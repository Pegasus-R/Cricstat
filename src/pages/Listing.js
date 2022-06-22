import React from 'react';
import Axios from 'axios';
import {useState, useEffect} from 'react';
import List from "../components/PlayerList"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"


//object for styling the background of <Container>
const myStyle={
  backgroundImage:`url(${process.env.PUBLIC_URL+ "/background.png"})`,
  height:'100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: "fixed",
};

function Listing(){

  //useState hook allows us to track state of a function component(params)
  const [appState, setAppState] = useState({loading: false});
  const [plists, setPlists] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState('');
  //Higher Order Component is a function that takes a component and returns a new component
  const filterPlists = plists.filter((listp) =>
  listp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  //useEffect hook allows us to perform side effects in the components i.e, fetching data, directly updating the DOM etc
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.cricapi.com/v1/players?apikey=de8397b6-2bee-4daa-8281-a63b325d617b&offset=0`;
    Axios(apiUrl)
      .then((response) => 
        {
          // console.log(response.data.data)
          setPlists(response.data.data)
        })
      .then(() => 
        {
          setAppState({ loading: false});
        });
  },[setAppState]);
  
  

  const handleChange = (event) => 
  {
    setSearch(event.target.value);
  };
    
  function getAPI()
  {
    Axios.get("https://api.cricapi.com/v1/players?apikey=de8397b6-2bee-4daa-8281-a63b325d617b&offset=0&search=" + search)
    .then((response)=> 
      {
        // console.log(response.data.data)
        setPlists(response.data.data)
      }
  )}
      
  const handleClick = event => 
  {
    event.preventDefault();
    console.log('handleClick', search);
    getAPI();
  };
    
  return (
    <main class="background" style={myStyle}>
      <div className="headerContainer">
        {/* <h1>Welcome to the Database</h1> */}
        <div className="buttonContainer">
          <input type="text" id="message" name="message" onChange={handleChange} value={search} autoComplete="off"/>
          <button onClick={handleClick}> Submit </button>
          <br></br>
          <input className="searchlist" placeholder="Search in the list" type="text" onChange={handleSearch}/>
        </div>
      </div>
      <div className="Container">
        {filterPlists.map((lists) => {
          return (
            <List
              key={lists.id}
              playerName={lists.name}
              country={lists.country}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Listing;
