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
            infoModal: true,
        };
    }

    handleModalVisibility = () => {
        if (this.state.infoModal) {
            this.setState({
                infoModal: false,
            })
        } else {
            this.setState({
                infoModal: true,
            })
        }
    }

    handleTeacherAudio = (teacherIndex, teacherArray) => {
        var currentIndex = teacherIndex;
        var currentAudio = teacherArray[currentIndex];
        var audio = new Audio(currentAudio);
        return audio.play();
    };

    updateAudioClipSearch = (event) => {
        this.setState({
            audioClipSearch: event.target.value.substr(0, 30),
        })
    };

    clearSearch = () => {
        this.setState({
            audioClipSearch: '',
        })
    };

    handleTagClick = (tagText) => {
        this.setState({
            tagText: tagText,
            audioClipSearch: tagText,
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
                    audioClipSource={audioClip.clipUrl}
                    onTagClick={() => this.onTagClick}
                    clipTitle={audioClip.clipLabel}
                    season={audioClip.season}
                    episode={audioClip.episode}
                    timestamp={audioClip.timestamp}
                    key={i}
                >
                    {renderAudioClipTags}
                </AudioClipBar>
            );
        });
        return (
            <div className="app">
                <div
                    onClick={this.handleModalVisibility}
                    className="info-icon"
                >
                    {this.state.infoModal ? (
                        <i className="fas fa-times"></i>
                    ) : (
                        <i className="fas fa-info"></i>
                    )}
                </div>
                {this.state.infoModal &&
                <div className="info-modal">
                    <div className="info-modal__inner">
                        <h5>Teacher Pictures</h5>
                        <p>Click on a teacher to play a clip featuring them. A new clip loads when the old one finishes
                            so you can loop through for endless fun.</p>
                        &nbsp;
                        <h5>Clip List</h5>
                        <p>Search by clip title, or tag. You can click on a tag to show every clip with the same tag.
                            Know the timestamp for a clip or want to submit a clip? <a href="mailto:rnrhdev@gmail.com">Email
                                me.</a></p>
                    </div>
                </div>
                }
                <div className="soundboard-wrapper">
                    <div className="soundboard">
                        <Teacher
                            handleTeacherAudio={() => this.handleTeacherAudio(
                                this.state.billCraveyIndex,
                                Constants.billCraveyClipArray,
                                this.setState({
                                    billCraveyIndex: this.state.billCraveyIndex + 1
                                }),
                            )}
                            teacherClassName={"soundboard__bill-cravey"}
                        />
                        <Teacher
                            handleTeacherAudio={() => this.handleTeacherAudio(
                                this.state.howardLevisIndex,
                                Constants.howardLevisClipArray,
                                this.setState({
                                    howardLevisIndex: this.state.howardLevisIndex + 1
                                }),
                            )}
                            teacherClassName={"soundboard__howard-levis"}
                        />
                        <Teacher
                            handleTeacherAudio={() => this.handleTeacherAudio(
                                this.state.toddPadreIndex,
                                Constants.toddPadreClipArray,
                                this.setState({
                                    toddPadreIndex: this.state.toddPadreIndex + 1
                                }),
                            )}
                            teacherClassName={"soundboard__todd-padre"}
                        />
                        <Teacher
                            handleTeacherAudio={() => this.handleTeacherAudio(
                                this.state.samWeathermanIndex,
                                Constants.samWeathermanClipArray,
                                this.setState({
                                    samWeathermanIndex: this.state.samWeathermanIndex + 1
                                }),
                            )}
                            teacherClassName={"soundboard__sam-weatherman"}
                        />
                    </div>
                    <div className="search-clip-wrapper">
                        <SearchBar
                            audioClipSearchValue={this.state.audioClipSearch}
                            onSearchInputChange={this.updateAudioClipSearch.bind(this)}
                            hasSearchValue={this.state.audioClipSearch}
                            clearSearch={this.clearSearch}
                        />
                        <div className="search-clip-wrapper__clip-list">
                            {renderAudioClipBars}
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <a href="mailto:rnrhdev@gmail.com">
                        <h6>made with <i className="fas fa-heart"></i> by rnrh</h6>
                    </a>
                </footer>
            </div>
        );
    }
}

export default Soundboard;

class Teacher extends Component {
    render() {
        return (
            <div
                onClick={this.props.handleTeacherAudio}
                className={this.props.teacherClassName}
            />
        );
    }
}
