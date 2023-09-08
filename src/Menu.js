import './App.css';
import React, { useState, useEffect, useCallback } from 'react';

function Menu() {
    const [dishName, setDishName] = useState(''); // State to store the dish name
    const [arrayofmenu, setArrayofmenu] = useState([]);

    const handleSearch = useCallback(async () => {
        try {
            const response = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes?search=${dishName}`
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const menuData = data.data || [];

            console.log(menuData);

            setArrayofmenu(menuData.recipes);
        } catch (error) {
            console.error('Error fetching menu data:', error);
        }
    }, [dishName]);

    useEffect(() => {
        // Fetch data initially with an empty dish name (e.g., pizza)
        handleSearch();
    }, [handleSearch]);

    const handleInputChange = (event) => {
        setDishName(event.target.value);
    };

    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className='menudiv'>
            <input
                type='text'
                placeholder='Enter a dish name and press Enter'
                value={dishName}
                onChange={handleInputChange}
                onKeyPress={handleEnterKey}
            />
            {arrayofmenu.map((singlemenu) => (
                <SingleMenu key={singlemenu.id} dataofsinglemenu={singlemenu} />
            ))}
        </div>
    );
}

function SingleMenu(props) {
    const { title, publisher, image_url } = props.dataofsinglemenu || {};
    const likes = Math.round(Math.random() * 100);

    return (
        <div className='singlemenudiv'>
            <div className='imagediv'>
                <img src={image_url} alt='' />
            </div>
            <div className='textcontentofdiv'>
                <div className='headingofdiv'>{title}</div>
                <p className='descriptionofdiv'>{publisher}</p>
                <p className='likesofdiv'>{likes}</p>
            </div>
        </div>
    );
}

export default Menu;
