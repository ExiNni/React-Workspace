import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreatePage from './CreatePage';

function Todo() {
    //js로 state 상태관리
    const Home = () => <div>Home</div>;
    const [action, setAction] = useState([]);

    // 생성하기
    const addAction = (newAction) => {
        setAction([...action, newAction]);
    };

    // 삭제하기
    const deleteAction = (id) => {
        setAction(action.filter((action) => action.id !== id));
    }
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>List</Link>
                        </li>
                        <li>
                            <Link to='/create'>Create</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element= {<ListPage action={action} deleteAction={deleteAction}/>}>메인</Route>
                    <Route path='/create' element={<CreatePage action={addAction}/>}>생성</Route>
                </Routes>
            </div>
        </Router>
    )
}

export default Todo;