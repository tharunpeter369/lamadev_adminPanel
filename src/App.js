import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/Topbar";

import Home from "./pages/home/Home"

import "./App.css"

function App() {
  return (
    <div className="App">
      <TopBar/>
      <div className="container">
        <SideBar />
        <Home />
      </div>

    </div>
  );
}

export default App;
