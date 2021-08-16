import React from 'react'
import { render, waitFor} from '@testing-library/react'
import PokemonData from './PokemonData'


describe('Teste do componente PokemonData' , () => {
    it('Rendizar o componente na tela' , async () => {
        const {getByTestId} = render (<PokemonData/>)
        const fieldNode = await waitFor(
            () => getByTestId('pokemondata')            
        ) 
       console.log(fieldNode)
    })
})