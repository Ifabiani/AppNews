import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import ActualNews from "./Components/ActualNews";
import ArchivedNews from "./Components/ArchivedNews";
import CreateNews from "./Components/CreateNews";
import Nav from "./Components/Nav";

function App() {
  return (
      <Router>
        <Nav/>
        
        <Routes>
          <Route path="/" exact element={<ActualNews/>}/>
          <Route path="/archived" element={<ArchivedNews/>}/>
          <Route path="/create" element={<CreateNews/>}/>
          
        </Routes>
        

      </Router>
  );
}

export default App;
