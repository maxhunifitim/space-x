import client from "../apollo-client";
import Image from "next/image";
import { gql } from "@apollo/client";

const Launch = ({ launch }) => {
  console.log(launch);
  return (
    <div>
      <h1>{launch.mission_name}</h1>
    </div>
  );
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
