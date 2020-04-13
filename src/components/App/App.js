import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import Business from '../Business/Business'

let business = {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}



function App() {
    let businesses = [Business, Business, Business, Business, Business, Business]
    return (
        <div className = "App">
            <h1>hungo</h1> 
            <SearchBar/>
            <BusinessList businesses={businesses}/>
        </div>
    );
}

export default App;