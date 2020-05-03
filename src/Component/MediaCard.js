import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SimplePopover from "./SimplePopover";

const useStyles = makeStyles({
  root: {
    width: "60vw",
    padding: "1vw",
  },
  media: {
    height: 140,
    width: 140,
    margin: "1vw",
    padding: "1vw",
  },
});

export default function MediaCard({ song }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ margin: "20px" }}>
      <CardActionArea>
        <CardMedia
          style={{ width: "100", height: "100" }}
          className={classes.media}
          image={song.artworkUrl100}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {song.artistName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            <h2>{song.trackName}</h2>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h3">
            <h2>{song.collectionName}</h2>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <SimplePopover song={song} />
      </CardActions>
    </Card>
  );
}
