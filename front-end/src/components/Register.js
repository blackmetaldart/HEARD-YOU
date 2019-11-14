import React, {Component} from 'react';

class Register extends Component {

  constructor(props){
    super(props);
    this.register = this.register.bind(this);
  }

  handleRegister(e) {
    e.preventDefault()
    let email = this.refs.email.value;
    let username = this.refs.username.value;
    let password = this.refs.password.value;

    this.register(email, username, password);
  }

  register( email, username, password) {
    fetch("http://localhost:8081/signup", {
      method : 'POST',
      headers : {
        'Authorization' : `Bearer  + ${this.props.jwt}`,
        'Content-Type' : 'application/json'},
        body : JSON.stringify({
          email : `${email}`,
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
        <div className="register">
          <h3> Register Here </h3>
            <form onSubmit={this.handleRegister.bind(this)}>
              <label>EMAIL:
                  <input ref="email" type="text" name="EMAIL" />
              </label>
              <label>USERNAME:
                  <input ref="username" type="text" name="USERNAME" />
              </label>
              <label>PASSWORD:
                  <input ref="password" type="text" name="PASSWORD" />
              </label>
              <input type="submit" value="SUBMIT" />
            </form>
        </div>
      );
    }
}

export default Register;
