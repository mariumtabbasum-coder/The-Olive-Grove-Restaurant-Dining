import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Film, ChefHat, Sparkles, RotateCcw } from 'lucide-react';
import { BotanicalLeaf } from './BotanicalLeaf';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  initialTab?: 'video' | 'story';
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title = 'Culinary Kitchen Ambience — The Olive Grove',
}) => {
  const [videoSource, setVideoSource] = useState<'ambience' | 'plating'>('ambience');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentVideoSrc =
    videoSource === 'ambience'
      ? '/assets/videos/kitchen-ambience.mp4'
      : '/assets/videos/kitchen-plating.mp4';

  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // Autoplay policy handled gracefully
          setIsPlaying(false);
        });
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isOpen, videoSource]);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="modal-overlay-custom" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-dialog-custom"
        style={{
          maxWidth: '880px',
          background: '#092017',
          color: '#ffffff',
          borderRadius: '24px',
          border: '1.5px solid var(--color-gold)',
          overflow: 'hidden',
          boxShadow: '0 24px 70px rgba(0,0,0,0.6)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            borderBottom: '1px solid rgba(197, 160, 89, 0.3)',
            background: 'rgba(9, 32, 23, 0.98)',
          }}
        >
          <div className="d-flex align-items-center gap-2">
            <span
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'var(--color-gold)',
                color: '#092017',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Film size={16} />
            </span>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#ffffff', fontWeight: 600 }}>
              {title}
            </span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <button
              type="button"
              onClick={() => setVideoSource(videoSource === 'ambience' ? 'plating' : 'ambience')}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                color: 'var(--color-gold-bright)',
                border: '1px solid var(--color-gold-border)',
                borderRadius: '9999px',
                padding: '5px 14px',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {videoSource === 'ambience' ? 'Switch to Plating View' : 'Switch to Kitchen Sauté Feed'}
            </button>

            <button
              className="modal-close-btn"
              style={{
                position: 'static',
                background: 'rgba(255, 255, 255, 0.14)',
                color: '#ffffff',
                width: '32px',
                height: '32px',
              }}
              onClick={onClose}
              aria-label="Close video player"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000000' }}>
          <video
            ref={videoRef}
            key={currentVideoSrc}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            controls
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            src={currentVideoSrc}
          >
            Your browser does not support the HTML5 video element.
          </video>

          {/* Quick Floating Over-Video Controls */}
          <div
            style={{
              position: 'absolute',
              bottom: '14px',
              left: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              zIndex: 10,
              pointerEvents: 'auto',
            }}
          >
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              style={{
                background: 'rgba(9, 32, 23, 0.82)',
                color: 'var(--color-gold-bright)',
                border: '1px solid var(--color-gold-border)',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(6px)',
              }}
            >
              {isPlaying ? <Pause size={17} /> : <Play size={17} fill="currentColor" />}
            </button>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              style={{
                background: 'rgba(9, 32, 23, 0.82)',
                color: '#ffffff',
                border: '1px solid var(--color-gold-border)',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(6px)',
              }}
            >
              {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
            </button>

            <button
              type="button"
              onClick={handleRestart}
              aria-label="Restart video"
              style={{
                background: 'rgba(9, 32, 23, 0.82)',
                color: '#ffffff',
                border: '1px solid var(--color-gold-border)',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(6px)',
              }}
            >
              <RotateCcw size={15} />
            </button>
          </div>
        </div>

        {/* Description & Ambience Details */}
        <div style={{ padding: '22px 26px', background: '#092017' }}>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="d-flex align-items-center gap-2">
              <ChefHat size={18} color="var(--color-gold)" />
              <strong style={{ color: 'var(--color-gold-bright)', fontSize: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Live From The Pass • Executive Kitchen
              </strong>
            </div>
            <span
              style={{
                fontSize: '0.76rem',
                color: '#d4ded8',
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '3px 10px',
                borderRadius: '9999px',
                border: '1px solid rgba(197, 160, 89, 0.25)',
              }}
            >
              1080p Fine-Dining Ambience
            </span>
          </div>

          <p style={{ color: '#c4d7cd', fontSize: '0.92rem', margin: 0, lineHeight: 1.6 }}>
            Experience the culinary craft of The Olive Grove kitchen. From the delicate searing of fresh Atlantic salmon to hand-twirling truffle fettuccine and crafting our signature molten lava ganache, our chefs transform seasonal Mediterranean harvests into unforgettable plates.
          </p>
        </div>
      </div>
    </div>
  );
};
