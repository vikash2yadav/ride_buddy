import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu as MenuIcon,
  AccountCircle,
  Search as SearchIcon,
  Star,
} from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Menu,
  MenuItem,
  Button,
  IconButton,
  InputBase,
  InputAdornment,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { navLinks } from "../../../config/sampleData";
import { CommonContext } from "../../../context/CommonContext";
import Login from "../../../pages/auth/Login";
import { logoutAPi } from "../../../apis/auth";
import { LocationContext } from "../../../context/LocationContext";
import { HindiDataList } from "../../../language/hindi";
import { GujaratiDataList } from "../../../language/gujarati";
import AvatarImage from "../../AvatarImage";
import { globalDataList } from "../../../apis/common";
import "./../../../global.css";
import FindInPageIcon from "@mui/icons-material/FindInPage";

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [langEl, setLangEl] = useState(null);
  const [cityEl, setCityEl] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [globalSearchData, setGlobalSearchData] = useState([]);
  const [globalSearchDataCount, setGlobalSearchDataCount] = useState(null);

  const {
    setModelOpen,
    isLogin,
    setIsLoading,
    setIsLogin,
    setSnackOpen,
    setMessageType,
    setSnackMessage,
    currentLang,
    setCurrentLang,
    currentLangCode,
    setCurrentLangCode,
    profile,
    setProfile,
  } = useContext(CommonContext);
  const { cityList, allCities } = useContext(LocationContext);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLangMenuOpen = (event) => {
    setLangEl(event.currentTarget);
  };

  const handleCityMenuOpen = (event) => {
    setCityEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setLangEl(null);
    setCityEl(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchChange = async (event) => {
    setSearchQuery(event.target.value);
    let filter = {
      search: searchQuery,
      vehicles: true,
    };
    let response = await globalDataList("util/global_search", filter, "POST");
    if (response?.status === 200) {
      setGlobalSearchData(response?.data?.data?.rows);
      setGlobalSearchDataCount(response?.data?.data?.count);
    } else {
    }
  };

  const handleLoginFormOpen = () => {
    setModelOpen(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert("Searching for:", searchQuery); // Here you can implement actual search logic
  };

  const handleLogout = async () => {
    setIsLoading(true);
    let access_token = localStorage.getItem("authorization");

    let response = await logoutAPi(
      "user/logout",
      { token: access_token },
      "post"
    );
    if (response?.status === 200) {
      setIsLoading(false);
      setSnackOpen(true);
      setMessageType("success");
      localStorage.clear("authorization");
      setIsLogin(false);
      setSnackMessage(response?.data?.message);
      navigate("/login");
    } else {
      setSnackOpen(true);
      setMessageType("error");
      setSnackMessage(response?.data?.message);
    }
  };

  const handleSelectLang = async (value) => {
    localStorage.setItem("lang", value);
    setAnchorEl(null);
    setLangEl(null);
    setCityEl(null);
    window.location.reload();
  };

  useEffect(() => {
    let lang = localStorage.getItem("lang");
    setCurrentLangCode(lang);
    if (lang === "eng" || !lang) {
      setCurrentLang("English");
    } else if (lang === "hn") {
      setCurrentLang("हिन्दी");
    } else {
      setCurrentLang("ગુજરાતી");
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    allCities();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let user = localStorage.getItem("authorization");
    let profile = localStorage.getItem("profileImage");
    setProfile(profile);

    if (user) {
      setIsLogin(true);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <header className="bg-white sticky shadow-md top-0 left-0 w-full z-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <Link className="text-3xl text-orange-600 noto_font" to="/">
                {currentLangCode === "hn"
                  ? HindiDataList.header.title
                  : currentLangCode === "guj"
                  ? GujaratiDataList.header.title
                  : "RideBuddy"}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative flex items-center ">
                <form onSubmit={handleSearch}>
                  <InputBase
                    className="border border-gray-300 pl-6 pr-2 py-2 rounded-3xl w-96 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder={
                      currentLangCode === "hn"
                        ? HindiDataList.header.search_placeholder
                        : currentLangCode === "guj"
                        ? GujaratiDataList.header.search_placeholder
                        : "Search via name, model or brand..."
                    }
                    value={searchQuery}
                    onChange={handleSearchChange}
                    inputProps={{
                      "aria-label": "search",
                    }}
                    startAdornment={
                      <InputAdornment position="start">
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </form>
              </div>
              {searchQuery && (
                <div
                  className={`${
                    globalSearchDataCount ? "md:block" : "md:flex"
                  } hidden border absolute top-[140px] left-[400px] w-3/6 bg-white h-96 justify-center items-center overflow-y-auto scrollbar-hidden`}
                >
                  <div className="relative">
                    {globalSearchDataCount ? (
                      <>
                        {globalSearchData?.map((vehicle, index) => (
                          <div
                            key={vehicle?.id || index}
                            onClick={() =>
                              navigate(
                                `/${vehicle?.brand?.name}/${vehicle?.category?.name}/${vehicle?.id}`
                              )
                            }
                            className="mx-2 py-1 rounded-lg"
                          >
                            <div className="mb-1 cursor-pointer hover:bg-[#ea580c] hover:text-white">
                              <div className="flex p-1 justify-start">
                                <img
                                  alt="image"
                                  height="100px"
                                  width="100px"
                                  src={vehicle?.vehicle_images[0]?.image_url}
                                />
                                <div className="px-4 items-center">
                                  <h3 className="text-xl font-[20px] text-dark noto_font">
                                    {vehicle?.brand?.name}{" "}
                                    {vehicle?.modell?.name} -{" "}
                                    {vehicle?.category?.name}{" "}
                                    {vehicle?.fuel_type}
                                  </h3>
                                  <p className="base_font">
                                    {vehicle?.color} &nbsp;| &nbsp;
                                    {vehicle?.engine_capacity} cc &nbsp; |{" "}
                                    &nbsp;
                                    {vehicle?.availability_status} &nbsp;|{" "}
                                    &nbsp;
                                    {`RTO - ${vehicle?.rto}`} &nbsp;| &nbsp;
                                    {`${vehicle?.seats} seater`} &nbsp;| &nbsp;
                                    {`${vehicle?.ownership} ownership`}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <>
                        <div className="text-center noto_font text-3xl text-[#ea850c]">
                          <div className="p-4">
                            {" "}
                            <FindInPageIcon style={{ fontSize: "60px" }} />
                          </div>
                          <div>No data Found </div>
                        </div>
                      </>
                    )}
                    {/* <div className="sticky bottom-[20px] w-full ">
                      <div className="my-4 border-t border-gray-300 w-full"></div>
                      <Link className="mx-4 underline text-gray-500">
                        Show more results..{" "}
                        <EastIcon className="text-gray-500" />
                      </Link>
                    </div> */}
                  </div>
                </div>
              )}
            </nav>

            {/* Right Side: Buttons and User Profile */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="base_font">
                <p className="flex justify-center items-center text-xs underline">
                  {currentLang}{" "}
                  <ArrowDropDownIcon onClick={handleLangMenuOpen} />
                </p>
                <Menu
                  anchorEl={langEl}
                  open={Boolean(langEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={() => handleSelectLang("eng")}>
                    <span className="text-xs base_font">English</span>
                  </MenuItem>
                  <MenuItem onClick={() => handleSelectLang("hn")}>
                    <span className="text-xs base_font">हिन्दी</span>
                  </MenuItem>
                  <MenuItem onClick={() => handleSelectLang("guj")}>
                    <span className="text-xs base_font">ગુજરાતી</span>
                  </MenuItem>
                </Menu>
              </div>

              <div>
                <IconButton className="" size="large">
                  <FavoriteBorderIcon />
                </IconButton>
              </div>

              {!isLogin ? (
                <>
                  <button
                    className="text-gray-900 hover:text-[#EA850c] transition duration-300 ease-linear"
                    onClick={handleLoginFormOpen}
                    size="large"
                  >
                    {currentLangCode === "hn"
                      ? HindiDataList.header.register_login
                      : currentLangCode === "guj"
                      ? GujaratiDataList.header.register_login
                      : "Register / Login"}
                  </button>
                </>
              ) : (
                <>
                  <div className="items-center">
                    <button
                      className="text-gray-900"
                      onClick={handleMenuOpen}
                      size="large"
                    >
                      <AvatarImage
                        sx={{
                          height: 32,
                          width: 32,
                        }}
                        src={profile}
                      />
                    </button>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={() => navigate("/profile")}>
                        <span className="text-sm base_font">
                          {currentLangCode === "hn"
                            ? "मेरी प्रोफाइल"
                            : currentLangCode === "guj"
                            ? "મારી પ્રોફાઇલ"
                            : "My Profile"}
                        </span>
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>
                        <span className="text-sm base_font">
                          {currentLangCode === "hn"
                            ? "लॉग आउट"
                            : currentLangCode === "guj"
                            ? "લોગઆઉટ"
                            : "LogOut"}
                        </span>
                      </MenuItem>
                    </Menu>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <div className="base_font">
                <p className="flex justify-center base_font items-center text-xs underline">
                  {setCurrentLang}{" "}
                  <ArrowDropDownIcon onClick={handleLangMenuOpen} />
                </p>
                <Menu
                  anchorEl={langEl}
                  open={Boolean(langEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={() => handleSelectLang("eng")}>
                    <span className="text-xs">English</span>
                  </MenuItem>
                  <MenuItem onClick={() => handleSelectLang("hn")}>
                    <span className="text-xs">हिन्दी</span>
                  </MenuItem>
                  <MenuItem onClick={() => handleSelectLang("guj")}>
                    <span className="text-xs">ગુજરાતી</span>
                  </MenuItem>
                </Menu>
              </div>

              <Button onClick={toggleMobileMenu}>
                <MenuIcon />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden relative flex flex-col space-y-4 bg-white shadow-md px-4 w-full">
              <div className="relative flex items-center w-full">
                <form onSubmit={handleSearch} className="w-full">
                  <InputBase
                    className="border border-gray-300 pl-6 pr-2 py-2 rounded-3xl w-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Search via name, model or brand..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    inputProps={{
                      "aria-label": "search",
                    }}
                    startAdornment={
                      <InputAdornment position="start">
                        <IconButton onClick={handleSearch}>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </form>
              </div>

              {navLinks.map((items) => (
                <>
                  <div>
                    <Link to={items?.path} className="inline-block">
                      {items.title} <ArrowDropDownIcon />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="left-0 right-0 bg-white w-full rounded group-block">
                      <ul className="">
                        {items.submenu &&
                          items.submenu.map((subItem, idx) => (
                            <li key={idx}>
                              <Link
                                to={subItem.path}
                                className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded"
                              >
                                {subItem.title}
                                <span className="absolute left-0 right-0 top-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </>
              ))}

              <div className="mt-4 flex flex-col space-y-4">
                <div className="flex justify-center items-center">
                  <div className="flex justify-end items-center">
                    <LocationOnIcon className="text-gray-600" />
                    <button className="text-gray-900 lg:pl-1">
                      {currentLangCode === "hn"
                        ? "शहर चुनें"
                        : currentLangCode === "guj"
                        ? "શહેર પસંદ કરો"
                        : "Select city"}
                      <ArrowDropDownIcon onClick={handleCityMenuOpen} />
                    </button>
                    <Menu
                      anchorEl={cityEl}
                      open={Boolean(cityEl)}
                      onClose={handleMenuClose}
                    >
                      {cityList?.map((city) => (
                        <MenuItem key={city?.id}>
                          <span className="text-sm">{city.name}</span>
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>

                  {!isLogin ? (
                    <>
                      <button
                        className="text-sm text-gray-900"
                        onClick={handleLoginFormOpen}
                        size="large"
                      >
                        Register / Login
                      </button>
                    </>
                  ) : (
                    <>
                      <div>
                        <IconButton className="text-blue-900" size="large">
                          <FavoriteBorderIcon />
                        </IconButton>
                      </div>

                      <div className="items-center">
                        <button
                          className="text-gray-900"
                          onClick={handleMenuOpen}
                          size="large"
                        >
                          <AccountCircle />
                        </button>
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleMenuClose}
                        >
                          <MenuItem onClick={handleMenuClose}>
                            <span className="text-sm">My Profile</span>
                          </MenuItem>
                          <MenuItem onClick={handleMenuClose}>
                            <span className="text-sm">LogOut</span>
                          </MenuItem>
                        </Menu>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          {searchQuery && (
            <div className="md:hidden block absolute top-[120px] left-0 bg-white h-96 justify-center items-center overflow-y-auto scrollbar-hidden">
              <div className="relative">
                {globalSearchDataCount ? (
                  <>
                    {globalSearchData?.map((vehicle, index) => (
                      <div
                        key={vehicle?.id || index}
                        onClick={() =>
                          navigate(
                            `/${vehicle?.brand?.name}/${vehicle?.category?.name}/${vehicle?.id}`
                          )
                        }
                        className="mx-1 py-0.5 rounded-lg  "
                      >
                        <div className="mb-4 cursor-pointer hover:bg-gray-100">
                          <div className="flex p-1 justify-start">
                            <img
                              alt="image"
                              height=""
                              width="70px"
                              src={vehicle?.vehicle_images[0]?.image_url}
                            />
                            <div className="px-2">
                              <h3 className="text-m text-dark">
                                {vehicle?.brand?.name} {vehicle?.modell?.name} -{" "}
                                {vehicle?.category?.name} {vehicle?.fuel_type}
                              </h3>
                              <p className="text-xs">
                                {vehicle?.color} &nbsp;| &nbsp;
                                {vehicle?.engine_capacity} cc &nbsp; | &nbsp;
                                {vehicle?.availability_status} &nbsp;| &nbsp;
                                {`RTO - ${vehicle?.rto}`} &nbsp;| &nbsp;
                                {`${vehicle?.seats} seater`} &nbsp;| &nbsp;
                                {`${vehicle?.ownership} ownership`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <div className="text-center">No data</div>
                  </>
                )}
                {/* <div className="sticky bottom-[20px] w-full ">
                  <div className="my-4 border-t border-gray-300 w-full"></div>
                  <Link className="mx-4 underline text-gray-500">
                    Show more results.. <EastIcon className="text-gray-500" />
                  </Link>
                </div> */}
              </div>
            </div>
          )}
        </div>

        <div className="border-t-2">
          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-900">
            <ul className="flex space-x-8 flex-grow">
              {navLinks.map((items) => (
                <li key={items.path} className="relative group">
                  <Link
                    to={items?.path}
                    className="py-3 text-sm flex justify-center items-center relative noto_font"
                  >
                    {items.title} <ArrowDropDownIcon />
                    {/* Orange bar appears on hover */}
                    <span className="absolute left-0 right-0 top-0 h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute z-50 base_font left-0 right-0 bg-white w-48 border border-gray-300 rounded hidden group-hover:block">
                    <ul className="p-1">
                      {items.submenu &&
                        items.submenu.map((subItem, idx) => (
                          <li key={idx}>
                            <Link
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded"
                            >
                              {subItem.title}
                              {/* Orange bar for submenu items */}
                              <span className="absolute left-0 right-0 top-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            {/* Button Container */}
            <div className="flex justify-end items-center text-m">
              <LocationOnIcon className="text-[#EA850C]" />
              <button className="text-gray-900 lg:pl-1 noto_font">
                {currentLangCode === "hn"
                  ? "शहर चुनें"
                  : currentLangCode === "guj"
                  ? "શહેર પસંદ કરો"
                  : "Select city"}{" "}
                <ArrowDropDownIcon onClick={handleCityMenuOpen} />
              </button>
              <Menu
                anchorEl={cityEl}
                open={Boolean(cityEl)}
                onClose={handleMenuClose}
              >
                {cityList?.map((city) => (
                  <MenuItem key={city?.id}>
                    <span className="text-sm base_font">{city.name}</span>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </nav>
        </div>

        {!isMobileMenuOpen && (
          <nav className="md:hidden xs:flex items-center space-x-8 w-full">
            <div className="relative flex items-center w-full mb-1">
              <form onSubmit={handleSearch} className="w-full mb-1">
                <InputBase
                  className="border border-gray-300 pl-6 pr-2 py-2 rounded-3xl text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
                  placeholder="Search via name, model or brand..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  inputProps={{
                    "aria-label": "search",
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton onClick={handleSearch}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </form>
            </div>
          </nav>
        )}
      </header>
      <Login />
    </>
  );
};

export default Header;
