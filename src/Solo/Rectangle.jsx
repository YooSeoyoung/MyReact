import styled from 'styled-components';
import { IconUser } from './Icons';

const CardWrap = styled.div`
  width: 550px;
  margin: 0 auto;
`;

const Card = styled.div`
  width: 500px;
  height: 600px;
  background-color: #ffae9f;
  opacity: 0.4;
  clip-path: polygon(
    10% 0%,
    90% 0%,
    120% 25%,
    120% 75%,
    90% 100%,
    10% 100%,
    0% 90%,
    0% 10%
  );
  margin: 0 auto;
`;

function Rectangle() {
  return (
    <CardWrap>
      <Card></Card>
    </CardWrap>
  );
}

export default Rectangle;
