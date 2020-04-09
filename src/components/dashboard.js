import React, {useState} from 'react';
import AppBar from './appbar';
import SQCard from './cards/soundQuality';
import VolumeCard from './cards/volume';
import OnlineCard from './cards/online';
import { Container, Grid }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

 

function Dashboard() {
  const classes = useStyles();
  const [notifs, newNotifs] = useState([]);


  return (
    <div>
      <AppBar />

      <Grid 
        container 
        spacing={4}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} md={4}>
           <OnlineCard />    
        </Grid>
        <Grid item xs={12} md={4}>
            <VolumeCard /> 
        </Grid>
        <Grid item xs={12} md={4}>
            <SQCard /> 
        </Grid>
      </Grid>

      <div>
        <h4>System Notifications:</h4>
        <ul>
          {notifs.map((item, index) => {
          return (
            <div>
            <li key={index} index={index}>{item}</li>
            </div>)
          })}
        </ul>
      </div>


    </div>
  )
  }


export default Dashboard;