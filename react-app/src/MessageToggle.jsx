import React, {useState} from "react";

function MessageToggle() {
    const [showMessage, setShowMessage] = useState(false);

    const toggleMessage = () =>{
        setShowMessage(!showMessage);
    };

    return (
        <div>
        <h2>Show/Hide Message</h2>
        <button onClick={toggleMessage}>{showMessage ? 'Hide Message': 'Show Message'}</button>

        {
            showMessage && (
                <p>Hello! This is a coditionally rendered message. </p>
            )}
            {
                showMessage? (
                    <p>Hello! This is a coditionally rendered message. </p>
                ) : (
                    <p>Message is currently hidden</p>
                )}
        </div>
    );


}
export default MessageToggle;