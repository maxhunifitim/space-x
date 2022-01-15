import "../styles/globals.css";

import Container from "@mui/material/Container";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <>
      <Navbar {...pageProps} />
      <Container maxWidth="lg">
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
