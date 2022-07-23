import Image from "next/image";
import Layout from "../components/Layout";
import svgs from "../utils/svgs";
import { Team } from "../components/Team";
import Investors from "../components/Investors";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const IndexPage = () => (
  <>
    <head>
      <meta content="BLODD HOLDERS OFFICIAL" name="BLODD HOLDERS OFFICIAL" />
      <title>Blood Holders - NFT Game</title>
    </head>
    <div className="container max-w-full overflow-y-scroll">
      <header
        className="grid w-screen h-screen overflow-hidden flex-column "
        style={{ height: "-webkit-fill-available" }}
      >
        <link rel="shortcut icon" href="/favicon.ico" />
        <link href="../public/fonts/junkdog.otf" rel="stylesheet" />
        <video
          autoPlay
          loop
          muted
          className="absolute object-cover lg:object-fill w-full h-full"
        >
          <source
            src="https://res.cloudinary.com/bloodholders/video/upload/v1640605747/video/backvideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <Navbar />

        <div style={{ height: "84vh" }}>
          <div
            className="flex justify-end w-full h-1/2 sm:mt-12 xl:mt-8 "
            style={{ height: "43vh" }}
          >
            <div className="flex h-auto mx-4 mt-auto lg:mr-44 lg:mx-0 ">
              <Image
                src="/assets/logo.png"
                alt="Blood Holders"
                width="897px"
                height="481px"
              />
            </div>
          </div>
          <div className="hidden lg:flex mt-auto" style={{ height: "26vh" }}>
            <button type="button" className="block">
              <a
                href="https://blood-holders.gitbook.io/whitepaper-english/"
                target="_blank"
              >
                <Image src={svgs.bloodbutton} width="505px" height="146px" />
              </a>
            </button>
          </div>
          <div className="flex lg:hidden mt-auto" style={{ height: "20vh" }}>
            <button type="button" className="block">
              <a
                href="https://blood-holders.gitbook.io/whitepaper-english/"
                target="_blank"
              >
                <Image src={svgs.bloodbutton} width="505px" height="146px" />
              </a>
            </button>
          </div>
          <div className="w-screen" style={{ height: "15vh" }}>
            <div className="flex justify-center">
              <a href="#layout">
                <Image
                  className=""
                  src={svgs.arrow}
                  alt=""
                  width="119px"
                  height="75px"
                />
              </a>
            </div>
            <div className="hidden justify-end  lg:mr-44 mr-10 lg:flex">
              <button type="button" className="ml-6">
                <a
                  href="https://www.youtube.com/channel/UC5CryVwjOALZLyaPlsb8XPg"
                  target="_blank"
                >
                  {" "}
                  <Image
                    className=""
                    src={svgs.youtube}
                    alt=""
                    width="43px"
                    height="31px"
                  />
                </a>
              </button>
              <button type="button" className="ml-6">
                <a href="https://discord.gg/egYfJF9WhN" target="_blank">
                  {" "}
                  <Image
                    className=""
                    src={svgs.discord}
                    alt=""
                    width="44px"
                    height="30px"
                  />
                </a>
              </button>
              <button type="button" className="ml-6">
                <a href="https://twitter.com/BloodHoldersNFT" target="_blank">
                  {" "}
                  <Image
                    className=""
                    src={svgs.twitter}
                    alt=""
                    width="39px"
                    height="32px"
                  />
                </a>
              </button>
              <button type="button" className="ml-6">
                <a
                  href="https://www.instagram.com/bloodholdersnft/"
                  target="_blank"
                >
                  {" "}
                  <Image
                    className=""
                    src={svgs.instagram}
                    alt=""
                    width="31px"
                    height="31px"
                  />
                </a>
              </button>
              <button type="button" className="ml-6">
                <a href="https://t.me/BloodHolders" target="_blank">
                  {" "}
                  <Image
                    className=""
                    src={svgs.telegram}
                    alt=""
                    width="31px"
                    height="31px"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </header>
      <Layout />
      <Team />
      <Investors />
      <div className="flex justify-center bg-red-600">
        <Image className="" src={svgs.divider} width="1916px" height="6px" />
      </div>
      <Footer />
    </div>
  </>
);

export default IndexPage;
