import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    anchor: {
        textDecoration: 'none',
    }
    
});

export default function Product(props) {
  const { product } = props;

  const classes = useStyles();
  
  return (
    <div key={product._id}>
        <Card sx={{ minWidth: 320, maxWidth: 320, mr: 2, mb:2 }}>
            <CardActionArea component={Link} to={`/product/${product._id}`}>
            <CardMedia
            component="img"
            height="240"
            image={product.img}
            alt={product.alt}
            />
            </CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                <a className={classes.anchor} href={`/product/${product._id}`}>{product.name}</a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              &#8377;{product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {product.vendor}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {product.category}
            </Typography>
            </CardContent>
            
        </Card> 
    </div>
  );
}
