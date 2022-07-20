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
      error: ""
    };
  };

  getHoroscope = (newUserInput) => {
    this.setState({userName: newUserInput.userName, userZodiac: newUserInput.userZodiac});

    return fetch(`https://aztro.sameerkumar.website/?sign=${newUserInput.userZodiac}&day=today`, {
        method: "POST",
      })
      .then(res => {
        if(res.ok) {
          return res.json()
        } else {
          this.setState({error: "There was an error, please try again."});
        }
      })
      .then(data => {
        this.setState({horoscope: data})
      })
      .catch(error => {
        this.setState({error: "There was an error, please try again."});
        console.log("Error")
      })
  };

  resetHome = () => {
    this.setState({
      userName: "",
      userZodiac: "",
      horoscope: null,
      error: ""
    })
  };

  render() {
    return (
      <div className="app-container">
        <h1>Horoscope IdeaBox</h1>
        <Form getHoroscope={this.getHoroscope} />
        {this.state.horoscope && <HoroscopeContainer
          horoscope={this.state.horoscope}
          description={this.state.horoscope.description}
          userName={this.state.userName}
          userZodiac={this.state.userZodiac}
          resetHome={this.resetHome}
        />
        }
      </div>
    )
  }
}

export default App;
