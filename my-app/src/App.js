// import logo from './logo.svg';
// import './App.css';
import Toggle from './components/Toggle/Toggle';
import './components/Toggle/style.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
    <>
      <main id="app">
        <Toggle />
      </main>
      <script src="https://content.codecademy.com/courses/React/react-course-bundle.min.js"></script>
    </>
  );
}

export default App;
