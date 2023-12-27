import React, {useState, useEffect} from "react";
import axios from "axios";

const DogImage = () => {
    const [imgUrl, setImgUrl] = useState('');

    useEffect(() =>{
        axios.get('https://api.thedogapi.com/v1/images/search')
        .then(response => {
            setImgUrl(response.data[0].url);
            
        })
        .catch(error => {
            console.console.log('일치하는 데이터가 없습니다.', error);
        });
    }, []);
    return(
        <>
        <h2>귀여운 강아지</h2>
        {imgUrl && <img src={imgUrl} />}
        </>
    )
}

export default DogImage;
