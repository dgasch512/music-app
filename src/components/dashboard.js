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
    soundQuality: '2'
  }

  handleVolume = (vol, newVol) => {
    this.setState({ volume: newVol })
      if(newVol >= 80) {
        this.setState({
          notifications: [...this.state.notifications, 'Listening to music at a high volume could cause long-term hearing loss.']
        })
    }
  }

  handleOnline = () => {
    const offline = !this.state.online;
      if(this.state.online === true) {
      this.setState({
        notifications: [...this.state.notifications, "Your application is offline. You won't be able to share or stream music to other devices."]
      });
    }
    this.setState({ online: offline });
  }

  handleQuality = ( e ) => {
    this.setState({ soundQuality: e.target.value });
    if( e.target.value === 1) {
      this.setState({
        notifications: [...this.state.notifications, "Music quality is degraded. Increase quality if your connection allows it."]
      });
    }
  }


  render() {
  return (
    <div>
      <AppBar />

      <Grid 
        container 
        spacing={4}
        display="flex"
        direction="row"
        justify="center"
        align="center"
        style={{
          margin: '20px',
          padding: '10px 30px',
          width: '90%'
        }}

 
      >
        <Grid item xs={11} md={4}>
           <OnlineCard online={this.state.online} onlineSwitch={this.handleOnline}/>    
        </Grid>
        <Grid item xs={11} md={4}>
            <VolumeCard volumeBar={this.handleVolume}/> 
        </Grid>
        <Grid item xs={11} md={4}>
            <SQCard quality={this.state.soundQuality} qualityChange={this.handleQuality}/> 
        </Grid>
      </Grid>

      <div style={{margin: "20px", padding: "0 30px"}}>
        <h4>System Notifications:</h4>
        <ul>
          {this.state.notifications.map((item, index) => {
          return (
            <div key={index}>
            <li> {item} </li>
            </div>)
          })}
        </ul>
      </div>


    </div>
  )
  }
}

export default Dashboard;