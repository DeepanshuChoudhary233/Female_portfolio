import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './EnhancedProjectCard.css';

export const EnhancedProjectCard = ({
  id,
  title,
  description,
  image,
  technologies = [],
  liveLink,
  githubLink,
  featured = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`enhanced-project-card ${featured ? 'featured' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="project-image-wrapper">
        <img
          src={image}
          alt={title}
          className={`project-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />

        {/* Overlay that appears on hover */}
        {isHovered && (
          <div className="project-overlay">
            <div className="overlay-content">
              {/* Title */}
              <h3 className="overlay-title">{title}</h3>

              {/* Description */}
              <p className="overlay-description">{description}</p>

              {/* Technology Stack */}
              {technologies.length > 0 && (
                <div className="tech-stack">
                  {technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                  {technologies.length > 5 && (
                    <span className="tech-badge more">
                      +{technologies.length - 5}
                    </span>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="action-buttons">
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn live-btn"
                    title="View Live Demo"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn code-btn"
                    title="View Source Code"
                  >
                    <FaGithub /> Code
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Loading skeleton */}
        {!imageLoaded && <div className="image-skeleton" />}
      </div>

      {/* Card Footer - Always Visible */}
      <div className="project-footer">
        <h4 className="project-title">{title}</h4>
        {featured && <span className="featured-badge">Featured</span>}
      </div>
    </div>
  );
};

export default EnhancedProjectCard;