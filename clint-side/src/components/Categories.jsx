import React from 'react'
import styled from 'styled-components';
import categoris from "../categoriesData";
import Category from './Category';
const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content: space-between;
`;

const Categories = () => {
  return  <Container>
        {categoris.map(item=>(
            <Category item={item} key={item.id}/>
        ))}

    </Container>;
  
}

export default Categories
