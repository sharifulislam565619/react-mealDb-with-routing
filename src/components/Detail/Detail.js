import React from 'react';
import { Card } from 'react-bootstrap';

const Detail = (props) => {
    const { strMeal, strMealThumb, strInstructions } = props.detail
    return (
        <div className="text-center">
            <Card.Img className="w-25" src={strMealThumb} alt="Card image" />
            <h2>{strMeal}</h2>
            <p>{strInstructions}</p>


        </div>
    );
};

export default Detail;