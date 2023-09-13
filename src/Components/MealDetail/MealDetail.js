import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const [mealDetail, setMealDetail] = useState([]);

    const id = useParams();
    // console.log(id);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id.idmeal}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setMealDetail(data.meals[0]));
    }, []);
    // console.log(mealDetail);
    const { idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb, strSource, strYoutube } = mealDetail;

    return (
        <div>
            <h1 className='text-3xl font-bold mt-10'> Meal Name: {strMeal}</h1>
            <h3>This is a {strArea} meal with {strCategory}</h3>
            <img className='mx-auto' src={strMealThumb} alt="" />
            <p className='font-semibold'>Meal Instruction: {strInstructions}</p>
            <a href={strSource} target='_blank'>Visit Meal Source link: www.bbcgoodfood.com</a>
            <div>
                <a className='' href={strYoutube} target='_blank'>YouTube link here.</a>

            </div>
        </div>
    );
};

export default MealDetail;