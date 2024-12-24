import React from 'react';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Hero = () => {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals and certified experts"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Rich Content Library",
      description: "Access thousands of courses across various disciplines"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Interactive Learning",
      description: "Engage with peers and instructors in real-time"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Learning",
      description: "Earn recognized certificates upon completion"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 -z-10" />
      
      {/* Hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Transform Your Learning Journey
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Empower your education with our comprehensive learning management system.
            Create, share, and grow with our cutting-edge platform.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transform hover:scale-105 transition-all">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transform hover:scale-105 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Features grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;