import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Homepage } from './pages/homepage';
import { Menu } from './pages/menu';
import { Contact } from './pages/contact';
import { Profile } from './pages/profile';
import { Navbar } from './Navbar';
import { useState } from 'react';

/* Trước đây ta xóa Strict mode và dùng useEffect để gọi API, điều đó là không nên.
Hiện tại có một giải pháp khác đó là dùng react query:
    npm install @tanstack/react-query 
Tương tự như context, ta bọc lấy phần được trao quyền sử dụng query */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


function App() {
  // Chỉ định như sau nếu không muốn tự động refetch khi chuyển cửa sổ
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });

  return (
    <div className="App">
      {/* Bọc ngữ cảnh + chỉ định client */}
      <QueryClientProvider client={client}>
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
      </QueryClientProvider>
    </div>
  );
}

export default App;
