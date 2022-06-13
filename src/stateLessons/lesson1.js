import React from 'react';


class lesson1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Jurat",
            age: 17,
            company: "eduenter",
            address: "Anjirchi",
            date: new Date()
        };
    }

    render() {

        return (
            <>
                <h1>Name: {this.state.name}</h1>
                <h1>Age: {this.state.age}</h1>
                <h1>Company: {this.state.company}</h1>
                <h1>Address: {this.state.address}</h1>

                <h1>Sana: {this.state.date.toLocaleDateString()}</h1>
                
            </>
        );
    }
}


export default lesson1;
