import React from 'react';

// const styles = {
//     introImg: {
//         height: "15%",
//         width: "100%",
//     },
//     introImgText: {
//         position: "absolute",
//     },
//     introImgTextPosition: {
//         float: "left",
//         color: 'white',
//         textShadow: "2px 2px green",
//         background: "rgba(0,0,0,0.4)",
//         borderRadius: 10
//     }
// };
function Nav(props) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand col-3" href="#">My Financial Friend</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">

                        <li className="nav-item">
                            <a className="nav-link" href="#"> Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn btn-success" href="#">Sign up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};


export default Nav;
