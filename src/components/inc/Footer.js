import React from 'react';

function Footer(){

    let divStyle ={
        backgroundColor:'lightgray',
        padding:'25px'
    }
    return(
        <div className="container-fluid" style={divStyle}>
                <p className="text-center">Made by Md Masum Musfique@2022</p>
        </div>
    )
}

export default Footer;