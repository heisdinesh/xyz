import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home,Creator,Game,Join,Instructions, GetReady, Login} from "./pages"
function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          
          <Route path="/game" element={<Game />} />
          <Route path="/join" element={<Join />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path= "/getReady" element={<GetReady />} />

          
        </Routes>
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/creator" element={<Creator />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
