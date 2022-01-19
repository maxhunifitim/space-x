import client from "../../apollo-client";
import { gql } from "@apollo/client";
import LaunchDetails from "../../components/LaunchDetails";

const Launch = ({ launch }) => {
  return <LaunchDetails launch={launch} />;
};

export const getServerSideProps = async (context) => {
  const { data } = await client.query({
    query: gql`
      {
        launch(id: ${context.params.id}) {
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

// export const getStaticPaths = async () => {
//   const {
//     data: { launchesPast },
//   } = await client.query({
//     query: gql`
//       {
//         launchesPast(limit: 11) {
//           mission_name
//           links {
//             article_link
//             flickr_images
//           }
//           rocket {
//             rocket_name
//             rocket_type
//           }
//           launch_success
//           launch_year
//           id
//         }
//       }
//     `,
//   });

//   const ids = launchesPast.map((launch) => launch.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default Launch;
