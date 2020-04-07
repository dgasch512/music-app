import React from 'react';
import AppBar from './appbar';
import SQCard from './cards/soundQuality';
import VolumeCard from './cards/volume';
import OnlineCard from './cards/online';
import { Container, Grid }from '@material-ui/core';


class Dashboard extends React.Component {

  state = {
    notifications: [],
    online: false,
    volume: 30,
    EQ: 2
  }

  render() {
  return (
    <div>
      <AppBar />
      <Grid>
        <OnlineCard />
        <VolumeCard />
        <SQCard />

      </Grid>


    </div>
  )
  }
}

export default Dashboard;