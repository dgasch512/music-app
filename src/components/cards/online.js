import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography, Switch } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300
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


export default function OnlineCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Online Mode
        </Typography>
        <Typography variant="body2" component="p">
          Is this application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
        <Switch
          checked={props.online}
          onChange={props.onlineSwitch}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </CardActions>
    </Card>
  );
}