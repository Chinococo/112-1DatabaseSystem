import React from 'react';
import MovieTheaterName from '../routes/MovieTheaterName';
import PromotionTime from '../routes/PromotionTime';
import MovieScreeningTime from '../routes/MovieScreeningTime';

const App = () => {
    return (
        <div>
            <MovieTheaterName />
            <PromotionTime />
            <MovieScreeningTime />
        </div>
    );
};

export default App;