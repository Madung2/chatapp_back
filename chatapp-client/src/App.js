import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ChatApp from './Chat';
import LoginPage from './Login';
import SignUp from './Signup'
function App() {
  // 가정: accessToken이 localStorage에 저장되어 있다.
  // const accessToken = localStorage.getItem('accessToken');

  // if (!accessToken) {
  //     return <LoginPage />;
  // }
  // return <ChatApp />;
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ChatApp />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App;
