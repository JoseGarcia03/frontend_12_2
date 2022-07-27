import React from 'react'
import { useParams } from 'react-router-dom';
import getById from '../../Modules/getById';
import { Container } from '../../Styles/components';
import { Div, Img } from './styles';

const Detalle = () => {

    const { id } = useParams();
    const movie = getById( id );

  return (
    <Container flex gap="1.5rem">
        <Img src={`../assets/movies/${ id }.jpg`} alt={movie.id} />
        <Div>
          <h2>{ movie.name }</h2>
          <p>{ movie.description }</p>
        </Div>
    </Container>
  )
}

export default Detalle;