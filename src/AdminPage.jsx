import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import './App.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
  },
  media: {
    width:300,
    height: 200,
  },
});


export default function MediaCard() {
  const classes = useStyles();

  
  return (
    <div className='App'>
      <header className="App-header">
      <div>
    <Card className={classes.root}>
        <Link to='/AddRice'>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='data:image/jpeg;base64,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'
          title="Contemplative Reptile"
        />
        <CardContent  >
          <Typography  gutterBottom variant="h5" component="h2">
            Rice Category
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
in this category rice food
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>

        <Button size="small" color="primary">
      </Button>
      </CardActions>
    </Card>
    <div>



    <Card className={classes.root}>
        <Link to='/AddMeat'>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/10/4/1/BX1501_Roast-Filet-of-Beef_s4x3.jpg.rend.hgtvcom.826.620.suffix/1538677423309.jpeg'
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  gutterBottom variant="h5" component="h2">
            Meat Category
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
in this category Meat food
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>

        <Button size="small" color="primary">
      </Button>
      </CardActions>
    </Card>
    </div>

    <div>
    <Card className={classes.root}>
        <Link to='/AddNoGluten'>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/bakeryandsnacks.com/news/ingredients/there-is-no-such-thing-as-100-gluten-free-diet/8075403-1-eng-GB/There-is-no-such-thing-as-100-gluten-free-diet_wrbm_large.jpg'
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            No Gluten category
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
in this category no gluten food
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>

        <Button size="small" color="primary">
      </Button>
      </CardActions>
    </Card>
    </div>
    </div>
    </header>
    </div>
  );
}
