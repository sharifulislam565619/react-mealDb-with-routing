import React, { useEffect, useState } from 'react';
import { FormControl } from 'react-bootstrap';
import ShowMeal from '../ShowMeal/ShowMeal';

const Restaurant = () => {

    const [searchResult, setSearchResult] = useState('')
    const [meals, setMeals] = useState([])


    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchResult}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [meals])

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase()

        setSearchResult(searchValue)
    }
    return (
        <div>
            <div className="text-center py-2">
                <FormControl className="w-50  mx-auto" onChange={handleSearch}
                    placeholder="Search food"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />

            </div>
            <div className="row px-4 g-4 text-center">
                {
                    meals.map(meal => <ShowMeal
                        key={meal.idMeal}
                        meal={meal}
                    ></ShowMeal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;