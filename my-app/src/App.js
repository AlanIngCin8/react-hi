import logo from './logo.svg';
import './App.css';
// import Table
import Table from './table';
import ReverseStringComponent from './button-reverse';
import ExpandableComponent from './ExpandableComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. test test test 9
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
        <Table></Table>
      
        <ReverseStringComponent></ReverseStringComponent>
        
        <ExpandableComponent></ExpandableComponent>
      </header>
    </div>
  );
}

export default App;
