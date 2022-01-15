import client from "../apollo-client";
import { gql } from "@apollo/client";
import LaunchDetails from "../components/LaunchDetails";

const Launch = ({ launch }) => {
  return <LaunchDetails launch={launch} />;
};

export const getServerSideProps = async ({ query: { id } }) => {
  const { data } = await client.query({
    query: gql`
      {
        launch(id: ${id}) {
          mission_name
          launch_success
          rocket {
            rocket {
              cost_per_launch
              country
              description
              first_flight
              height {
                meters
              }
              name
            }
          }
          links {
            flickr_images
          }
        }
      }
    `,
  });
  return {
    props: {
      launch: data.launch,
    },
  };
};

export default Launch;
