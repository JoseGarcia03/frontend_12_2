import styled from "styled-components";


export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    display: ${ props => props.flex ? 'flex' : 'inherit' };
    align-items: ${ props => props.itemCenter ? 'center' : 'inherit' };
`