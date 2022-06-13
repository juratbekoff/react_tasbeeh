import React from 'react';
import "./counter.css"
import Button from '@mui/material/Button';

class counter extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment () {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement () {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset () {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div className='tasbeeh'>
                <h1>Count: {this.state.count}</h1>

                <div className='plusminus'>
                    <Button variant="outlined" onClick= { (e) => this.increment(e)}>+</Button>
                    <Button variant="outlined" onClick={ (e) => this.decrement(e)}>-</Button>
                </div>
                
                <Button className='reset' variant="outlined" onClick={ (e) => this.reset(e)}>Reset</Button>

            </div>
        );
    }
}


export default counter;
