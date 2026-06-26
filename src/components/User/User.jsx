import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import userImg from "../../assets/user.png";

function User({ user }) {
  return (
    <Card sx={{ maxWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={user.photos.large ? user.photos.large : userImg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user?.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained">
          Follow
        </Button>
        <Button size="small" color="primary" variant="outlined">
          View Profile
        </Button>
      </CardActions>
    </Card>
  );
}

export default User;
