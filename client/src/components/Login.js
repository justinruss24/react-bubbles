import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  // username === ls && password === asdf
  login = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then((res) => {
        console.log('TOKEN:', res.data.payload);
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/bubble-page');
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="bubbles">
        <h2>Welcome to the Bubble App</h2>
        <h3>Login!</h3>
        <form className="log-form" onSubmit={this.login}>
          <input
            className="logins"
            type="text"
            name="username"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            className="logins"
            type="password"
            name="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button className="log-sub" type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;