import styled from "styled-components";


export const Card = styled.div`
    width: 17rem;
    height: 530px;
    background-color: blanchedalmond;
    border-radius: 1rem;
    position: relative;
    margin: 1rem 0;
`

export const Img = styled.img`
    width: 17rem;
    border-radius: 1rem 1rem 0 0;
`

export const CardBody = styled.div`

`

export const H2 = styled.h2`
    text-align: center;
`

export const CardButton = styled.a`
    background-color: lightblue;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    text-align: center;
    padding: .5rem 0;
    border-radius: 0 0 1rem 1rem;
    cursor: pointer;
    transition: all .3s;
    &:hover {
        background-color: blue;
        color: white;
    }
`