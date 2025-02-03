import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu as MenuIcon,
  AccountCircle,
  Search as SearchIcon,
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

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [langEl, setLangEl] = useState(null);
  const [cityEl, setCityEl] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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
    setCurrentLangCode
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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
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
    if (lang === "eng") {
      setCurrentLang("English");
    } else if (lang === "hn") {
      setCurrentLang("हिन्दी");
    } else {
      setCurrentLang("ગુજરાતી");
    }
  }, []);

  useEffect(() => {
    allCities();
  }, []);

  useEffect(() => {
    let user = localStorage.getItem("authorization");
    if (user) {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
      <header className="bg-white sticky shadow-md top-0 left-0 w-full z-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <Link className="text-2xl font-semibold text-orange-600" to="/">
                {currentLangCode === "hn"
                  ? HindiDataList.header.title
                  : currentLangCode === "guj"
                  ? GujaratiDataList.header.title
                  : "RideBuddy"}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative flex items-center">
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
                        <IconButton onClick={handleSearch}>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </form>
              </div>
            </nav>

            {/* Right Side: Buttons and User Profile */}
            <div className="hidden md:flex items-center space-x-6">
              <div>
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

              <div>
                <IconButton className="text-blue-900" size="large">
                  <FavoriteBorderIcon />
                </IconButton>
              </div>

              {!isLogin ? (
                <>
                  <button
                    className="text-gray-900"
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
                      <AccountCircle />
                    </button>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={() => navigate("/profile")}>
                        <span className="text-sm">My Profile</span>
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>
                        <span className="text-sm">LogOut</span>
                      </MenuItem>
                    </Menu>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <div>
                <p className="flex justify-center items-center text-xs underline">
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
            <div className="md:hidden flex flex-col space-y-4 mt-4 bg-white shadow-md px-4 py-4 w-full">
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
                      Select city{" "}
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
        </div>

        <div className="">
          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-900">
            <ul className="flex space-x-8 flex-grow">
              {navLinks.map((items) => (
                <li key={items.path} className="relative group">
                  <Link
                    to={items?.path}
                    className="inline-block py-3 text-sm flex justify-center items-center relative"
                  >
                    {items.title} <ArrowDropDownIcon />
                    {/* Orange bar appears on hover */}
                    <span className="absolute left-0 right-0 top-0 h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute z-50 left-0 right-0 bg-white w-48 border border-gray-300 rounded hidden group-hover:block">
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
              <LocationOnIcon className="text-gray-700" />
              <button className="text-gray-900 lg:pl-1">
                Select city <ArrowDropDownIcon onClick={handleCityMenuOpen} />
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
          </nav>
        </div>

        {!isMobileMenuOpen && (
          <nav className="md:hidden xs:flex items-center space-x-8 w-full">
            <div className="relative flex items-center w-full">
              <form onSubmit={handleSearch} className="w-full">
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
