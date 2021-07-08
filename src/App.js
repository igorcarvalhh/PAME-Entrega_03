import Header from "./components/Header/index.js";
import "./App.css"
import PacientBar from "./components/PacientBar/index.js";
import PacientProfile from "./components/PacientProfile/index.js";


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <PacientBar/>
        <PacientProfile/>
      </div>
      
      
    </div> 
  );
  
}

export default App;
