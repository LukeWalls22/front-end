import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import { Container } from 'react-bootstrap';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Container>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='*' element={<PageNotFound/>} />
          </Routes>
        </Container>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
