import React, {Component} from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);

  }

  login = (username, password) => {

    let username = '';
    let password = '';
    
    fetch("localhost://8081/login", {
      method : 'POST',
      headers : {
        'Authorization' : `Bearer ${this.props.jwt}`,
        'Content-Type' : 'application/json'},
      body : JSON.stringify({
        username : `${username}`,
        password : `${password}`
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
                <input type="text" name="USERNAME" />
              </label>
              <label>
                PASSWORD:
                <input type="text" name="PASSWORD" />
              </label>
              <input onClick={() => login()} type="submit" value="SUBMIT" />
            </form>
        </div>
      );
    }
}

export default Login;
