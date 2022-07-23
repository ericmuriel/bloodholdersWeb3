import Image from "next/image";
import React, { useRef, useState } from "react";
import Web3 from "web3";
import svgs from "../utils/svgs";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import Reaptcha from "reaptcha";
import api from "../services/api"
import nonapi from "../services/api";
declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

function GiftPage(props) {
  const [account, setAccount] = useState<string>("");
  const [giftCode, setGiftCode] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [captcha, setCaptcha] = useState<boolean>(false);
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
    getWeb3();
  }, []);

  function recaptchaLoaded() {
    setCaptcha(true);
  }

  async function mint(to: string): Promise<any> {
    const response = await nonapi(to);
    return response;
  }

  async function checkTx(txHash: string): Promise<any> {
    const intervalCheck: number = 1000;
    const maxRetries: number = 5;
    const web3 = new Web3(
      "https://bsc.getblock.io/mainnet/?api_key=2cd47ed4-8cce-4d9a-ba3d-e1233f65ebcd"
    ); //Provider

    const transactionReceiptAsync = function (resolve: any, reject: any) {
      web3.eth.getTransactionReceipt(txHash, (error, receipt) => {
        if (error) {
          let deleteUser = { metamaskUser: account };
          axios
            .post(
              "https://bloodholders.azurewebsites.net/legacy/deleteUser/",
              deleteUser,
              {
                headers: {
                  "Access-Control-Allow-Credentials": "true",
                  "Access-Control-Allow-Origin": "*",
                },
              }
            )
            .then((res) => {
              setData(res);
              setLoading(false);
            })
            .catch(() => {
              setLoading(false);
              setData({
                data: {
                  code: 400,
                  msg: "There was an error with the claim, pleas try it again later.",
                },
                status: 200,
              });
            });
          reject(error);
        } else if (receipt == null) {
          setTimeout(
            () => transactionReceiptAsync(resolve, reject),
            intervalCheck
          );
        } else {
          let updateUser = {
            code: giftCode,
            metamaskUser: account,
            hashUser: txHash,
          };
          axios
            .post(
              "https://bloodholders.azurewebsites.net/legacy/setHashUser/",
              updateUser,
              {
                headers: {
                  "Access-Control-Allow-Credentials": "true",
                  "Access-Control-Allow-Origin": "*",
                },
              }
            )
            .then((res) => {
              setData(res);
              setLoading(false);
            })
            .catch(() => {
              setLoading(false);
              setData({
                data: {
                  code: 400,
                  msg: "There was an error with the claim, pleas try it again later.",
                },
                status: 200,
              });
            });
          resolve(receipt);
        }
      });
    };

    if (Array.isArray(txHash))
      return Promise.all(txHash.map((oneTxHash) => this.checkTx(oneTxHash)));

    if (typeof txHash === "string") {
      return new Promise(transactionReceiptAsync);
    }

    throw new Error("Invalid Type: " + txHash);
  }

  //--------------------------------------------------------------FALTA POR PROBAR

  async function getMetamask() {
    try {
      let web3: Web3;
      if (window.ethereum) {
        // Ask User permission to connect to Metamask
        web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          prepareMetamaskNetwork();
        } catch (err) {
          return;
        }
      } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
      } else {
        window.alert(
          "Non-Ethereum browser detected. Please install MetaMask plugin"
        );
        return;
      }
      let accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    } catch (err) {}
  }

  async function getWeb3() {
    try {
      window.addEventListener("load", async () => {
        let web3: Web3;
        if (window.ethereum) {
          // Ask User permission to connect to Metamask
          web3 = new Web3(window.ethereum);
          try {
            await window.ethereum.enable();
            prepareMetamaskNetwork();
          } catch (err) {
            return;
          }
        } else if (window.web3) {
          web3 = new Web3(window.web3.currentProvider);
        } else {
          window.alert(
            "Non-Ethereum browser detected. Please install MetaMask plugin"
          );
          return;
        }
        let accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      });
    } catch (err) {}
  }

  async function prepareMetamaskNetwork() {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x38" }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x38",
                chainName: "Smart Chain",
                nativeCurrency: {
                  name: "Binance Coin",
                  symbol: "BNB",
                  decimals: 18,
                },
                rpcUrls: ["https://bsc-dataseed.binance.org"],
                blockExplorerUrls: ["https://bscscan.com"],
              },
            ],
          });
        } catch (addError) {
          this.toastService.error(
            "You need have Smart Chain network selected in metamask"
          );
          console.error(addError);
        }
      }
      // handle other "switch" errors
    }
  }

  async function sendGift() {
    setData(null);
    setLoading(true);
    await getMetamask();
    let data = {
      metamaskUser: account,
      userName: null,
      code: giftCode,
    };
    const res = await axios
      .post(`https://bloodholders.azurewebsites.net/legacy/checkuser/`, data, {
        headers: {
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(async (res) => {
        if (res.data.code === 200) {
          let hex = await mint(account);
          let check = await checkTx(hex);
        } else {
          setLoading(false);
          setData(res);
        }
      })
      .catch(() => {
        setLoading(false);
        setData({
          data: {
            code: 400,
            msg: "There was an error with the claim, pleas try it again later.",
          },
          status: 200,
        });
      });
  }

  const getButton = (account, giftCode) => {
    if (!captcha && account !== "")
      return (
        <div className="w-full flex justify-center">
          <Reaptcha
            size="normal"
            sitekey="6LcvDKwdAAAAAHGEZCJ4mqDoXZp8A0s3EnlYGa41"
            onVerify={(v) => recaptchaLoaded()}
          />
        </div>
      );
    if (loading)
      return (
        <div className="w-full flex justify-center">
          <div className="bg-red-400 text-white font-bold py-2 px-4 rounded outline-none shadow-outline">
            {"Claim Gift"}

            <ClipLoader color={"#ffffff"} loading={true} size={10} />
          </div>
        </div>
      );
    else if (account !== "" && giftCode.trim() !== "")
      return (
        <div className="w-full flex justify-center">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => sendGift()}
            type="button"
          >
            {"Claim Gift"}
          </button>
        </div>
      );
    else if (account !== "" && giftCode.trim() === "")
      return (
        <div className="w-full flex justify-center">
          <div className="bg-red-400 text-white font-bold py-2 px-4 rounded outline-none shadow-outline">
            {"Claim Gift"}
          </div>
        </div>
      );
  };

  const setErrorMessage = (account) => {
    if (account === "")
      return (
        <div className="flex mt-auto ">
          <div className="text-white text-xl text-center w-full bg-red-500 rounded lg:bg-transparent py-4">
            <span
              className="lg:bg-red-500 lg:rounded p-5 hover:lg:bg-red-700 hover:cursor-pointer"
              onClick={() => getMetamask()}
            >
              <span className="mr-4">
                <Image
                  className="mr-4"
                  src={svgs.metamask}
                  width="30"
                  height="30"
                />
              </span>
              <span>This transaction requires metamask account linked.</span>
            </span>
          </div>
        </div>
      );
  };

  const setErrorBack = (data) => {
    if (data && data.status === 200 && data.data && data.data.code !== 200)
      return (
        <div className="flex mt-auto mb-4" data-aos="flip-right">
          <div className="text-white text-xl text-center w-full bg-red-900 rounded lg:bg-transparent py-4">
            <span className="lg:bg-red-900 lg:rounded p-5 ">
              <span>{data.data.msg}</span>
              <span
                className="ml-4 hover:cursor-pointer"
                onClick={() => setData(null)}
              >
                x
              </span>
            </span>
          </div>
        </div>
      );
    else if (data && data.status === 200 && data.data && data.data.code === 200)
      return (
        <div className="flex mt-auto mb-4" data-aos="flip-right">
          <div className="text-white text-xl text-center w-full bg-green-300 rounded lg:bg-transparent py-4">
            <span className="lg:bg-green-300  lg:rounded p-5 ">
              <span>{data.data.msg}</span>
              <a
                href={`https://bscscan.com/tx/${data.data.url}`}
                target="_blank"
              >
                {" "}
                BCSCAN{" "}
              </a>
              <span> for more information</span>
              <span
                className="ml-4 hover:cursor-pointer"
                onClick={() => setData(null)}
              >
                x
              </span>
            </span>
          </div>
        </div>
      );
  };

  return (
    <div className="max-w-full overflow-y-scroll container ">
      <script
        src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
        async
        defer
      ></script>

      <header className="flex-column h-screen w-screen grid overflow-hidden">
        <link href="../public/fonts/junkdog.otf" rel="stylesheet" />
        <video
          autoPlay
          loop
          muted
          className="absolute  object-cover lg:object-fill w-full h-full"
        >
          <source
            src="https://res.cloudinary.com/bloodholders/video/upload/v1640605747/video/backvideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="flex m-auto z-10 w-2/3 h-2/3 bg-white shadow-md rounded bg-opacity-10 ">
          <form className="px-8 pt-6 pb-8  w-full my-auto">
            <div className="mb-6 flex flex-col justify-center lg:w-1/2 mx-auto">
              <label className="block text-white font-bold mb-2 font-junkdog lg:text-4xl text-xl whitespace-nowrap">
                GIFT CODE:
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                disabled={account === ""}
                onChange={(v) => {
                  setGiftCode(v.target.value);
                  return v;
                }}
              />
            </div>
            {setErrorBack(data)}
            {setErrorMessage(account)}
            {getButton(account, giftCode)}
          </form>
        </div>
      </header>
    </div>
  );
}

export default GiftPage;
