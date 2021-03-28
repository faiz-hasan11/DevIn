import React, { useEffect, useState }  from 'react'
import useStyles from "./Styles"
import {InputLabel ,Button ,FormControl , Input,AppBar,Toolbar} from "@material-ui/core"
import {Link} from "react-router-dom"
import { MdPerson} from "react-icons/md"
import firebase from "firebase"
import Post from "../Post/Post"
import { useHistory } from "react-router-dom"
import {ReactNavbar} from "react-responsive-animate-navbar"
import icon from "../../images/icon.svg"
function Question({db,user,auth}) {
    const classes = useStyles()
    const history = useHistory()
    const [input,setInput] = useState("")
    const [questions,setQuestions] = useState([{username:"",question:""}])
    const [ids,setIds] = useState([])
    useEffect(() =>
    {
        db.collection("question")
        .orderBy("timestamp","desc")
        .onSnapshot(snapshot =>
            {
                setQuestions(snapshot.docs.map(doc => doc.data()))
                setIds(snapshot.docs.map(doc => doc.id))
            })
    },[])

    // console.log(questions.id)
    const sendQues = (e) =>
    {
        db.collection("question").add({
            question:input,
            username:user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("")
    }

    const logout = () =>
    {
        auth.signOut()
        history.push("/")
    }
    return (
        <div className={classes.root}>
                    <AppBar className={classes.appbar} elevation={0}>
                         <ReactNavbar
        color="rgb(25, 25, 25)"
        logo={icon}
        menu={[
          { name: <Link to="/dashboard">Resource</Link>,to:<Link to="/dashboard"/>},
          { name: <Link to="/chat">Chat Room</Link>,to:<Link to="/chat"/>},
          { name: <Link onClick={logout}>LogOut</Link>,to:<Link to="/"/>}
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/syed-faiz-hasan-3249071a9/",
            icon: ["fab", "linkedin-in"],
          }
        ]}
      />
                    </AppBar>
            <center>
                    <form className={classes.form}>
                        <FormControl className={classes.form}>
                            <InputLabel>Enter your Question</InputLabel>
                            <Input value={input} onChange={(e) => setInput(e.target.value)} style={{width:"30rem"}}/>
                            <Button disabled={!input} type="submit" onClick={sendQues} variant="outlined" color="#6b705c">Ask</Button>
                        </FormControl>
                    </form>
                    <div className={classes.messages}>
                    {
                        questions.map((id , question) => 
                            <Post key={id} postId={ids[question]} question={id} user={user} db={db}/>
                        )
                    }
                </div>
            </center>
        </div>
    )
}

export default Question
