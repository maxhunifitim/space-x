import Grid from "@mui/material/Grid";
import Link from "next/link";
import Launch from "./Launch";

const LaunchesList = ({ launches }) => {
  return (
    <Grid container spacing={2}>
      {launches.map((launch, id) => (
        <Grid key={id} item xs={12} sm={6} md={4}>
          <Link
            href={{
              pathname: "/launch",
              query: { id: launch.id },
            }}
            passHref
          >
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
