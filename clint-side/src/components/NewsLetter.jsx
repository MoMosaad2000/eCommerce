import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

const Container = styled.div`
  height: 60vh;
    background-color: #F1F1F1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

  const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin-bottom:20px;
  `;
  const Description = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
  letter-spacing: 2px;
  `;
  const InputContainer = styled.div` 
    width:50%;
    height:40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border:1px solid teal;
  `;
  const Input = styled.input`
  border:none;
  flex:8;
  padding-left:12px;
  `;
  const Button = styled.button`
  background-color: teal;
  cursor: pointer;
  flex:1;
  color:white;
  border:none;
  `;
const NewsLetter = () => {
  return (
  <Container>
    <Title>News Letter.</Title>
    <Description>Get Timely Updates From Your Fav Products.. </Description>
    <InputContainer>
        <Input placeholder='Your Email'/>
        <Button>
            <SendIcon/>
        </Button>
    </InputContainer>
  </Container>
  )
}

export default NewsLetter
