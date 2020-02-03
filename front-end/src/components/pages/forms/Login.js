import React, {Component} from 'react';

class Login extends Component {

  handleSignIn = (e) => {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    this.login(username, password);
  }

  login(username, password) {
    fetch("http://localhost:8081/users/login", {
      method : 'POST',
      headers : {
        'Authorization' : `Bearer `,
        'Content-Type' : 'application/json'},
      body : JSON.stringify({
        username : `${username}`,
        password : `${password}`
        })
    })
    .then((response) => {return response.json();})
    .then((response) => {
      this.setState({
        jwt : response
      })
      })
    .catch((error) => {console.log(error);})
  }

  render(){
    const formStyle = {
      display : 'flex',
      flexDirection : 'column',
      maxWidth : '30vw',
      margin : '0 auto'
    }

    const subStyle = {
      maxWidth : '10vw',
      margin : '5vh auto'
    }

    return (
      <div className="login">
          <h3> Log In Here </h3>
          <form style={formStyle} onSubmit={this.handleSignIn}>
            <label>USERNAME : {' '}
                <input type="text" ref="username" name="USERNAME" />
            </label>
            {' '}
            <label>PASSWORD : {' '}
                <input type="text" ref="password" name="PASSWORD" />
            </label>
            <input style={subStyle}  type="submit" value="LOGIN" />
          </form>
      </div>
    );
    }
}

export default Login;
