import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date()
    }
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  componentDidMount(){
    const interval1 = setInterval(this.tick, 1000);
    this.interval = interval1;
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  formatTime() {
    const t = this.state.time.toTimeString().split(' ');
    const time =  t[0];
    const timezone = t[2][1] + t[3][0] + t[4][0];

    return `${time} ${timezone}`;
  }

  render() {
    return (
      <>
        <h1 className="stark-clock glow">Stark Clock</h1>
        <div className="time-date-container">
          <span className="time">
            <p>Time: </p>
            <p>{this.formatTime()}</p>
          </span>
          <span className="date">
            <p>Date: </p>
            <p>{this.state.time.toDateString()}</p>
          </span>
        </div>
      </>
    );
  }
} 

export default Clock