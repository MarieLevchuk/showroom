import {configureStore} from '@reduxjs/toolkit';
import carsReducer from './carsSlice.js';
import featuredCarsReducer from './featuredCarsSlice.js';

const store = configureStore({
    reducer: {
        cars: carsReducer,
        featuredCars: featuredCarsReducer
    }
});

export default store;