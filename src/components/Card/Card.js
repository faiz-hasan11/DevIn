import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    border:"0.5rem solid black"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard({res}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {res.name}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:"center"}}>
          <center>
            <a href={res.blog} target="_blank" rel="noreferrer"><Button color="primary" variant="outlined" size="small">Blogs</Button></a>
            <a href={res.video} target="_blank" rel="noreferrer"><Button color="primary" variant="outlined" size="small" style={{margin:"5px"}}>Videos</Button></a>
            <a href={res.book} target="_blank" rel="noreferrer"><Button color="primary" variant="outlined" size="small">Books</Button></a>
          </center>
      </CardActions>
    </Card>
  );
}
