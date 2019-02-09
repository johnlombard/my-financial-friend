import React from 'react';


const styles = {
    userNameInput: {
        marginRight: 15
    },
    signInBtn: {
        marginLeft: 35,
        marginRight: 5
    },
    welcome: {
        margin: "auto",
        fontSize: "2.5rem"
    }
};

const Nav = props => (
    < header >
        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
            <a href="test" className="navbar-brand  text-success col-3">My Financial Friend</a>

            {/* If logged in display username if not please login in or sign up */}
            <div className="col-9">
                <div className="collapse navbar-collapse float-right" id="navbarNav">
                    <ul className="navbar-nav float-right ">
                        {/* Sign in form */}
                        {!props.state.loggedIn ?
                            (<form className="signin row">
                                <input  style={styles.userNameInput} placeholder="UserName" name="usernameInput" value={props.usernameTest} onChange={props.handleFormLogin} className="form " />
                                <input type="password" placeholder="Password" name="passwordInput" value={props.passwordTest} onChange={props.handleFormLogin} className="form " />
                            </form>) : ""}

                        <li className="nav-item">
                            {/* If Not logged in display log in button  */}
                            {!props.state.loggedIn ?
                                (<button className="nav-link btn btn-success float-right" style={styles.signInBtn} onClick={props.handleLogin}> Sign In</button>) : ""}
                            {props.state.loggedIn ?
                                (<button className="nav-link btn btn-success float-right" style={styles.signInBtn} onClick={props.handleLogout}>Sign Out</button>) : ""}
                        </li>
                        <li className="nav-item">
                            {/* TO DO OPEN MODULE TO SIGN UP */}
                            <a href="#signup" onClick={props.handleClick} className="nav-link btn btn-outline-success" >Get Started</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <h3 style={styles.welcome} className="text-success navbar-text " >{props.state.loggedIn ? (`Welcome ${props.state.username}`) : "Please Sign in or Get Started"}</h3>
    </header >
);
export default Nav;
