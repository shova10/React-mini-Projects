import React,{useState} from "react";

function AuthButton(){
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin =() => {
        setIsLoggedIn(!isLoggedIn);
    };

    return(
        <div style={{ margin: '20px', padding: '20px', border: '1px solid #eee', borderRadius: '8px', textAlign: 'center' }}>
            <h2>Login/Logout Example</h2>
            {isLoggedIn ? (
              <>  <p>Welcome Back, user!</p>
                <button 
                style={{ backgroundColor: '#dc3545', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                onClick={toggleLogin}>Logout</button>
                </>
            ):(
                <>
                <p>Please log in to continue.</p>
                <button
                style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                onClick={toggleLogin}>Login</button>
                </>


            )
        }
        </div>
    );

}
export default AuthButton;