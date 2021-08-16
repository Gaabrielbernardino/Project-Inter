import React from 'react';
import styles from '../PokemonData/PokemonData.module.css'

export default function PokemonData(props) {

  return (
    <div className={styles.pokemonDiv} data-testid="pokemondata">
       <h5>{props.name}</h5>             
        <img src={props.back_default} alt={props.name} />  
        <img src={props.back_shiny} alt={props.name} /> 
        <img src={props.front_default} alt={props.name} />  
        <img src={props.front_shiny} alt={props.name} />          
    </div>
                 
  )
}