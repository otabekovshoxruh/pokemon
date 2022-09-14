import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import PokemonCard from "./Components/PokemonCard";
import "./App.css";

function App() {
   const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getAllPokemon = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

 useEffect(() => {
  getAllPokemon()
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[]);

  return (
    <div className="App">
      <Navbar />
      <Search />
      <div className="app-contaner">
        <div className="allPokemons">
          <div className="pokemon-container">
            <div className="all-container">
              {allPokemons.map((pokemon, k)  => (
                <PokemonCard
                  name={pokemon.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                  species={pokemon.species.name}
                  attack={pokemon.stats[1].base_stat}
                  degense={pokemon.stats[2].base_stat}
                  type={pokemon.types[0].type.name}
                />
              ))}
            </div>
            <button className='load-more' onClick={()=>getAllPokemon()}>load-more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
