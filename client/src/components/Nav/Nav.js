import React, { Component } from 'react';



const Nav = props => (
    < header >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand col-3">My Financial Friend</a>

            {/* If logged in display username if not please login in or sign up */}
            <h1>{props.state.loggedIn ? (`Welcome ${props.state.username}`) : "Please Login in or Sign Up"}</h1>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ">

                    <li className="nav-item">
                        {/* IF Not logged in display log in button  */}
                        {!props.state.loggedIn ?
                            (<button className="nav-link btn btn-success" onClick={props.handleLogin}> Log In</button>) : ""}
                        {props.state.loggedIn ?
                            (<button className="nav-link btn btn-success" onClick={props.handleLogout}>Log Out</button>) : ""}
                    </li>
                    <li className="nav-item">
                    {/* TO DO OPEN MODULE TO SIGN UP */}
                        <a onClick={props.handleClick} className="nav-link btn btn-outline-success" >Get Started</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header >
);
export default Nav;
