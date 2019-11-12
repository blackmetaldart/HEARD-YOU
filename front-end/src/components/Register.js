import React, {Component} from 'react';

class Register extends Component {

  constructor(props){
    super(props);
    this.register = this.register.bind(this);
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
