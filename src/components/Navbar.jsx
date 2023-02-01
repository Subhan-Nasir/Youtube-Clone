import React from 'react';
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import  SearchBar  from "./SearchBar";
import YouTubeIcon from '@mui/icons-material/YouTube';

const Navbar = () => {
  return (

    <Stack 
      direction="row"
      alignItems="center" 
      p={2}
      sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between"}}
    >
        
      <Link to="/" style={{ display: "flex", alignItems:"center"}}>
        {/* <img src={logo} alt="logo" height={45} ></img> */}
        <span style={{ marginLeft:"20px"}}>
          <Stack direction="row" p={1} gap="30px" alignItems="center">
            <YouTubeIcon sx={{color:"red",scale:"3"}}/>
            <Typography variant='h5' fontWeight="bold" color="White">YouTube</Typography>
            </Stack>
        </span>
      </Link>
      <SearchBar></SearchBar>

    </Stack>

  )
}

export default Navbar
