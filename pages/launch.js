import client from "../apollo-client";
import Image from "next/image";
import { gql } from "@apollo/client";

const Launch = ({ launch }) => {
  console.log(launch);
  return (
    <div>
      <h1>{launch.mission_name}</h1>
      <a href={launch.links.article_link}>Link</a>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const {
    query: { id },
  } = context;
  console.log("CONTEXT ", id);

  const { data } = await client.query({
    query: gql`
      {
        launch(id: ${id}) {
            mission_name
            launch_success
            links {
              flickr_images
              article_link
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
