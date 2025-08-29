
'use client';
import { MouseEvent, TouchEvent, useRef, useState } from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
}

const ProfileCard = ({ name, role, image }: ProfileCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  const handleInteractionStart = () => {
    setIsInteracting(true);
  };

  const handleInteractionEnd = () => {
    setIsInteracting(false);
    if (cardRef.current) {
      cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      cardRef.current.style.transition = 'transform 0.5s ease';
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isInteracting) return;

    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const rotateX = ((y - height / 2) / (height / 2)) * -10;
    const rotateY = ((x - width / 2) / (width / 2)) * 10;

    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    cardRef.current.style.transition = 'transform 0.1s ease';
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isInteracting) return;

    const { clientX, clientY } = e.touches[0];
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const rotateX = ((y - height / 2) / (height / 2)) * -10;
    const rotateY = ((x - width / 2) / (width / 2)) * 10;

    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    cardRef.current.style.transition = 'transform 0.1s ease';
  };

  return (
    <div
      ref={cardRef}
      className="profile-card"
      onMouseEnter={handleInteractionStart}
      onMouseDown={handleInteractionStart}
      onTouchStart={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onMouseUp={handleInteractionEnd}
      onTouchEnd={handleInteractionEnd}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className="card-shine" />
      <div className="card-content">
        <div className="avatar-container">
          <img src={image} alt={`Portrait of ${name}`} className="avatar" />
        </div>
        <div className="info-container">
          <h3 className="name">{name}</h3>
          <p className="role">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
