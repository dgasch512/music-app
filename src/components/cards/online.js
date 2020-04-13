import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Typography, Switch } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    width: '275px'
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