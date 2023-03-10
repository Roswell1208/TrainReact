import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ListGenresFilm = () => {

    const [data, setData] = useState([]);

    const apiKey = 'bc08065b66f8af32e3e4d206d4f58eb0';

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + apiKey + '&language=en-US').then((response) => {
            console.log(response.data.genres);
            setData(response.data.genres);
        })
    }, []);

    const detailsGenre = (event) => {
        alert(event.target.innerHTML)
    };

    return (
        <div>
            <h2>Liste des genres de films</h2>

            <ul>
                {data.map((data, index) => (
                    <li key={index}>
                        <a onClick={detailsGenre}>{index} - {data.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListGenresFilm;