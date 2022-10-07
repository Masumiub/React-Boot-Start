import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/inc/Footer';
import icamera from './components/images/icamera.png';

function App() {

var divStyle = {
    margin:'20px'
}
var divStyle2 = {
  topMargin:'40px',
  padding:'40px'
}


  return (
    <Router>
    <div  className="App">
        <Navbar></Navbar>
        <Home></Home> 
        <div className="container">
        
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 text-center" style={divStyle}>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, quas. Quidem, exercitationem doloribus! Ullam inventore molestiae natus perferendis atque optio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, quas. Quidem, exercitationem doloribus! Ullam inventore molestiae natus perferendis atque optio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, quas. Quidem, exercitationem doloribus! Ullam inventore molestiae natus perferendis atque optio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, quas. Quidem, exercitationem doloribus! Ullam inventore molestiae natus perferendis atque optio.</p>
              <button type="button" class="btn btn-primary">Click Me</button>
          </div>
        </div>

        <div className="row" style={divStyle}>
          <div className="col-lg-4 col-md-4 col-12">
            <Card name="Masum"></Card>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <Card name="Ridwan"></Card>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <Card name="Sakib"></Card>
          </div>
        </div>

        <div className="row" style={divStyle2}>
          <div className="col-lg-6 col-md-6 col-12">
              <h1>Sample Heading</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium illum deleniti quos iure fugiat! Dicta quidem temporibus autem distinctio. Officia reiciendis repellendus nam velit, non laudantium magnam quod nemo exercitationem vel, corporis unde id ipsum rem. Quasi, saepe quisquam, ut nesciunt consequuntur rerum dolore sapiente, sed laudantium corporis hic.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img src={icamera}  width='450px'/>
            </div>
        </div>
        
        </div> 
        <Footer></Footer>
    </div>

    </Router>
  );
}

function Card(props){
  return(
    <div className='card'>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button type="button" class="btn btn-primary btn-sm">Click Me</button>
      </div>
    </div>
  )
}
export default App;
