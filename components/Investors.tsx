import { investors } from "../data/investors";

/*export const Investors = () => {
  return (
    <div className="text-center bg-black ">
      <div className="px-4 py-12 mx-auto max-w-7xl tablet:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 tablet:space-y-4 xl:max-w-none">
            <h2 className="pb-16 mx-auto text-3xl tracking-tight text-white font-junkdog tablet:text-6xl w-max">
              Investor & partners
            </h2>
          </div>
          <ul
            role="list"
            className="space-y-12 tablet:grid tablet:grid-cols-2 tablet:gap-x-6 tablet:gap-y-12 tablet:space-y-0 lg:grid-cols-6 lg:gap-x-8 "
          >
            {investors.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-3">
                    <img
                      className="rounded-lg shadow-lg"
                      src={person.photo}
                      alt=""
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-1 text-lg leading-6 text-center text-white font-junkdog">
                      <h3>{person.name}</h3>
                    </div>
                    <ul role="list" className="flex space-x-5"></ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};*/
import svgs from "../utils/svgs";
import Image from "next/image";
import React, { Component } from "react";

function investorsPartners() {
  let team = investors;
  let teamlength = team.length;
  let response = [];
  while (teamlength > 0) {
    let items = team.slice(0, 4);
    let row = items.map((element) => {
      return (
        <>
          <div className=" lg:w-70 lg:h-70 lg:ml-16 lg:mb-32 hidden lg:block ">
            <div className=" ">
              <a href={element.website} target="_blank">
                <Image src={element.photo} width="250px" height="250px" />
              </a>
            </div>
            <div className="text-white text-center mt-2 font-junkdog">
              {element.name}
            </div>
          </div>

          <div className=" block lg:hidden mr-8">
            <div className=" ">
              <a href={element.website} target="_blank">
                <Image src={element.photo} width="250px" height="250px" />
              </a>
            </div>
            <div className="text-white text-center mt-2  mb-8 font-junkdog">
              {element.name}
            </div>
          </div>
        </>
      );
    });
    team = team.slice(4, teamlength);
    teamlength = team.length;
    response.push(<div className="lg:flex ">{row}</div>);
  }

  return response;
}

export const InvestorsAndPartners = () => {
  return (
    <div className=" bg-black pb-4 pt-12 px-6">
      <div className=" w-max mx-auto">
        <span className=" text-white lg:text-6xl font-junkdog text-4xl">
          Investors & partners
        </span>
      </div>

      <div className="flex-column bg-black pb-16 pt-12 lg:mt-16 ">
        <div className="w-max mx-auto ">{investorsPartners()}</div>
      </div>
    </div>
  );
};

export default InvestorsAndPartners;
