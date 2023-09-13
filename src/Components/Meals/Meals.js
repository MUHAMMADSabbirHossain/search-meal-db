import React from 'react';
import "./Meals.css";
import { useNavigate } from 'react-router-dom';
import { BeakerIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'

const Meals = ({ meal }) => {
    // console.log(meal);
    const { idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb, } = meal;


    const mealNavigate = useNavigate()
    const mealDetail = () => {
        mealNavigate(`/${idMeal}`);
    }

    return (
        <div >
            <div className=' align-middle hover:cursor-pointer' onClick={mealDetail}>
                <h3 className=' text-2xl font-bold'>{strMeal}</h3>
                <img src={strMealThumb} alt={strMeal} />
                <h6 className='text-lg font-semibold'>From: {strArea}, {strCategory}</h6>
                {/* <p>{strInstructions}</p> */}
            </div>
            <div>
                <button className='bg-indigo-500 text-xl text-white font-bold p-2 rounded-md mx-2'>Add to Cart <ShoppingCartIcon className='w-6 h-6 inline'></ShoppingCartIcon> </button>
                <button className='bg-indigo-500 text-xl text-white font-bold p-2 rounded-md mx-2'>Buy Now</button>
            </div>
        </div>
    );
};

export default Meals;