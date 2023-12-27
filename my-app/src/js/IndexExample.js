import React, {useState} from "react";

function IndexExample(){
    // 빈 글자를 나타낼 때 '', "" 상관 없이 사용 가능
    const [inputText, setInputText] = useState('');

    const handleChange = (e) => {
        setInputText(e.target.value);
        // target: 사용자가 작성하거나 입력한 html 입력란을 나타냄
        // value: 사용자가 입력한 값을 가져옴
        // target, value, select 나 체크박스 button input 등 어디서든 쓸 수 있음
    }

    return (
        <div>
            <input type="text" 
            value={inputText} 
            onChange={handleChange}/>
            <p>내가 작성한 글: {inputText}</p>
        </div>
    )
}

export default IndexExample;