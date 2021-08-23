import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  background-color: blueviolet;
  height: 72px;
  position: sticky;
  top: 0;
  justify-content: space-between;
`

const Image = styled.img`
  height: 64px;
  margin-left: 16px;
`

const RightItems = styled.div`
  height: 24px;
  margin-right: 16px;
  display: inline-flex;
  gap: 25px;
`

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "white" : "white"};
  color: ${props => props.primary ? "white" : "white"};
  height: 32px;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid blueviolet;
  border-radius: 3px;
`;

// want to have component names capitalized
function NavBar() {
  return(
    <Container>
      <a href="/">
        <Image src="./mooncat.png"/>
      </a>
      {/* <a href="/">
        <Button _hover={{ bg: "black" }} variant="outline" width="200px" size="md" mt={8} ml={1135} p="4" colorScheme="#6B46C1" color="#6B46C1">Launch App</Button>
      </a> */}
      <RightItems>
        <Button>
          <a href="/">
            Hello
          </a>
        </Button>
        <Button>
          <a href="/">
            About
          </a>
        </Button>
        <Button>
          <a href="/">
            Resources
          </a>
        </Button>
      </RightItems>
    </Container>
  )
}

export default NavBar;