import Grid from "@mui/material/Grid";
import Launch from "./Launch";

const LaunchesList = ({ launches }) => {
  return (
    <Grid container spacing={2}>
      {launches.map((launch, id) => (
        <Grid key={id} item xs={12} sm={6} md={4}>
          <Launch launch={launch} />
        </Grid>
      ))}
    </Grid>
  );
};

export default LaunchesList;
