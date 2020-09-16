import React, { useState, useEffect } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'

function Feed() {
    const[posts, setPosts] = useState([])

    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot=>(
            setPosts(snapshot.docs.map(doc=>doc.data()))
        ))
    },[])


    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox/>
            {posts.map(post=>(
                <Post
                key={post.id}
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text} 
                image={post.image}
                avatar={post.avatar}
                />
            ))}
            
        </div>
        
    )
}

export default Feed
