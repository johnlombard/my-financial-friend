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
};
function Footer(props) {
    return (<div style={styles.footer} className="footer">
        <div className="card">
            <div className="card-header">
                Featured
     </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">Photos by Vladislav Reshetnyak, Tatiana Fet, and Lorenzo Cafaro from Pexels</p>
                <a href="/test" className="btn btn-success">Go somewhere</a>
            </div>
        </div>

    </div>
    );
};
// class Footer extends Component {
//     render() {
//         return (
//             <div style={styles.footer} className ="footer">
//                 <div className="card">
//                     <div className="card-header">
//                         Featured
//   </div>
//                     <div className="card-body">
//                         <h5 className="card-title">Special title treatment</h5>
//                         <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                         <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </div>

//             </div>
//         );
//     }
// }

export default Footer;