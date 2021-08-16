import React from 'react'
import { render, waitFor} from '@testing-library/react'
import Card from './Card'




describe('Teste do componente Card' , () => {
    it('Rendizar o componente na tela' , async () => {
        const {getByTestId} = render (<Card/>)
        const fieldNode = await waitFor(
            () => getByTestId('card')            
        ) 
       console.log(fieldNode)
    })
})