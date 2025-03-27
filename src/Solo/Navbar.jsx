import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    display: flex;
    border-radius: 30px;
   position: relative;
   margin-left: 70px;
   gap: 10px;
`
// 컴포넌트일 경우에는 ()로 감싸기
const StyledLink = styled(Link)`
    text-decoration: none;
    color:#3333;
    border-radius: 30px;
    border: 1px solid #ffdcd6;
    color: white;
    padding: 20px;
    font-size: 1.5rem;
    &:hover{
        border: 1px solid white;
        background-color:#ffdcd6;
    }
`

function Navbar() {
    return (
        <div>
            <Container>
                <StyledLink to="/mypage">MyPage</StyledLink>
                <StyledLink to="/story">Story</StyledLink>
                <StyledLink to="/map">Map</StyledLink>
                <StyledLink to="/event">Event</StyledLink>
            </Container>
        </div>
    )
}

export default Navbar
