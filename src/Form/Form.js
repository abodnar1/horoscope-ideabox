import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      userZodiac: ""
    };
  };

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newUserInput = {
      id: Date.now(),
      ...this.state
    }
    console.log(newUserInput);
    console.log("button works");

    this.props.getHoroscope(newUserInput);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ userName: "", userZodiac: "" });
  };

  render() {
    return (
      <form className="form-container">
        <input className="input-field"
          type="text"
          placeholder="Your name"
          name="userName"
          value={this.state.userName}
          onChange={event => this.handleChange(event)}
        />

        <input className="input-field"
          type="text"
          placeholder="Your zodiac sign"
          name="userZodiac"
          value={this.state.userZodiac}
          onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.handleSubmit(event)} className="submit-button">Get Your Horoscope!</button>
      </form>
    )
  };

};

export default Form;
