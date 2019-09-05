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
            searchableClipAudio: null
        }
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

    render() {
        var renderAudioClipBars = [];
        var audioClipList = Constants.searchableClips;
        for (var i = 0; i < audioClipList.length; i++) {
            var audioClip = audioClipList[i];

            var renderAudioClipTags = [];
            var audioClipTagsList = audioClipList[i].tags;
            for (var j = 0; j < audioClipTagsList.length; j++) {
                var tagsList = audioClipTagsList[j];
                renderAudioClipTags.push(
                    <p key={j}>{tagsList}</p>
                )
            }
            renderAudioClipBars.push(
                <AudioClipBar
                    onPlayIconClick={() => this.getAudioUrl(audioClip.clipUrl)}
                    clipTitle={audioClip.clipLabel}
                    key={i}
                >
                    {renderAudioClipTags}
                </AudioClipBar>
            )
        }
        return (
            <div className="soundboard-wrapper">
                <div className="search">
                    search here king
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
