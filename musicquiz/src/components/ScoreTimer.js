import React, { Component } from 'react'

class ScoreTimer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            percentage: 100
        }
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.percentage === 0) return
            this.setState(prevState => ({ percentage: prevState.percentage - 0.25 }))
        }, 25);
    }

    render() {
        return (
            <div>
                <ProgressBar percentage={this.state.percentage} />
            </div>
        )
    }
}

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Filler percentage={props.percentage} />
        </div>
    )
}

const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
}

export default ScoreTimer