import React, { Component } from "react";
import HoroscopeContainer from "./HoroscopeContainer/HoroscopeContainer";
import Form from "./Form/Form";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      userZodiac: "",
      horoscope: null,
      isloading: false,
      error: ""
    };
  };

  // componentDidMount = () => {
  //   fetch("https://aztro.sameerkumar.website/?sign=aries&day=today")
  //     .then(res => {
  //       if(res.ok) {
  //         return res.json()
  //       } else {
  //         this.setState({error: "There was an error, please try again."});
  //         console.log("Error")
  //       }
  //     })
  //     .then(data => console.log(data))
  //     .catch(error => {
  //       this.setState({error: "There was an error, please try again."});
  //       console.log("Error")
  //     })
  // };

  resetHome = () => {
    console.log("i'm gona reset homeeee");
  };

  getHoroscope = (newUserInput) => {
    // it will need to run a fetch request to get the information i need based on the scorpio
    console.log("horoscope got!")
  }

  render() {
    return (
      <div className="app-container">
        <h1>Horoscope IdeaBox</h1>
        <Form getHoroscope={this.getHoroscope} />
        <HoroscopeContainer
          horoscope="text about being a scorpio"
          description="more text about being a scorpio?"
          userName="Amber"
          userZodiac="scorpio"
          resetHome={this.resetHome}
        />
      </div>
    )
  }
}

export default App;
