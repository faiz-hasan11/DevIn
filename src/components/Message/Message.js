import React from 'react'
import {Card ,CardContent ,Typography} from "@material-ui/core"
import "./Styles.css"
function Message({username , message}) {
    const isUser = username === message.username
    // console.log(username,message)
    return (
            <div className={`message ${isUser && "message_user"}`}>
                <Card className={isUser ?  "message_usercard" : "message_guestcard"}>
                <CardContent>
                    <Typography variant="h5" component="h2" style={{fontSize:"15px",color:"#ee6c4d"}}>
                        {message.username}
                    </Typography>
                    <Typography color="white" variant="h5" component="h2" style={{fontSize:"25px"}}>
                        {message.text}
                    </Typography>
                </CardContent>
            </Card>
            </div>
    )
}

export default Message
