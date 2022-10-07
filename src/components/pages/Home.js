import React from 'react';
import Slider from '../inc/Slider';
import img1 from '../images/img1.jpg';
import SampleCard from '../inc/SampleCard';

function Home(){
    var divStyle = {
        margin:'20px'
    }
    return (
        
        <div className='container'>
            <Slider></Slider> 
            <h1 className="text-center" style={divStyle}>Our Company</h1>
        </div>
    );
}

export default Home;