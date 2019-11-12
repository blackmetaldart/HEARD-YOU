import React, {Component} from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);

  }

  login = (username, password) => {
    fetch("localhost://8081/login", {
      method : 'POST',
      headers : {
        'Authorization' : 'Bearer ' + localStorage.getItem('user'),
        'Content-Type' : 'application/json'},
      body : JSON.stringify({
        username : `${username}`,
        password : `${password}`
        })
    })
    .then((response) => {return response.json();})
    .then((response) => {console.log(response);})
    .catch((error) => {console.log(error);})

    {/*MAKE SUER THAT AFTER LOG IN  THE SCREEN SWITCHES TO THE PROFILE COMPONENT*/}
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
