import React from 'react'
import Cards from '../../Components/Cards';
import getByCategory from '../../Modules/getByCategory';
import { Container } from '../../Styles/components'

const Hobbit = () => {

  const senior = getByCategory( "hobbit" );

  return (
    <main>
      <Container flex gap='1.5rem' wrap='true'>
        {
          senior.map( ( movie, idx ) => (
              <Cards key={ idx } {...movie}  />
          ))
        }
      </Container>
    </main>
  )
}

export default Hobbit