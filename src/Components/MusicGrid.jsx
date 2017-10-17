import React from 'react';
import Album from './Album';
import LastFM from '../Helpers/LastFMApi';

export default class MusicGrid extends React.Component{
    constructor(props){
        super(props);
        this.lastFM = new LastFM("adac487af50b22e9267cfa17bc80c8fb");
        this.state = {
            albums: [],
            albumSize: 300
        };

        this.calculateAlbumSize = this.calculateAlbumSize.bind(this);
        window.addEventListener("resize", this.calculateAlbumSize);
    }

    componentDidMount(){
        const user = "koen028";
        this.lastFM.userTopAlbums(user).then((data) => {
            this.setState({
                albums: data.topalbums.album
            })
        });

        this.calculateAlbumSize();
    }

    calculateAlbumSize(){
        const n = 50;
        const x = window.innerHeight - 8;
        const y = window.innerWidth - 8;
        let px = Math.ceil(Math.sqrt(n*x/y));
        let sx = 0;
        let sy = 0;

        if(Math.floor(px * y / x ) * px < n){
            sx = y / Math.ceil(px * y / x);
        }else{
            sx = x / px;
        }

        let py = Math.ceil(Math.sqrt(n * y / x));

        if(Math.floor(py * x / y) * py < n){
            sy = x / Math.ceil(x * py / y);
        }else{
            sy = y / py;
        }

        let albumSize = (sx <= sy) ? sx : sy;
        /*let fullArea = x * y;
        let coveredArea = albumSize * albumSize;
        let emptyArea = fullArea - coveredArea;*/

        this.setState({
            albumSize: albumSize
        });
    }

    render(){
        let albumCovers = this.state.albums.map((album) => {
            return <Album key={JSON.stringify(album)} album={album} size={this.state.albumSize}/>
        });

        return(
            <div className="musicgrid">
                {albumCovers}
            </div>
        );
    }
}