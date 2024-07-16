import React,{useState,useEffect} from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom";


const Item = ({name,role,social,description,photo,index}) => {
  return (
    <div className={`flex ${index%2===0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col transform transition ease-out duration-[400ms] hover:scale-[1.04] my-2`}>
      <div className="border-l-[0.5px] opacity-0.5 border-[#ffffff4d] pl-2 md:w-[250px] m-full min-w-[250px]">
      <img alt={name+'pic'} src={photo} className="bg-white h-[250px] w-full object-cover" />
      <p className="text-white text-[1.1rem] leading-[1.5rem] mt-2">
        {name}
      </p>
      <p className="mt-2 text-white opacity-50 text-[1rem] leading-[1.5rem]">
          {role}
        </p>
      {social && <span className="mt-2 flex items-center gap-2 text-white opacity-50">
        {social.linkedin && <Link to={social.linkedin} target="_blank">
            <LinkedInIcon
          fontSize="medium"
          className="hover:opacity-100"
          sx={{ fontSize: "1.2rem",opacity:"0.5" }}
        />
        </Link>}
        {social.twitter && <Link to={social.twitter} target="_blank">
            <TwitterIcon
          fontSize="medium"
          className="hover:opacity-100"
          sx={{ fontSize: "1.2rem",opacity:"0.5" }}
        />
        </Link>}
      </span>}
    </div>
    <div className="flex justify-center items-start">
    <p className={`bg-[#CFD8D2] p-8 ${index%2===0 ? "md:ml-4" : "md:mr-4"} mt-4 md:mt-0 `}>{description}</p>
    </div>
    </div>
  );
};

export default function ProfileList({title,subtitle,profiles}) {
  return (
    <section className="w-full md:px-24 px-4 md:py-20 py-10 bg-[#0A3523] mt-4">
      <div className="flex justify-between items-center border-b-[1px] py-4 px-2">
        <h2 className="text-white text-[0.9rem] leading-[1.3rem]">
          {subtitle}
        </h2>
        <div/>
      </div>
      <div>
        <h3 className="text-white text-[2.2rem] leading-[2.6rem] tracking-[1.5px] mt-6">
          {title}
        </h3>
        <div className="flex md:flex-row flex-col justify-between mt-10">
          <div
            className="flex flex-col flex-wrap justify-between gap-12 w-full md:mt-4 mt-10"
          >
            {profiles.map((profile,index)=>{
                return <Item {...profile} index={index} />
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
