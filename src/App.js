import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import data from './data.js';
import Modal from './Components/Modal.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import About from './Components/About.js';
function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();
  <Routes>
    <Route path='/detail' element={<Modal />} />
    <Route path='*' element={<div>없는페이지임</div>} />
    <Route path='/about' element={<About />}>
      <Route path='member' element={<div>멤버들</div>} />
      <Route path='location' element={<div>회사위치</div>} />
    </Route>{' '}
  </Routes>;
  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='container'>
        <div className='row'>
          <Card shoes={shoes[0]} i={1} />
          <Card shoes={shoes[1]} i={2} />
          <Card shoes={shoes[2]} i={3} />
        </div>
      </div>
      <Link to='/'>홈</Link>
      <Link to='/detail'>상세페이지</Link>
      <Link to='/about'>~에 대해</Link>

      <button
        onClick={() => {
          navigate('/detail');
        }}
      >
        이동버튼
      </button>
    </div>
  );
}

function Card(props) {
  return (
    <div className='col-md-4'>
      <img
        src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'}
        width='80%'
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}
export default App;
