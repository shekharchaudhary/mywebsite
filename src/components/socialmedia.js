import React, {Component} from 'react';
import {Button, Snackbar} from 'react-mdl'

class Socialmediia extends Component {
  constructor(props) {
    super(props);
    this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
    this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
    this.state = { isSnackbarActive: false };
  }

  handleShowSnackbar() {
    this.setState({ isSnackbarActive: true });
  }
  handleTimeoutSnackbar() {
    this.setState({ isSnackbarActive: false });
  }
  render(){
    const { isSnackbarActive } = this.state;
    return(
      <div>
        <Button raised onClick={this.handleShowSnackbar}>connect</Button>
        <Snackbar style={{background:'transparent'}}
          active={isSnackbarActive}
          onTimeout={this.handleTimeoutSnackbar}>
          {/*linkedin*/}
          <div className = "my-links">
            <a href ="https://www.linkedin.com/in/shekhar-chaudhary-b5a759148/" rel="noopener noreferrer" target ="_blank">
              <i className = " i1 fa fa-linkedin-square" aria-hidden="true"/>
            </a>
          </div>
          {/*github*/}
          <div className = "my-links">
            <a href ="https://github.com/shekharchaudhary" rel="noopener noreferrer" target ="_blank">
              <i className = " i2 fa fa-github-square" aria-hidden="true"/>
            </a>
          </div>
          {/*linkedin*/}
          <div className = "my-links">
            <a href ="https://www.linkedin.com/in/shekhar-chaudhary-b5a759148/" rel="noopener noreferrer" target ="_blank">
              <i className = " i1 fa fa-facebook-square" aria-hidden="true"/>
            </a>
          </div>
          {/*github*/}
          <div className = "my-links">
            <a href ="https://github.com/shekharchaudhary" rel="noopener noreferrer" target ="_blank">
              <i className = " i2 fa fa-twitter-square" aria-hidden="true"/>
            </a>
          </div>
          </Snackbar>
      </div>
    );
  }
}

export default Socialmediia;
