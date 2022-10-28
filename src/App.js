import Hero from './component/Hero';
import './App.css';
import Movies from './component/Movies';

function App() {
  const myName = ''
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        <Movies />
        {myName
        ? <p>Welcome Back.</p>
        : <p>Please Log in above.</p>
        }
       <p>Hello {myName || 'guest'}.</p>
      </header>
    </div>
  );
}

export default App;
