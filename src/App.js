import logo from './logo.svg';
import './App.css';
// BrowserRouter: nơi chứa tất cả vị trí để route trong app (Các nút như Home, Menu...)
// Routes: Component này chỉ là container chứa các Route
// Route: thẻ tự đóng, chứa đuôi của con đường + page chính xác
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Homepage } from './pages/homepage';
import { Menu } from './pages/menu';
import { Contact } from './pages/contact';
import { Profile } from './pages/profile';
import { Navbar } from './Navbar';
import { useState } from 'react';

/* Tình huống bạn chỉ truyền giá trị cho props vào (component A1) để đẩy thuộc tính đó cho 
  một props của component khác (A2) nằm trong A1, mà không dùng cho mục đích khác nữa,
  gọi là prop-drilling (truyền thuộc tính qua lỗ thủng) */

/* Bài học giới thiệu một giải pháp là sử dụng ngữ cảnh để quản lý sự truy cập của các
  component đến một thuộc tính (ở đây là state) */
import { createContext } from 'react';
export const AppContext = createContext()   // global context
// Ta sẽ sử dụng useContext tại component sử dụng state

function App() {
  const [username, setUsername] = useState("David")
  return (
    <div className="App">
      {/* {"Bọc ngữ cảnh + chỉ định cái nó cung cấp qua value"} */}
      <AppContext.Provider value={{username, setUsername}}>
        <Router>
          <Navbar />
          <Routes>
            {/* self-closing, path: string with '/any', element: component to switch to */}
            <Route path='/' element={<Homepage />}/>  
            <Route path='/profile' element={<Profile />}/>  
            <Route path='/contact' element={<Contact />}/>  
            <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>  
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
