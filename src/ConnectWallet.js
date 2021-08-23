import * as React from "react";
import { ethers } from "ethers";
import { CircularProgress } from "@chakra-ui/react";
import styled from "styled-components";
import { useToast } from "@chakra-ui/react"

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function ConnectWallet() {
  const [currentAccount, setCurrentAccount] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const toast = useToast();

  React.useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = () => {
    const { ethereum } = window;

    if(!ethereum) {
      console.log("Make sure you install MetaMask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    ethereum.request({ method: 'eth_accounts'})
      .then(accounts => {
        if(accounts.length !== 0) {
          const account = accounts[0];
          console.log("Found an authorized account", account);

          setCurrentAccount(account);
        } else {
          console.log("No auth acct found!");
        }
      })
  }

  const connectWallet = () => {
    const { ethereum } = window;
    if(!ethereum) {
      alert("Get MM!");
    }

    setIsLoading(true);
    ethereum.request({ method: 'eth_requestAccounts'})
      .then(accounts => {
        console.log("Connected", accounts[0]);
        setCurrentAccount(accounts[0]);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      {currentAccount ? null : (
        <Button onClick={connectWallet}>
          {isLoading ? (
            <CircularProgress valueText="ConnectingWallet" isIndeterminate size="16px" color="blue" />
          ) : (
            'Connect Wallet'
          )}
        </Button>
      )}
      {currentAccount ? "You are connected!" : null}
    </div>
  );
  
}

export default ConnectWallet;