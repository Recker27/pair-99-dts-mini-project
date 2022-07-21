import React from "react";
import logo from "../images/image 3.png";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RedeemIcon from "@mui/icons-material/Redeem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Header.css";

const Header = () => {
  return (
    <>
      <AppBar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        position="fixed"
      >
        <div className="left-container">
          <Toolbar className="left-toolbar">
            <img src={logo} alt="logo" style={{ width: "48px" }} />
            <Box>
              <Typography variant="h6">Home</Typography>
            </Box>
            <Box>
              <Typography variant="h6">Series</Typography>
            </Box>
            <Box>
              <Typography variant="h6">Movies</Typography>
            </Box>
            <Box>
              <Typography variant="h6">Trending</Typography>
            </Box>
            <Box>
              <Typography variant="h6">My List</Typography>
            </Box>
          </Toolbar>
        </div>
        <div className="rigth-container">
          <Toolbar className="right-toolbar ">
            <Box>
              <SearchIcon />
            </Box>
            <Box>
              <Typography variant="h6">Nama User</Typography>
            </Box>
            <Box>
              <RedeemIcon />
            </Box>
            <Box>
              <NotificationsIcon />
            </Box>
            <Box>
              <Avatar alt="nama avatar" src="/images/avatar/1.jpg" />
            </Box>
          </Toolbar>
        </div>
      </AppBar>
    </>
  );
};

export default Header;
