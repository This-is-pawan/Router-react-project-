import React from "react";
import RoutNav from "./RouterProject/RoutNav";
// import { Router, Route, Link } from "react-router-dom";
 


// import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div>
      <nav>
   
       <RoutNav/>
      </nav>
      {/* <Router>
        <Route path="/" />
        <Home/>
        </Route>
        <Route path="/About"  />
        <About/>
      </Route>
      </Router> */}
      
    </div>
  );
};

export default App;
