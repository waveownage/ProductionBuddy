import React, { Component } from "react";

export default class Timer extends React.Component {
  state = { time: 0 };

  componentDidMount() {
    this.intervalId = setInterval(() => {
            const time =
        new Date().getTime() - new Date(this.props.callQueuedTime).getTime();
      this.setState({ time });
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  render() {
    return <p>{this.state.time}</p>;
  }
}
