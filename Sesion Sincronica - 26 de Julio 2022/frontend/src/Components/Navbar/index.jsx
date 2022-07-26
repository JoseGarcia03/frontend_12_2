import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { PathContext } from '../../Context/PathContext';

import { Container } from '../../Styles/components';
import { H1, Li, Nav, Ul } from './styles';

const Navbar = () => {
    const { route } = useContext( PathContext );

  return (
    <Nav>
        <Container flex itemCenter>
            <H1><Link to='/'>Movies</Link></H1>
            <Ul>
                {
                   route.map( ({ title, path }, idx ) => (
                    <Li key={ idx }><Link to={ path }>{ title }</Link></Li>
                   )) 
                }
            </Ul>
        </Container>
    </Nav>
  )
}

export default Navbar;