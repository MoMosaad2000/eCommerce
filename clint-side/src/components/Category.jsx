import React from 'react'
import styled from 'styled-components';
const Container=styled.div`
flex:1;
margin:3px;
height:82vh;
position:relative;
`;
const Button = styled.button`
  background-color: white;
  padding: 14px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  color:gray;
  border: none;
  opacity:0.6;
`
const Img = styled.img`
  width: 100%;
  height:100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const Title = styled.h1`
  margin-bottom:20px;
  color: white;
`;

const Category = ({item}) => {
  return (
    <Container>
          <Img src={item.img} />
            <InfoContainer>
              <Title>{item.title}</Title>
              <Button>SHOW NOW</Button>
            </InfoContainer>
    </Container>
  )
}

export default Category
