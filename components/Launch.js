import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const Launch = ({ launch }) => {
  return (
    <Card
      variant="outlined"
      color="success.main"
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
          <Typography variant="body2" color="text.secondary">
            {launch.rocket.rocket_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {launch.launch_year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Launch;
