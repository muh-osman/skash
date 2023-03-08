import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './component/NavBar';
import Container from 'react-bootstrap/Container';
import Hero from './component/Hero';
import Course from './component/Course';
import Trading from './component/Trading';


function App() {
  return (
    <>
    <NavBar/>
    
    <Container>
      <Hero/>
      <Course/>
      <Trading/>
    </Container>
    </>
  );
}

export default App;
