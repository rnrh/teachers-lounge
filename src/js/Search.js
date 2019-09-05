import React, {Component} from 'react';

class AudioClipBar extends Component {
    render() {
        var clipUrl = this.props.clipUrl;
        return (
            <div className="audio-clip-bar">
                <div
                    className="audio-clip-bar__play-icon"
                    onClick={this.props.onPlayIconClick}
                >
                    <i className="far fa-play-circle"></i>
                </div>
                <div className="audio-clip-bar__clip-title">
                    <h6>{this.props.clipTitle}</h6>
                </div>
                <div className="audio-clip-bar__clip-tags">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AudioClipBar;
