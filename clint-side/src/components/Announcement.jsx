import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
background-color:teal;
color : white; 
height: 30px;
display:flex;
justify-content: center;
align-items: center;
font-size:16px;
font-weight:500;
`
const Announcement = () => {
  return (
    <Container>
        Super Deal!  Free Shipping on Orders Over 50$
    </Container>
  )
}

export default Announcement
