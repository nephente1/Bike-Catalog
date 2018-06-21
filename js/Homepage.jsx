import React from 'react';

import { Link } from 'react-router-dom';

const Homepage = () => (
    <div className="landing">
    <h1>Best Bikes Catalog</h1>
    
    <Link to="/list">Check out our stuff</Link>
    </div>
)

export default Homepage;