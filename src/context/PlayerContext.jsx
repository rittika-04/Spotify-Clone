import React, { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef(null);
    const seekBg = useRef(null);
    const seekbar = useRef(null);

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);


    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio(track.file); // Use `file` instead of `src`
            audioRef.current.crossOrigin = "anonymous";
        } else {
            audioRef.current.src = track.file;
            audioRef.current.load();
        }

        if (playStatus) {
            audioRef.current.play().catch((error) =>
                console.log("Playback error:", error)
            );
        }
    }, [track]);

    const play = () => {
        if (audioRef.current) {
            audioRef.current.play().catch((error) =>
                console.log("Playback error:", error)
            );
            setPlayStatus(true);
        }
    };

    const pause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setPlayStatus(false);
        }
    };

    const playWithId = (id) => {
        if (id < 0 || id >= songsData.length) return; // Prevent invalid song selection
        setTrack(songsData[id]); // Update track

        // Wait for state update before playing the new track
        setTimeout(() => {
            if (audioRef.current) {
                audioRef.current.play();
                setPlayStatus(true);
            }
        }, 100);
    };

    const previous = async () =>{
        if(track.id>0){
            await setTrack(soundData[track.id-1]);
            await audioRef.current.play()
            setPlayStatus(true);
        }
    }

    const next = async () =>{
        if(track.id<songsData.length-1){
            await setTrack(soundData[track.id+1]);
            await audioRef.current.play()
            setPlayStatus(true);
        }
    }

    const contextValue = {
        audioRef,
        seekbar,
        seekBg,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        play,
        pause,
        playWithId,
        previous,next
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
