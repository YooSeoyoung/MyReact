import React, { useState } from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import styled from 'styled-components'
import Button from '../3_Props/Button'


const Menu = styled.div`
    display: flex;
    gap: 50px;
`

const Body = styled.div``;

// 리엑트 라우터를 쓰지 않을때 
const BasicRouter = () => {

    const [view, setView] = useState("home");
    function renderView() {
        switch (view) {
            case "home": return <Home />;
            case "about": return <About />;
            case "contact": return <Contact />;
            default: return <Home />;
        }
    }
    return (
        <div>
            <Menu >
                {/* 온클릭은 button 컴포넌트가 props로 인식으로 해서 실행이 안됨
                (button 컴포넌트에 html에 넣어야됨!!) */}
                <Button name="HOME" onClick={() => setView("home")}></Button>
                <Button name="ABOUT" onClick={() => setView("about")}></Button>
                <Button name="CONTACT" onClick={() => setView("contact")}></Button>
            </Menu>
            <Body>
                {renderView()}
            </Body>
        </div>
    )
}

export default BasicRouter
