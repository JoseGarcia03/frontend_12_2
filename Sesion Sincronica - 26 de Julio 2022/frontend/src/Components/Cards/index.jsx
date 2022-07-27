import React from 'react'

import { Card, CardBody, CardButton, H2, Img } from './styles'

const Cards = ({ id, name }) => {
  return (
    <Card>
        <Img src={`./assets/movies/${ id }.jpg`} />
        <CardBody>
            <H2>{ name }</H2>
            <CardButton
            href={`/detalle/${ id }`}>Detalles</CardButton>
        </CardBody>
    </Card>
  )
}

export default Cards