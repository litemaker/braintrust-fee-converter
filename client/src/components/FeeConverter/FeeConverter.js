import { useEffect, useState } from "react";
import { Input, Button, Row, Col } from "antd";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

import { getUSDCBalance } from "../../utils/usdc";
import { getBTRSTPrice, swap } from "../../utils/converter";
import logo from "../../assets/braintrust.png";
import usdc from "../../assets/usdc.svg";

import "./FeeConverter.scss";

const FeeConverter = () => {
  const [account, setAccount] = useState();
  const [balance, setBalance] = useState(0);
  const [convertValue, setConvertValue] = useState(0);
  const [isRinkeby, setIsRinkeby] = useState(false);
  const [web3Api, setWeb3Api] = useState(null);
  const [quotedPriceMessage, setQuotedPriceMessage] = useState(null);

  const onTokenSwap = async () => {
    swap(web3Api.provider, convertValue);
  };

  const onValueChange = (value) => {
    const regex = new RegExp(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/);

    const isMatch = value.match(regex);

    if (isMatch && value > balance) {
    } else if (isMatch && value === balance) {
      setConvertValue(balance);
    } else if (isMatch && value <= 0) {
      setConvertValue(0);
    } else {
      setConvertValue(Number(value));
    }
  };

  useEffect(() => {
    const onQuotePrice = async () => {
      const message = await getBTRSTPrice(web3Api.provider, convertValue);
      setQuotedPriceMessage(message);
    };

    if (web3Api && web3Api.provider) onQuotePrice();
  }, [web3Api, convertValue]);

  useEffect(() => {
    // Detect whether a provider exists & MetaMask is installed
    const loadProvider = async () => {
      const provider = await detectEthereumProvider({ mustBeMetaMask: true });

      if (provider) {
        setWeb3Api({
          web3: new Web3(provider),
          provider,
        });
      }
    };

    // Event listener when account changes to reset provider
    window.ethereum.on("accountsChanged", async () => {
      loadProvider();
    });

    // Event listener when chain changes to reset provider
    window.ethereum.on("chainChanged", async () => {
      loadProvider();
    });

    loadProvider();
  }, []);

  useEffect(() => {
    const requestAccounts = async () => {
      // When provider is reset, acquire the current (first) account connected
      if (web3Api && web3Api.provider && web3Api.web3) {
        const accounts = await web3Api.provider.request({
          method: "eth_requestAccounts",
        });

        // Rinkeby chainId = 4
        const chainId = await web3Api.web3.eth.net.getId();
        setIsRinkeby(chainId === 4);
        setAccount(accounts[0]);
      } else {
        const provider = await detectEthereumProvider({ mustBeMetaMask: true });

        if (!provider) {
          console.error("MetaMask is not installed, please install and try again.");
        }
      }
    };

    requestAccounts();
  }, [web3Api]);

  useEffect(() => {
    const onSetBalance = async () => {
      // Balance is readjusted based on currently connected account
      setBalance(await getUSDCBalance(account, web3Api.provider));
    };

    if (account && web3Api.provider) onSetBalance();
  }, [account, web3Api]);

  return (
    <Row className="wrapper">
      <Col span={24}>
        <h2 className="wrapper__header">
          <img src={logo} alt="logo" /> <span>Braintrust Fee Converter</span>
        </h2>
      </Col>
      {account ? (
        <>
          <Col span={24} className="wrapper__info">
            <p>Account: {account}</p>
            {isRinkeby && (
              <>
                <p>
                  Balance: {balance} <img src={usdc} alt="usdc" />
                </p>
                {convertValue && quotedPriceMessage ? <p>Estimated price: {quotedPriceMessage} BTRST</p> : null}
              </>
            )}
          </Col>
          <Col span={24} className="wrapper__input">
            {isRinkeby ? (
              <>
                <Input
                  max={balance}
                  placeholder="Enter amount to convert"
                  allowClear
                  value={convertValue}
                  onChange={(e) => onValueChange(e.target.value)}
                />
                <div className="wrapper__buttons">
                  <Button
                    className="wrapper__button"
                    disabled={convertValue === balance}
                    onClick={() => onValueChange(balance)}
                  >
                    Max
                  </Button>
                  <Button className="wrapper__button" disabled={convertValue <= 0} onClick={() => onTokenSwap()}>
                    Convert
                  </Button>
                </div>
              </>
            ) : (
              <p>Please connect to the Rinkeby testnet.</p>
            )}
          </Col>
        </>
      ) : (
        <Col span={24} className="wrapper__unconnected">
          <Row>
            <p>Not connected.</p>
            <Button
              onClick={() =>
                web3Api.provider.request({
                  method: "eth_requestAccounts",
                })
              }
            >
              Connect to MetaMask.
            </Button>
          </Row>
        </Col>
      )}
    </Row>
  );
};

export default FeeConverter;
