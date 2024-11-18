import React, { useState } from "react";
import { Link } from "react-router-dom";
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

export const navLinks = [
  {
    title: "TOP RIDESHARES",
    path: "/",
  },
  {
    title: "MOSTLY ORDERED",
    path: "/",
  },
  {
    title: "VEHICLES",
    path: "/",
  },
  {
    title: "REVIEWS & EXPERIENCES",
    path: "/",
  },
];

const App = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [langEl, setLangEl] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isLogin = true;

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLangMenuOpen = (event) => {
    setLangEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setLangEl(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert("Searching for:", searchQuery); // Here you can implement actual search logic
  };

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <Link className="text-2xl font-semibold text-blue-900" to="/">
                RideBuddy
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative flex items-center">
                <form onSubmit={handleSearch}>
                  <InputBase
                    className="border border-gray-300 pl-6 pr-2 py-2 rounded-3xl w-96 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
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

            {/* Right Side: Buttons and User Profile */}
            <div className="hidden md:flex items-center space-x-6">
              <div>
                <p className="flex justify-center items-center text-xs underline">
                  English <ArrowDropDownIcon onClick={handleLangMenuOpen} />
                </p>
                <Menu
                  anchorEl={langEl}
                  open={Boolean(langEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>
                    <span className="text-xs">English</span>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <span className="text-xs">Hindi</span>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <span className="text-xs">Gujarati</span>
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
                    onClick={() => {}}
                    size="large"
                  >
                    Register / Login
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

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <div>
                <p className="flex justify-center items-center text-xs underline">
                  English <ArrowDropDownIcon onClick={handleLangMenuOpen} />
                </p>
                <Menu
                  anchorEl={langEl}
                  open={Boolean(langEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>
                    <span className="text-xs">English</span>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <span className="text-xs">Hindi</span>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <span className="text-xs">Gujarati</span>
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
            <div className="md:hidden flex flex-col space-y-4 mt-4 bg-white shadow-md px-4 py-4">
              <div className="relative flex items-center">
                <form onSubmit={handleSearch}>
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
                  </div>
                </>
              ))}
              <div className="mt-4 flex flex-col space-y-4">
                {!isLogin ? (
                  <>
                    <button
                      className="text-sm text-gray-900"
                      onClick={() => {}}
                      size="large"
                    >
                      Register / Login
                    </button>
                  </>
                ) : (
                  <div className="flex justify-center items-center">
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
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="border">
          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex max-w-screen-xl mx-auto px-4 lg:px-8 text-gray-700">
            <ul className="flex space-x-10">
              {navLinks.map((items) => (
                <>
                  <li>
                    <Link
                      to={items?.path}
                      className="inline-block py-3 text-l flex justify-center items-center"
                    >
                      {items.title} <ArrowDropDownIcon />
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </nav>
        </div>

        {!isMobileMenuOpen && (
          <nav className="md:hidden xs:flex items-center space-x-8">
            <div className="relative flex items-center">
              <form onSubmit={handleSearch}>
                <InputBase
                  className="border border-gray-300 pl-6 pr-2 py-2 rounded-3xl w-96 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
    </>
  );
};

export default App;
