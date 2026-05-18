import { useParams } from "react-router-dom"

import Playlist from "../Components/PlayerComponents/PlayPlaylist";
import TestPlaylist from "../Data/TestPlaylist.jsx";

import "../CSS/Player.css";




function Player() {

    const { id } = useParams();
    
    

    return (

        <>
            <Playlist playerid={id}/>
            

        </>
    )
}
export default Player