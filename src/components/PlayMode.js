import React from 'react';

class PlayMode extends React.Component {
    render() {
        return (
            <div className="playmode">
                <h1>Choose your Mode</h1>
                <div className="btn btn-light">
                <input type="radio"
                    name="chooseOp"
                    value="with AI"
                    onChange={() => this.props.onClick('ai')}
                /> with AI
                </div>
                <br />
                <div className="btn btn-light">
                <input type="radio"
                    name="chooseOp"
                    value="with Friend"
                    onChange={() => this.props.onClick('friend')}
                /> with Friend
                </div>
            </div>
        )
    }
}

export default PlayMode;