import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    render() {
        const { onReset, onDelete, onIncrement, counters } = this.props;
        return (
            <React.Fragment>
                <button
                    className="btn btn-primary m-2"
                    onClick={onReset}
                >
                    Reset
                </button>
                {counters.map(counter => (
                    <Counter
                        counter={counter}
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                    />
                ))}
            </React.Fragment>
        );
    }
}
 
export default Counters;