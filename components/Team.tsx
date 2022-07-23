import { team } from "../data/team";
import svgs from "../utils/svgs";
import Image from "next/image";

export const Team = () => {
  return (
    <div className="grid pb-16 bg-black grid-cols grid-rows ">
      <div className="pb-32 pt-28 text-right">
        <Image
          className="ml-auto"
          src={svgs.teamsTitle}
          width="694px"
          height="137px"
        />
      </div>
      <div className="flex justify-center">
        <div className="grid gap-2 grid-cols-2 lg:gap-4 lg:grid-cols-4 lg:w-3/5">
          {team.map((teammate) => (
            <div
              className="mt-10 grid justify-center mr-4 space-y-10 text-center bg-center bg-no-repeat bg-cover align-content-end grid-rows w-44 h-96 lg:mb-32"
              style={{ backgroundImage: teammate.photo }}
            >
              <div
                className={`${
                  teammate.id % 2 === 0
                    ? "justify-end pb-6 pt-6 row-start-3 whitespace-nowrap"
                    : "justify-end pb-6 pt-6 row-start-1 whitespace-nowrap"
                }`}
              >
                <p className="lg:text-4xl text-2xl text-white font-junkdog">
                  {teammate.name}
                </p>
                <hr className="w-2/5 m-auto text-white "></hr>
                <p className="text-white text-4 font-junkdog">
                  {teammate.role}
                </p>
              </div>
              <div className="row-start-2 h-48"></div>
              <div
                className={`${
                  teammate.id % 2 === 0 ? "row-start-1" : "row-start-3"
                } flex justify-center `}
              >
                {teammate.name === "Rico Peters" ? (
                  <div
                    className={`${
                      teammate.id % 2 === 0 ? "mb-1/2" : "mt-1/2"
                    }${""}`}
                  >
                    <a
                      href={teammate.linkedin}
                      target="_blank"
                      className="hover:text-gray-300"
                    >
                      <Image
                        className="text-black"
                        src={svgs.artstation}
                        alt=""
                        width="64px"
                        height="64px"
                      />
                    </a>
                  </div>
                ) : (
                  <div
                    className={`${teammate.id % 2 === 0 ? "mb-1/2" : "mt-1/2"}`}
                  >
                    <a href={teammate.linkedin} target="_blank">
                      <Image
                        className=""
                        src={svgs.linkedin}
                        alt=""
                        width="62px"
                        height="62px"
                      />
                    </a>
                  </div>
                )}
                {teammate.name === "Antonio Ramirez" && (
                  <div
                    className={`ml-8 ${teammate.id % 2 === 0 ? "mb-1/2" : "mt-1/2"}`}
                  >
                    <a href={teammate.twitch} target="_blank">
                      <Image
                        className=""
                        src={svgs.twitch}
                        alt=""
                        width="62px"
                        height="62px"
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
