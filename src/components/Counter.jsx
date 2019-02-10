import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul>
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.value === 0 ? 'warning' : 'primary';

        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }

    handleIncrement = () => {
        this.setState({ value: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
                <button
                    className='btn btn-secondary'
                    onClick={this.handleIncrement}
                >
                    Increment
                </button>
            </div>
        );
    }

    
}
 
export default Counter;