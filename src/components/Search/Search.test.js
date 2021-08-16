import React from 'react'
import {fireEvent, render, waitFor} from '@testing-library/react'
import Search from './Search'




describe('Teste do componente Search' , () => {
    it('Quando o form for submetido adicionar itens' , async () => {
        const {getByTestId} = render (<Search/>)
        const fieldNode = await waitFor(
            () => getByTestId('form-field')            
        ) 
        const newTask = '1'
        fireEvent.change(
            fieldNode, 
            { target: { value: newTask}}
        )
        expect(fieldNode.value).toEqual(newTask)
       
    })
})