import {useState, useRef} from "react";

import { convertFileSrc } from "@tauri-apps/api/core";
import { join } from "@tauri-apps/api/path";
import { resolveResource } from "@tauri-apps/api/path";


import TestPlaylist from "../../Data/TestPlaylist.jsx";
import PlayIcon from "../../assets/PlayIcon.svg";


function Test() {
    
    const audioRef = useRef(null);
    const [songCurrent, setSongCurrent] = useState(0);


    const playSong = async (index) => { 
        if (!audioRef.current) {
            return;
        }

        const fileSource = TestPlaylist[index].source;
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


    return (
        <div>
            
            <h3 style={{ fontWeight: "normal" }}>{TestPlaylist[songCurrent].title}</h3>

            <audio 
                ref={audioRef}
                onEnded={nextSong}
                preload="auto" 
                controls
                
            />

            <br></br>
            
            <button onClick={previousSong}>
                Previous
            </button>

            <button className="Play-Button" onClick={() => playSong(songCurrent)}>
                <img src={PlayIcon} className="Play-Icon"/>
            </button>

            <button onClick={nextSong}>
                Next
            </button>

        
            
        </div>
        
    );
}
export default Test;

