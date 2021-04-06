import logo from "./login.svg";
import Login from "./Login";
import Header from "./Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
      </header>
    </div>
  );
}

export default App;
