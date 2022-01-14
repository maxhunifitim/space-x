import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/SpacexLogo.png";
const Navbar = () => {
  return (
    <AppBar position="sticky" color="default" sx={{ mb: 2 }}>
      <Toolbar>
        <Link href="/" passHref>
          <Image src={logo} alt="spacex" width={200} height={45} />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
