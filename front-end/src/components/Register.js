import React, {Component} from 'react';

class Register extends Component {

  constructor(props){
    super(props);
    this.register = this.register.bind(this);
  }

  register = (username, password) => {
    fetch("localhost://8081/signup", {
      method : 'POST',
      headers : {
        'Authorization' : 'Bearer ' + localStorage.getItem('user'),
        'Content-Type' : 'application/json'},
        body : JSON.stringify({
          username : `${username}`,
          password : `${password}`
        })
    })
    .then((response) => ({return response.json()}))
    .then((response) => ())
    .catch((error) => ())

    {/*MAKE SUER THAT AFTER REGISTRATION  THE SCREEN SWITCHES TO THE PROFILE COMPONENT*/}
  }

  render(){
      return (
        <div className="register">
          <h3> Register Here </h3>
            <form>
              <label>
                USERNAME:
                <input type="text" name="USERNAME" />
              </label>
              <label>
                PASSWORD:
                <input type="text" name="PASSWORD" />
              </label>
              <input onClick={() => register()} type="submit" value="SUBMIT" />
            </form>
        </div>
      );
    }
}

export default Register;
