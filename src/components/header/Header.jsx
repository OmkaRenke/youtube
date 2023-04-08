import React, { useContext, useState } from "react";
import "./style.scss";

import ytlogomobile from "../../assets/yt-logo-mobile.png";
import ytlogo from "../../assets/yt-logo.png";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import Loader from "../shared/Loader";
import { Link } from "react-router-dom";
import { Context } from "../../context/contextApi";
import { useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);
  const navigate = useNavigate();
  const searchQueryHandler = (e) => {
    if (
      (e?.key === "Enter" || e === "searchButton") &&
      searchQuery.length > 0
    ) {
      navigate(`searchResult/${searchQuery}`);
      setSearchQuery("");
      console.log(e);
    }
  };
  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };
  const { pathname } = useLocation();
  const pageName = pathname.split("/").filter(Boolean)?.[0];
  return (
    <div className="header">
      {/* {loading && <Loader />} */}
      <div className="left">
        {pageName !== "video" && (
          <div className="mobilemenu" onClick={mobileMenuToggle}>
            {mobileMenu ? <CgClose size={"20px"} /> : <SlMenu size={"20px"} />}
          </div>
        )}
        <div className="logolink">
          <Link to="/">
            <img src={ytlogo} alt="youtube logo" className="dlogo" />
            <img src={ytlogomobile} alt="youtube logo" className="mlogo" />
          </Link>
        </div>
      </div>
      <div className="center">
        <div className="inputSearch">
          <div className="logo">
            <IoIosSearch size={"24px"} />
          </div>
          <input
            type="search"
            placeholder="Search"
            autoFocus={false}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
          />
        </div>
        <button>
          <IoIosSearch onClick={searchQueryHandler} />
        </button>
      </div>
      <div className="right">
        <div className="righticons">
          <div>
            <RiVideoAddLine size={"24px"} />
          </div>
          <div>
            <FiBell size={"24px"} />
          </div>
        </div>
        <div>
          <img src={ytlogomobile} alt="" className="dlogo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
