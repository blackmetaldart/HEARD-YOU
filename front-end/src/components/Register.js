import React, {Component} from 'react';

class Register extends Component {

  constructor(props){
    super(props);
    this.register = this.register.bind(this);
  }


  register = (e) => {
    console.log(e);
    console.log(e.target.value);

    let email1 = '';
    let username1 = '';
    let password1 = '';

    fetch("localhost://8081/signup", {
      method : 'POST',
      headers : {
        'Authorization' : `Bearer  + ${this.props.jwt}`,
        'Content-Type' : 'application/json'},
        body : JSON.stringify({
          email : `${email1}`,
          username : `${username1}`,
          password : `${password1}`
        })
    })
    .then((response) => {return response.json();})
    .then((response) => {console.log(response);})
    .catch((error) => {console.log(error);})

    {/*MAKE SURE THAT AFTER REGISTRATION  THE SCREEN SWITCHES TO THE PROFILE COMPONENT*/}
  }

  render(){
      return (
        <div className="register">
          <h3> Register Here </h3>
            <form onSubmit={this.handleRegister.bind(this)}>
              <label>EMAIL:
                  <input type="text" name="EMAIL" />
              </label>
              <label>USERNAME:
                  <input type="text" name="USERNAME" />
              </label>
              <label>PASSWORD:
                  <input type="text" name="PASSWORD" />
              </label>
              <input type="submit" value="SUBMIT" />
            </form>
        </div>
      );
    }
}

export default Register;
