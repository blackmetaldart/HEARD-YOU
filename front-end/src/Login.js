import React, {Component} from 'react';

class Login extends Component {
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
              <input type="submit" value="SUBMIT" />
            </form>
        </div>
      );
    }
}

export default Login;
