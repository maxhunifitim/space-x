import { Card, Grid, Typography } from "@mui/material";

import { CardMedia, CardContent, Box, Chip } from "@mui/material";
import spaceX from "../public/spacex.jpg";

const LaunchDetails = ({ launch }) => {
  const isSuccess = launch.launch_success;
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <Card
          sx={{
            textAlign: "start",
          }}
        >
          <CardMedia
            component="img"
            sx={{ height: "400px" }}
            image={
              launch.links.flickr_images.length !== 0
                ? launch.links.flickr_images[1]
                : spaceX.src
            }
            alt={launch.mission_name}
          />
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography gutterBottom variant="h5">
                  {launch.rocket.rocket.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Country: {launch.rocket.rocket.country}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  First Flight: {launch.rocket.rocket.first_flight}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Height: {launch.rocket.rocket.height.meters}m
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cost: $
                  {launch.rocket.rocket.cost_per_launch
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Typography>
              </Box>
              <Box>
                <Chip
                  label={isSuccess ? "Succeeded" : "Failed"}
                  variant="outlined"
                  color={isSuccess ? "success" : "error"}
                />
              </Box>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography gutterBottom variant="h6">
                Description
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {launch.rocket.rocket.description}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LaunchDetails;
