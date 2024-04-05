import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import sliderItems from "../data";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: lightgray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition:all 2s ease;
  transform: translateX(${(props) => props.sliderindex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  margin-left:10px;
`;

const Img = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 50px 0px;
  letter-spacing: 4px;
`;

const Button = styled.button`
  background-color: transparent;
  padding: 14px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  
`;

const Slider = () => {
  const [sliderindex, setSlider] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlider((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
    } else {
      setSlider((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowCircleLeftIcon />
      </Arrow>
      <Wrapper sliderindex={sliderindex}>
        {sliderItems.map((item, index) => (
          <Slide key={index} bg={item.bg}>
            <ImageContainer>
              <Img src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.des}</Description>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowCircleRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
