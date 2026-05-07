import {useRef} from "react";


function Test() {
    const audioRef = useRef(null);

    const songs = [
        "/MP3s/maroon5-sugar.mp3",
    ];

    const playSong = (src) => {
        if (audioRef.current) {
            audioRef.current.src = src;
            audioRef.current.load();
            audioRef.current.play();
        }
    };

    return (
        <div>
            <audio ref={audioRef} controls />
            {songs.map((song, index) => (
                <button key={index} onClick={() => playSong(song)}>
                    Play Song {index + 1}
                </button>
            ))}
        </div>
    );
}
export default Test;

