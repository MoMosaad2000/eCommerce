import React from 'react';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Search } from '@material-ui/icons';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Info = styled.div`
  opacity: 0;
  z-index:3;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(0,0,0,0.2);
  cursor: pointer;
  transition:all 0.5s ease;
 
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; 
  background-color: #f5fbfd;
  &:hover ${Info}{
    opacity:1;
  };
`;

const Circle = styled.div`
  width: 250px; 
  height: 250px;
  background-color: lightgray;
  border-radius: 50%;
  position: absolute;
`;

const Img = styled.img`
  height: 75%;
  z-index: 2;
`;


const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px;
  display: flex;
  background-color:white;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:all 0.5s ease;
  &:hover{
    background-color: #e9fbfd;
    transform: scale(1.1);
  }`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle /> 
      <Img src={item.img} alt="product" /> 
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
