import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    render() { 
        return (
            <React.Fragment>
                <button
                    className="btn btn-primary m-2"
                    onClick={this.props.onReset}
                >
                    Reset
                </button>
                { this.props.counters.map(counter => (
                    <Counter
                        counter={counter}
                        key={counter.id}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                    />
                ))}
            </React.Fragment>
        );
    }
}
 
export default Counters;