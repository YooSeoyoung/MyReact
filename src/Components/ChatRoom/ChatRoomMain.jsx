import React from "react";
import UserPage from "./UserPage";

function ChatRoomMain() {
  //꼭 url을 변수로 만들어서 관리하는게 용이함(개발용 url)// 개발 완료시기에는 변경 필요
  const url = "http://localhost:8081";
  return (
    <>
      {/* props로 던져주기 */}
      <UserPage url={url} />
    </>
  );
}

export default ChatRoomMain;
