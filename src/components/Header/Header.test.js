import React from 'react'
import { render, waitFor} from '@testing-library/react'
import Header from './Header'


describe('Teste do componente Header' , () => {
    it('Rendizar o componente na tela' , async () => {
        const {getByTestId} = render (<Header/>)
        const fieldNode = await waitFor(
            () => getByTestId('header')            
        ) 
       console.log(fieldNode)
    })
})