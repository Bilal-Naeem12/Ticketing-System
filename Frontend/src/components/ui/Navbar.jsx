import React, { useState } from "react";
import {
  Button,
  TextField,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);
  const navigate = useNavigate();
  const navigation = [
    { name: "Home", to: "/" },
    { name: "Events", to: "/event" },
    { name: "Dashboard", to: "/dashboard" },
  ];

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    navigate("/profile");
  };

  const handleSignOut = () => {
    // Logic for signing out (can be implemented as needed)
    console.log("Sign Out");
    handleCloseMenu();
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Search bar */}
      <div
        className={`fixed ${
          isSearchVisible ? "-translate-y-[100%]" : "translate-y-[105%]"
        } left-[5%] p-5 sm:p-8 md:p-10 rounded-lg w-[90%] md:w-[24%] bg-white md:left-[40%] z-[99] transition-transform duration-300 ease-in-out`}
      >
        <div className="bg-white rounded-md flex justify-center items-center">
          <TextField
            fullWidth
            label="Search With Event ID"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="cursor-pointer ms-2 text-[2.7rem]">
            <SearchSharpIcon color="primary" />
          </div>
        </div>
      </div>

      {!isSearchVisible && (
        <div
          onClick={() => setIsSearchVisible(true)}
          className={`w-full h-full bg-black fixed ${
            isSearchVisible ? "opacity-0" : "opacity-75"
          } z-50 transition-transform duration-300 ease-in-out`}
        ></div>
      )}

      {/* Navbar */}
      <nav className="bg-gray-800 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <a href="/">
              <div className="ps-10 sm:ps-2 flex items-center">
                <img
                  alt="Your Company"
                  src="/images/Logo.png"
                  className="w-32 hidden sm:block"
                />
              </div>
            </a>

            {/* Navigation links */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.to}
                      className={classNames(
                        "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Organize Button, Search & Profile */}
            <div className="absolute inset-y-0 right-0 flex gap-2 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1976d2", // Light blue color
                  borderRadius: "20px",
                  textTransform: "none",
                }}
                href="/create-event"
              >
                Organize
              </Button>
              <IconButton onClick={toggleSearchBar}>
                <SearchSharpIcon sx={{ fontSize: 32, color: "white" }} />
              </IconButton>
              <IconButton onClick={handleAvatarClick}>
                <Avatar
                  alt="Profile Picture"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleCloseMenu}
                anchorOrigin={{
                  vertical: "bottom", // Position the menu below the avatar
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={handleCloseMenu}>Your Profile</MenuItem>
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
              </Menu>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.to}
                  className={classNames(
                    "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
