import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useInitFbSDK } from './fb_init';

let z=""
function App() {
  const isFBSDKInitialized=useInitFbSDK()
  
  const [imageUrl, setImageUrl] = useState("");
  const [postCaption, setPostCaption] = useState("");
  const [isSharingPost, setIsSharingPost] = useState(false);
  const [token,setToken]=useState("")
  const [str,changestr]=useState("")
  
  const logInToFB=()=>
  {
    
    window.FB.login(function(response) {
      //console.log(response)
      
        setToken(`${response.authResponse.accessToken}`)
        //z=response.authResponse.accessToken;
      
      //console.log(response.authResponse.accessToken)
      //console.log('State Values: ',token)
      //console.log(fbUserAcessToken)
      // handle the response
    }, {scope: 'public_profile,email'});
  }
  console.log(token)
  const logOutToFB=()=>
  {

  }
  
  return (
    <div className="App">

      <button onClick={logInToFB}>
        LogIn To Facebook
      </button>
     
      
    </div>
  );
}



export default App;
