import "../styles/globals.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <Container maxWidth="md">
      <Typography variant="h1" component="div">
        <Link href="/">SpaceX</Link>
      </Typography>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
