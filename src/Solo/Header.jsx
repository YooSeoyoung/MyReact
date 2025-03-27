import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { BrowserRouter } from 'react-router-dom'
import LoginButton from './LoginButton'
import RegisterButton from './RegisterButton'

const Container = styled.div`
    width: 100%;
    background-color: #ffcbc2;
    height: 100px;
    padding-left: 250px;
    padding-right: 250px;
    display: flex;                
    justify-content: start;   
    align-items: center; 
   
`
const H1 = styled.h1`
    font-size: 3.5rem;
    color: white;
`
const Wrap = styled.div`
display: flex;
justify-content: end;   

width: 1500px;
`

function Header() {
    return (
        <>
            <Container>
                <H1>WeARE</H1>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
                <Wrap>
                    <LoginButton />
                    <RegisterButton />
                </Wrap>
            </Container>
        </>
    )
}

export default Header
