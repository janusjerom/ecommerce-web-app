import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import ProductList from '../Data/ProductList.json';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
});


export default function ProductDetails() {

    const classes = useStyles();

    return(
    <div className={classes.root}>
        {ProductList.map((proDetail, index) =>{
        return  <div>
            <Card sx={{ minWidth: 320, maxWidth: 320, mr: 2, mb:2 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="240"
                image={proDetail.img}
                alt=""
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {proDetail.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {proDetail.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {proDetail.vendor}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {proDetail.category}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card> 
            </div>
        })}
    </div>
    );
}
