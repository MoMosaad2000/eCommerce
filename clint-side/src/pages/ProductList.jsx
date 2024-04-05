import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import Announcement from '../components/Announcement'
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

const Container=styled.div``;
const Tilte=styled.h1`
margin:20px;
`;
const FilterContainer=styled.div`
display:flex;
justify-content: space-between;
`;
const Filter=styled.div`
margin:20px;
`;
const FilterText=styled.span`
font-size:20px;
font-weight:600;
`
const Select=styled.select`
    margin:15px;
    padding:15px;
    border:1px solid #ccc;
    background-color:#ccc2;
`;

const Option=styled.option`

`;

const ProductList = () => {
  return (
        <Container>
            <Nav/>
            <Announcement/>
            <Tilte>Dresses</Tilte>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText> 
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>2XL</Option>
                    </Select>
                
                </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                <Select>
                        <Option  selected>Newest</Option>
                        <Option>Pricse (asc)</Option>
                        <Option>Price (desc)</Option>
                     
                    </Select>
                                
                </Filter>
            </FilterContainer>
            <Products/>
            <NewsLetter/>
            <Footer/>

        </Container>
  )
}

export default ProductList
