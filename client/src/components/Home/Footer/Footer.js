import React from 'react';
const styles = {
    footer: {
        position: "relative",
        left: 0,
        bottom: 0,
        width: "100%",

        backgroundColor: "red",
        textAlign: "center",
    },
    icon: {
        color: "black"
    }
};
function Footer(props) {
    return (<div style={styles.footer} className="footer">
        <div className="card">
            <div className="card-header">           
     </div>
            <div className="card-body">
                <h5 className="card-title">Site by John Lombard</h5>

                <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a target = "_blank" rel="noopener noreferrer" href="https://github.com/johnlombard">
                  <i style={styles.icon} className="fab fa-github"></i>
                </a>
              </li>
     
              <li className="list-inline-item">
                <a target = "_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/johnlombard1996/">
                  <i style={styles.icon}className="fab fa-linkedin-in"></i>
                </a>
              </li>
              </ul>
                <p className="card-text">Photos by Vladislav Reshetnyak, Tatiana Fet, and Lorenzo Cafaro from Pexels</p>
                
            </div>
        </div>

    </div>
    );
};

export default Footer;