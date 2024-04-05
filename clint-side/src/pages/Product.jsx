import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav';
import Announcement from '../components/Announcement';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';

const Container=styled.div`

`;
const Wrpper=styled.div`
display:flex;
padding:40px;

`;
const ImgContainer=styled.div`
flex:1;
`;
const Image=styled.img`
width:100% ;
height:90vh;
object-fit:cover;
`;
const InfoContainer=styled.div`
flex:1;
margin:50px;
`;
const Tittle=styled.h1`
font-weight:200;
`;
const Description=styled.p`
margin:30px 0px;
font-size:32px;
font-weight:200;
`;
const Price=styled.span`
font-size:42px;
font-weight:200;
`;
const FilterContainer=styled.div`
width:70%;
display:flex;
justify-content: space-between;
margin:30px 0px;


`;
const Filter=styled.div`
margin:20px;
display:flex;
align-items:center;
`;
const FilterText=styled.span`
font-size:20px;
font-weight:400;

`
const FilterColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
&:hover{
    transform:scale(1.3);
    transition:all 0.5s ease;
}
padding:5px;
margin:0px 10px;
cursor:pointer;
`;
const FilterSize=styled.select`
    margin:15px;
    padding:15px;
    border:1px solid #ccc;
    background-color:#ccc2;
`;

const FilterSizeOption=styled.option`
 font-weight:bold;
`;
const AddContainer=styled.div`
display:flex;
align-items:center;
justify-content: space-between;
width:50%;
`;
const AmountContainer=styled.div` 
cursor:pointer;
display:flex;
align-items:center;
`;
const Amount=styled.span`
font-size:26px;
font-weight:600;
width:30px;
height:30px;
boredr-raduis:10px;
border:1px solid teal;
display:flex;
align-items:center ;
justify-content: center;
margin:0px 10px ;
`;
const Button=styled.button`
cursor:pointer;
padding:20px;
border:2px solid black;
font-weight:600;
color:black;
background-color:rgba(0,255,0,0.5);
&:hover{
    background-color:rgba(0,255,0,1);
    color:white;
}

`;
const Product = () => {
  return (
    <Container>
        <Nav/>
        <Announcement/>
        <Wrpper>
            <ImgContainer>
                <Image src="https://images.pexels.com/photos/18256095/pexels-photo-18256095/free-photo-of-man-holding-a-sports-t-shirt-on-a-clothes-hanger.jpeg?auto=compress&cs=tinysrgb&w=600"/>

            </ImgContainer>
            <InfoContainer>
                <Tittle>Sports Clothes</Tittle>
                <Description> It's a Great Honor to wear The Champions of the Wolrd T-Shirt</Description>
                <Price>$ 20</Price>
                <FilterContainer>
                <Filter>
                    <FilterText>Colors</FilterText> 
                        <FilterColor color="black"/>
                        <FilterColor color="gray"/>
                        <FilterColor color="red"/>
                    </Filter>
                    <Filter>
                    <FilterText>Size</FilterText> 
                    <FilterSize>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        <FilterSizeOption>2XL</FilterSizeOption>
                    </FilterSize>
   
                    </Filter>
                
            </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Add/>
                        <Amount>1</Amount>
                        <Remove/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>

        </Wrpper>
        <NewsLetter/>
        <Footer/>
      
    </Container>
  )
}

export default Product
