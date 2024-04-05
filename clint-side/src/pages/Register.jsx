import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100vw;
height:100vh;
background:linear-gradient(
    rgba(255,255,255,0.6),
    rgba(255,255,255,0.2)
),
url("https://images.pexels.com/photos/235525/pexels-photo-235525.jpeg?auto=compress&cs=tinysrgb&w=600") center;
background-size: cover;

`;

const Wrapper=styled.div`
    padding: 10px 20px;
    width:40%;
 
    background-color:black;
    border:2px solid gray;
    color:gold;

`;
const Title=styled.h1`
font-size:30px;
font-weight:400;
`;
const Form=styled.form`
display:flex;
flex-wrap:wrap;
`;
const Input=styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`;
const Agrrement=styled.span`
font-size:14px;
margin:20px 0px;
`;
const Button=styled.button`
width:30%;
border:none ;
background-color:white;
color : gold;
cursor:pointer;
padding:15px 20px;
font-weight:bold;
`;
const Register = () => {
  return (
   <Container>
    <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="Name"/>
            <Input placeholder="Last Name"/>
            <Input placeholder="Username"/>
            <Input placeholder="Email"/>
            <Input placeholder="Password"/>
            <Input placeholder="Confirm Password"/>
            <Agrrement>
            By, Creating an Account, I Consist to the Processing of My Persoal Data in Accordance with the 
            <br></br> <b>PRIVACY POLICY</b> 
        </Agrrement>
        <Button>CREATE</Button>
        </Form>
      
    </Wrapper>

   </Container>
  )
}

export default Register
