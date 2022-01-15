import { AppBar, Toolbar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/SpacexLogo.png";
import nasaLogo from "../public/nasaLogo.png";
import style from "../styles/Navbar.module.css";

import { Typography } from "@mui/material";

const Navbar = ({ launch }) => {
  return (
    <AppBar position="sticky" color="default" sx={{ mb: 2 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <a className={style.spaceX}>
            <Image src={logo} alt="spacex" />
          </a>
        </Link>
        {launch && (
          <Typography gutterBottom variant="h4" margin={"auto"}>
            {launch.mission_name}
          </Typography>
        )}
        <div className={style.nasa}>
          <Image src={nasaLogo} alt="spacex" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
