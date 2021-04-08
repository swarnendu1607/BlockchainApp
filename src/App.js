import logo from "./login.svg";
import Login from "./Login";
import Header from "./Header";
import Userlist from "./UserList";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <div className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
      </div> */}
      <Userlist />
    </div>
  );
}

export default App;
