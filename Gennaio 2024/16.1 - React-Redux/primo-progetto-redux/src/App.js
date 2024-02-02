
import { Container } from 'react-bootstrap';
import './App.css';
import MyNavbar from './Components/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Users from './Pages/Users';
import NotFoundPage from './Pages/NotFoundPage';
import MyFooter from './Components/MyFooter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </Container>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
