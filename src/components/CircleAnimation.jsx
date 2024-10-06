import React, { useEffect, useState } from 'react';
import '../CSS_Files/CircleAnimation.css'; 
import CircleImage1 from '../Images/Circle1.png';
import CircleImage2 from '../Images/Circle2.png';
import CircleImage3 from '../Images/Circle3.png';
import CircleImage4 from '../Images/Circle4.png';
import CircleImage5 from '../Images/Circle5.png';
import CircleImage6 from '../Images/Circle6.png';

const AnimatedCircles = () => {
  const [maxHeight, setMaxHeight] = useState(0);
  const [heights, setHeights] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      setMaxHeight(prev => (prev < 200 ? prev + 1 : 0));
      animationFrameId = requestAnimationFrame(animate);
    };

    animate(); // Start the animation

    return () => cancelAnimationFrame(animationFrameId); // Cleanup
  }, []);

  useEffect(() => {
    setHeights([
      Math.max(0, Math.min(maxHeight * 0.1, 140)),
      Math.max(0, Math.min(maxHeight * 0.3, 140)),
      Math.max(0, Math.min(maxHeight * 0.5, 140)),
      Math.max(0, Math.min(maxHeight * 0.7, 140)),
      Math.max(0, Math.min(maxHeight * 0.9, 140)),
      Math.max(0, Math.min(maxHeight, 140)),
    ]);
  }, [maxHeight]);

  const images = [
    CircleImage1,
    CircleImage2,
    CircleImage3,
    CircleImage4,
    CircleImage5,
    CircleImage6
  ];

  const colors = ['#ADD8E6', '#FFFFE0', '#ADD8E6', '#0000FF', '#FFB6C1', '#FFA07A'];

  return (
    <div className="container">
      {heights.map((height, index) => (
        <div key={index} className="circle-container">
          <div 
            className="bar" 
            style={{ height: `${height}px`, backgroundColor: colors[index] }} 
          />
          <img 
            src={images[index]} 
            alt={`circle-${index}`} 
            className="circle" 
            style={{ transform: `translateY(-${height}px)` }} 
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedCircles;
