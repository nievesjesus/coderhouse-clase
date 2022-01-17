import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Title from './components/Title';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar logo={logo} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Title title="soy un titulo" />
          <Title title="soy un titulo 2" />
          <Title title="soy un titulo 3" />                    
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
      <Footer mensaje="Soy el footer de los 80's" />
    </div>
  );
}

export default App;
