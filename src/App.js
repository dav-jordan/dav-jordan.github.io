import './App.css';
import headshot from './images/headshot.png'

import * as Icon from "react-feather"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={headshot} className="HeaderImage"/>
        <p className="HeaderText">
          Davis Jordan
          <br />
          <a href="https://www.linkedin.com/in/davis-j/">
            <Icon.Linkedin className="HeaderIcon"/>
          </a>
          &nbsp;
          &nbsp;
          <a href="https://www.github.com/dav-jordan">
            <Icon.GitHub className="HeaderIcon" />
          </a>
          &nbsp;
          &nbsp;
          <a href="mailto:davisridleyjordan@gmail.com">
            <Icon.Mail className="HeaderIcon" />
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
