import React from 'react';

import Pie from './Pie'
class Chart extends React.Component {

    handleClick = event => {
        event.preventDefault();
        console.log("Chart STate" + this.holdings)
      };
    render() {


        // For a real world project, use something like
        // https://github.com/digidem/react-dimensions
        // let width = window.innerWidth;
        // let height = window.innerHeight;
        // let minViewportSize = Math.min(width, height);
        // This sets the radius of the pie chart to fit within
        // the current window size, with some additional padding
        // let radius = (minViewportSize * .9) / 2;
        // // Centers the pie chart
        // let x = width / 2;
        // let y = height / 2;

        return (
            <div className="userChart">
                <Pie/>
                <button onClick={this.handleClick}>CHART STATE</button>
            </div>
        );
    }
}



export default Chart;