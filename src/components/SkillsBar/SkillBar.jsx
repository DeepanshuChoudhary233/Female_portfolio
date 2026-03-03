import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './SkillBar.css';

export const SkillBar = ({ name, level, category }) => {
  const [animated, setAnimated] = useState(false);
  const ref = useScrollReveal(0.2);

  useEffect(() => {
    if (ref.current?.classList.contains('revealed')) {
      setAnimated(true);
    }
  }, [ref.current?.classList]);

  return (
    <div ref={ref} className="skill-item scroll-reveal">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>

      <div className="skill-bar-container">
        <div
          className="skill-bar-fill"
          style={{
            width: animated ? `${level}%` : '0%',
            transitionDuration: '1s'
          }}
        />
      </div>

      <span className="skill-category">{category}</span>
    </div>
  );
};

export default SkillBar;