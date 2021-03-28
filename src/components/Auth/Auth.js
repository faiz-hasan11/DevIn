import React, { useEffect } from 'react'
import useStyles from "./Styles"
import {Grid , TextField ,Paper , Button} from '@material-ui/core';
import { MdPerson , MdMail , MdLock } from "react-icons/md"

import { useHistory } from "react-router-dom"
function Auth({username,setUsername,password,setPassword,email,setEmail,user,setUser,auth}) {
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

    const signup = (e) =>
    {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then((authUser) => {
            return authUser.user.updateProfile({
                displayName:username
            })
        })
        .catch((error) => alert(error.message))
        history.push("/dashboard")
    }
    // console.log(user)
    return (
        <div className={classes.root}>
                    <h1 className={classes.title}>Create An Account</h1>
                    <form>
                        <Paper className={classes.paper}>
                            <Grid container spacing={1} alignItems="flex-end" className={classes.grid}>
                                <Grid item>
                                    <MdPerson />
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid" label="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                </Grid>
                            </Grid>
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
                            <Button variant="outlined" color="#6b705c" style={{marginTop:"1rem"}} onClick={signup} type="submit">
                                Create Account
                            </Button>
                        </center>
                    </form>
        </div>
    )
}

export default Auth
