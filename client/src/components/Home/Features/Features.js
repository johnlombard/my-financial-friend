import React from 'react';
import budget from './budget.jpg'
import nyc from './nyc.jpg'
import portfolio from './portfolio.jpg'
const styles = {
    imgCol: {
        height: "100%",
        width: "100%",
    },
    featuresCaption: {
        position: "absolute",
    },

    featureCaptionPosition: {
        float: "center",
        color: 'white',
        textShadow: "2px 2px green",
        background: "rgba(0,0,0,0.4)",
        borderRadius: 10
    },
};

const featureImages = [
    {
        image: budget,
        text: `Budget Calculator`,
        height: 500,
        width: "100%",
        alt: "Budget"
    },
    {
        image: nyc,
        text: `Net Worth Calculator`,
        height: 500,
        width: "100%",
        alt: "Track your net worth"
    },
    {
        image: portfolio,
        text: `Portfolio Management`,
        height: 500,
        width: "100%",
        alt: "Track Your Portfolio"
    },
];

// const features = {
//     change: {
//         backgroundImage: `url(${budget})`
//     }
// }

class Features extends React.Component {
    state = {
        isHovered: false,
    };

    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }



    render() {
        const imageRow = featureImages.map((featureImage) => {
            return (
                <div className="col-lg-4 col-md-6 col-xs-12" >
                    <img style={styles.imgCol} src={featureImage.image} alt={featureImage.alt} />
                    <div className="container">
                            <div className="row align-items-end">
                                <div style={styles.featuresCaption} className="col" >
                                <p style={styles.featureCaptionPosition} >{featureImage.text}</p>
                                </div>
                            </div>
                        </div>
                    
                </div>
            );
        });
        return (
                <div className="row no-gutters">
                    {imageRow}
                </div>
        );
    }
}
export default Features;
