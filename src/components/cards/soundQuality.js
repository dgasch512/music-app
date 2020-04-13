import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Typography, Select, FormControl, MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '275px'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

export default function SQCard(props) {
  const classes = useStyles();
  // const [eq, setEq] = React.useState('');

  // const handleChange = (event) => {
  //   setEq(event.target.value);
  // };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Sound Quality
        </Typography>
        <Typography variant="body2" component="p">
          Manually control the music quality in event of poor connection
        </Typography>
      </CardContent>
      <CardActions>
        <FormControl className={classes.formControl}>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={props.quality}
            onChange={props.qualityChange}
            autoWidth
          >
            <MenuItem value={1}>Low</MenuItem>
            <MenuItem value={2}>Normal</MenuItem>
            <MenuItem value={3}>High</MenuItem>
          </Select>
        </FormControl>
      </CardActions>
    </Card>
  );
}