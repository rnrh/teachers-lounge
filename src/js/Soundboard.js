import React, {Component} from 'react';
import billCraveyJealous from '../audio/bill-cravey-jealous.m4a';
import toddMichaelJackson from '../audio/todd-michael-jackson.m4a';
import samWeathermanFuckPad from '../audio/sam-weatherman-fuck-pad.m4a';
import howardLevisSemetic from '../audio/howard-semetic.m4a';


class Soundboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            audioPlaying: false,
            billCravey: false,
            howardLevis: false,
            toddPadre: false,
            samWeatherman: false,
        }
    }

    startAudioListener = (clipUrl) => {
        var audio = new Audio(clipUrl);
        this.endAudioListener(audio)
        return audio.play();
    };

    endAudioListener = (audio) => {
        audio.onended = () => {
            if (this.state.billCravey) {
                this.endBillCravey();
            }
            if (this.state.howardLevis) {
                this.endHowardLevis();
            }
            if (this.state.toddPadre) {
                this.endToddPadre();
            }
            if (this.state.samWeatherman) {
                this.endSamWeatherman();
            }
        }
    };

    startBillCravey = (clipUrl) => {
        this.startAudioListener(clipUrl)

        this.setState({
            billCravey: true,
        });
    };

    endBillCravey = () => {
        this.setState({
            billCravey: false,
        })
    };

    startHowardLevis = (clipUrl) => {
        this.startAudioListener(clipUrl)

        this.setState({
            howardLevis: true,
        });
    };

    endHowardLevis = () => {
        this.setState({
            howardLevis: false,
        })
    };

    startToddPadre = (clipUrl) => {
        this.startAudioListener(clipUrl)

        this.setState({
            toddPadre: true,
        });
    };

    endToddPadre = () => {
        this.setState({
            toddPadre: false,
        })
    };

    startSamWeatherman = (clipUrl) => {
        this.startAudioListener(clipUrl)

        this.setState({
            samWeatherman: true,
        });
    };

    endSamWeatherman = () => {
        this.setState({
            samWeatherman: false,
        })
    };

    render() {
        console.log('mrh billCravey', this.state.billCravey)
        console.log('mrh howardLevis', this.state.howardLevis)
        console.log('mrh toddPadre', this.state.toddPadre)
        console.log('mrh samWeatherman', this.state.samWeatherman)
        return (
            <div className="soundboard-wrapper">
                <div className="soundboard">
                    <div className="soundboard__logo"/>
                    <div className="soundboard-teachers">
                        <div
                            onClick={() => this.startBillCravey(billCraveyJealous)}
                            className="soundboard-teachers__bill-cravey"
                        />
                        <div
                            onClick={() => this.startHowardLevis(howardLevisSemetic)}
                            className="soundboard-teachers__howard-levis"
                        />
                        <div
                            onClick={() => this.startToddPadre(toddMichaelJackson)}
                            className="soundboard-teachers__todd-padre"
                        />
                        <div
                            onClick={() => this.startSamWeatherman(samWeathermanFuckPad)}
                            className="soundboard-teachers__sam-weatherman"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Soundboard;
