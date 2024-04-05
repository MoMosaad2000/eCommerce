import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RoomIcon from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Container=styled.div`
    display: flex;
    color: White;
    background-color:black;
  
`;

const Left=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding:20px;
`;
const Logo=styled.h1``;
const Description=styled.p`
margin:20px 0px;
`;
const Img=styled.img`
width:80px;
height:80px;
`;
const SocialContainer=styled.div`
display: flex;
padding-top:30px;

`;
const SocialIcon=styled.div`
width:40px;
height:40px;
margin-right:20px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
cursor:pointer;
`;




const Center=styled.div`
    flex:1;
    padding:20px;
    padding-left:120px;
`;
const Title=styled.h1`

    margin-bottom:20px;
    `;
const List=styled.ul`
    padding:0px;
    margin:0px;
    list-style:none;
    flex-wrap: wrap;
    
    
`;
const ListItem=styled.li`
margin-bottom:20px;
width:50%;
cursor:pointer;
`;

const Right=styled.div`
    flex:1;
    padding:20px;
`;
const Payment=styled.img`
width:50%;
`;
const ContactItem=styled.div`
margin-bottom:20px;
display:flex;
align-items: center;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
        <Img   src="https://cdn-icons-png.flaticon.com/512/1966/1966262.png"
                 alt="Dokan Lebs"/>
            <Logo>DOKAN LEBS.</Logo>
           
            <Description>This Website Created Using React.JS with Style Component ,<br></br>to Make it Easier to Use 
                It's a FullStake Project and i wish You like it !
             </Description>
          
             <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <LinkedInIcon/>
                </SocialIcon>
             </SocialContainer>

        </Left>
        <Center>
            <Title>Most Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>About</ListItem>
                    <ListItem>Services</ListItem>
                    <ListItem>Portfolio</ListItem>
                    <ListItem>Contact</ListItem>
                </List>

        </Center>
        <Right>
            <Title>Contact Us</Title>
            <ContactItem>
                <RoomIcon style={{marginRight:"10px"}}/> EL Haram, Giza, Egypt.
            </ContactItem>
            <ContactItem>
                <CallIcon style={{marginRight:"10px"}}/>+20 115 40 86 176
            </ContactItem>
            <ContactItem>
                <EmailOutlinedIcon style={{marginRight:"10px"}}/> mohameedmosaad5@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>


        </Right>
    </Container>
  )
}

export default Footer
