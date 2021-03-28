import React from 'react'
import useStyles from "./Styles"
import "./Styles.scss"
function About() {
    const classes = useStyles()
    return (
        <div className={classes.root} id="about">
            <div className={classes.title}>Why DevIn ?</div>
            <br></br>
            <div className="Link">
                <span className="Link-title">The budding developers always seem to struggle between academic life and working on skills. Many new developers face the lack of guidance and resources needed to enhance particular skills.They often get confused between which resource to pick and which to ignore so that they can maximise their outcome in the limited time frame. Hence DevIn provides all the useful resources required for any Computer Science Development Field along with the guidance of other fellow deveopers.</span>
            </div>
        </div>
    )
}

export default About
