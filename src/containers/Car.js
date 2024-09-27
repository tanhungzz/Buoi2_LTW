import { useState } from 'react';
import React from 'react';

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "blue" }; // Cập nhật màu sắc
        });
    };

    return (
        <>
            <h1>Show information of Car:</h1>
            <h2>My brand: {car.brand}</h2>
            <p>Color: {car.color}, Model: {car.model}, Year: {car.year}.</p>
            <button type="button" onClick={updateColor}>Update color: blue</button>
        </>
    );
}

export default Car;