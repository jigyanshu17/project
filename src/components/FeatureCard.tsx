import React, { useState, useRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const updateMousePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={updateMousePosition}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative rounded-xl transition-all duration-300"
    >
      {/* Border glow */}
      <div
        className="absolute -inset-[2px] rounded-xl transition-opacity duration-500"
        style={{
          background: `radial-gradient(
            250px circle at ${position.x}px ${position.y}px,
            rgba(59, 130, 246, 0.7),
            transparent 40%
          )`,
          opacity: isHovering ? 1 : 0,
          zIndex: 0,
        }}
      />

      {/* Inner glow */}
      {isHovering && (
        <div
          className="absolute inset-0 rounded-xl opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(
              250px circle at ${position.x}px ${position.y}px,
              rgba(59, 130, 246, 0.15),
              transparent 40%
            )`,
            zIndex: 1,
          }}
        />
      )}

      {/* Card content */}
      <div className="relative z-10 bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700">
        <div className="text-blue-600 dark:text-blue-400 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;