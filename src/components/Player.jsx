import React, { useState, useEffect, useContext } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
    const { track, seekBg, playStatus, play, pause, audioRef, previous, next } = useContext(PlayerContext);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (!audioRef.current) return;

        const audio = audioRef.current;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);

        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("loadedmetadata", updateDuration);

        return () => {
            audio.removeEventListener("timeupdate", updateTime);
            audio.removeEventListener("loadedmetadata", updateDuration);
        };
    }, [audioRef]);

    const togglePlayPause = () => {
        if (!audioRef.current) return;
        playStatus ? pause() : play();
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    const handleSeek = (e) => {
        if (!seekBg.current || !audioRef.current) return;
        const rect = seekBg.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newTime = (clickX / rect.width) * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const handleVolumeChange = (e) => {
        if (audioRef.current) {
            audioRef.current.volume = e.target.value / 100;
        }
    };

    return (
        <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
            <div className="hidden lg:flex items-center gap-4">
                <img className="w-12" src={track.image} alt="Song Art" />
                <div>
                    <p className="font-semibold">{track.name}</p>
                    <p className="text-sm">{track.desc.length > 12 ? `${track.desc.slice(0, 12)}...` : track.desc}</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4">
                    <img className="w-5 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle" />
                    <img onClick={previous} className="w-5 cursor-pointer" src={assets.prev_icon} alt="Previous" />
                    <img className="w-6 cursor-pointer" src={playStatus ? assets.pause_icon : assets.play_icon} alt={playStatus ? "Pause" : "Play"} onClick={togglePlayPause} />
                    <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="Next" />
                    <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="Loop" />
                </div>

                <div className="flex items-center gap-5">
                    <p className="text-xs">{formatTime(currentTime)}</p>
                    <div ref={seekBg} className="w-[60vw] max-w-[500px] h-1 bg-gray-400 rounded-full relative cursor-pointer" onClick={handleSeek}>
                        <div className="h-1 bg-green-500 rounded-full" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
                    </div>
                    <p className="text-xs">{formatTime(duration)}</p>
                </div>
            </div>

            <div className="hidden lg:flex items-center gap-3 opacity-75">
                <img className="w-5" src={assets.volume_icon} alt="Volume" />
                <input type="range" className="w-20 cursor-pointer" min="0" max="100" defaultValue="50" onChange={handleVolumeChange} />
            </div>

            <audio ref={audioRef} src={track.file}></audio>
        </div>
    );
};

export default Player;
