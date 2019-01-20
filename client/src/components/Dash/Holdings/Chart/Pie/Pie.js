import React, { Component } from 'react';
import * as d3 from 'd3'
import DonutChart from 'react-d3-donut';


class Pie extends React.Component {
    state = {
        data: [

            {
                count: 20,       // Value of the property. Required.
                color: "red",  // Color code for the pie's color. Required.
                name: 'My name' // Optional value. Used to display in the tooltip.
            },
            {
                count: 120,       // Value of the property. Required.
                color: "green",  // Color code for the pie's color. Required.
                name: ' name' // Optional value. Used to display in the tooltip.
            },



        ]
    }



    render() {
        return (
            <DonutChart
                innerRadius={0}
                outerRadius={100}
                transition={false}
                svgClass="example4"
                pieClass="pie4"
                displayTooltip={false}
                strokeWidth={3}
                data={this.state.data} />
        )
    }
}
export default Pie; 