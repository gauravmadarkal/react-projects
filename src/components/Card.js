import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 500,
    marginTop: 50,
    left:0,
    borderRadius: 0,

  },
  media: {
    height: 300,    
    width : 500
  },
});

function MediaCard(projectDetails) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          image={require("../assets/img/project-images/"+projectDetails.image)}
          title= {projectDetails.title}
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
            Project 1
          </Typography> */}
          <Typography variant="body2" color="textSecondary" component="p">
                {projectDetails.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}
export default (MediaCard);
