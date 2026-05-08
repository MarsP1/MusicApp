import {useState, useRef} from "react";

import TestPlaylist from "../../Data/TestPlaylist.jsx";


function Test() {
    

    const audioRef = useRef(null);

    
    const [songCurrent, setSongCurrent] = useState(0);
    const playSong = (index) => {
        audioRef.current.src = TestPlaylist[index].source;
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
            setSongCurrent(0);
            playSong(0);
            return;
        };
        setSongCurrent(previousIndex);
        playSong(previousIndex);
    };
    return (
        <div>
            
            <h3 style={{ fontWeight: "normal" }}>{TestPlaylist[songCurrent].title}</h3>

            <audio ref={audioRef} controls  />
            <br></br>
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
    );
}
export default Test;

