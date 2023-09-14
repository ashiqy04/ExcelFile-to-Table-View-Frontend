import './App.css';
import Upload from './components/upload'
import Download from './components/download'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route exact path='/upload' element = {<Upload />} />
    <Route exact path='/view' element = {<Download />} />
    </Routes>
    </Router>
      
    </div>
  );
}

export default App;
