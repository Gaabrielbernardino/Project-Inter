import React from 'react'
import { Form,  Button } from 'react-bootstrap';
import styles from '../Search/Search.module.css'


export default function Search(props) {

  const [search , setSearch] = React.useState('')


  return (
    
    <Form className={styles.inputSearch}>
      <Form.Control
              data-testid="form-field"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Procure pelo Pokémon" 
              type="number"/>
     <Button 
     data-testid="form-btn"
     block="true" 
     onClick={(e) => props.getPokemon(search)}>
       Procurar
       </Button>
    </Form>
   
    
  );
}


