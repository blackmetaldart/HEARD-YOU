import React, {Component} from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);

  }

  login = (username, password) => {

    let username2 = '';
    let password2 = '';

    fetch("localhost://8081/login", {
      method : 'POST',
      headers : {
        'Authorization' : `Bearer ${this.props.jwt}`,
        'Content-Type' : 'application/json'},
      body : JSON.stringify({
        username : `${username2}`,
        password : `${password2}`
        })
    })
    .then((response) => {return response.json();})
    .then((response) => {console.log(response);})
    .catch((error) => {console.log(error);})

  }

  render(){
      return (
        <div className="login">
            <h3> Log In Here </h3>
            <form>
              <label>
                USERNAME:
                <input type="text" ref="username" name="USERNAME" />
              </label>
              <label>
                PASSWORD:
                <input type="text" ref="password" name="PASSWORD" />
              </label>
              <input onSubmit={() => login()} type="submit" value="LOGIN" />
            </form>
        </div>
      );
    }
}

export default Login;


// Using a class based component here because we're accessing DOM refs

handleSignIn(e) {
  e.preventDefault()
  let username = this.refs.username.value
  let password = this.refs.password.value
  this.props.onSignIn(username, password)
}

render() {
  return (
    <form onSubmit={this.handleSignIn.bind(this)}>
      <h3>Sign in</h3>
      <input type="text" ref="username" placeholder="enter you username" />
      <input type="password" ref="password" placeholder="enter password" />
      <input type="submit" value="Login" />
    </form>
  )
}

}
