import logo from "./login.svg";
import Login from "./Login";
import Header from "./Header";
import Userlist from "./UserList";
import ViewerList from "./ViewerList";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <div className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
      </div> */}
      {/* <Userlist /> */}
      <ViewerList />
    </div>
  );
}

export default App;
