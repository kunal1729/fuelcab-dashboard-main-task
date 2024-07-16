import React, { useState } from "react";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProfileList from "./ProfileList";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const team = [
  {
    name: "Nitin Anand",
    role: "Co-founder & CXO",
    photo: "/Images/Nitin.jpg",
    social: { linkedin: "https://www.linkedin.com/in/nitin-anand-26819a16/" },
    description:
      "Nitin Anand is Professionally qualified C.F.A & LL.B focused in Business Analysis & Planning with over 20 years of experience and demonstrated history of working across different sectors in Management, Business Relationship Management, Business Planning and Business Development.",
  },
  {
    name: "Shoaib Malik",
    role: "Co-founder & COO",
    photo: "/Images/shoaib.jpeg",
    social: { linkedin: "https://www.linkedin.com/in/shoaib-malik-2176961ba" },
    description:
      "Shoaib Malik is a renowned entrepreneur and the co-founder and Chief Operating Officer (COO) of FuelCab, a leading platform for all types of fuels and raw materials. Born and raised in a business-oriented family, Shoaib developed a passion for innovation and technology from an early age. In June 2022, Shoaib successfully graduated with a bachelor's degree in Mechanical Engineering, marking the culmination of his academic journey. Equipped with a strong technical background and a desire to make a significant impact in the energy industry, he set his sights on entrepreneurship.",
  },
  {
    name: "Poonam Ramola",
    role: "HR & PR Head",
    photo: "/Images/poonam.png",
    social: {
      twitter:
        "https://twitter.com/PoonamRamola4?t=GBFdsGsecLmUUYE0XuQuwQ&s=09",
      linkedin: "https://www.linkedin.com/in/poonam-ramola",
    },
    description:
      "Poonam Ramola is an accomplished professional in the field of Human Resources and currently holds the position of HR at FuelCab. With a strong educational background, Poonam completed her graduation in Electrical Engineering in June 2022. Despite her engineering background, Poonam discovered her passion for the people side of business and decided to pursue a career in Human Resources.",
  },
  {
    name: "Saif Malik",
    role: "Chief Technology Officer",
    photo: "/Images/saif.jpg",
    social: { linkedin: "https://www.linkedin.com/in/saif-malik-877321206/" },
    description:
      "Saif Malik is a highly accomplished individual serving as the Chief Technology Officer (CTO) at FuelCab. With a passion for innovation and cutting-edge technologies, Saif plays a crucial role in shaping the technological landscape of the company. Saif is currently pursuing his graduation in AI&ML. His leadership and technical acumen propel the company forward.",
  },
  {
    name: "Shubham Singh",
    role: "Co-founder & CFO",
    photo: "/Images/shubham.JPG",
    social: {
      linkedin: "https://www.linkedin.com/in/shubhamsinghfuelcab",
      twitter:
        "https://twitter.com/Shubham75943823?t=pCyDsExYgV9bHvpy-bACng&s=09",
    },
    description:
      "Shubham Singh, a dynamic individual and co-founder of FuelCab, brings a wealth of knowledge and expertise to the company as its Chief Financial Officer. With a strong educational background, Shubham completed his graduation in Mechanical Engineering in June 2022. As the CFO, Shubham plays a pivotal role in overseeing the financial operations of FuelCab. Shubham plays a key role in shaping FuelCab.",
  },
];

export default function OurTeam() {
  return (
    <div className="font-dmsans">
      <Navbar />
      <div className="text-center text-white p-10 bg-color1">
        <p className="p-1 font-md">OUR TEAM</p>
        <h1 className="text-3xl">Get to know us better.</h1>
      </div>
      <div className="flex md:flex-row flex-col md:px-20 px-4 py-12">
        <img
          className="md:place-content-center"
          src="/Images/sajid.png"
          alt=""
        />
        <div className="flex flex-col justify-between">
          <div className="flex justify-between items-center p-4">
            <div className="grid p-4 md:p-0">
              <h1 className="text-2xl md:text-3xl font-[500] text-[#0D2620]">
                Mohd Sajid
              </h1>
              <p className="text-xl md:text-2xl font-light text-[#828282]">
                Founder & CEO
              </p>
            </div>
            <div className="flex gap-6 text-2xl md:text-3xl">
              <Link to="https://twitter.com/SajidObama" target="_blank">
                <FiTwitter className="text-color1" />
              </Link>
              <Link to="https://www.linkedin.com/in/sajidobama" target="_blank">
                <FaLinkedinIn className="fill-color1" />
              </Link>
            </div>
          </div>

          <div className="font-dmsans text-md p-12 bg-[#CFD8D2]">
            <div className="lg:text-lg">
              <p>
                Mohd Sajid (Sajid Obama) is an accomplished entrepreneur and
                visionary leader, serving as the founder and CEO of FuelCab, a
                pioneering platform for all types of fuels and raw materials.
                With his passion for innovation and a deep understanding of the
                energy industry, Mohd Sajid has spearheaded the development of
                FuelCab into a prominent player in the fuel marketplace. Born
                and raised in a family with a strong background in engineering,
                Sajid fascination with mechanical systems and energy solutions
                began at an early age. Following his passion, he pursued a
                degree in Mechanical Engineering, graduating with honors in June
                2022. During his academic journey, Sajid delved into various
                aspects of energy management, fuel technologies, and sustainable
                practices, laying the foundation of his future endeavors.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ProfileList
        profiles={team}
        title="The FuelCab Team"
        subtitle="Our Team"
      />
      <Footer />
    </div>
  );
}
