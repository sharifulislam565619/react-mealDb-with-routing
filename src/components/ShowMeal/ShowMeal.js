import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ShowMeal = (props) => {
  const { idMeal, strMeal, strMealThumb, strInstructions } = props.meal

  const url = `/details/${idMeal}`
  const history = useHistory()
  const handleClick = () => {
    history.push(url)
  }
  return (
    <div className="col-md-4 col-sm-12">
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={strMealThumb} />
          <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
          </Card.Body>
          <Card.Text>
            {strInstructions?.slice(0, 100)}
          </Card.Text>
          <Button onClick={handleClick} variant="primary">Details</Button>

        </Card>
      </CardGroup>

    </div>
  );
};

export default ShowMeal;