import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return (
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <h2 class="navbar-brand">Navbar</h2>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
              <Link to="/" className='nav-link active'>Home</Link>
        </li>

        <li class="nav-item">
            <Link to="/about" className='nav-link active'>About</Link>
        </li>

        <li class="nav-item">
            <Link to="/contact" className='nav-link active'>Contact</Link>
        </li>
      </ul>
      </div>
</nav>
    );
}

export default Navbar;