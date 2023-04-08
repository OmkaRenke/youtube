import React, { useContext, useEffect, useState } from "react";
import "./leftnav.scss";
import { Context } from "../../../context/contextApi";
import LeftNavbarMenuItem from "./LeftNavbarMenuItem";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { AiFillYoutube } from "react-icons/ai";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
const categories = [
  { name: "New", icon: <AiFillHome size={"20px"} />, type: "home" },
  {
    name: "Trending",
    icon: <MdLocalFireDepartment size={"20px"} />,
    type: "category",
  },
  { name: "Music", icon: <CgMusicNote size={"20px"} />, type: "category" },
  { name: "Films", icon: <FiFilm size={"20px"} />, type: "category" },
  { name: "Live", icon: <MdLiveTv size={"20px"} />, type: "category" },
  {
    name: "Gaming",
    icon: <IoGameControllerSharp size={"20px"} />,
    type: "category",
  },
  { name: "News", icon: <ImNewspaper size={"20px"} />, type: "category" },
  { name: "Sports", icon: <GiDiamondTrophy size={"20px"} />, type: "category" },
  {
    name: "Learning",
    icon: <RiLightbulbLine size={"20px"} />,
    type: "category",
  },
  {
    name: "Fashion & beauty",
    icon: <GiEclipse size={"20px"} />,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings size={"20px"} />, type: "menu" },
  {
    name: "Report History",
    icon: <AiOutlineFlag size={"20px"} />,
    type: "menu",
  },
  { name: "Help", icon: <FiHelpCircle size={"20px"} />, type: "menu" },
  {
    name: "Send feedback",
    icon: <RiFeedbackLine size={"20px"} />,
    type: "menu",
    divider: true,
  },
  {
    name: "YouTube Premium",
    icon: <AiFillYoutube size={"20px"} />,
    type: "menu",
  },
  {
    name: "YouTube Music",
    icon: <SiYoutubemusic size={"20px"} />,
    type: "menu",
  },
  {
    name: "YouTube Kids",
    icon: <TbBrandYoutubeKids size={"20px"} />,
    type: "menu",
    divider: true,
  },
];

const LeftNav = () => {
  const { mobileMenu, selectedCategory, setSelectedCategory } =
    useContext(Context);

  const navigate = useNavigate();
  const handleCategorychange = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu": {
        if (name === "YouTube Premium") {
          return window.open("https://www.youtube.com/premium");
        }
        if (name === "YouTube Music") {
          return window.open("https://music.youtube.com/", "_blank");
        }
        if (name === "YouTube Kids") {
          return window.open(
            "https://www.youtubekids.com/?source=youtube_web",
            "_blank"
          );
        }
        return false;
      }

      default:
        break;
    }
  };

  return (
    <div className={`maincontainerBox ${mobileMenu ? "mobilemenuview" : ""}`}>
      {categories.map((item, index) => (
        <LeftNavbarMenuItem
          key={index}
          text={item.type === "home" ? "Home" : item.name}
          data={item}
          handleCategorychange={() => {
            handleCategorychange(item.name, item.type);
            navigate("/");
          }}
          className={selectedCategory === item.name ? "selected" : ""}
        />
      ))}
    </div>
  );
};

export default LeftNav;
