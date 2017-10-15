import React from 'react';
import PropTypes from 'prop-types';

export default class Album extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.album.name,
            artist: this.props.album.artist.name,
            playcount: this.props.album.playcount,
            cover: this.props.album.image[this.props.album.image.length - 1]["#text"]
        };
    }
    render(){
        return(
            <div className="musicgrid__cover">
                <img src={this.state.cover}/>
            </div>
        );
    }
}

Album.propTypes = {
    album: PropTypes.object
};