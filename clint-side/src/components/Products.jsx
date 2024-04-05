import React from 'react'
import styled from 'styled-components';
import products from '../productData';
import Product from './Product';
const Container = styled.div`
    display:flex;
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
`;

const Products = () => {
  return  <Container>
        {products.map(item=>(
            <Product item={item} key={item.id}/>
        ))}

    </Container>;
  
}

export default Products
