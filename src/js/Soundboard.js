import React, {Component} from 'react';
import Constants from '../js/Constants';
import {AudioClipBar, SearchBar, AudioClipBarTag} from '../js/Search';

class Soundboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            billCraveyIndex: 0,
            howardLevisIndex: 0,
            toddPadreIndex: 0,
            samWeathermanIndex: 0,
            searchableClipAudio: null,
            audioClipSearch: '',
            tagText: '',
        };
    }

    handleTeacherAudio = (teacherIndex, teacherArray) => {
        var currentIndex = teacherIndex;
        var currentAudio = teacherArray[currentIndex];
        var audio = new Audio(currentAudio);
        return audio.play();
    };

    getSearchedAudioUrl = (clipUrl) => {
        this.setState({
            searchableClipAudio: clipUrl
        }, () => {
            var audio = new Audio(this.state.searchableClipAudio);
            audio.onended = () => {
                this.setState({
                    searchableClipAudio: null,
                })
            };
            return audio.play();
        })
    };

    updateAudioClipSearch = (event) => {
        this.setState({
            audioClipSearch: event.target.value.substr(0, 30),
        })
    };

    handleTagClick = (tagText) => {
        this.setState({
            tagText: tagText,
            audioClipSearch: tagText,
        })
    };

    clearSearch = () => {
        this.setState({
            audioClipSearch: '',
        })
    };

    render() {
        let filteredAudioClips = Constants.searchableClips.filter(
            (audioClip) => {
                return (
                    audioClip.clipLabel.toLocaleLowerCase().includes(this.state.audioClipSearch.toLocaleLowerCase()) ||
                    audioClip.tags.some(item => item.toLocaleLowerCase().includes(this.state.audioClipSearch.toLocaleLowerCase()))
                );
            }
        );

        var renderAudioClipBars = filteredAudioClips.map((audioClip, i) => {
            var renderAudioClipTags = audioClip.tags.map((tags, j) => {
                return (
                    <AudioClipBarTag
                        handleTagClick={this.handleTagClick}
                        tagTitle={tags}
                        tagText={tags}
                        key={j}
                    />
                )
            });
            return (
                <AudioClipBar
                    // onPlayIconClick={() => this.getSearchedAudioUrl(audioClip.clipUrl)}
                    audioClipSource={audioClip.clipUrl}
                    onTagClick={() => this.onTagClick}
                    clipTitle={audioClip.clipLabel}
                    audioIsPlaying={audioClip.clipUrl == this.state.searchableClipAudio ? true : false}
                    key={i}
                >
                    {renderAudioClipTags}
                </AudioClipBar>
            )
        });
        return (
            <div className="soundboard-wrapper">
                <SearchBar
                    audioClipSearchValue={this.state.audioClipSearch}
                    onSearchInputChange={this.updateAudioClipSearch.bind(this)}
                    hasSearchValue={this.state.audioClipSearch}
                    clearSearch={this.clearSearch}
                />
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
