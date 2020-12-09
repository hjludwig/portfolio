import { Link } from 'gatsby';
import React from 'react';

const Navigation = () => {
    return ( 
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
     );
}
 
export default Navigation;