import styled from 'styled-components';
import {
  IconBirthday,
  IconEmail,
  IconImage,
  IconModify,
  IconPhone,
  IconUser,
} from './Icons';
import { useState } from 'react';
import Profile from './img/people.png';

const CardWrap = styled.div`
  width: ${(props) => props.width || '550px'};
  margin: 0 auto;
  margin-top: 50px;
`;

const Card = styled.div`
  width: ${(props) => props.cardwidth || '500px'};
  height: ${(props) => props.cardheight || '600px'};
  background-color: ${(props) => props.cardbackground || '#ffdcd6'};
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
const Top = styled.div`
  width: 100%;
  height: 30%;
  text-align: center;
  padding-top: 10px;
  position: relative;
`;

const ModifyTop = styled.div`
  width: 12%;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 20px;
  cursor: pointer;
`;
const Img = styled.img`
  width: ${(props) => props.imgwidth || '150px'};
  height: ${(props) => props.imgheight || '150px'};
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #3333;
  align-items: center;
  cursor: pointer;
`;

const ButtomWrap = styled.div`
  width: 90%;
  height: 70%;
  margin: 0 auto;
`;

const Buttom = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  border: 1px solid #1a1a1a33;
  background-color: white;
  border-radius: 50px;
  margin: 0 auto;
  gap: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 80%;
`;
const SmallBox = styled.div`
  width: 85%;
  margin: 0 auto;
  border: 1px solid #02020233;
  border-radius: 30px;
  background-color: white;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 80%;
  margin: 20px 0 10px;
  border: none;
  outline: none;
  padding-left: 30px;
`;

const ImgInput = styled.input`
  display: none;
`;
const FileButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`;

const Button = styled.button`
  width: 20%;
  height: 50%;
  border-radius: 15px;
  background-color: #ffffff;
  border: 1px solid white;
  font-size: 100%;
  font-weight: 700;
  color: #414141;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.buttoncolor || '#fda899'};
    color: #ffffff;
  }
`;

function Octagon({
  width,
  cardwidth,
  cardheight,
  cardbackground,
  imgwidth,
  imgheight,
  buttoncolor,
}) {
  const [image, setImage] = useState(Profile);
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // 이미지 미리보기 URL 생성
    }
  };

  const FileInput = () => {
    document.getElementById('file-upload').click();
  };
  return (
    <CardWrap width={width}>
      <Card
        cardwidth={cardwidth}
        cardheight={cardheight}
        cardbackground={cardbackground}
      >
        <Top>
          <ModifyTop>
            <IconModify />
          </ModifyTop>
          <Img
            src={image}
            onClick={FileInput}
            imgwidth={imgwidth}
            imgheight={imgheight}
          />
          <ImgInput
            type="file"
            id="file-upload"
            accept="image/*"
            onChange={handleImageChange}
          />
          <FileButton onClick={FileInput}>
            <IconImage />
          </FileButton>
        </Top>
        <ButtomWrap>
          <Buttom>
            <SmallBox>
              <IconUser />
              <Input
                type="text"
                placeholder="이름을 입력해주세요"
                autoComplete="off" // 자동완성 기능 끄기
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </SmallBox>
            <SmallBox>
              <IconBirthday />
              <Input
                type="text"
                placeholder="생년월일 입력주세요"
                autoComplete="off" // 자동완성 기능 끄기
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </SmallBox>
            <SmallBox>
              <IconEmail />
              <Input
                type="text"
                placeholder="이메일을 입력주세요"
                autoComplete="off" // 자동완성 기능 끄기
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </SmallBox>
            <SmallBox>
              <IconPhone />
              <Input
                type="text"
                placeholder="전화번호를 입력주세요"
                autoComplete="off" // 자동완성 기능 끄기
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </SmallBox>
          </Buttom>
          <ButtonWrap>
            <Button buttoncolor={buttoncolor}>수정하기</Button>
          </ButtonWrap>
        </ButtomWrap>
      </Card>
    </CardWrap>
  );
}

export default Octagon;
