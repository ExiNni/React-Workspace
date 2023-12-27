import React, { useState, useEffect } from "react";
import axios from "axios";

const Joke = () => {
    const [joke, setJoke] = useState('');

    // 비동기 작업 callBack지옥을 방지 
    // promise
    // useContext

    /*
    useEffect(() => {
        axios.get('https://v2.jokeapi.dev/joke/Any')
            .then(response => {
                const { setup, delivery } = response.data;
                setJoke({ setup, delivery });
            })
            .catch(error => {
                console.log('일치하는 데이터가 없습니다.', error);
            });
    }, []);

    return (
        <div>
            <h2>Joke</h2>
            <div>
                <p>{joke.setup}</p>
                <p>{joke.delivery}</p>
            </div>
        </div>
    );
};
*/
}

export default Joke;
