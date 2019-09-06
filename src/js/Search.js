import React, {Component} from 'react';
import Constants from "./Constants";
import PlayAudio from 'react-simple-audio-player';

export class AudioClipBar extends Component {
    render() {
        return (
            <div className="audio-clip-bar">
                {/*<audio id="player" src={this.props.audioClipSource} controls/>*/}
                <PlayAudio url={this.props.audioClipSource} />
                <div className="audio-clip-bar__clip-title">
                    <h6>{this.props.clipTitle}</h6>
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

// export class AudioClipBar extends Component {
//     render() {
//         return (
//             <div className="audio-clip-bar">
//                 <div
//                     className="audio-clip-bar__play-icon"
//                     onClick={this.props.onPlayIconClick}
//                 >
//                     {this.props.audioIsPlaying ? (
//                         <i className="fas fa-volume-up"></i>
//                     ) : (
//                         <i className="far fa-play-circle"></i>
//                     )}
//                 </div>
//                 <div className="audio-clip-bar__clip-title">
//                     <h6>{this.props.clipTitle}</h6>
//                 </div>
//                 <div
//                     className="audio-clip-bar__clip-tags"
//                 >
//                     {this.props.children}
//                 </div>
//             </div>
//         );
//     }
// }

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
            <div className="search">
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
