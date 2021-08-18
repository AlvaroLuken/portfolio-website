import styled from "styled-components";
import NavBar from "./NavBar";
import Title from "./Title";
import RickAndMorty from "./RickAndMorty";


const HeightDiv = styled.div`
  height: 4000px;
`


function App() {
  return (
    <div>
      <NavBar />
      <Title />
      <RickAndMorty/>
      <HeightDiv/>
    </div>
  );
}

export default App;
