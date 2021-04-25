import React from 'react';

class PlaySide extends React.Component {
    render() {
        return (
            <div className="playside">
                <h1>Choose your side</h1>
                <div className="btn btn-light">
                <input type="radio"
                    name="chooseSide"
                    value="X"
                    onChange={() => this.props.setSide('X')}
                /> X
                </div>
                <br />
                <div className="btn btn-light">
                <input type="radio"
                    name="chooseSide"
                    value="O"
                    onChange={() => this.props.setSide('O')}
                /> O
                </div>
            </div>
        )
    }
}

export default PlaySide;