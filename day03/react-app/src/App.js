import logo from './logo.svg';
import './App.css';
// import {Button} from 'antd';
// import 'antd/dist/antd.css';

function App(props) {
  let createline = props.template;
  let header = <header className="App-header">
    {props.datasource.map(createline)}
  <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </header>
  return (
    <div className="App">
      {header}
    </div>
  );
}

export default App;
