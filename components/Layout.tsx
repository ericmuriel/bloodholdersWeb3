import React from "react";
import svgs from "../utils/svgs";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { userInfo } from "os";
import { useEffect } from "react";

interface LayoutProps {
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ title = "Blood Holders" }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="layout" className="overflow-hidden">
      <script src="https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js"></script>
      <div className=" bg-secondbackground flex flex-col my-auto items-center w-screen bg-top ">
        <div className=" lg:bg-background  flex flex-col my-auto items-center w-screen bg-top  bg-no-repeat">
          <div className=" lg:bg-thirdbackground bg-top  bg-repeat-x">
            <div
              className=" lg:bg-concept flex flex-col my-auto items-center w-screen bg-top  bg-no-repeat"
              data-aos="fade-in"
            >
              <div className="bg-coinbackground"></div>
              <div className="relative z-10 content-center lg:top-96 ">
                <div
                  className="relative h-32 lg:left-80 mb-14 top-26 left-52 md:left-96"
                  data-aos="fade-in"
                >
                  <Image
                    className="object-scale-down"
                    src={svgs.red_background}
                    alt=""
                    width="322px"
                    height="691px"
                  />
                </div>
                <div>
                  <div className="space-x-4 lg:inline-flex">
                    <div className="z-10 mt-20 fadeInNft ">
                      <span
                        className="ml-24 text-4xl text-back font-junkdog"
                        data-aos="fade-in"
                        
                      >
                        NFT
                      </span>
                      <div
                        className="relative left-0 mt- lg:left-24 md:left-56 sm:left-32  mt-4"
                        data-aos="fade-in"
                        
                      >
                        <div className="sketchfab-embed-wrapper lg:hidden flex justify-center">
                          {" "}
                          <iframe
                            allowFullScreen
                            allow="autoplay; fullscreen; xr-spatial-tracking"
                            width="350"
                            height="300"
                            src="https://sketchfab.com/models/75c2eb446f154196b5e71ab4438e6c0a/embed"
                          ></iframe>
                        </div>
                        <div className="sketchfab-embed-wrapper hidden lg:block">
                          {" "}
                          <iframe
                            allowFullScreen
                            allow="autoplay; fullscreen; xr-spatial-tracking"
                            width="600"
                            height="335"
                            src="https://sketchfab.com/models/75c2eb446f154196b5e71ab4438e6c0a/embed"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div className="hidden lg:block mb-24 fadeInNftTxt">
                      <div
                        className="justify-center mt-8 text-center lg:text-right lg:mb-6 lg:ml-0 xl:ml-72"
                        data-aos="fade-in"
                        data-aos-delay="500"
                      >
                        <span className="text-5xl text-white lg:mr-24 font-junkdog ">
                          Blood holders{" "}
                        </span>
                        <span className="text-5xl text-white font-junkdog barra border-r-8 border-white"></span>
                      </div>
                      <div className="p-16 text-left font-bold text-white lg:w-96 lg:p-0 lg:ml-56 lg:mr-8 ">
                        Blood Holders is a Zombie-themed play to earn NFT
                        Shooter game built on the BSC (Binance Smart Chain). It
                        is a metaverse that will encompass different game modes
                        within the same ecosystem and will be united by the use
                        of the $BLOOD token
                      </div>
                      <div
                        className="ml-32 text-3xl text-white lg:w-96 lg:ml-56 lg:mb-60 lg:mr-8 font-junkdog lg:mt-16"
                        data-aos="fade-in"
                        data-aos-delay="500"
                      >
                        Bloodpaper
                      </div>
                    </div>
                    <div
                      className="block px-20 lg:text-left text-center font-bold  lg:hidden mt-44 "
                      data-aos="fade-in"
                    >
                      <div className="">
                        <Image
                          src={svgs.skull}
                          alt=""
                          width="87px"
                          height="91px"
                        />
                      </div>
                      <div className="block mb-6">
                        <span className="text-2xl font-junkdog">LORE</span>
                      </div>
                      <div className="block lg:w-72 w-80  font-bold">
                        The Blood Holders universe takes place in a parallel
                        reality where 99% of the population has become zombies
                        due to an extremely contagious airborne virus. The
                        remaining 1% were affected by this virus much more
                        slowly, causing them to not immediately transform into
                        zombies. These people began to be called "Holders".
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:relative lg:h-32 lg:left-[460px] lg:top-56 lg:mb-80 lg:mt-0 pt-16 w-80">
                <div
                  className="text-right lg:relative"
                  data-aos="fade-left"
                  data-aos-delay="500"
                >
                  <Image
                    className="m-0 "
                    src={svgs.chest}
                    alt=""
                    width="82px"
                    height="77px"
                  />
                </div>
                <div
                  className="mt-4 text-2xl text-right font-junkdog border-b-4 border-black"
                  data-aos="fade-left"
                  data-aos-delay="500"
                >
                  Play to earn{" "}
                </div>
                <div
                  className="pr-16 mt-8 text-left lg:w-72 font-bold w-96 "
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  Stack, create squads, complete missions and take on others to
                  earn $BLOOD.
                </div>
              </div>

              <div className="hidden mt-16 text-left lg:mt-60 lg:flex lg:animate-fade-in-down lg:w-0 lg:w-44 lg:w-auto lg:block">
                <div
                  className="lg:h-32 lg:-left-6 lg:-top-12 lg:mb-14 border-l-4 border-black lg:pl-10"
                  data-aos="fade-left"
                  data-aos-delay="500"
                >
                  <Image
                    src={svgs.key}
                    alt=""
                    width="87px"
                    height="93px"
                  />
                </div>
                <div className="">
                  <div
                    className="block pt-6 mb-2 center lg:pt-0 "
                    data-aos="fade-down"
                    data-aos-delay="500"
                  >
                    <span
                      className="text-2xl ml-8  font-junkdog "
                      data-aos="fade-down"
                      data-aos-delay="500"
                    >
                      TOKEN
                    </span>
                  </div>
                  <div
                    className="px-16 lg:w-72 lg:block font-bold "
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    The unique currency in Blood Holders is the $BLOOD. Through
                    innovative token distribution and a sustainable financial
                    strategy we give $BLOOD a high long-term value.
                  </div>
                </div>
                <div
                  className="w-auto h-auto scale-100 lottie"
                  data-aos="fade-in"
                  data-aos-delay="10"
                >
                  <lottie-player
                    src="https://assets9.lottiefiles.com/packages/lf20_agd16rph.json"
                    speed="1"
                    autoplay
                  ></lottie-player>{" "}
                </div>
              </div>

              <div
                className="block mt-16 mb-16 text-center lg:mt-60 lg:flex lg:animate-fade-in-down lg:mb-0 lg:mb-52 lg:w-0 lg:w-44 lg:w-auto lg:hidden "
                data-aos="fade-in"
                data-aos-delay="500"
              >
                <div className="lg:h-32 lg:-left-6 lg:-top-12 lg:mb-14">
                  <Image
                    src={svgs.key}
                    alt=""
                    width="87px"
                    height="93px"
                  />
                </div>
                <div className="">
                  <div className="block pt-6 mb-6 center lg:pt-0 ">
                    <span className="text-2xl text-center font-junkdog ">
                      TOKEN
                    </span>
                  </div>
                  <div className="px-16 lg:w-72 lg:block font-bold w-96">
                    The unique currency in Blood Holders is the $BLOOD. Through
                    innovative token distribution and a sustainable financial
                    strategy we give $BLOOD a high long-term value.
                  </div>
                </div>
                <div className="w-auto h-auto scale-100 mt-10 ">
                  <Image
                    src={svgs.tokenomicsmobile}
                    width="389px"
                    height="604px"
                  />
                </div>
              </div>

              <div className="hidden lg:mt-16 lg:flex">
                <div className="text-center lg:relative lg:-left-32">
                  <div
                    className="w-24 border-t-4 border-black mb-4"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  ></div>
                  <div
                    className="lg:relative text-left lg:mb-8"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  >
                    <Image
                      src={svgs.skull}
                      alt=""
                      width="87px"
                      height="91px"
                    />
                  </div>
                  <div
                    className="block mb-6 text-left"
                    data-aos="fade-left"
                    data-aos-delay="1000"
                  >
                    <span className="text-2xl font-junkdog">LORE</span>
                  </div>
                  <div
                    className="lg:w-96 text-left font-bold"
                    data-aos="fade-left"
                    data-aos-delay="1000"
                  >
                    The Blood Holders universe takes place in a parallel reality
                    where 99% of the population has become zombies due to an
                    extremely contagious airborne virus. The remaining 1% were
                    affected by this virus much more slowly, causing them to not
                    immediately transform into zombies. These people began to be
                    called "Holders".
                  </div>
                </div>
                <div className="flex">
                  <div
                    className="relative z-10 -top-16"
                    data-aos="zoom-out-up"
                    
                  >
                    <Image
                      className=""
                      src={svgs.akari}
                      alt=""
                      width="436px"
                      height="614px"
                    />
                  </div>
                  <div
                    className="mt-24 ml-32"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    <div className=" mb-6 text-4xl text-black font-junkdog">
                      <span>AKARI</span>
                    </div>
                    <div className="w-80 ">
                      <span className=" text-black font-bold  ">
                        Before the apocalypse, Akari was a Japanese kendo
                        champion and a pro in an esports team that played
                        especially zombie games. That's why even at her young
                        age and with her small body she is one of the most
                        lethal weapons ALIVE has. No one really knows anything
                        about her motivation or details about her past, as those
                        who have worked with her testify that she is a very
                        quiet and reserved girl.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-screen text-center px-16 pb-24">
                <div className="lg:flex  justify-center block">
                  <div
                    className="lg:mt-96 lg:pl-24"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="text-center">
                      <span className="lg:text-5xl text-4xl font-junkdog">
                        JOIN THE COMMUNITY
                      </span>
                    </div>
                    <div>
                      {" "}
                      <div className=" mt-2 lg:text-3xl text-2xl">
                        Info@bloodholders.com
                      </div>
                    </div>

                    <div className="mt-4 mb-16  lg:w-96 pb-70">
                      <button type="button" className="ml-6">
                        <a
                          href="https://www.youtube.com/channel/UC5CryVwjOALZLyaPlsb8XPg"
                          target="_blank"
                        >
                          {" "}
                          <Image
                            className=""
                            src={svgs.youtubeBlack}
                            alt=""
                            width="43px"
                            height="31px"
                          />
                        </a>
                      </button>
                      <button type="button" className="ml-6">
                        <a href="https://discord.gg/egYfJF9WhN" target="_blank">
                          <Image
                            className=""
                            src={svgs.discordBlack}
                            alt=""
                            width="44px"
                            height="30px"
                          />
                        </a>
                      </button>
                      <button type="button" className="ml-6">
                        <a
                          href="https://twitter.com/BloodHoldersNFT"
                          target="_blank"
                        >
                          {" "}
                          <Image
                            className=""
                            src={svgs.twitterBlack}
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
                            src={svgs.instagramBlack}
                            alt=""
                            width="32px"
                            height="32px"
                          />
                        </a>
                      </button>
                      <button type="button" className="ml-6">
                        <a href="https://t.me/BloodHolders" target="_blank">
                          {" "}
                          <Image
                            className=""
                            src={svgs.telegramBlack}
                            alt=""
                            width="32px"
                            height="32px"
                          />
                        </a>
                      </button>
                    </div>
                  </div>

                  <div
                    className="text-center lg:ml-40 lg:mb-40 mb-16"
                    data-aos="fade-in"
                    
                  >
                    <div className="content-center ">
                      <span className="text-4xl text-white font-junkdog lg:mb-16 pb-16">
                        TRAILER
                      </span>
                    </div>
                    <div className="mt-8 lg:flex lg:-ml-32 flex justify-center">
                      <div className="lg:w-[550px] lg:ml-16 lg:h-72 lg:mt-2 lg:mr-16 mb-36">
                      <iframe
                          title="trailer"
                          width="640"
                          height="370"
                          src="https://www.youtube.com/embed/EAButCEq4Kk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
                        ></iframe>
                      </div>
                    </div>
                  </div>

                  <div className="lg:mr-24 mb-16 px-16 lg:ml-4">
                    <div
                      className="mt-16  lg:relative lg:z-0 lg:text-right lg:mb-6 lg:mt-0  lg:border-r-4 lg:border-black pr-8 text-center"
                      data-aos="fade-left"
                      data-aos-delay="500"
                    >
                      <Image
                        className=""
                        src={svgs.alive}
                        alt=""
                        width="106px"
                        height="118px"
                      />
                    </div>
                    <div
                      className="mb-6 lg:text-right text-center"
                      data-aos="fade-left"
                      data-aos-delay="500"
                    >
                      <span className="text-5xl font-junkdog">ALIVE</span>
                    </div>
                    <div
                      className="w-96 lg:px-0 font-bold lg:pl-32 pl-28 lg:text-right"
                      data-aos="fade-right"
                      data-aos-delay="500"
                    >
                      No one can tell you exactly when or how Alive was created.
                      What most Holders know is that when the virus was about to
                      wipe out the human race, they and their blood saved us.
                      Everything in this life has a price, and that price is
                      called $BLOOD. All Holders pursue this currency as it is
                      the only way they have to survive and achieve welfare.
                      Alive rewards holders with this currency in exchange for
                      helping them to eliminate the large number of zombies that
                      inhabit the world.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
