import React , {useState} from 'react'
import useStyles from "./Styles"
import {Grid , TextField ,Paper , Button} from '@material-ui/core';
import { useHistory } from "react-router-dom"
// import data from "../../data/data"
import { FcIdea , FcClapperboard , FcTemplate , FcViewDetails } from "react-icons/fc";
function NewResource({db}) {
    const classes = useStyles()
    const history = useHistory()
    const [name,setName] = useState("")
    const [video,setVideo] = useState("")
    const [blog,setBlog] = useState("")
    const [book,setBook] = useState("")

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        db.collection("resources").add({
            name:name,
            blog:blog,
            book:book,
            video:video
        })
        history.push("/dashboard")
    }

    return (
        <div className={classes.root}>
                    <h1 className={classes.title}>Add Resource</h1>
                    <form>
                        <Paper className={classes.paper}>
                            <Grid container spacing={1} alignItems="flex-end" className={classes.grid}>
                                <Grid item>
                                    <FcIdea />
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid" label="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} alignItems="flex-end" className={classes.grid}>
                                <Grid item>
                                    <FcClapperboard/>
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid" label="Video Link" value={video} onChange={(e) => setVideo(e.target.value)}/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} alignItems="flex-end" className={classes.grid}>
                                <Grid item>
                                    <FcTemplate/>
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid" label="Blog Link" value={blog} onChange={(e) => setBlog(e.target.value)}/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} alignItems="flex-end" className={classes.grid}>
                                <Grid item>
                                    <FcViewDetails/>
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid" label="Book Link" value={book} onChange={(e) => setBook(e.target.value)}/>
                                </Grid>
                            </Grid>
                        </Paper>
                        <center>
                            <Button variant="outlined" color="#6b705c" style={{marginTop:"1rem"}} type="submit" onClick={handleSubmit}>
                                Add
                            </Button>
                        </center>
                    </form>
        </div>
    )
}

export default NewResource
