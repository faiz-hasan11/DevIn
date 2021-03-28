import React, { useEffect, useState } from 'react'
import useStyles from "./Styles"
import {InputLabel ,Button ,FormControl , Input} from "@material-ui/core"
import Message from '../Message/Message'
import firebase from "firebase"
import {Link} from "react-router-dom"
function ChatHome({db}) {
    const classes = useStyles()
    const [input,setInput] = useState("")
    const [messages,setMessages] = useState([{username:"",text:""}])
    const [username,setUsername] = useState("")

    useEffect(() =>
    {
        setUsername(prompt("Please Enter you username!!"))
    },[])

    useEffect(() =>
    {
        db.collection("messages")
        .orderBy("timestamp")
        .onSnapshot(snapshot =>
            {
                setMessages(snapshot.docs.map(doc => doc.data()))
            })
    },[])



    const sendMessage = (e) =>
    {
        db.collection("messages").add({
            text:input,
            username:username,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("")
    }

    return (
        <div className={classes.root}>
            <div style={{display:"flex"}}>
                <h1 className={classes.title}>Welcome {username}</h1>
                <Link to="/dashboard">
                    <Button className={classes.btn} variant="outlined">Leave Room</Button>
                </Link>                
            </div>
            <div className={classes.box}>
                <div className={classes.messages}>
                    {
                        messages.map(message => (
                            <Message username={username} message={message}/>
                        ))
                    }
                </div>

                <center>
                    <form className={classes.form}>
                        <FormControl className={classes.form}>
                            <InputLabel>Enter a message</InputLabel>
                            <Input value={input} onChange={(e) => setInput(e.target.value)} style={{width:"30rem"}}/>
                            <Button disabled={!input} type="submit" onClick={sendMessage} variant="outlined" color="#6b705c">Send Message</Button>
                        </FormControl>
                    </form>
               </center>
            </div>
            
        </div>
    )
}

export default ChatHome
