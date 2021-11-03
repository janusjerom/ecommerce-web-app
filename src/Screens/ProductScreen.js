import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {CardMedia, Card, Button, ButtonGroup, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Slide from '@mui/material/Slide';

import data from '../Data/ProductList.json';


const useStyles = makeStyles({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    marginTop: '20px',
  },
  container: {
    marginLeft: 50,
  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function ProductScreen(props) {

  const product = data.find((x) => x._id === props.match.params.id);

  const [state, setState] = React.useState(1);

  const handleIncrement = () => {
      setState(state+1);
  };
    
  const handleDecrement = () => {
    if(state<=1){
      setState(1);
    }else{
      setState(state-1);
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    
    setOpen(false)
  }



  const classes = useStyles();
  if (!product) {
    return <div> Product Not Found</div>;
  }
  return (
    <div>
      <Link to="/" className={classes.link}>
        <Button>
          Back to Home
        </Button>
      </Link>
      <Grid container spacing={2}>
        <Grid item sm={4} xs={12}>
        <Card sx={{ minWidth: 320, maxWidth: 320, mr: 2, mb:2 }}>
        <CardMedia
          component="img"
          height="400"
          image={product.img}
          alt={product.id}
          />
        </Card>
        </Grid>

        <Grid item sm={4} xs={12}>
          <Typography variant="h2">{product.name}</Typography>
          <Typography variant="h3">&#8377;{product.price}</Typography>
          <Typography>Seller Information : {product.vendor}</Typography>
          <Typography>Category : {product.category}</Typography>
        </Grid>

        <Grid item sm={4} xs={12}>
        {product.available > 0 ? ( <div>
          <Chip label="In-Stock" color="success" />
          <Typography></Typography>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button onClick={handleIncrement}>+</Button>
            <Button>{state}</Button>
            <Button onClick={handleDecrement}>-</Button>
          </ButtonGroup>
          <Button className={classes.button} variant="outlined" onClick={handleClickOpen} >
            Purchase
          </Button>
          
          </div>
        ) : (
          <Chip label="Unavailable" color="error" />
        )}
        </Grid>

        <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {product.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Product Summary :" />
          </ListItem>
          <Divider />
          <div className={classes.container}>
          <Typography >
          Price: &#8377;{product.price}
          </Typography>
          <Typography>
          Quantity {state}
          </Typography>
          <Typography >
          Category: {product.category}
          </Typography>
          <Typography >
          Seller: {product.vendor}
          </Typography>
          <Divider />
          </div>
        </List>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      </Grid>
    </div>
  );
}
