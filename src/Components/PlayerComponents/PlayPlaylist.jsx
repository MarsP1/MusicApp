import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react";

import { convertFileSrc } from "@tauri-apps/api/core";
import { join } from "@tauri-apps/api/path";
import { resolveResource } from "@tauri-apps/api/path";

import TestPlaylist from "../../Data/TestPlaylist.jsx";

import TitleWindow from "../../assets/TitleWindow.svg";

import CoverWindow from "../../assets/CoverWindow.svg";
import SeekWindow from "../../assets/SeekWindow.svg";
import SeekCircle from "../../assets/SeekCircle.svg";
import ControlsWindow from "../../assets/ControlsWindow.svg";
import PreviousButton from "../../assets/PreviousButton.svg";
import LeftBracket from "../../assets/Left-Bracket.svg";
import Menu from "../../assets/Menu.svg";
import PlayIcon from "../../assets/PlayButton.svg";
import PauseButton from "../../assets/PauseButton.svg";
import ForwardButton from "../../assets/ForwardButton.svg";
import RightBracket from "../../assets/Right-Bracket.svg";
import Circles from "../../assets/circles.svg";


function Playlist({playerid}) {

    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [songCurrent, setSongCurrent] = useState(0);
    const [playButtonState, setPlayButtonState] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [displayInfo, setDisplayInfo] = useState(true);
    const [playlistName, setPlaylistName] = useState("");
    const [playlistThumbnail, setPlaylistThumbnail] = useState("");

    const playlist = TestPlaylist.find(p => p.id == playerid)

    useEffect(() => {
        if (displayInfo) {
            setPlaylistName(playlist.name)
            setPlaylistThumbnail(playlist.thumbnail)
        }

    }, [displayInfo]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.3;
        }

    }, []);

    const handleSeek = (e) => {
        const time = Number(e.target.value);

        audioRef.current.currentTime = time;
        setCurrentTime(time);
    };


    const loadSong = async (index) => { 

        const fileSource = playlist.songs[index].source;
        const resourcePath = await resolveResource(await join("MP3s", fileSource));
        const src = convertFileSrc(resourcePath);

        audioRef.current.src = src;
        audioRef.current.load()

        setSongCurrent(index);

        if (displayInfo) {
            setDisplayInfo(false);
        }

    };
    
    const playSong  = async () => {

        await audioRef.current.play();

        setIsPlaying(true);
        setPlayButtonState(false);
    } 

    const pauseSong = async () => {
        
        await audioRef.current.pause();

        setIsPlaying(false);
        setPlayButtonState(true);
    }
    
    const playpauseSong = async() => {
        if (!isPlaying) {
            if (!audioRef.current.src) {
                await loadSong(songCurrent);
            }
            await playSong();
            setIsPlaying(true);
            setPlayButtonState(false);
    
        } else {
           await pauseSong();
           setIsPlaying(false);
           setPlayButtonState(true);
            
        }
    }


    const nextSong = async () => {
        let nextIndex = songCurrent + 1;
        if (nextIndex >= playlist.songs.length) {
            nextIndex = 0;
        };
        
        await loadSong(nextIndex);
        if (isPlaying) {
            await audioRef.current.play();
        }
    };   

    const previousSong = async () => {
        let previousIndex = songCurrent - 1;
        if (previousIndex < 0) {
            previousIndex = 0;
        };

        if (audioRef.current.currentTime > 3) {
            audioRef.current.currentTime = 0;
        } else {

            await loadSong(previousIndex);
            if (isPlaying) {
                await audioRef.current.play();
            }
        }
    };

    return(

        <div className="Playlist-Container">
            
            <div className="Title-Container">
                <img src={TitleWindow} className="TitleWindow"/>
                <h3 className="TitleText" style={{ fontWeight: "normal" }}>{displayInfo && playlistName || playlist.songs[songCurrent]?.title}</h3>
            </div>

            <div className="Cover-Container">
                <img src={CoverWindow} className="CoverWindow"/>
                <img src={displayInfo && playlistThumbnail || playlist.songs[songCurrent]?.art} className="CoverArt"/>
                <div className="Seek-Container">
                    <img src={SeekWindow} className="SeekWindow"/>
                    <img src={SeekCircle} style={{left: `${duration ? (currentTime / duration) * 100 : 0}%`}} className="SeekCircle"/>
                        <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={currentTime}
                            onChange={handleSeek}
                            className="SeekControl"
                        />

                </div>
            </div>
                
            <div className="Controls-Container">
                <audio className="AudioPlayer"
                    ref={audioRef}
                    onEnded={nextSong}
                    onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                    onLoadedMetadata={() => setDuration(audioRef.current.duration)}
                    preload="auto" 
                    
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
                    <button onClick={playpauseSong} className="PlayButton-Button">
                        <img src={playButtonState ? PlayIcon : PauseButton} className="PlayButton-Icon" />
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