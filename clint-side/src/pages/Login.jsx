import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100vw;
height:100vh;
background:linear-gradient(
    rgba(255,255,255,0.1),
    rgba(255,255,255,0.5)
),
url("https://images.pexels.com/photos/1008206/pexels-photo-1008206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center;
background-size:cover;
background-position: center;

`;

const Wrapper=styled.div`
    padding: 10px 20px;
    width:20%;
 
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
flex-direction:column;
`;
const Input=styled.input`
flex:1;
min-width:40%;
margin:10px 0px ;
padding:10px;
`;

const Button=styled.button`
width:30%;
border:none ;
background-color:white;
color : gold;
cursor:pointer;
padding:15px 20px;
font-weight:bold;
margin-bottom:10px;
`;
const Link=styled.a`
margin:5px 0px;
text-decoration:underline;
cursor:pointer;
`;
const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
            <Button>LOGIN</Button>
            <Link>Did You Forget the Password ?</Link>
            <Link>Create a New Account</Link>
        
        </Form>
      
    </Wrapper>

   </Container>
  )
}

export default Login
