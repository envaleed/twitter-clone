import React, {useState}from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core';
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('')

    const sendTweet = e => {
        e.preventDefault()
        db.collection('posts').add({
            avatar: "https://f0.pngfuel.com/png/136/22/profile-icon-illustration-user-profile-computer-icons-girl-customer-avatar-png-clip-art.png",
            image: "",
            displayName: "Master Williams",
            username: "williams_master",
            verified: true,
            text: tweetMessage,
        })

        setTweetMessage("")
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="/broken-image.jpg" />
                    <input onChange={e=>setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text"></input>
                </div>
                <Button className="tweetBox__tweetButton" onClick={sendTweet} type="submit">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
