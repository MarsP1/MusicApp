import { useRef, useState } from "react";

import { convertFileSrc } from "@tauri-apps/api/core";
import { join } from "@tauri-apps/api/path";
import { resolveResource } from "@tauri-apps/api/path";

import TestPlaylist from "../../Data/TestPlaylist.jsx";



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

    return(

        <div>

            <h1>{playlist.name}</h1>

            <audio
                ref={audioRef} 
                controls
            />


            {playlist.songs.map((song, index)=> (
                    <h2>{song.title}</h2>
                
            ))}


            <button onClick={() => playSong(songCurrent)}>
                Play
            </button>                


            


  
                    
  
                  
        </div>
    )
};
export default Playlist;