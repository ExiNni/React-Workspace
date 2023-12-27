import React, {useEffect, useState} from "react";
import axios from "axios";

const PostComment = () =>{

    const [userData, setUserData] = useState([]);
    const [userPost, setUserPost] = useState([]);
    const [userComment, setPostComments] = useState([]);

    // API를 두 개 이상 가져올 경우
    useEffect(() =>{
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/comments')
        ])
        // 데이터를 성공적으로 가져왔을 때
        // axios.spread 여러가지 응답을 개별 응답으로 나눠서 제공된 set함수에 전달하는 역할
        .then(axios.spread((usersResponse, commentsResponse, postResponse) =>{
            setUserData(usersResponse.data);
            setPostComments(commentsResponse.data);
            setUserPost(postResponse.data);
        }))
        .catch(error => console.error(error));
    }, []);

    return(
        
        <div>
            <h2>User 정보</h2>
            {userData.map(user =>(
            <p key={user.id}>{user.name}</p>
            ))}
            <h2>User Post</h2>
            {userPost.map(comment =>(
                <p key={comment.id}>{comment.body}</p>
            ))}
            <h2>User Comment</h2>
            {userComment.map(post =>(
                <p key={post.id}>{post.title}</p>
            ))}
        </div>
    )
}
export default PostComment;