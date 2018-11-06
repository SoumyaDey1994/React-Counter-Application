import React from 'react';

//Stateless Functional Components
const NavBar= (props) => {
    console.log(`Navbar-Rendered`);
    return ( 
        <nav className="navbar navbar-light bg-light">
            <p className="navbar-brand" href="#">Total
                <span className= "badge badge-pill badge-secondary m-2">{props.totalNoOfItems}</span>
            </p>
        </nav>
    );
}
 
export default NavBar;