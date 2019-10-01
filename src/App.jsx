import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFiles: null
    }
  }

  onChangeHandler = event => {
    console.log(event.target.files[0]);
  }

  render() {
    return (
      <React.Fragment className ="fr">
        <form type="submit" >
          <h1> Please upload the Audio(.mp3) files</h1>
          <input type="file" name="file" accept = ".mp3, .mpc" multiple 
            onChange={this.onChangeHandler} />
          <input type="submit" name="upload" />

        </form>
      </React.Fragment>

    );
  }
}
