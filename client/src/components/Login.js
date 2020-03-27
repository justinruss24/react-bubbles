import React from "react";
import axios from 'axios';

class Login extends React.Component {
  
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  login = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', this.state.credentials)
    .then(response => {
      // console.log('token:', response.data.payload);
      localStorage.setItem('token', res.data.payload);
      this.props.history.push('/bubble-page');
    })
    .catch(error => console.log(error));
  }


  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.login}>
          <input type="text" name="username" placeholder="username" value={this.state.credentials.username} onChange={this.handleChange} />
          <input type="text" name="password" placeholder="password" value={this.state.credentials.password} onChange={this.handleChange} />
          <button type='submit'>Log In</button>
        </form>
      </div>
    )
  }
};

export default Login;
