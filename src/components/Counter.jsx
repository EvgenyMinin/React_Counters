import React, { Component } from 'react';

class Counter extends Component {
    render() {
        const { onIncrement, onDecrement, onDelete, counter } = this.props;
        return (
            <div className='row'>
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
                </div>
                <div className="col">
                    <button
                        className='btn btn-secondary'
                        onClick={() => onIncrement(counter)}
                    >
                        +
                    </button>
                    <button
                        className='btn btn-secondary m-2'
                        onClick={() => onDecrement(counter)}
                        disabled={counter.value === 0 ? 'disabled' : ''}
                    >
                        -
                    </button>
                    <button
                        className='btn btn-danger'
                        onClick={() => onDelete(counter.id)}
                    >
                        x
                    </button>
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';

        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;