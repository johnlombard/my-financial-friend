import React  from 'react';


function Nav(props) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand col-3" href="#">My Financial Friend</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">

                        <li className="nav-item">
                            <a onClick={() => console.log(props.handleLogin)} className="nav-link" href="#home"> Log in</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => console.log(props)} className="nav-link btn btn-success" href="#">Sign up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};


export default Nav;
