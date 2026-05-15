import { useRef, useState } from "react";

import { convertFileSrc } from "@tauri-apps/api/core";
import { join } from "@tauri-apps/api/path";
import { resolveResource } from "@tauri-apps/api/path";

import TestPlaylist from "../../Data/TestPlaylist.jsx";

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

        <div>
            <div className="TitleBackground-Playlist">
                <h1 className="Title-Playlist">{playlist.name}</h1>
            </div>
            <audio
                ref={audioRef}
                onEnded={nextSong}
                preload="auto" 
                controls
            />

            
            <img className="CoverWindow-Playlist" src={CoverWindow}/>
            
            <div className="ControlsPanel-Playlist">
                <button>
                    <img className="PreviousButton-Playlist" src={PreviousButton}/>
                </button>
                <img className="LeftBracket-Playlist" src={LeftBracket}/>

                <img className="Menu-Playlist" src={Menu}/>

                <img className="PlayIcon-Playlist" src={PlayIcon}/>
                <img className="ForwardButton-Playlist" src={ForwardButton}/>
                <img className="RightBracket-Playlist" src={RightBracket}/>
                <img className="Circles-Playlist" src={Circles}/>

            </div>
       

            <button onClick={previousSong}>
                Previous
            </button> 

            <button onClick={() => playSong(songCurrent)}>
                Play
            </button>

            <button onClick={nextSong}>
                Next
            </button>                                             
        </div>
    )
};
export default Playlist;