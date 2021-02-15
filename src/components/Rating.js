import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const output = [];
  const createRating = () => {
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        output.push(<FaStar key={i + Math.random()} />);
      }
      if (i + 0.5 === rating) {
        output.push(<FaStarHalfAlt key={i + Math.random()} />);
      }
    }
    const totalStars = 5 - output.length;
    for (let i = 0; i < totalStars; i++) {
      output.push(<FaRegStar key={i + Math.random()} />);
    }
    return output;
  };

  return <div className="pt2">{createRating()}</div>;
};

export default Rating;
