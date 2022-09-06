import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import ActualNews from "./Components/ActualNews";
import ArchivedNews from "./Components/ArchivedNews";
import Nav from "./Components/Nav";

function App() {
  return (
      <Router>
        <Nav/>
        
        <Routes>
          <Route path="/" exact element={<ActualNews/>}/>
          <Route path="/archived" element={<ArchivedNews/>}/>
        
          
        </Routes>
        

      </Router>
  );
}

export default App;
