import { createGlobalStyle } from 'styled-components';
import { MyComp } from './MyComp';
import { CounterWithoutState } from './Components/1_State/CounterWithoutState';
import { CounterWithState } from './Components/1_State/CounterWithState';
import { NameForm } from './Components/1_State/NameForm';
import { Example1 } from './Components/2_Effect/Example1';
import { Example2 } from './Components/2_Effect/Example2';
import Example3 from './Components/2_Effect/Example3';
import Example4 from './Components/2_Effect/Example4';
import Button from './Components/3_Props/Button';
import Menu from './Components/3_Props/Menu';
import BasicRouter from './Components/4_Router/BasicRouter';
import ReactRouter from './Components/4_Router/ReactRouter';
import SendAPI from './Components/2_Effect/SendAPI';
import MovieListMain from './Components/MovieList/MovieListMain';
import ChatRoomMain from './Components/ChatRoom/ChatRoomMain';
import Octagon from './Solo/Octagon';
import PopUp from './Solo/PopUp';
import Exam from './Solo/Exam';
import Header from './Solo/Header';

// 모든 스타일 적용하기
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
  }
  a{
    text-decoration: none;
    color : inherit;
  }
`;
function App() {
  return (
    <div>
      <GlobalStyle />
      {/* <CounterWithoutState />
      <CounterWithState /> */}
      {/* <NameForm /> */}
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      {/* <Example3 /> */}
      {/* <Example4 /> */}
      {/* <Button /> */}
      {/* <Menu /> */}
      {/* <BasicRouter /> */}
      {/* <ReactRouter /> */}
      {/* <SendAPI /> */}
      {/* <MovieListMain /> */}
      {/* <ChatRoomMain /> */}
      <Header />
      <Octagon />
      <PopUp />
      <Exam />

    </div>
  );
}

export default App;
