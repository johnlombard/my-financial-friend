import React from 'react';
// import * as d3 from 'd3'
import DonutChart from 'react-d3-donut';


class Pie extends React.Component {
    state = {
        data: [

            {
                count: 20,       // Value of the property. Required.
                color: "red",  // Color code for the pie's color. Required.
                name: 'SNAP' // Optional value. Used to display in the tooltip.
            },
            {
                count: 120,       // Value of the property. Required.
                color: "green",  // Color code for the pie's color. Required.
                name: 'TSLA' // Optional value. Used to display in the tooltip.
            },
            {
                count: 60,       // Value of the property. Required.
                color: "Blue",  // Color code for the pie's color. Required.
                name: 'AAPL' // Optional value. Used to display in the tooltip.
            },
            {
                count: 35,       // Value of the property. Required.
                color: "Yellow",  // Color code for the pie's color. Required.
                name: 'IBM' // Optional value. Used to display in the tooltip.
            },




        ]
    }



    render() {
        return (
            <div>
                <DonutChart
                    innerRadius={0}
                    outerRadius={100}
                    transition={false}
                    svgClass="example4"
                    pieClass="pie4"
                    displayTooltip={true}
                    strokeWidth={3}
                    data={this.state.data} />
            </div>
        )
    }
}
export default Pie; 