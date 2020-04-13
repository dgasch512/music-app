import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Typography, Slider } from '@material-ui/core';


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
  slider: {
    width: 300,
  }
});

function valueText(value) {
  return `${value}`;
}

export default function VolumeCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Master Volume
        </Typography>
        <Typography variant="body2" component="p">
          Overrides all other sound settings in this application
        </Typography>
      </CardContent>
      <CardActions>
      <Slider
        defaultValue={50}
        getAriaValueText={valueText}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
        onChange={props.volumeBar}
      />
      </CardActions>
    </Card>
  );
}