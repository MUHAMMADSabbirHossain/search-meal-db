import React, { useEffect, useState } from 'react';
import "./Home.css";
import Meals from '../Meals/Meals';

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);


    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText]);

    const searchFood = (event) => {
        console.log(event.target.value);
        setSearchText(event.target.value);
    };
    return (
        <main>
            <div>
                <input className='border-4 border-gray-200 mt-10 rounded-md' onChange={searchFood} type="text" placeholder='Search your Food here...' />
                <h2>Meals Items: {meals.length}</h2>
            </div>
            <section className='sm:grid grid-cols-12 mx-4'>
                <div className='col-span-9 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        meals.map(meal => <Meals meal={meal} key={meal.idMeal}></Meals>)
                    }
                </div>

                <div className='col-sapn-3'>
                    Cart Section
                </div>
            </section>
        </main>

    );
};

export default Home;