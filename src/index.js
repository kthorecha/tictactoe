import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import PlayMode from './components/PlayMode';
import PlaySide from './components/PlaySide';

class GameMaster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isWithAI: null,
            isPlayX: null,
        }
    }
    choosePlayMode(playWith) {
        // console.log(playWith);
        playWith === 'ai' ? this.setState({ isWithAI: true}) : this.setState({ isWithAI: false});
    }
    setPlaySide(side) {
        side === 'X' ? this.setState({ isPlayX : true }) : this.setState({ isPlayX : false });
    }
    render() {
        return (
            this.state.isWithAI == null ? <PlayMode
            onClick={(playWith) => this.choosePlayMode(playWith)}
            /> : this.state.isPlayX == null ? <PlaySide
            setSide={(side) => this.setPlaySide(side)}
            /> : <Game playX={this.state.isPlayX} />
        )
    }
}

// ========================================

ReactDOM.render(
    <GameMaster />,
    document.getElementById('root')
);
