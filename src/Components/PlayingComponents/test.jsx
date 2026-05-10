import {useState, useRef} from "react";

import TestPlaylist from "../../Data/TestPlaylist.jsx";
import PlayIcon from "../../assets/PlayIcon.svg";


function Test() {
    

    const audioRef = useRef(null);
    const [songCurrent, setSongCurrent] = useState(0);


    const playSong = (index) => {
        audioRef.current.src = TestPlaylist[index].source;
        if (!audioRef.current) {
            return;
        };
        audioRef.current.load();
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

            <button onClick={() => playSong(songCurrent)}>
                <img src={PlayIcon}/>
            </button>

            <button onClick={nextSong}>
                Next
            </button>
            
        </div>
        
    );
}
export default Test;

