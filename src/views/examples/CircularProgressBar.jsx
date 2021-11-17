import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, { Component } from 'react';

class CircleProgressBar extends Component {
    componentDidMount() {
        console.log(this.props.percent);
    }

    render() {
        return (
            <div style={{ width: '3em', fontSize: '20px', color: '#eeeeee' }}>
                <CircularProgressbar value={this.props.percent} text={this.props.percent + '%'} />
            </div>
        );
    }
}

export default CircleProgressBar;