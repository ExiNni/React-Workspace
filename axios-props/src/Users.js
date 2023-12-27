import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Users = () => {

    const [data, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
            console.console.log('일치하는 데이터가 없습니다.', error);
        });
    }, []);
    return(
        <>
        {data ? (
            <ol>
        {data.map(user => (
            <li key={user.id}>
                이름: {user.name}<br />
                아이디: {user.username}<br />
                이메일: {user.email}<br />
                주소: {user.address.street}  {user.address.suite}  {user.address.city}  {user.address.zipcode} <br />
                전화번호: {user.phone}<br />
                웹주소: {user.website}<br />
                직장: {user.company.name}<br />
                슬로건: {user.company.catchPhrase}<br />
                업종: {user.company.bs}<br />
                <br />
            </li>
        ))}
            </ol>
            ) : (
            <p>데이터가 없습니다.</p>)
        }
        </>
    )
}

export default Users;