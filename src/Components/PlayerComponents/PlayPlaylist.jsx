import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react";

import { convertFileSrc } from "@tauri-apps/api/core";
import { join } from "@tauri-apps/api/path";
import { resolveResource } from "@tauri-apps/api/path";

import TestPlaylist from "../../Data/TestPlaylist.jsx";

import TitleWindow from "../../assets/TitleWindow.svg";

import CoverWindow from "../../assets/CoverWindow.svg";
import SeekWindow from "../../assets/SeekWindow.svg";
import VolumeWindow from "../../assets/VolumeWindow.svg";
import VolumeCircle from "../../assets/VolumeCircle.svg";
import SeekCircle1 from "../../assets/SeekCircle1.svg";
import SeekCircle2 from "../../assets/SeekCircle2.svg";
import SeekCircle3 from "../../assets/SeekCircle3.svg";
import ControlsWindow from "../../assets/ControlsWindow.svg";
import PreviousButton from "../../assets/PreviousButton.svg";
import LeftBracket from "../../assets/Left-Bracket.svg";
import Menu from "../../assets/Menu.svg";
import PlayIcon from "../../assets/PlayButton.svg";
import PauseButton from "../../assets/PauseButton.svg";
import ForwardButton from "../../assets/ForwardButton.svg";
import RightBracket from "../../assets/Right-Bracket.svg";
 

function Playlist({playerid}) {

    const audioRef = useRef(null);
    const [playerMode, setPlayerMode] = useState("seek");
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [songCurrent, setSongCurrent] = useState(0);
    const [playButtonState, setPlayButtonState] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [displayInfo, setDisplayInfo] = useState(true);
    const [playlistName, setPlaylistName] = useState("");
    const [playlistThumbnail, setPlaylistThumbnail] = useState("");
    const [isShuffle, setIsShuffle] = useState(false);
    const [shuffledOrder, setShuffledOrder] = useState([]);
    const [shufflePosition, setShufflePosition] = useState(0);

    const playlist = TestPlaylist.find(p => p.id == playerid)

    if (!playlist) {
        return (
            <div className="Playlist-Container">
                <h1>Playlist not found</h1>
            </div>
        );
    }

    useEffect(() => {
        if (displayInfo) {
            setPlaylistName(playlist.name)
            setPlaylistThumbnail(playlist.thumbnail)
        }

    }, [displayInfo]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }

    }, [volume]);



    const handleSeek = (e) => {
        const time = Number(e.target.value);

        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };


    const handleVolume = (e) => {
        const newVolume = Number(e.target.value);
        setVolume(newVolume);

        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
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
    };

    const pauseSong = async () => {
        
        await audioRef.current.pause();

        setIsPlaying(false);
        setPlayButtonState(true);
    };
    
    const playpauseSong = async() => {
        if (!isPlaying) {
            if (!audioRef.current.src) {
                await loadSong(songCurrent);
            }

            await playSong();

    
        } else {
           await pauseSong();

            
        }
    };

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

    const shufflePlaylist = async () => {
        const order = playlist.songs.map((_, index) => index);

        for (let i = order.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [order[i], order[j]] = [order[j], order[i]];
        }

        setShuffledOrder(order);
        setShufflePosition(0);
        setIsShuffle(true);

        await loadSong(order[0]);

        if (isPlaying) {
            await audioRef.current.play();
        }
    };

    const nextShuffleSong = async () => {
        const nextPosition = shufflePosition + 1;

        if (nextPosition >= shuffledOrder.length) {
            setShufflePosition(0);
            await loadSong(shuffledOrder[0]);

            if (isPlaying) {
                await audioRef.current.play();
            }

            return;
        }

        setShufflePosition(nextPosition);
        await loadSong(shuffledOrder[nextPosition]);

        if (isPlaying) {
            await audioRef.current.play();
        }
    };

    const previousShuffleSong = async () => {
        const previousPosition = shufflePosition - 1;

        if (audioRef.current.currentTime > 3) {
            audioRef.current.currentTime = 0;
            return;
        }

        if (previousPosition < 0) {
            setShufflePosition(0);
            audioRef.current.currentTime = 0;
            return;
        }

        setShufflePosition(previousPosition);
        await loadSong(shuffledOrder[previousPosition]);

        if (isPlaying) {
            await audioRef.current.play();
        }
    };

    const playNext = async () => {
        if (isShuffle) {
            await nextShuffleSong();
        } else {
            await nextSong();
        }
    };

    const playPrevious = async () => {
        if (isShuffle) {
            await previousShuffleSong();
        } else {
            await previousSong();
        }
    };



    return(

        <div className="Playlist-Container">
            
            <div className="Title-Container">
                <img src={TitleWindow} className="TitleWindow"/>
                <h3 className="TitleText" style={{ fontWeight: "normal" }}>{displayInfo && playlistName || playlist?.songs?.[songCurrent]?.title}</h3>
            </div>

            <div className="Cover-Container">
                <img src={CoverWindow} className="CoverWindow"/>
                <img src={displayInfo && playlistThumbnail || playlist?.songs?.[songCurrent]?.art} className="CoverArt"/>
                
                {playerMode == "seek" && (

                    <div className="Seek-Container">   
                        <img src={SeekWindow} className="SeekWindow"/> 
                        <img src={SeekCircle1} style={{left: `${duration ? (currentTime / duration) * 100 : 0}%`}} className="SeekCircle"/>
                            
                        <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={currentTime}
                            onChange={handleSeek}
                            className="SeekControl"
                        />
                    </div>
                )}
            
                {playerMode == "volume" && (

                    <div className="Volume-Container">
                        <img src={VolumeWindow} className="VolumeWindow" />

                        <div 
                            style={{ height: `${volume * 100}%` }}className="VolumeTrail">
                        </div>

                        <img src={VolumeCircle} style={{bottom: `${volume * 100}%`}} className="VolumeCircle"/>

                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolume}
                            className="VolumeControl"
                        />
                        
                    </div>
                )}    
                
            </div>
                
            <div className="Controls-Container">
                <audio className="AudioPlayer"
                    ref={audioRef}
                    onEnded={playNext}
                    onTimeUpdate={() => { 
                        if (audioRef.current) {
                            setCurrentTime(audioRef.current.currentTime);
                        }
                    }}    
                    onLoadedMetadata={() => {
                        if (audioRef.current) {
                            setDuration(audioRef.current.duration);
                        }
                    }}
                    preload="auto" 
                    
                 /> 
                <img className="ControlsWindow" src={ControlsWindow}/>

                <div className="LeftSide-Frame">
                    <button onClick={playPrevious} className="PreviousButton-Button">
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
                    <button onClick={playNext} className="ForwardButton-Button">
                        <img src={ForwardButton} className="ForwardButton-Icon"/>
                    </button>
                
                    <img src={RightBracket} className="RightBracket-Icon"/>
                
                    <div  className="Circles-Container">

                        <button onClick={() => setPlayerMode("seek")} className="Circles-Button">
                            <img src={SeekCircle1} className="Seek-Circle"/>
                        </button>

                        <button onClick={() => setPlayerMode("volume")} className="Circles-Button">
                            <img src={SeekCircle2} className="Volume-Circle"/>
                        </button>

                        <button onClick={shufflePlaylist} className="Circles-Button">
                            <img src={SeekCircle3} className="Shuffle-Circle"/>
                        </button>
                            
                    </div>
                </div> 
            
            </div>                              
        </div>
    );
}

export default Playlist;

