import React from 'react';
import IntroImg from './ben.jpg'

const styles = {
    introImg: {
    height: "80%",
        width: "100%",
    },
    introImgText: {
        position: "absolute",
    },
    introImgTextPosition: {
        float: "left",
        color: 'white',
        textShadow:"2px 2px green",
        background:"rgba(0,0,0,0.4)",
        borderRadius: 10
    },
    
};
function Header(props) {
    return (
        <div className="Header row">
            <section className="col-12">
                <img style={styles.introImg} src={IntroImg} alt="Dollar" data-sizes="(max-width: 540px) 540px, (max-width: 768px) 768px, (max-width: 980px) 980px, (max-width: 1200px) 1200px, 100vw" sizes="(max-width: 540px) 540px, (max-width: 768px) 768px, (max-width: 980px) 68px, (max-width: 1200px) 1200px, 100vw"
                />
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col" style={styles.introImgText}>
                            <h2 style={styles.introImgTextPosition}>“An investment in knowledge always pays the best interest.”</h2>
                        </div>
                    </div>
                </div>

            </section>
        </div>

    );
};


export default Header;