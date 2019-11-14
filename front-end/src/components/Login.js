import React, {Component} from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
  }

  handleSignIn(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    this.login(username, password);
  }

login(username, password) {
  this.props.login(username, password);
}

  render(){
      return (
        <div className="login">
            <h3> Log In Here </h3>
            <form onSubmit={this.handleSignIn.bind(this)}>
              <label>USERNAME:
                  <input type="text" ref="username" name="USERNAME" />
              </label>
              <label>PASSWORD:
                  <input type="text" ref="password" name="PASSWORD" />
              </label>
              <input type="submit" value="LOGIN" />
            </form>
        </div>
      );
    }
}

export default Login;
