import React from 'react';
import AppBar from './appbar';
import SQCard from './cards/soundQuality';
import VolumeCard from './cards/volume';
import OnlineCard from './cards/online';
import { Grid }from '@material-ui/core';
 


class Dashboard extends React.Component {
  state = {
    notifications: [],
    volume: 50,
    online: true,
    soundQuality: 2
  }

  handleVolume = volume => {
    if(volume >= 80) {
      this.setState({
        notifications: [...this.state.notifications, 'Listening to music at a high volume could cause long-term hearing loss.']
      })
    }
    this.setState({volume: volume})
  }

  handleOnline = () => {
    const offline = !this.state.online;
    if(this.state.online === false) {
    this.setState({
      notifications: [...this.state.notifications, "Your application is offline. You won't be able to share or stream music to other devices."]
    });
    }
    this.setState({ online: offline });
  }

  handleQuality = quality => {
    if(quality === 1) {
    this.setState({
      notifications: [...this.state.notifications, "Music quality is degraded. Increase quality if your connection allows it."]
    });
  }
    this.setState({ soundQuality: quality });
  }


  render() {
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
           <OnlineCard onlineSwitch={this.handleOnline}/>    
        </Grid>
        <Grid item xs={12} md={4}>
            <VolumeCard volumeBar={this.handleVolume}/> 
        </Grid>
        <Grid item xs={12} md={4}>
            <SQCard qualityChange={this.handleQuality}/> 
        </Grid>
      </Grid>

      <div>
        <h4>System Notifications:</h4>
        <ul>
          {this.state.notifications.map((item, index) => {
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
}

export default Dashboard;