import logo from './logo.svg';
import './App.css';
// BrowserRouter: nơi chứa tất cả vị trí để route trong app (Các nút như Home, Menu...)
// Routes: Component này chỉ là container chứa các Route
// Route: thẻ tự đóng, chứa đuôi của con đường + page chính xác
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* self-closing, path: string with '/any', element: component to switch to */}
          <Route path='/' element={<Homepage />}/>  
          <Route path='/menu' element={<Menu />}/>  
          <Route path='/contact' element={<Contact />}/>  
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
