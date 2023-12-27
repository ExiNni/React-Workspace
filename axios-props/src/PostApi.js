import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Post = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.console.log('일치하는 데이터가 없습니다.', error);
        });
    }, []);
    return(
        <>
        {data ? (
            <ul>
        {data.map(item => (
            <li 
            key={item.id}
            >
                {item.title}
            </li>
        ))}
            </ul>
            ) : (
            <p>데이터가 없습니다.</p>)
        }
        </>
    )
}

export default Post;