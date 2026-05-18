import { Link } from "react-router-dom"
import { useRef, useState } from "react";

import { convertFileSrc } from "@tauri-apps/api/core";
import { join } from "@tauri-apps/api/path";
import { resolveResource } from "@tauri-apps/api/path";

import TestPlaylist from "../../Data/TestPlaylist.jsx";

import TitleWindow from "../../assets/TitleWindow.svg";

import CoverWindow from "../../assets/CoverWindow.svg";
import ControlsWindow from "../../assets/ControlsWindow.svg";
import PreviousButton from "../../assets/PreviousButton.svg";
import LeftBracket from "../../assets/Left-Bracket.svg";
import Menu from "../../assets/Menu.svg";
import PlayIcon from "../../assets/PlayButton.svg";
import ForwardButton from "../../assets/ForwardButton.svg";
import RightBracket from "../../assets/Right-Bracket.svg";
import Circles from "../../assets/circles.svg";



function Playlist({playerid}) {

    const playlist = TestPlaylist.find(p => p.id == playerid)

    if (!playlist) {
        return <h1>Playlist not found</h1>
    }


    const audioRef = useRef(null);
    const [songCurrent, setSongCurrent] = useState(0);

    const playSong = async (index) => { 
        if (!audioRef.current) {
            return;
        }

        const fileSource = playlist.songs[index].source;
        const resourcePath = await resolveResource(await join("MP3s", fileSource));
        const src = convertFileSrc(resourcePath);

        audioRef.current.src = src;
        audioRef.current.play();
    };

    const nextSong = () => {
        let nextIndex = songCurrent + 1;
        if (nextIndex >= TestPlaylist.length) {
            nextIndex = 0;
        };
        
        setSongCurrent(nextIndex);
        playSong(nextIndex);
    };   

    const previousSong = () => {
        let previousIndex = songCurrent - 1;
        if (previousIndex < 0) {
            previousIndex = 0;
        };
        setSongCurrent(previousIndex);
        playSong(previousIndex);
    };

    return(


        
        <div className="Playlist-Container">
            <div className="Title-Container">
                <img src={TitleWindow} className="TitleWindow"/>
                <h3 className="TitleText" style={{ fontWeight: "normal" }}>{playlist.songs[songCurrent].title}</h3>
            </div>

            <div className="Cover-Container">
                <img src={CoverWindow} className="CoverWindow"/>
                <img src={playlist.songs[songCurrent].art} className="CoverArt"/>
            </div>
                
            <div className="Controls-Container">
                <audio className="AudioPlayer"
                    ref={audioRef}
                    onEnded={nextSong}
                    preload="auto" 
                    controls
                 />
                <img className="ControlsWindow" src={ControlsWindow}/>

                <div className="LeftSide-Frame">
                    <button onClick={previousSong} className="PreviousButton-Button">
                        <img src={PreviousButton} className="PreviousButton-Icon" />
                    </button>

                 
                    <img src={LeftBracket} className="LeftBracket-Icon" />
                    

                    <Link to="/" className="Menu-Link">
                        <img src={Menu} className="Menu-Icon" />
                    </Link>
                </div>
                          
                <div className="Center-Frame">
                    <button onClick={() => playSong(songCurrent)} className="PlayButton-Button">
                        <img src={PlayIcon} className="PlayButton-Icon" />
                    </button>
                </div>
          
                <div className="RightSide-Frame">
                    <button onClick={nextSong} className="ForwardButton-Button">
                        <img src={ForwardButton} className="ForwardButton-Icon"/>
                    </button>
                
                    <img src={RightBracket} className="RightBracket-Icon"/>
                
                    <button className="Circles-Button">
                        <img src={Circles} className="Circles-Icon"/>
                    </button>
                </div> 
            
            </div>                              
        </div>
    )
};
export default Playlist;

//