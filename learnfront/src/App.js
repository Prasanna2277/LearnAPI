
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Item from './components/items';



function App() {
  return (
    <Router>
      <div className="container mt-5">
        <h2 className="text-center mb-4"> Vaish </h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path='/items' element={<Item/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
