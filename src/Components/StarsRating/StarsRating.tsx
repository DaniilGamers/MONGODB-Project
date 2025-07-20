import React from 'react';
import StarRatings from 'react-star-ratings'
import css from './StarsRating.module.css'


interface StarsRatingProps {
    rating: number;
}

const StarsRating: React.FC<StarsRatingProps> = ({ rating }) => {
    return (
        <div className={css.starRatingBox}>
            <StarRatings
            rating={rating / 2}
            starRatedColor="gold"
            numberOfStars={5}
            name='rating'
            starDimension="35px"
            starSpacing="2px"/>
        </div>
    );
};

export default StarsRating;