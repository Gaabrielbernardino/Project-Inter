import React from 'react'
import { render, waitFor} from '@testing-library/react'
import Footer from './Footer'


describe('Teste do componente Footer' , () => {
    it('Rendizar o componente na tela' , async () => {
        const {getByTestId} = render (<Footer/>)
        const fieldNode = await waitFor(
            () => getByTestId('footer')            
        ) 
       console.log(fieldNode)
    })
})