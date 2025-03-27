import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width: 80px;
    height: 40px;
    border-radius: 10px;
    background-color: #ffb4a7;
    border: 1px solid white;
    font-size: 1rem;
    font-weight: 700;
    color: white;
`


function RegisterButton() {
    return (
        <div>
            <Button>회원가입</Button>
        </div>
    )
}

export default RegisterButton
