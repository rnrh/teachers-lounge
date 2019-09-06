import React, {Component} from 'react';
import Constants from '../js/Constants';
import AudioClipBar from '../js/Search';

class Soundboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            billCraveyAudio: false,
            billCraveyIndex: 0,
            howardLevisIndex: 0,
            toddPadreIndex: 0,
            samWeathermanIndex: 0,
            searchableClipAudio: null,
            audioClipSearch: '',
        };
    }

    handleTeacherAudio = (teacherIndex, teacherArray) => {
        var currentIndex = teacherIndex;
        var currentAudio = teacherArray[currentIndex];
        var audio = new Audio(currentAudio);
        return audio.play();
    };

    getAudioUrl = (clipUrl) => {
        this.setState({
            searchableClipAudio: clipUrl
        }, () => {
            var audio = new Audio(this.state.searchableClipAudio);
            return audio.play();
        })
    };

    updateAudioClipSearch = (event) => {
        this.setState({
            audioClipSearch: event.target.value.substr(0, 20),
        })
    }

    render() {
        let filteredAudioClips = Constants.searchableClips.filter(
            (audioClip) => {
                return (
                    audioClip.clipLabel.toLocaleLowerCase().indexOf(this.state.audioClipSearch.toLocaleLowerCase()) !== -1
                );
            }
        );
        var renderAudioClipBars = filteredAudioClips.map((audioClip, i) => {
            var renderAudioClipTags = audioClip.tags.map((tags, j) => {
                return (
                    <p key={j}>{tags}</p>
                )
            });
            return (
                <AudioClipBar
                    onPlayIconClick={() => this.getAudioUrl(audioClip.clipUrl)}
                    clipTitle={audioClip.clipLabel}
                    key={i}
                >
                    {renderAudioClipTags}
                </AudioClipBar>
            )
        });
        return (
            <div className="soundboard-wrapper">
                <div className="search">
                    <input
                        placeholder="search here king"
                        type="text"
                        value={this.state.audioClipSearch}
                        onChange={this.updateAudioClipSearch.bind(this)}
                    />
                </div>
                {renderAudioClipBars}
                <div className="soundboard">
                    <div className="soundboard__logo"/>
                    {/*<div className="soundboard-teachers">*/}
                    {/*<div*/}
                    {/*onClick={() => this.handleTeacherAudio(*/}
                    {/*this.state.billCraveyIndex,*/}
                    {/*Constants.billCraveyClipArray,*/}
                    {/*this.setState({*/}
                    {/*billCraveyIndex: this.state.billCraveyIndex + 1*/}
                    {/*}),*/}
                    {/*)}*/}
                    {/*className="soundboard-teachers__bill-cravey"*/}
                    {/*/>*/}
                    {/*<div*/}
                    {/*onClick={() => this.handleTeacherAudio(*/}
                    {/*this.state.howardLevisIndex,*/}
                    {/*Constants.howardLevisClipArray,*/}
                    {/*this.setState({*/}
                    {/*howardLevisIndex: this.state.howardLevisIndex + 1*/}
                    {/*}),*/}
                    {/*)}*/}
                    {/*className="soundboard-teachers__howard-levis"*/}
                    {/*/>*/}
                    {/*<div*/}
                    {/*onClick={() => this.handleTeacherAudio(*/}
                    {/*this.state.toddPadreIndex,*/}
                    {/*Constants.toddPadreClipArray,*/}
                    {/*this.setState({*/}
                    {/*toddPadreIndex: this.state.toddPadreIndex + 1*/}
                    {/*}),*/}
                    {/*)}*/}
                    {/*className="soundboard-teachers__todd-padre"*/}
                    {/*/>*/}
                    {/*<div*/}
                    {/*onClick={() => this.handleTeacherAudio(*/}
                    {/*this.state.samWeathermanIndex,*/}
                    {/*Constants.samWeathermanClipArray,*/}
                    {/*this.setState({*/}
                    {/*samWeathermanIndex: this.state.samWeathermanIndex + 1*/}
                    {/*}),*/}
                    {/*)}*/}
                    {/*className="soundboard-teachers__sam-weatherman"*/}
                    {/*/>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default Soundboard;
