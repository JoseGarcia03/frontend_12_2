import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Cards from '../../Components/Cards';
import Input from '../../Components/Input';
import useForm from '../../Hooks/useForm';
import getByName from '../../Modules/getByName';
import { Container } from '../../Styles/components';
import querystring from 'query-string'

const Search = () => {

  const [ values, handleInputChange, handleInputSubmit,  reset ] = useForm({ q: ''});
  const [results, setResults] = useState([])

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
      const parsed = querystring.parse(location.search);
      setResults(getByName( parsed.q ));
      navigate(`?q=${values.q}`)
  }, [values, location.search, navigate]);

  return (
    <main>
        <Input
        handleInputChange={ handleInputChange }
        reset={ reset }
        handleInputSubmit={ handleInputSubmit }/>
        <Container flex gap='1.5rem' wrap="true" >
        {
          results.map( ( movie, idx ) => (
              <Cards key={ idx } {...movie}  />
          ))
        }
      </Container>
    </main>
  )
}

export default Search;