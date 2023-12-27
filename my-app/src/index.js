import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './js/App';
import reportWebVitals from './reportWebVitals';
import Count from './js/Count';
import ToggleButton from './js/ToggleButton';
import IndexExample from './js/IndexExample';
import ImageChange from './js/ImageChange';
import ObjectExample from './js/ObjectExample';
import AnimalSound from './js/Animal';
import TimerCount from './js/TimerCount';
import ExampleCallback from './js/ExampleCallback';
import PracticeTwo from './js/PracticeTwo';
import Board from './js/Board';
import HelloWorld from './js/JSXExam';
import TagExam from './js/TagExam';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/* <Count /> */}
    {/* <ToggleButton /> */}
    {/*<IndexExample />*/}
    {/* <ImageChange /> */}
    {/*<ObjectExample />*/}
    {/*<AnimalSound />*/}
    {/*<TimerCount/>*/}
    {/*<ExampleCallback />*/}
    {/*<PracticeTwo />*/}
    {/*<Board />*/}
    {/*<HelloWorld />*/}
    <TagExam />
  </React.StrictMode>
);

reportWebVitals();