import React from "react";
import { styled } from "styled-components";
import meimg from "../localImages/me/Screenshot 2023-08-11 at 14.42.48.png";
import meimg2 from "../localImages/me/Screenshot 2023-08-11 at 14.49.57.png";
import aw1 from "../localImages/award/1.png";
import aw2 from "../localImages/award/2.png";
import aw3 from "../localImages/award/3.png";
import aw4 from "../localImages/award/4.png";
import p1 from "../localImages/award-photo/1.png";
import p2 from "../localImages/award-photo/2.png";
import p3 from "../localImages/award-photo/3.png";
function About() {
  return (
    <CONTAINER>
      <h4 className="text-3xl w-full text-center text-lighter py-10">
        About Me
      </h4>
      <div className="mx-10 border-2 border-medium rounded-xl py-10  ">
        <div className="flex gap-5 px-10 w-full m-auto flex-col md:flex-row">
          <div className="md:w-1/2 w-full flex justify-evenly flex-col h-auto ">
            <p className="w-full text-center text-lighter md:px-10">
              My name is Levani Levanidze. I am a professional photographer from
              Georgia. As I was born in one of the most beautiful countries, its
              amazing nature was my biggest inspiration and it led me to the
              landscape photography. From early childhood I was interested in
              nature and travel. I love adventures and doing all the crazy
              things full of activity and adrenaline. When your hobby turns into
              a profession, you are at the point, when you do what you love.
            </p>
          </div>
          <img className="md:w-1/2 w-full object-cover " src={meimg} alt="" />
        </div>
        <div className="  md:pt-16 pt-5  flex gap-5 px-10 w-full m-auto">
          <img
            className="md:w-1/2 w-full object-cover hidden md:flex"
            src={meimg2}
            alt=""
          />
          <div className="md:w-1/2 w-full flex justify-evenly flex-col h-auto ">
            <p className="md:px-10 w-full text-center text-lighter">
              In 2016 I became a member of Federation of European Professional
              Photographers and got EP certificate. Couple of months later I was
              awarded by FEP Golden Camera as a winner of the concourse
              "European Photographer of the year 2017 Landscape Category".
              Currently I live in Stockholm but I am open to take photos all
              around the world. The phrase ''Best or nothing'' perfectly
              describes my attitude: if I do something I do it in its best way.
            </p>
          </div>
        </div>
      </div>
      <div className=" mx-10 border-2 border-medium rounded-tl-xl rounded-tr-xl  p-10 mt-10 ">
        <div>
          <div>
            <h3 className=" text-center text-lighter pb-10 text-2xl">
              European Professional Photographer of the year 2017 in landscape
              category
            </h3>
            <p className="sm:px-10 w-full text-center text-lighter">
              In 2017 I participated in a competition held by the Federation of
              Professional Photographers of Europe. The award ceremony took
              place in Italy, Catania where my photo was ranked on the first
              place among thousands of other photos from 25 different countries.
              I got the first place, obtained European Landscape Golden Camera
              and became an ''European Professional Photographer of the year
              2017'' in landscape category (On this year, there was en exception
              and instead of 1 Golden, 1 Silver, and 1 Bronze, the jury decided
              to give 2 Golden and 1 Bronze Cameras, so the first place was
              separated between me and Peter Svoboda). See my awarded three
              photos from this competition below:
            </p>
          </div>
          <div className="">
            <div className="flex flex-col sm:flex-row pt-8">
              <img className="w-full sm:w-1/2 sm:pr-2 " src={p1} alt="" />
              <img
                className="w-full sm:w-1/2 sm:pl-2 sm:pt-0 pt-4 "
                src={p2}
                alt=""
              />
            </div>
            <img className="pt-4" src={p3} alt="" />
          </div>
        </div>
      </div>
      <div className=" mx-10 border-2 border-medium rounded-tl-xl rounded-tr-xl mt-10 p-10 ">
        <div className="flex flex-wrap">
          <img
            className=" sm:w-1/2 w-full pt-2 sm:pt-0 sm:pr-2"
            src={aw1}
            alt=""
          />
          <img
            className=" sm:w-1/2 w-full pt-4 sm:pt-0 sm:pl-2"
            src={aw2}
            alt=""
          />
          <img
            className=" sm:w-1/2 w-full pt-4   sm:pr-2 sm:pt-4"
            src={aw3}
            alt=""
          />
          <img
            className=" sm:w-1/2 w-full pt-4 sm:pl-2 sm:pt-4"
            src={aw4}
            alt=""
          />
        </div>
      </div>
    </CONTAINER>
  );
}

export default About;

const CONTAINER = styled.div`
  background-color: var(--dark);
`;
