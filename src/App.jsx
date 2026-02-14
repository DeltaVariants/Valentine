import { useState, useEffect, useRef } from "react";
import CONFIG from "./config.js";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [loveValue, setLoveValue] = useState(100);
  const [showCelebration, setShowCelebration] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Apply theme colors
  useEffect(() => {
    document.title = CONFIG.pageTitle;
    const root = document.documentElement;
    root.style.setProperty('--background-color-1', CONFIG.colors.backgroundStart);
    root.style.setProperty('--background-color-2', CONFIG.colors.backgroundEnd);
    root.style.setProperty('--button-color', CONFIG.colors.buttonBackground);
    root.style.setProperty('--button-hover', CONFIG.colors.buttonHover);
    root.style.setProperty('--text-color', CONFIG.colors.textColor);
    root.style.setProperty('--float-duration', CONFIG.animations.floatDuration);
    root.style.setProperty('--float-distance', CONFIG.animations.floatDistance);
    root.style.setProperty('--bounce-speed', CONFIG.animations.bounceSpeed);
    root.style.setProperty('--heart-explosion-size', CONFIG.animations.heartExplosionSize);
  }, []);

  // Create floating elements
  useEffect(() => {
    const elements = [];
    // Add hearts
    CONFIG.floatingEmojis.hearts.forEach((heart, idx) => {
      elements.push({
        id: `heart-${idx}`,
        emoji: heart,
        type: 'heart',
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 20
      });
    });
    // Add bears
    CONFIG.floatingEmojis.bears.forEach((bear, idx) => {
      elements.push({
        id: `bear-${idx}`,
        emoji: bear,
        type: 'bear',
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 20
      });
    });
    setFloatingElements(elements);
  }, []);

  // Music autoplay
  useEffect(() => {
    if (CONFIG.music.enabled && CONFIG.music.autoplay && audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("Autoplay prevented by browser");
      });
    }
  }, []);

  const moveButton = (e) => {
    const button = e.target;
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
  };

  const showNextQuestion = (questionNumber) => {
    setCurrentQuestion(questionNumber);
  };

  const celebrate = () => {
    setShowCelebration(true);
    // Create heart explosion
    const newElements = [...floatingElements];
    for (let i = 0; i < 50; i++) {
      const randomHeart = CONFIG.floatingEmojis.hearts[Math.floor(Math.random() * CONFIG.floatingEmojis.hearts.length)];
      newElements.push({
        id: `explosion-${i}`,
        emoji: randomHeart,
        type: 'heart',
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 5 + Math.random() * 10
      });
    }
    setFloatingElements(newElements);
  };

  const getLoveMessage = () => {
    if (loveValue >= 5000) return CONFIG.loveMessages.extreme;
    if (loveValue > 1000) return CONFIG.loveMessages.high;
    if (loveValue > 100) return CONFIG.loveMessages.normal;
    return "";
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Floating Elements */}
      <div className="floating-elements">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className={element.type}
            style={{
              left: `${element.left}vw`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`
            }}
          >
            {element.emoji}
          </div>
        ))}
      </div>

      {/* Music Player */}
      {CONFIG.music.enabled && (
        <div className="music-controls">
          <button className="music-btn" onClick={toggleMusic}>
            {isPlaying ? CONFIG.music.stopText : CONFIG.music.startText}
          </button>
          <audio ref={audioRef} loop>
            <source src={CONFIG.music.musicUrl} type="audio/mpeg" />
          </audio>
        </div>
      )}

      {/* Main Container */}
      <div className="container">
        

        {/* Question 1 */}
        {currentQuestion === 1 && !showCelebration && (
          <>
          <h1>Hé luu, {CONFIG.valentineName}</h1>
          <div className="question-section">
            <h2>{CONFIG.questions.first.text}</h2>
            <button className="cute-btn" onClick={(e) => moveButton(e)}>
              {CONFIG.questions.first.yesBtn}
            </button>
            <button className="cute-btn" onClick={(e) => moveButton(e)}>
              {CONFIG.questions.first.noBtn}
            </button>
            <div className="secret-answer">
              <button className="cute-btn special" onClick={() => showNextQuestion(2)}>
                {CONFIG.questions.first.secretAnswer}
              </button>
            </div>
          </div>
          </>
        )}

        {/* Question 2 - Love Meter */}
        {currentQuestion === 2 && !showCelebration && (
          <div className="question-section">
            <h2>{CONFIG.questions.second.text}</h2>
            <div className="love-meter">
              <input
                type="range"
                min="0"
                max="10000"
                value={loveValue}
                className="slider"
                onChange={(e) => setLoveValue(parseInt(e.target.value))}
                style={{
                  width: loveValue > 100 
                    ? `calc(100% + ${((loveValue - 100) / 9900) * window.innerWidth * 0.8}px)` 
                    : '100%'
                }}
              />
              <p>
                <span className="love-value-container">
                  <span>{CONFIG.questions.second.startText}</span> (<span id="loveValue">{loveValue}</span>%)
                </span>
                {loveValue > 100 && (
                  <span className={loveValue >= 5000 ? "super-love" : ""}>
                    {getLoveMessage()}
                  </span>
                )}
              </p>
            </div>
            <button className="cute-btn" onClick={() => showNextQuestion(3)}>
              {CONFIG.questions.second.nextBtn}
            </button>
          </div>
        )}

        {/* Question 3 */}
        {currentQuestion === 3 && !showCelebration && (
          <div className="question-section">
            <h2>{CONFIG.questions.third.text}</h2>
            <button className="cute-btn final-yes" onClick={celebrate}>
              {CONFIG.questions.third.yesBtn}
            </button>
            <button className="cute-btn" onClick={(e) => moveButton(e)}>
              {CONFIG.questions.third.noBtn}
            </button>
          </div>
        )}

        {/* Celebration */}
        {showCelebration && (
          <div className="celebration">
            <h2>{CONFIG.celebration.title}</h2>
            <p className="celebration-text">{CONFIG.celebration.message}</p>
            <img 
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmpvZnd4dnUxYjlxdmZnbzF2djFlM3FreXJ1bzRyc2VkbnI4Y3NoeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ytu2GUYbvhz7zShGwS/giphy.gif" 
              alt="celebration"
              style={{ maxWidth: '300px', marginTop: '20px', borderRadius: '10px' }}
            />
          </div>
        )}
      </div>
    </>
  );
}
