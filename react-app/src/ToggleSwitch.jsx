import React, {useState} from "react";

function ToggleSwitch() {

    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(!isOn);
    };

    const switchStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: isOn ? 'green' : 'red', // Green when On, Red when Off
    color: 'white',
    fontWeight: 'bold',
    display: 'inline-block', // To make buttons appear on the same line
    margin: '5px'
    };

    return(
        <div>
            <h2>Toggle Switch</h2>
            <p>Status: {isOn ? 'ON' : 'OFF'}</p>
            <button style={switchStyle} onClick={toggle}>{isOn ? 'ON' : 'OFF'}</button>
            {isOn&& <p>The switch is currently active.</p> }
        </div>
    );
}

export default ToggleSwitch;