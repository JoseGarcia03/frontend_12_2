import React from 'react'
import { Container } from '../../Styles/components'

import { H1, InputSearch } from './styles'

const Input = ({ handleInputSubmit }) => {
  return (
    <Container>
        <H1>Buscar</H1>
        <form onSubmit={ handleInputSubmit }>
        <InputSearch name='q' />
        </form>
    </Container>
  )
}

export default Input