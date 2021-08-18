import styled from "styled-components";
import { Button } from "@chakra-ui/react"

const Container = styled.div`
  align-items: center;
  display: flex;
  background-color: purple;
  height: 80px;
  position: sticky;
  top: 0;
`

const Image = styled.img`
  height: 64px;
  margin-left: 16px;
`

// want to have component names capitalized
function NavBar() {
  return(
    <Container>
      <a href="/">
        <Image src="./mooncat.png"/>
      </a>
      <a href="/">
        <Button _hover={{ bg: "black" }} variant="outline" width="200px" size="md" mt={8} ml={1135} p="4" colorScheme="#6B46C1" color="#6B46C1">Launch App</Button>
      </a>
    </Container>
  )
}

export default NavBar;