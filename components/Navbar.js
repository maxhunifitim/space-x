import { AppBar, Toolbar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/SpacexLogo.png";

import { Typography } from "@mui/material";

const Navbar = ({ launch }) => {
  console.log(launch);

  return (
    <AppBar position="sticky" color="default" sx={{ mb: 2 }}>
      <Toolbar
        sx={{
          display: "flex",
          // justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <a>
            <Image src={logo} alt="spacex" width={200} height={45} />
          </a>
        </Link>
        {launch && (
          <Typography gutterBottom variant="h4" margin="auto">
            {launch.mission_name}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
