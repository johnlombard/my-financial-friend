import React from 'react';
// import * as d3 from 'd3'
import DonutChart from 'react-d3-donut';


class Pie extends React.Component {
    state = {
        holdings: [],
        data: [

            {
                count: 10,       // Value of the property. Required.
                color: "red",  // Color code for the pie's color. Required.
                name: 'AAPL' // Optional value. Used to display in the tooltip.
            },
            {
                count: 15,       // Value of the property. Required.
                color: "yellow",  // Color code for the pie's color. Required.
                name: 'IBM' // Optional value. Used to display in the tooltip.
            },
            {
                count: 10,       // Value of the property. Required.
                color: "Blue",  // Color code for the pie's color. Required.
                name: 'F' // Optional value. Used to display in the tooltip.
            },
            {
                count: 25,       // Value of the property. Required.
                color: "green",  // Color code for the pie's color. Required.
                name: 'TSLA' // Optional value. Used to display in the tooltip.
            },
            // {
            //     count: this.state.holdings[0].quantity,
            //      color: "orange",  // Color code for the pie's color. Required.
            //     name: this.state.holdings[0].ticker,
            // }




        ]
    }
    


    // mffTransform = holding => {
    //     const {ticker, quantity} = holding
    //     return ({
    //         count: quantity,
    //         color: "orange",
    //         name: ticker
    //     })
    // }

    // loadDBHoldings = () => {
    //     API.getHoldings()
    //     .then(res => {
    //         let retval = res.data.map(holding => {
    //             return (this.mffTransform(holding))
    //         })
    //         const origDataArr = this.state.data;
    //         const newArr = origDataArr.concat(retval)
    //         console.log(newArr)
    //         return this.setState({ data: newArr })
    //         // console.log(this.holdings)
    //     })
    //     .catch(err => console.log(err));
    // };

    componentDidMount() {
        // Check session data to see if user should be logged in
    };

    // componentDidUpdate = (prevProps, prevState) => {
    //     if (prevState.data !== this.state.data) {
    //         // console.log('updated')
    //         // this.loadDBHoldings()
    //     }
    // }

    handleClick = () => {
        console.log(this.state)
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
                    data= {this.state.data} />
            </div>
        )
    }
}
export default Pie; 