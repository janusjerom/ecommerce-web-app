import React from 'react';
import { makeStyles } from '@mui/styles';
import Product from '../Component/ProductInfo';
import data from '../Data/ProductList.json';

const useStyles = makeStyles({ 
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default function HomeScreen() {

  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        {data.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
