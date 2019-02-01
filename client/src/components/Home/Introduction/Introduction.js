import React from 'react';
const styles = {
    intro: {
       marginTop: 20,
       marginBottom: 20
    },
    
};
class Introduction extends React.Component {
    render() {
        return (
            <div style={styles.intro} className="container">
                <div className="row">
                    <div className="col-8 text-left">
                        <div>
                            <h1 >My Financial Friend is the web application to track your portfolio, net worth, and a monthly budget </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
export default Introduction;






