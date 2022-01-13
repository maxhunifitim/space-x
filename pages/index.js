import client from "../apollo-client";
import { gql } from "@apollo/client";

//material ui
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LaunchesList from "../components/LaunchesList";

export default function Home({ launchesPast }) {
  console.log(launchesPast);
  return (
    <Container maxWidth="md">
      <Typography variant="h1" component="div">
        SpaceX
      </Typography>
      <LaunchesList launches={launchesPast} />
    </Container>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        launchesPast(limit: 10) {
          mission_name
          launch_date_local
          links {
            article_link
            flickr_images
          }
          rocket {
            rocket_name
            rocket_type
          }
          launch_success
          launch_year
        }
      }
    `,
  });

  return {
    props: {
      launchesPast: data.launchesPast,
    },
  };
}
