import React, { useState } from "react";
import axios from "axios";
import "./search.css";

const Search = () => {
  const [pokName, setPokName] = useState("");
  const [pokemon, setPokemon] = useState({});

  const fetchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokName}`)
      .then((response) => {
        setPokemon({
          name: pokName,
          species: response.data.species.name,
          img: response.data.sprites.other.dream_world.front_default,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });
        console.log(response);
      })
      .catch(() => {
        console.error("Xatolik!");
      });
  };

  return (
    <>
      <div className="searchArea">
        <input
          className="search"
          type="text"
          onChange={(event) => {
            setPokName(event.target.value);
          }}
        />
        <button onClick={fetchPokemon}>Search</button>
      </div>


      <div className="resultCard">
        <div className="card">
          <div className="cardR">
            <h1>{pokemon.name}</h1>
            <p>Species: {pokemon.species}</p>
            <h3>Attack: {pokemon.attack}</h3>
            <h4>Degense: {pokemon.degense}</h4>
            <p>Type: {pokemon.type}</p>
          </div>
          <div className="cardL">
            <img src={pokemon.img} className="img" alt={pokemon.name} />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Search;
