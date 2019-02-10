import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    }

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters })
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters })
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({ counters })
    }

    render() { 
        return (
            <React.Fragment>
                <button
                    className="btn btn-primary m-2"
                    onClick={this.handleReset}
                >
                    Reset
                </button>
                { this.state.counters.map(counter => (
                    <Counter
                        counter={counter}
                        key={counter.id}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                    />
                ))}
            </React.Fragment>
        );
    }
}
 
export default Counters;