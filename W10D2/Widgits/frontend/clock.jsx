import React from 'react';
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date()//,
      // intervalCount: 0
    };
    this.tick = this.tick.bind(this);
    this.printTime = this.printTime.bind(this)
    // this.componentDidMount = this.componentDidMount.bind(this)
  };

  
  tick() {
    this.setState({ date: new Date() }); // creates a new setInterval timer because of componentDidMount every second
    console.log("hello");
  }
  
  printTime() {
    let currentdate = this.state.date;
    let hour = currentdate.getHours();
    let minute = currentdate.getMinutes();
    let second = currentdate.getSeconds();
    let time = `${hour}:${minute}:${second}`;
    return time;
  }
  
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
    console.log(this.interval) //
    // this.setState({intervalCount: intervalCount + 1} );
    // console.log(this.state.intervalCount);
  }

  componentWillUnmount() {
    clearInterval(this.interval); // clear the timer to prevent creating a new timer each darn time.
  }
  
  render() {
    return(
      <div>
        <h1>Clock </h1>
        <h1>{this.printTime()}</h1> 
      </div>

        ) 
    }


}


export default Clock;