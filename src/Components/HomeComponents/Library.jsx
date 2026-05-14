import { Link } from "react-router-dom"

import LibraryWindow from "../../assets/LibraryWindow.svg";
import TestPlaylist from "../../Data/TestPlaylist.jsx";

function Library() {

    return (
        <div className="Window-Library">
            <img className="Panel-Library" src={LibraryWindow}/>

            <div className="PlaylistGrid">

                {TestPlaylist.map((playlist) => (
                    <Link className="PlaylistLink" to={`/playlist/${playlist.id}`}>
                        <img className="Playlist" src={playlist.thumbnail}/> 
                    </Link>    
                ))}
                



            </div>

        </div>
    )
}
export default Library
