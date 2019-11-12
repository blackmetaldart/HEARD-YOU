import React, {Component} from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);

  }

  login = (username, password) => {
    fetch()
    .then((response) => ())
    .then((response) => ())
    .catch((response) => ())
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
