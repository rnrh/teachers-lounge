import React, {Component} from 'react';
import billCraveyJealous from '../audio/bill-cravey-jealous.m4a';
import toddMichaelJackson from '../audio/todd-michael-jackson.m4a';
import samWeathermanFuckPad from '../audio/sam-weatherman-fuck-pad.m4a';


class Soundboard extends Component {

    getAudio = (clipUrl) => {
        var audio = new Audio(clipUrl)
        return audio.play()
    }

    render() {
        return (
            <div className="soundboard-wrapper">
                <div className="soundboard">
                    <div className="soundboard__logo" />
                    <div className="soundboard-teachers">
                        <div onClick={() => this.getAudio(billCraveyJealous)} className="soundboard-teachers__bill-cravey" />
                        <div onClick={() => this.getAudio(samWeathermanFuckPad)} className="soundboard-teachers__howard-levis" />
                        <div onClick={() => this.getAudio(toddMichaelJackson)} className="soundboard-teachers__todd-padre" />
                        <div onClick={() => this.getAudio(samWeathermanFuckPad)} className="soundboard-teachers__sam-weatherman" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Soundboard;
