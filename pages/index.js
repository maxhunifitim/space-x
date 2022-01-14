import client from "../apollo-client";
import { gql } from "@apollo/client";

import LaunchesList from "../components/LaunchesList";

export default function Home({ launchesPast }) {
  return <LaunchesList launches={launchesPast} />;
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        launchesPast(limit: 10) {
          mission_name
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
          id
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
