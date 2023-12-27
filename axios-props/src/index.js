import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import PostApi from './PostApi'
import DogImage from './DogInfo';
import Joke from './Joke';
import Users from './Users';
import PostComment from './PostComment'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<MovieList />*/}
    {/*<PostApi />*/}
    {/* <DogImage /> */}
    <Joke />
    {/* <Users /> */}
    {/* <PostComment /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
