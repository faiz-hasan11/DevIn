import React , {useEffect} from 'react'
import useStyles from "./Styles"
import {Grid , TextField ,Paper , Button} from '@material-ui/core';
import {  MdMail , MdLock } from "react-icons/md"
import { useHistory } from "react-router-dom"
function Login({username,setUsername,password,setPassword,email,setEmail,user,setUser,auth}) {
    const classes = useStyles()
    const history = useHistory()
    useEffect(() =>
    {
        const unsubscribe = auth.onAuthStateChanged((authUser) =>
        {
            if(authUser)
            {
                setUser(authUser)
            }
            else
            {
                setUser(null)
            }
        })
        return () =>
        {
            unsubscribe()
        }
    },[user,username])

    const signin = (e) =>
    {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .catch((error) => alert(error.message))
        setUsername("")
        setPassword("")
        history.push("/dashboard")
    }
    return (
        <div className={classes.root}>
                    <h1 className={classes.title}>Login To Your Account</h1>
                    <form>
                        <Paper className={classes.paper}>
                            <Grid container spacing={1} alignItems="flex-end" className={classes.grid}>
                                <Grid item>
                                    <MdMail />
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} alignItems="flex-end" className={classes.grid}>
                                <Grid item>
                                    <MdLock />
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </Grid>
                            </Grid>
                        </Paper>
                        <center>
                            <Button variant="outlined" color="#6b705c" style={{marginTop:"1rem"}} onClick={signin} type="submit">
                                LogIn
                            </Button>
                        </center>
                    </form>
        </div>
    )
}

export default Login
