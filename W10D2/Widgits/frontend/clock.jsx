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

  
  tick() { // updates the state via new Date
    this.setState({ date: new Date() }); // creates a new setInterval timer because of componentDidMount every second
    console.log("hello");
  } // because updates state, triggers our render
  
  // formats time
  printTime() {
    let currentdate = this.state.date;
    let hour = currentdate.getHours();
    let minute = currentdate.getMinutes();
    let second = currentdate.getSeconds();
    // formats time:
    let time = `${hour}:${minute}:${second}`;
    return time;
  }

  // formats date
  printDate() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let currentdate = this.state.date;
    let currentmonth = months[currentdate.getMonth()];
    let currentday = days[currentdate.getDay()];
    let currentyear = currentdate.getFullYear();
    let time = `Deadline: ${currentday} ${currentmonth} ${currentdate.getDate()} ${currentyear}`;
    return time;
  }
  // once its rendered, invoke this 
  componentDidMount() { 
    this.interval = setInterval(this.tick, 1000); // takes a callback! Not an invoked function. This makes the thing actually tick (by setInterval)
    console.log(this.interval) //
    // this.setState({intervalCount: intervalCount + 1} );
    // console.log(this.state.intervalCount);
  }

  componentWillUnmount() {
    clearInterval(this.interval); // clear the timer to prevent creating a new timer each darn time.
  }
  
  render() { // calls our print methods with this new state.
    return(
      <div className="clock-div">
        <h1 id="clockTitle">Часы </h1>
        <h1 className = "clockVal">{this.printTime()}</h1> 
        <h1 className = "clockDate">{this.printDate()}</h1> 
      </div>

        ) 
    }


}


export default Clock;