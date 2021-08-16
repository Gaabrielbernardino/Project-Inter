import React from 'react';
import Search from '../components/Search/Search';
import { fetchPokemon } from '../services/getPokemon';
import PokemonData from '../components/PokemonData/PokemonData';
import { Alert } from 'react-bootstrap';
import { ReactComponent as Loading } from '../Assets/Loading.svg';
import styles from '../pages/Card.module.css'



export default function HomePage() {
  
  const [pokemon, setPokemon] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  const getPokemon = async (query) => {
    if (!query) {
      setErrorMsg('Você deve inserir um Pokémon');
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query);
        const results = await response.json();
        console.log(results);
        setPokemon(results);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
        setErrorMsg('Pokemon não encontrado.');
      }
    }, 500);
  }

  return (
    <div data-testid="card" >
      {error ? (<Alert variant='danger'>{errorMsg}</Alert>): null}
      <Search getPokemon={getPokemon} />   
      {loading ? (
        <div className={styles.loading}>
        <Loading/>
        </div>
      ) : null}
      {!loading && pokemon ? (
        <PokemonData
          name={pokemon.name}          
          back_shiny ={pokemon.sprites.back_shiny} 
          front_default={pokemon.sprites.front_default}
          back_default={pokemon.sprites.back_default}   
          front_shiny={pokemon.sprites.front_shiny}
           />
      ): null}
 
    </div>
  )
}