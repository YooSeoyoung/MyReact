import { useState } from "react";
import styled from "styled-components";

// const color = "dodgerblue";

// Cointer이라는 컴포넌트를 보게 되면 다음과 같은 스타일을 적용 시켜라는 의미
const Container = styled.div`
        width: 100vw;  //화면의 100%
        height : 100vh; // 화면의 100%
        display: flex;
        justify-content: center;
        align-items: center;
`;

const Box = styled.section`
    width: 400px;
    height: 400px ;
    background-color: ${(props) => props.color};
    color: white;
    border-radius: 5px;
    /* &: Box의 자손/ 자식들의 input 태그들은 이렇게 스타일을 적용하라  // 자식만 하고 싶으면 > 사용하면 됨*/
    &input{
        width: 300px;
        height: 30px;
    }
    & .name{
        font-size: 2rem;
    }
`;
const Button = styled.button`
    width: 100px;
    height: 50px;
`;
export function NameForm() {
    const [name, SetName] = useState("");

    const handleChange = (e) => {
        SetName(e.target.value);
    };
    // 위에랑 같은 의미!!!!
    // function handleChange(e) {
    //     name = e.target.value;
    // }
    const [color, setColor] = useState("dodgerblue");
    const changeColor = () => {
        setColor("red");
    }
    return (
        <>
            <Container>
                <Box color={color}>
                    <h2>이름 입력</h2>
                    <input type="text" value={name} onChange={(e) => { handleChange(e); }} placeholder="이름을 입력해주세요" />
                    <p className="name">입력한 이름은 : {name}</p>
                    <Button onClick={() => { changeColor(); }}>버튼을 누르면 컬러가 바껴요</Button>
                </Box>
            </Container>
        </>
    )
}