import React from "react";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Chip } from "@mui/material";
import { Box } from "@mui/system";

const Launch = ({ launch }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={
            launch.links.flickr_images.length !== 0
              ? launch.links.flickr_images[0]
              : `https://www.spacex.com/static/images/share.jpg`
          }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {launch.mission_name}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="body2" color="text.secondary">
                {launch.rocket.rocket_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {launch.launch_year}
              </Typography>
            </Box>
            {!launch.launch_success && (
              <Chip label="Fail" variant="outlined" color="error" />
            )}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Launch;
