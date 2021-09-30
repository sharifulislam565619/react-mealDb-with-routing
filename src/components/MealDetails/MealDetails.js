import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Detail from '../Detail/Detail';

const MealDetails = () => {
    const [details, setDetails] = useState([])

    const { id } = useParams()
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.meals))
    }, [])
    return (
        <div>
            {
                details.map(detail => <Detail

                    key={detail.idMeal}
                    detail={detail}
                >
                </Detail>
                )
            }

        </div>
    );
};

export default MealDetails;