import React, {Component} from 'react';

class Register extends Component {
  render(){
      return (
        <div className="register">
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

export default Register;
