"use client";
import { useState, useEffect, useRef } from "react";

const ScrollTriggeredVideo = ({ videoSrc, triggerOffset = 100 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scale, setScale] = useState(1); // Start scaled to roughly fill screen
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(-150); // Start above centered text
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = rect.height;

      // Scroll progress calculation
      const scrollProgress = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / (windowHeight + containerHeight * 0.5))
      );

      if (rect.top < windowHeight && rect.bottom > -containerHeight * 0.2) {
        if (!isVisible) {
          setIsVisible(true);
          if (videoRef.current) {
            videoRef.current.play().catch(console.error);
          }
        }

        let newScale,
          newOpacity,
          newTranslateY;

        if (scrollProgress < 0.2) {
          newScale = 1 + scrollProgress * 0.5; // 1 to 1.1 (start roughly filling screen)
          newOpacity = scrollProgress * 5; // 0 to 1
          newTranslateY = -150 + scrollProgress * 300; // -150 to -90
        } else if (scrollProgress < 0.4) {
          const zoomProgress = (scrollProgress - 0.2) / 0.2;
          newScale = 1.1 + zoomProgress * 1.4; // 1.1 to 2.5
          newOpacity = 1;
          newTranslateY = -90 + zoomProgress * 90; // -90 to 0
        } else if (scrollProgress < 0.6) {
          newScale = 2.5;
          newOpacity = 1;
          newTranslateY = 0; // Centered
        } else if (scrollProgress < 0.8) {
          const scaleDownProgress = (scrollProgress - 0.6) / 0.2;
          newScale = 2.5 - scaleDownProgress * 1.5; // 2.5 to 1.0
          newOpacity = 1;
          newTranslateY = scaleDownProgress * 50; // 0 to 50 (slight drop)
        } else {
          const fadeProgress = (scrollProgress - 0.8) / 0.2;
          newScale = 1.0 - fadeProgress * 0.5; // 1.0 to 0.5
          newOpacity = 1 - fadeProgress * 0.7; // 1 to 0.3
          newTranslateY = 50 + fadeProgress * 50; // 50 to 100
        }

        setScale(Math.max(0.1, Math.min(3, newScale)));
        setOpacity(Math.max(0, Math.min(1, newOpacity)));
        setTranslateY(newTranslateY);
      } else {
        if (isVisible) {
          setIsVisible(false);
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }
        setScale(1); // Reset scale to 1 instead of very small
        setOpacity(0);
        setTranslateY(-10); // Reset position above text
      }
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", throttledScroll);
  }, [isVisible, triggerOffset]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[80vh] flex items-center justify-center overflow-hidden bg-[var(--brand-primary)]"
      // style={{ position: "relative" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand-primary)]/50 to-transparent"></div>

      <div
        className="relative z-10 transition-all duration-75 ease-out"
        style={{
          top: 0,
          transform: `translate(-50%, ${translateY}px) scale(${scale})`,
          opacity: opacity,
          transformOrigin: "center center",
          willChange: "transform, opacity",
          margin: "0 auto",
        }}
      >
        <video
          ref={videoRef}
          className="w-[340px] position-relative max-w-6xl h-auto rounded-xl shadow-2xl border border-[var(--brand-secondary)]/20"
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/40 via-transparent to-[var(--brand-secondary)]/10 rounded-xl pointer-events-none"></div>
      </div>

      {isVisible && (
        <div className="absolute inset-0 bg-[var(--brand-primary)]/10 backdrop-blur-[1px]">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[var(--brand-secondary)]/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[var(--brand-accent)]/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
      )}
    </div>
  );
};

export default ScrollTriggeredVideo;
