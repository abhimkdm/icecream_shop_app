import React from 'react';
import './App.css';
import Login from './components/Auth/Login/Login';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <HomeComponent title="Welcome" name="Home">
          <h1>Welcome Home</h1>
        </HomeComponent> */}
        <Login />
      </header>
    </div>
  );
}

export default App;
