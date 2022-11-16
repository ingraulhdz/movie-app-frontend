import React from 'react';
import no_time_die from '../assets/img/no_time_die.png';

const MainMovie = () => {
    return (
       
    <div class="main-movie">

    <div class="main-movie-info">

        <div class="watch-btn">

            <button>Watch Trailer</button>

        </div>
        <p class="description">
            James bond has left active service. his peace is shor James bond has
            left active service. his peace is shor James bond has left active
            service. his peace is shor
        </p>

    </div>

    <div class="main-movie-img">
        <img src={no_time_die}/>

    </div>


</div>
    );
};

export default MainMovie;