import Grid from "@mui/material/Grid";
import Link from "next/link";
import Launch from "./Launch";

const LaunchesList = ({ launches }) => {
  return (
    <Grid container spacing={2}>
      {launches.map((launch, id) => (
        <Grid key={id} item xs={12} sm={6} md={4}>
          <Link href="/launch/[id]" as={`/launch/${launch.id}`}>
            <a>
              <Launch launch={launch} />
            </a>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default LaunchesList;
