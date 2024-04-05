import React from 'react'
import Nav from '../components/Nav'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'


const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.h1`
    text-align: center;
    font-weight: 300;
    padding-top: 20px;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    padding: 20px;
`;
const TopButton = styled.button`
    font-weight: 600;
    cursor: pointer;
    padding: 10px;
    border: ${(props) => props.type === "filled" ? "none" : "initial"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" ? "white" : "initial"};
`;
const TopTexts = styled.div``;

const TopText = styled.span`
    margin: 0px 10px;
    text-decoration: underline;
    cursor: pointer;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Info = styled.div`
    flex: 3;
`;
const Hr = styled.hr`
    border: none;
    background-color: #eee;
    height: 2px;
`


const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`;
const Img = styled.img`
    width: 200px;
    height: 180px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${(props) => props.color};
    border-radius: 50%;
`;
const ProductSize = styled.span``;
const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ProuductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProuductAmount = styled.div`
    margin: 5px;
    font-size: 30px;
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 500;
`;
const Summary = styled.div`
    flex: 1;
    border: 2px solid gray;
    border-radius: 15px;
    height: 50vh;
    padding: 10px;
`;
const SummaryTitle = styled.h1`
    font-weight: 300;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "26px"};
`;
const SummaryItemTitle = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    color: white;
    background-color: black;
    cursor: pointer;
`;

const Cart = () => {
  return (
    <Container>
        <Nav/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
        
        <Top>
            <TopButton>COUNTINUE SHOPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText >Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetails>
                        <Img src="https://media.istockphoto.com/id/1436056905/photo/oversized-black-t-shirt-template-3d-rendering-mens-womens-cotton-apparel-close-up.jpg?s=612x612&w=0&k=20&c=wHFEZYefMJR-wx0lORUNaiMPK8YeUFgpRCHI5RJyybA=" />
                        <Details>
                            <ProductName><b>Product : </b> BIG BLACK T-Shirt</ProductName>
                            <ProductId><b>ID : </b> 566597563</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size : </b> M</ProductSize>
                        </Details>
                    </ProductDetails>
                        <PriceDetail>
                            <ProuductAmountContainer>
                                <Add/>
                            <ProuductAmount>2</ProuductAmount>
                            <Remove/>
                            </ProuductAmountContainer>
                            <ProductPrice> 30 $ </ProductPrice>
                        </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetails>
                        <Img src="https://media.istockphoto.com/id/1659939207/photo/one-stylish-new-sneaker-isolated-on-white.jpg?s=612x612&w=0&k=20&c=AKE8rp557LV-QpqlkpBZ7lY4JEdFr_wwMbz0zWI33o4=" />
                        <Details>
                            <ProductName><b>Product : </b>SHOE OEE OOA</ProductName>
                            <ProductId><b>ID : </b> 877166948</ProductId>
                            <ProductColor color="gray"/>
                            <ProductSize><b>Size : </b> 43</ProductSize>
                        </Details>
                    </ProductDetails>
                        <PriceDetail>
                            <ProuductAmountContainer>
                                <Add/>
                            <ProuductAmount>2</ProuductAmount>
                            <Remove/>
                            </ProuductAmountContainer>
                            <ProductPrice> 30 $ </ProductPrice>
                        </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemTitle>Subtotal</SummaryItemTitle>
                    <SummaryItemPrice> 60 $ </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemTitle>Estimated Shipping</SummaryItemTitle>
                    <SummaryItemPrice> 5.5 $ </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemTitle>Shipping Discount</SummaryItemTitle>
                    <SummaryItemPrice> -5.5 $ </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemTitle>Total</SummaryItemTitle>
                    <SummaryItemPrice> 60 $ </SummaryItemPrice>
                </SummaryItem>
                <Button>CHECK NOW</Button>
            </Summary>
        </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
