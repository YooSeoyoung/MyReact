import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  height: 600px;
  position: relative;
  background-color: white;
  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);
  border-radius: 2px;
  margin: 30px auto 0;
  padding: 15px;
`;
const Header = styled.div`
  width: 100%;
  text-align: center;
  padding: 15px;
  border-bottom: 1px solid #ececec;
`;
const MessageArea = styled.div`
  list-style-type: none;
  background-color: #fff;
  margin: 0;
  overflow: auto;
  overflow-y: scroll;
  /* padding: 0 20px 0px 20px; */
  height: calc(100% - 130px);
`;
const Box = styled.div`
  width: 100%;
`;
const Input = styled.input`
  width: calc(100% - 85px);
  height: 40px;
`;
const Button = styled.button`
  width: 80px;
  height: 38px;
  margin-left: 5px;
  display: inline-block;
  padding: 10px 10px;
  color: white;
  background-color: dodgerblue;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const MessageWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
  padding: 5px;
  border-bottom: 1px solid #ececec;
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$bgcolor};
  border-radius: 50%;
  font-size: 1.8rem;
`;
const Message = styled.div`
  color: #777;
  font-size: 14px;
  word-wrap: break-word;
`;
const Join = styled(Message)`
  text-align: center;
  border-bottom: 1px solid #ececec;
  padding: 7px 0;
`;
const Leave = styled(Join)``;

const colors = [
  "#2196F3",
  "#32c787",
  "#00BCD4",
  "#ff5652",
  "#ffc107",
  "#ff85af",
  "#FF9800",
  "#39bbb0",
];
function ChatPage({ username, message, stompClientRef }) {
  // console.log(username, message);
  const [value, setValue] = useState("");
  //받은 메세지를 갱신하는게 아니라 담아서 보관을 하고 항시 보여주기 때문에 list 형식으로 담기
  const [messageList, setMessageList] = useState([]);


  //message가 바뀔때마다 {} 안에 있는 코드를 실행!!
  useEffect(() => {
    //최초 한번 때문에
    if (!message) {
      return;
    }
    // join leave는 content가 없기 때문에 화면에 뿌려줄게 없어서 분류 후 하드 코딩이 필요함!! 
    if (message.type == "JOIN") {
      message.content = message.sender + " joined";
    } else if (message.type == "LEAVE") {
      message.content = message.sender + " left!";
    }
    //prev : 전 배열 , [...prev,message]: 복사한 값 + 새로 들어온 값
    setMessageList((prev) => [...prev, message]);

  }, [message]);

  //메세지 입력 함수
  function sendMessage(e) {
    e.preventDefault(); //reload 막기
    if (value && stompClientRef.current) {
      const chatMessage = {
        sender: username,
        content: value,
        type: "CHAT",
      };
      stompClientRef.current.publish({
        destination: "/app/chat.sendMessage",
        body: JSON.stringify(chatMessage),
      });
      //send까지하면 빈칸으로 바꾸기!
      setValue("");
    }
  }

  return <Container>
    <Header>
      <h2>Spring WebSocket Chat Demo</h2>
    </Header>
    {/* 메세지가 보이는 곳 */}
    <MessageArea>
      {messageList.map((m, i) =>
        //join이나 leave이면 이렇게 표시
        m.type == "JOIN" || m.type == "LEAVE" ?
          <Join key={i}>{m.content}</Join> :
          //chat이면 이렇게 표시
          <MessageWrapper key={i}>
            <Icon>
              <span>{m.sender[0].toUpperCase()}</span>
            </Icon>
            <Message>
              <div><strong>{m.sender}</strong></div>
              <div>{m.content}</div>
            </Message>
          </MessageWrapper>)}
    </MessageArea>
    {/* 메세지를 입력하는 곳 */}
    <form onSubmit={sendMessage}>
      <Box>
        <Input type="text"
          placeholder="Type a message.."
          autoComplete="off" // 자동완성 기능 끄기
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit">Send</Button>
      </Box>
    </form>

  </Container>;
}

export default ChatPage;
