import {configureStore} from '@reduxjs/toolkit';
import carReducer from './carSlice.js';
import carsReducer from './carsSlice.js';
import featuredCarsReducer from './featuredCarsSlice.js';

const store = configureStore({
    reducer: {
        car: carReducer,
        cars: carsReducer,
        featuredCars: featuredCarsReducer
    }
});

export default store;