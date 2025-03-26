import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import SockJS from "sockjs-client";
import * as Stomp from "@stomp/stompjs";
import ChatPage from "./ChatPage";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 250px;
  background-color: white;
  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);
  border-radius: 2px;
  padding: 35px 55px 35px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 20px 0 10px;
`;
const Button = styled.button`
  display: inline-block;
  margin: 10px 0;
  padding: 10px 10px;
  color: white;
  background-color: dodgerblue;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
//{url} 부모의 props 받아오기
function UserPage({ url }) {
  const [username, setUsername] = useState(""); // 상태관리를 해줘야 화면에 업데이트가 발생
  const [isConnected, setIsConnected] = useState(false); // 웹 소켓 연결 여부
  const [message, setMessage] = useState(null);

  //상태관리는 해야되지만 변화가 있을때마다 화면을 다시 그릴 필요가 없을 때 사용!!
  //client 연결 객체는 상태관리는 필요하나 화면 렌더링과 무관하므로 useRef로 생성
  //useRef로 만드는 변수는 화면 렌더링을 일으키지 않아서 성능에 유리
  const stompClientRef = useRef(null);


  //소켓 연결 함수!(onSubmit에 사용)
  function connect(e) {
    //form은 필수적으로 reload를 하는데 그걸 막기 위한 함수!!(리엑트는 reload를 안좋아함)
    e.preventDefault();
    //username이 있으면 실행할 수 있도록
    if (username && !stompClientRef.current) {
      //웹소켓 연결(=엔드포인트) 설정
      // stomp client 생성하기!! // 객체 형태
      const client = new Stomp.Client({
        //웹 소켓 연결 시도 코드
        webSocketFactory: () => new SockJS(`${url}/ws`),
        //메세지 응답 콜백 등록(성공시)
        onConnect: () => {
          console.log("Connected as ", username);
          //useRef 사용법!(상태관리)
          stompClientRef.current = client;
          setIsConnected(true); // 연결 여부 true로 변경
          //구독(subscribe)
          client.subscribe("/topic/public", onMessageReceived);
          //JOIN(입장) 전송(publish)
          //{sender : username, type : "JOIN"} -> ChatMessage 객체 형태(내용도 없고 받는 사람도 없음)
          client.publish({ destination: "/app/chat.addUser", body: JSON.stringify({ sender: username, type: "JOIN" }) })
        },
        //메세지 응답 콜백 등록(실패시)
        onStompError: (frame) => {
          console.error("Broker error", frame.headers["message"]);
        },
      });
      //실제로 클라이언트를 실행하는 코드
      client.activate();
    }
  }

  function onMessageReceived(message) {
    const body = JSON.parse(message.body);
    //메세지 상태관리 후 set하기
    setMessage(body);
    console.log("Received:", body);
  }

  return (
    <>
      {/* 만약 (소켓 연결 시도)커넥트가 안되면 컨테이너 박스 보여주고 아니면 chatpage를 보여주기 */}
      {!isConnected ? <Container>
        <h2>Type your username to enter the Chatroom</h2>
        {/* 유저네임 입력창 */}
        <form onSubmit={connect}>
          <Input type="text"
            placeholder="Username"
            autoComplete="off" // 자동완성 기능 끄기
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* enter 치면 submit이 가능하게 만들도록 하기 */}
          <Button type="submit">Start Chatting</Button>
        </form>
      </Container> : <ChatPage username={username} message={message} stompClientRef={stompClientRef} />}
    </>
  );
}

export default UserPage;
