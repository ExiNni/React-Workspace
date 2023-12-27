import React, {useState} from "react";

function ToggleButton(){
    //script 공간
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(!isOn);
    }
    return (
        <div>
            {/* 만약에 버튼이 true이면 On false이면 off*/}
            <p>버튼 상태: {isOn ? 'On' : 'Off'}</p>
            <button onClick={toggle}>버튼 상태 변경</button>
        </div>
    )
}

export default ToggleButton;