'use client';

import { useState, useRef, useEffect } from 'react';

const playlist = [
  { title: 'ProleteR - Best Tracks (Vinyl Mix)', src: '/music/ProleteR - Best Tracks - Vinyl Mix.mp3' },
];

export default function MusicPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      if (currentTrack < playlist.length - 1) {
        setCurrentTrack(currentTrack + 1);
      } else {
        setCurrentTrack(0);
        setIsPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    const tryPlay = () => {
      if (!audioRef.current) return;
      if (isUserPaused) return;
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => undefined);
    };

    const events: Array<keyof WindowEventMap> = ['click', 'keydown', 'scroll', 'touchstart'];
    events.forEach((event) => window.addEventListener(event, tryPlay, { passive: true }));
    tryPlay();

    return () => {
      events.forEach((event) => window.removeEventListener(event, tryPlay));
    };
  }, [isUserPaused]);

  useEffect(() => {
    const handleVisibility = () => {
      if (!audioRef.current) return;
      if (document.visibilityState === 'visible' && !isUserPaused) {
        setIsPlaying(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [isUserPaused]);

  const togglePlay = () => {
    setIsUserPaused(isPlaying);
    setIsPlaying(!isPlaying);
  };

  const prevTrack = () => {
    setCurrentTrack(currentTrack > 0 ? currentTrack - 1 : playlist.length - 1);
  };

  const nextTrack = () => {
    setCurrentTrack(currentTrack < playlist.length - 1 ? currentTrack + 1 : 0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setProgress(time);
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <audio ref={audioRef} src={playlist[currentTrack]?.src} preload="auto" autoPlay />

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-1/2 -translate-y-1/2 left-6 z-50 w-12 h-12 rounded-full bg-orange-500
                   flex items-center justify-center transition-all duration-300
                   hover:bg-orange-600 hover:scale-110 shadow-lg shadow-orange-500/30
                   animate-music-pulse`}
      >
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </button>

      {/* Player panel */}
      <div
        className={`fixed top-1/2 -translate-y-1/2 left-20 z-40 bg-white/50 backdrop-blur-md border border-[#1a1a2e]/10
                   rounded-2xl p-4 w-72 transition-all duration-300 shadow-xl
                   ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0'}`}
      >
        {/* Track info */}
        <div className="mb-4">
          <p className="text-[#1a1a2e] font-medium truncate">
            {playlist[currentTrack]?.title || 'No track'}
          </p>
          <p className="text-[#5a5a6e] text-sm">
            Track {currentTrack + 1} of {playlist.length}
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-4">
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={progress}
            onChange={handleSeek}
            className="w-full h-1 bg-[#1a1a2e]/10 rounded-full appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3
                     [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-[#0891b2]
                     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
          />
          <div className="flex justify-between text-xs text-[#5a5a6e] mt-1">
            <span>{formatTime(progress)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevTrack}
            className="w-10 h-10 rounded-full bg-[#1a1a2e]/5 flex items-center justify-center
                     hover:bg-[#1a1a2e]/10 transition-colors"
          >
            <svg className="w-4 h-4 text-[#1a1a2e]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z" />
            </svg>
          </button>

          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-[#0891b2] flex items-center justify-center
                     hover:bg-[#0891b2]/80 transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              {isPlaying ? (
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              ) : (
                <path d="M8 5v14l11-7z" />
              )}
            </svg>
          </button>

          <button
            onClick={nextTrack}
            className="w-10 h-10 rounded-full bg-[#1a1a2e]/5 flex items-center justify-center
                     hover:bg-[#1a1a2e]/10 transition-colors"
          >
            <svg className="w-4 h-4 text-[#1a1a2e]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>
        </div>

        {/* Playlist */}
        <div className="mt-4 pt-4 border-t border-[#1a1a2e]/10">
          <p className="text-xs text-[#5a5a6e] mb-2">Playlist</p>
          <div className="space-y-1 max-h-32 overflow-y-auto">
            {playlist.map((track, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTrack(index);
                  setIsPlaying(true);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors
                          ${index === currentTrack
                            ? 'bg-[#0891b2]/20 text-[#0891b2]'
                            : 'text-[#5a5a6e] hover:bg-[#1a1a2e]/5'}`}
              >
                {track.title}
              </button>
            ))}
          </div>
        </div>

        {/* Artist credit */}
        <div className="mt-4 pt-4 border-t border-[#1a1a2e]/10">
          <a
            href="https://www.youtube.com/channel/UC08NVDi0tgVdM6YxHoBPTTw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#5a5a6e] hover:text-[#ff0000] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>ProleteR on YouTube</span>
          </a>
        </div>
      </div>
    </>
  );
}
