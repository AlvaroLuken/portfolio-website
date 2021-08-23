import styled from "styled-components";
import NavBar from "./NavBar";
import Title from "./Title";
import RickAndMorty from "./RickAndMorty";
import ConnectWallet from "./ConnectWallet";


const HeightDiv = styled.div`
  height: 4000px;
`


function App() {
  return (
    <div>
      <NavBar />
      <ConnectWallet/>
      <Title />
      <RickAndMorty/>
      <HeightDiv/>
    </div>
  );
}

export default App;
