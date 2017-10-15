import React from 'react';
import Album from './Album';
import LastFM from '../Helpers/LastFMApi';

export default class MusicGrid extends React.Component{
    constructor(props){
        super(props);
        this.lastFM = new LastFM("adac487af50b22e9267cfa17bc80c8fb");
        this.state = {
            albums: []
        }
    }

    componentDidMount(){
        const user = "koen028";
        this.lastFM.userTopAlbums(user).then((data) => {
            this.setState({
                albums: data.topalbums.album
            })
        });
    }

    render(){
        let albumCovers = this.state.albums.map((album) => {
            return <Album key={JSON.stringify(album)} album={album}/>
        });

        return(
            <div className="musicgrid">
                {albumCovers}
            </div>
        );
    }
}