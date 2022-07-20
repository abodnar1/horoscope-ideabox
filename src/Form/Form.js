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

    this.props.getHoroscope(newUserInput);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({userName: "", userZodiac: "Please choose a sign"});
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

        <select className="select-dropdown" name="userZodiac" onChange={event => this.handleChange(event)}>
          <option>----Please choose a sign----</option>
          <option value="aries">Aries</option>
          <option value="taurus">Taurus</option>
          <option value="gemini">Gemini</option>
          <option value="cancer">Cancer</option>
          <option value="leo">Leo</option>
          <option value="virgo">Virgo</option>
          <option value="libra">Libra</option>
          <option value="scorpio">Scorpio</option>
          <option value="sagittarius">Sagittarius</option>
          <option value="capricorn">Capricorn</option>
          <option value="aquarius">Aquarius</option>
          <option value="pisces">Pisces</option>
        </select>
        <button onClick={event => this.handleSubmit(event)} className="submit-button">Submit</button>
      </form>
    )
  };

};

export default Form;
