'use client';

import React from 'react';

const Pattern = () => {
  const circles = Array.from({ length: 20 }).map((_, index) => ({
    size: Math.random() * 100 + 50, // Random size between 50 and 150
    left: Math.random() * 100 + '%', // Random position
    top: Math.random() * 100 + '%', // Random position
    key: index
  }));

  const squares = Array.from({ length: 20 }).map((_, index) => ({
    size: Math.random() * 100 + 50, // Random size between 50 and 150
    left: Math.random() * 100 + '%', // Random position
    top: Math.random() * 100 + '%', // Random position
    key: index + 20 // Ensure unique keys
  }));

  return (
    <div className="pattern">
      {circles.map(circle => (
        <div
          key={circle.key}
          className="pattern-circle"
          style={{
            width: circle.size,
            height: circle.size,
            left: circle.left,
            top: circle.top
          }}
        />
      ))}
      {squares.map(square => (
        <div
          key={square.key}
          className="pattern-square"
          style={{
            width: square.size,
            height: square.size,
            left: square.left,
            top: square.top
          }}
        />
      ))}
    </div>
  );
};

export default Pattern; 