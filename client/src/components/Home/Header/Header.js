import React from 'react';
import IntroImg from './ben.jpg'

const styles = {
    introImg: {
        height: "80%",
        width: "100%",
    },
    introRow: {

    },
    introImgText: {
        position: "absolute",
    },
    introImgTextPosition: {
        float: "left",
        color: 'white',
        textShadow: "2px 2px green",
        background: "rgba(0,0,0,0.4)",
        borderRadius: 10
    },

};

class Header extends React.Component {
    render() {
        return (
                <div style={styles.introRow} className="row no-gutters">
                        {/* Image */}
                        <img style={styles.introImg}   src={IntroImg} alt="Dollar"/>
                        <div className="container">
                            <div className="row align-items-end">
                                {/* Image Description */}
                                <div className="col" style={styles.introImgText}>
                                    <h2 style={styles.introImgTextPosition}>“An investment in knowledge always pays the best interest.”</h2>
                                </div>
                            </div>
                        </div>
                </div>
        );
    };
};
export default Header;
