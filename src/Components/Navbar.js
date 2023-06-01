import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons';
import '../Components/Navbar.css';

// Add the icons to the library
library.add(faHome, faEnvelope, faCog);

const Navbar = () => {
  return (
    <Router>
      <div className='navbar'>
        <Routes>
          <Route path='/' element={<FontAwesomeIcon icon={faHome} />} />
          <Route path='/Contact' element={<FontAwesomeIcon icon={faEnvelope} />} />
          <Route path='/Settings' element={<FontAwesomeIcon icon={faCog} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navbar;
