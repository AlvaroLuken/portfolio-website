import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const CenterText = styled.div`
  font-size: 24px;
  margin-top: 312px;
  text-align: center;
  margin-bottom: 16px;
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  height: 364px;
  margin-left: 16px;
`

const CenterButton = styled.div`
  text-align: center;
  margin-top: 24px;
`

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "white" : "black"};
  color: ${props => props.primary ? "white" : "white"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blueviolet;
  border-radius: 3px;
`;


function RickAndMorty() {
  const [name, setName] = useState();
  const [imageUrl, setImageUrl] = useState();
  // any time something updates with your component, it will run useEffect
  // on first time of component mount or deps change
  useEffect(() => {
    getRandomCharacter();
  }, []);
  return (
    <div>
      <CenterText>
        {name}
      </CenterText>
      <ImageContainer>
        <Image src={imageUrl}/>
      </ImageContainer>
      <CenterButton>
        <Button colorScheme="white" variant="solid" onClick={getRandomCharacter}>Refresh Character</Button>
      </CenterButton>
      
    </div>
  )

  async function getRandomCharacter() {
    const randomNumber = Math.round(Math.random() * 670 + 1);
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${randomNumber}`);
  
    const name = response.data.name;
    const imageUrl = response.data.image;
    
  
    setName(name);
    setImageUrl(imageUrl);
    
  }
}



export default RickAndMorty;