import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width: 80px;
    height: 40px;
    border-radius: 10px;
    background-color: white;
    border: 1px solid white;
    font-size: 1rem;
    font-weight: 700;
    margin-right: 10px;
`

function LoginButton() {
    return (
        <div>
            <Button>로그인</Button>
        </div>
    )
}

export default LoginButton
