import React, {Component} from 'react';

export class AudioClipBar extends Component {
    render() {
        var audioClipUrl = this.props.audioClipUrl;
        var audioClipTitle = this.props.audioClipTitle;
        return (
            <div className="audio-clip-bar">
                <div
                    className="audio-clip-bar__play-icon"
                    onClick={() => this.props.handleOnAddClipAudio(audioClipUrl, audioClipTitle)}
                >
                    {this.props.isPlaying ? (
                        <i className="fas fa-volume-up"></i>
                    ) : (
                        <i className="fas fa-play"></i>
                    )}
                </div>
                <div className="audio-clip-bar__clip-title">
                    <h6>{this.props.clipTitle}</h6>
                    <p className="audio-clip-bar__clip-title-season-episode">
                        {this.props.season && this.props.episode ? (
                            this.props.season + ' | ' + this.props.episode
                        ) : (
                            null
                        )}
                        {this.props.timestamp &&
                        ', ' + this.props.timestamp
                        }
                    </p>
                </div>
                <div
                    className="audio-clip-bar__clip-tags"
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export class AudioClipBarTag extends Component {
    render() {
        var tagText = this.props.tagText;
        return (
            <p onClick={() => (this.props.handleTagClick(tagText))}>
                {tagText}
            </p>
        )
    }
}

export class SearchBar extends Component {
    render() {
        return (
            <div className="search-clip-wrapper__search">
                <input
                    className="search-input"
                    placeholder="Search"
                    type="text"
                    value={this.props.audioClipSearchValue}
                    onChange={this.props.onSearchInputChange}
                />
                {this.props.hasSearchValue ? (
                    <div
                        className="clear-search"
                        onClick={this.props.clearSearch}
                    >
                        <i className="fas fa-times"></i>
                    </div>
                ) : (
                    <i className="fas fa-search"></i>
                )}
            </div>
        );
    }
}