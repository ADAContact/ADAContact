// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

import {
    baseUrl, twitterToken, getUserDetails
  } from '../../assets/services';

const apiPath = process.env.REACT_APP_SERVERLESS ? '/.netlify/functions/index' : '/api';

export default function TwitterLogin(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [status, setStatus] = useState();
    const [url, setUrl] = useState();

    const login = () => {
        (async () => {

            try {
                //get oauth
                var response = await fetch(baseUrl + twitterToken);
                var data = await response.json();

                //Oauth Step 2
                window.location.href = `https://api.twitter.com/oauth/authenticate?oauth_token=${data.oauth_token}`;
            } catch (error) {
                console.error(error);
            }

        })();
    }

    const logout = () => {
        (async () => {
            try {
                await axios({
                    url: `${apiPath}/twitter/logout`,
                    method: 'POST'
                });
                setIsLoggedIn(false);
            } catch (error) {
                console.error(error);
            }
        })();
    }

    useEffect(() => {
        (async () => {

            const { oauth_token, oauth_verifier } = queryString.parse(window.location.search);
            if (oauth_token && oauth_verifier) {
                try {
                    var responseJson = [];
                    var response = await fetch(`${baseUrl}${getUserDetails}${oauth_verifier}/${oauth_token}`);
                    responseJson = await response.json();
                    console.log(responseJson);
                    console.log(responseJson.data);
                    if(responseJson){
                        setIsLoggedIn(true);
                        setName('@'+responseJson.data[0].username);
                        setImageUrl(responseJson.data[0].profile_image_url);
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        })();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                {!isLoggedIn &&
                    <img className='signin-btn' onClick={login} alt='Twitter login button' src='https://assets.klaudsol.com/twitter.png' />
                }

                {isLoggedIn &&
                    <div>
                        <div><img alt='User profile' src={imageUrl}/></div>
                        <div>Name: {name}</div>
                        <button className='signout-btn' onClick={logout}>Sign Out</button>
                    </div>
                }
            </header>
        </div>
    );
}